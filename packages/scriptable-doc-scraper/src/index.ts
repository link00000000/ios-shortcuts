import axios from "axios";
import { XMLParser } from "fast-xml-parser";
import { JSDOM } from "jsdom";
import * as fs from "node:fs/promises";
import { camelCase } from "change-case";

interface Property {
    name: string
    description_short?: string
    description: string[]
    signature?: string
    parameters: Array<{
        name?: string
        type?: string
        description?: string
    }>
    returnValue: { type?: string; description?: string }
}

async function getDocLinks() {
    const response = await axios.get("https://docs.scriptable.app/sitemap.xml");
    const parser = new XMLParser();

    const sitemap = parser.parse(response.data) as {
        urlset: {
            url: [
                {
                    loc: string,
                    lastmod: string,
                    changefreq: string,
                }
            ]
        }
    };

    return sitemap.urlset.url
        .map(url => url.loc)
        .map(loc => new URL(loc))
        .filter(loc => loc.pathname.length > 1);
}

function toBlockComment(...strings: string[]) {
    let output = '/**\n'

    for (let i = 0; i < strings.length; ++i) {
        if (i !== 0) {
            output += ' *\n'
        }

        const foldedText = fold(strings[i]).split('\n')
        for (const folded of foldedText) {
            output += ' * ' + folded + '\n'
        }
    }

    output += ' */'

    return output
}

function leftPad(s: string, n: number) {
    return s
        .split('\n')
        .map((x) => ' '.repeat(4 * n) + x)
        .join('\n')
}

function fold(text: string) {
    return text.replace(/(.{80}\S*)\s/g, '\n$1').trim()
}

function createJsDoc(property: Property) {
    let output = '/**\n'

    const desc = property.description_short
        ? fold(property.description_short).split('\n')
        : []
    for (const folded of desc) {
        output += ' * ' + folded + '\n'
    }

    if (property.parameters.length > 0) {
        output += ' *\n'

        for (const param of property.parameters) {
            output += ` * @param {${param.type}} ${param.name} - ${param.description}\n`
        }
    }

    if (Object.keys(property.returnValue).length > 0) {
        if (property.signature) {
            const retVal = parseSignature(property.signature);
            
            if (typeof retVal !== "string") {
                output += ' *\n'
                if (retVal === undefined) {
                    debugger;
                }
                output += ` * @returns {${fixType(retVal.returnType)}} ${property.returnValue.description}\n`
            }
        }
    }

    output += ' */\n'
    output += 'public ' + property.signature + ";"

    return output
}

async function scrape(dom: JSDOM) {
    const document = dom.window.document;

    const articleElemChildren = Array.from(document.querySelector("article")!.children);

    const title: { name: string, description: string[] } = {
        name: "",
        description: []
    };

    const properties: Array<Property> = [];

    let i = 0;
    for (; articleElemChildren[i].tagName === "H1" || articleElemChildren[i].tagName === "P"; ++i) {
        const elem = articleElemChildren[i];
        if (elem.tagName === "H1") {
            const content = elem.childNodes[0]?.textContent?.trim();
            if (content) {
                title.name = content;
            }
            continue;
        }

        if (elem.tagName === "P") {
            const content = elem.textContent?.trim();
            if (content) {
                title.description.push(content);
            }
            continue;
        }
    }

    let property: Property = {
        name: "",
        description_short: undefined,
        description: [],
        signature: undefined,
        parameters: [],
        returnValue: {}
    };

    let shortDescriptionRead = false;
    let isReadingParameters = false;
    let isReadingReturnValue = false;

    for (; i < articleElemChildren.length; ++i) {
        const elem = articleElemChildren[i];

        if (elem.tagName == "HR") {
            properties.push(property);
            property = {
                name: "",
                description_short: undefined,
                description: [],
                signature: undefined,
                parameters: [],
                returnValue: {}
            };
            shortDescriptionRead = false;
            isReadingParameters = false;
            isReadingReturnValue = false;

            continue;
        }

        if (elem.tagName === "H2") {
            property.name = elem.childNodes[0]?.textContent?.trim() ?? "";
            continue;
        }

        if (elem.tagName === "P") {
            if (!shortDescriptionRead) {
                shortDescriptionRead = true;
                property.description_short = elem.textContent?.trim();

                continue;
            }

            if (isReadingParameters) {
                const type = elem.querySelector("em")?.textContent?.trim();

                property.parameters.push({
                    name: elem.querySelector("strong")?.textContent?.trim(),
                    type: type ? fixType(type) : undefined,
                    description: Array.from(elem.childNodes)[Array.from(elem.childNodes).length - 1]?.textContent?.trim()
                });

                continue;
            }

            if (isReadingReturnValue) {
                const type = elem.querySelector("em")?.textContent?.trim();

                property.returnValue = {
                    //type: type ? fixType(type) : undefined,
                    description: Array.from(elem.childNodes)[Array.from(elem.childNodes).length - 1]?.textContent?.trim()
                }

                continue;
            } else {
                const content = elem.textContent?.trim();
                if (content) {
                    property.description.push();
                }

                continue;
            }
        }

        if (elem.classList.contains("codehilite")) {
            property.signature = elem.textContent?.trim();

            if (property.signature?.endsWith("()")) {
                property.signature += ": void;";
            }
            else if (property.signature?.endsWith("();")) {
                property.signature = property.signature.substr(0, property.signature.length - 1) + ": void;";
            }
            else {
                property.signature += ";";
            }

            if (property.signature) {
                const signature = parseSignature(property.signature);
                property.signature = stringifySignature(signature);
                if (typeof signature !== "string" && signature.returnType) {
                    property.returnValue.type = signature.returnType;
                }
            }

            continue;
        }

        if (elem.id.startsWith("parameters")) {
            isReadingParameters = true;
            isReadingReturnValue = false;

            continue;
        }

        if (elem.id.startsWith("return-value")) {
            isReadingParameters = false;
            isReadingReturnValue = true;

            continue;
        }
    }


    let js = [toBlockComment(...title.description), "export declare class " + title.name + " {", ""];

    for (const prop of properties) {
        js.push(leftPad(createJsDoc(prop), 1));
        js.push("");
    }

    js.pop();
    js.push("}");

    const fileName = camelCase(title.name) + ".ts";
    const fileContents = js.join("\n");

    await fs.writeFile(fileName, fileContents);
}

function fixType(type?: string) {
    if (type === undefined) {
        return "void";
    }

    if (type.endsWith(";")) {
        type = type.slice(0, type.length - 1);
    }

    if (type.includes("bool")) {
        return "boolean";
    }

    if (type === "Promise") {
        return "Promise<void>";
    }

    const arrayMatches = type.match(/\[(\w+)\]/);
    if (arrayMatches !== null) {
        return arrayMatches[1] + "[]";
    }

    return type;
}

function parseSignature(s: string) {
    if (!s.includes("(")) {
        const [name, type] = s.split(":").map(x => x.trim());
        return `${name}: ${fixType(type)}`;
    }

    if (s.endsWith(";")) {
        s = s.substr(0, s.length - 1);
    }

    let parts = s.split("):");
    const returnType = fixType(parts[1]).trim();
    
    parts = parts[0].split("(");
    const parameterString = parts[1].trim();

    parts = parts[0].split(" ");
    const name = parts[parts.length - 1].trim();

    const modifiers = parts.slice(0, parts.length - 1).filter(x => !x);

    const parameters = parameterString.length > 0 ? parameterString
        .split(",")
        .map(x => { const [name, type] = x
            .trim()
            .split(":")
            .map(y => y.trim());

            return { name: name.trim(), type: fixType(type).trim() }
        }) : [];

    return { modifiers, name, parameters, returnType };
}

function stringifySignature(signature: ReturnType<typeof parseSignature>) {
    if (typeof signature === "string") {
        return signature;
    }

    const { modifiers, name, parameters, returnType } = signature;
    const result = `${modifiers.join(" ")} ${name}(${parameters.map(p => `${p.name}: ${p.type}`).join(", ")}): ${returnType}`;
    return result.trim();
}

async function main() {
    const links = await getDocLinks();

    let completedTasks = 0;
    const totalTasks = links.length;

    const tasks = links.map(async (link) => {
        const response = await axios.get(link.toString(), { responseType: "document" });
        const html = response.data as string;
        const dom = new JSDOM(html);
        await scrape(dom);
        completedTasks += 1;
        console.log(`[${completedTasks}/${totalTasks}]`);
    })

    const results = await Promise.allSettled(tasks);

    for (const result of results) {
        if (result.status === "rejected") {
            console.error(result.reason);
        }
    }
}

main();
