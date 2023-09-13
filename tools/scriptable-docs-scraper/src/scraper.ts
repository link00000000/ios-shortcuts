import jsdom from "jsdom";
import { ArrayUtils, assert, Assert, ObjectUtils, StringUtils } from "@ios-shortcuts/utils"

export interface Class {
    name: string;
    description: string[];
}

export interface PropertySignature {
    name: string;
    type: string;
}

export interface Property {
    signature: PropertySignature;
    modifiers: string[];
    examples: string[];
    description: string[];
}

export interface MethodParameter {
    name: string;
    type: string;
    description: string[];
}

export interface MethodSignature {
    name: string;
    parameters: MethodParameter[];
    returnType: string | undefined;
    modifiers: string[];
}

export interface Method {
    signature: MethodSignature;
    description: string[];
}

export interface Article {
    class: Class;
    properties: Property[],
    methods: Method[]
}

export class Scraper {
    dom: jsdom.JSDOM;

    get document() {
        return this.dom.window.document;
    }

    constructor(html: string) {
        this.dom = new jsdom.JSDOM(html);
        this.dom.window.document
    }

    public parse()
    {
        const sections = this.getArticleSections();
        const result = Scraper.parseArticle(sections);
        return result;
    }

    private getArticle() {
        const elems = this.document.getElementsByTagName("article");
        const articleElem = elems[0];

        if (articleElem === undefined) {
            throw new Error("Could not find element of with tag <article />");
        }
        
        return articleElem;
    }

    private getArticleSections() {
        const article = this.getArticle();
        const sectionHeaders = ["H2"];
        const ignoredElements = ["HR"];

        const sections: Element[][] = [];
        let sectionElems: Element[] = [];

        for (const childElem of article.children) {
            if (ignoredElements.includes(childElem.tagName)) {
                continue;
            }

            if (sectionHeaders.includes(childElem.tagName)) {
                sections.push([...sectionElems]);
                sectionElems = [];
            }

            sectionElems.push(childElem);
        }
        sections.push([...sectionElems]);

        return sections.filter(x => x.length > 0);
    }

    private static parseArticle(sections: Element[][]): Article {
        let cls: Class | undefined = undefined;
        let properties: Property[] = [];
        let methods: Method[] = [];

        for (const section of sections) {
            if (Scraper.isClass(section)) {
                if (cls !== undefined) {
                    throw new Error("Found class section but class was already parsed for this article");
                }

                cls = Scraper.parseClass(section);
            }
            else if (Scraper.isProperty(section)) {
                properties.push(Scraper.parseProperty(section));
            }
            else if (Scraper.isMethod(section)) {
                methods.push(Scraper.parseMethod(section));
            }
            else {
                throw new Error("Could not determine section type");
            }
        }

        if (cls === undefined) {
            throw new Error("Class section not found");
        }

        return { class: cls, properties, methods };
    }

    public static isClass(section: Element[]): boolean {
        return section[0]?.tagName === "H1";
    }

    public static isProperty(section: Element[]): boolean {
        const headerElem = section[0];
        if (headerElem === undefined) {
            return false;
        }

        if (headerElem.textContent?.startsWith("-") || headerElem.textContent?.startsWith("+")) {
            return false;
        }

        return true;
    }

    public static isMethod(section: Element[]): boolean {
        const headerElem = section[0];
        if (headerElem === undefined) {
            return false;
        }

        if (!headerElem.textContent?.startsWith("-") && !headerElem.textContent?.startsWith("+")) {
            return false;
        }

        return true;
    }

    public static parseClass(section: Element[]): Class {
        const name = section[0]?.childNodes[0]?.textContent?.trim();
        Assert.String.isNotNullOrEmpty(name);

        let description: string[] = [];
        
        // Skip the first element since that is the name
        for (let i = 1; i < section.length; ++i) {
            const textContent = section[i]?.textContent?.trim();
            if (textContent === undefined || textContent === null) {
                continue;
            }

            description.push(textContent);
        }

        return { name, description };
    }

    public static parseProperty(section: Element[]): Property {
        const description: string[] = [];
        const modifiers = new Set<string>();
        let signature: PropertySignature | undefined = undefined;
        const examples: string[] = [];

        // Skip the first element since that is the name
        for (let i = 1; i < section.length; ++i) {
            const elem = section[i]!;

            if (elem.tagName === "P") {
                const textContent = elem.textContent?.trim();
                if (textContent === undefined) {
                    continue;
                }

                if (textContent.trim().toLowerCase().startsWith("read-only")) {
                    modifiers.add("readonly");
                    continue;
                }

                description.push(textContent);
            }
            else if (elem.classList.contains("codehilite")) {
                // The last element will be a codehilite containing the signature
                if (i === section.length - 1) {
                    if (signature !== undefined) {
                        throw new Error("Found property signature but signature was already parsed for this property");
                    }

                    const signatureText = elem.textContent?.trim();
                    Assert.String.isNotNullOrEmpty(signatureText, "Text content of property signature is empty");
                    signature = Scraper.parsePropertySignature(signatureText);
                }
                // All other codehilite blocks should be treated as examples
                else {
                    const textContent = elem.textContent?.trim();
                    Assert.String.isNotNullOrEmpty(textContent);
                    examples.push(textContent);
                }
            }
        }

        Assert.Object.hasValue(signature);
        return { description, modifiers: Array.from(modifiers), examples, signature };
    }

    private static parsePropertySignature(s: string): PropertySignature
    {
        const partsGroups = s.match(/^(?<name>[^:]+):(?<type>.*)$/)?.groups;
        Assert.Object.hasValue(partsGroups);

        const name = ObjectUtils.getAsserted<string, typeof partsGroups, string>(partsGroups, "name").trim();
        const type = Scraper.parseType(ObjectUtils.getAsserted<string, typeof partsGroups, string>(partsGroups, "type").trim());

        return { name, type };
    }

    private static parseType(s: string): string {
        let buffer = "";

        // Convert arrays formatted as [[string]] to string[][]
        for (const c of s) {
            if (c === '[') {
                continue;
            }

            if (c === ']') {
                buffer += "[]";
                continue;
            }

            buffer += c;
        }

        // Replace Promise with Promise<void> and tag with todo comment
        buffer = buffer.replace(/Promise(?!<)/g, "Promise<void>/* TODO: Check promise type */");

        // Replace bool with boolean
        buffer = buffer.replace(/bool(?!ean)/g, "boolean");

        // Tag { any: any } todo comment
        buffer = buffer.replace(/({\s*\w+\s*:\s*\w+\s*})/, "$1/* TODO: Check type */")

        return buffer;
    }

    public static parseMethod(section: Element[]): Method {
        const description: string[] = [];

        let currentMethodSection: "method" | "parameters" | "return" = "method";
        const methodCodeBlocks: string[] = [];
        const parameters: { name: string, description: string[] }[] = [];
        const returnValueDescription: string[] = [];

        // Skip the first element since that is the name
        for (let i = 1; i < section.length; ++i) {
            const elem = section[i]!;

            if (elem.tagName === "H3") {
                const textContent = elem.textContent?.trim()?.toLowerCase();
                Assert.String.isNotNullOrEmpty(textContent);

                if (textContent.includes("parameters")) {
                    currentMethodSection = "parameters";
                    continue;
                }

                if (textContent.includes("return")) {
                    currentMethodSection = "return";
                    continue;
                }
            }

            switch (currentMethodSection) {
                case "method": {
                    if (elem.tagName === "P") {
                        const textContent = elem.textContent?.trim();
                        Assert.String.isNotNullOrEmpty(textContent);
                        description.push(textContent);
                        continue;
                    }

                    if (elem.classList.contains("codehilite")) {
                        const textContent = elem.textContent?.trim();
                        Assert.String.isNotNullOrEmpty(textContent);
                        methodCodeBlocks.push(textContent);
                        continue;
                    }

                    break;
                }
                case "parameters": {
                    let parameterName: string | undefined = undefined;
                    let parameterDescription: string[] = [];

                    for (const child of elem.childNodes) {
                        if (child.nodeName === "STRONG") {
                            parameterName = child.textContent?.trim();
                        }
                        else if (child.nodeName === "#text" && !StringUtils.isNullOrEmpty(child.textContent?.trim())) {
                            parameterDescription.push(child.textContent!.trim());
                        }
                    }

                    Assert.String.isNotNullOrEmpty(parameterName);
                    parameters.push({ name: parameterName, description: parameterDescription });

                    break;
                }
                case "return": {
                    for (const child of elem.childNodes) {
                        if (child.nodeName === "#text" && !StringUtils.isNullOrEmpty(child.textContent?.trim())) {
                            returnValueDescription.push(child.textContent!.trim());
                        }
                    }

                    break;
                }
            }
        }
        
        assert(methodCodeBlocks.length > 0, "Could not find codeblock with method signature");
        const signature = Scraper.parseMethodSignature(methodCodeBlocks[0]!);

        for (const parameter of parameters) {
            let signatureParameter = signature.parameters.find(x => x.name === parameter.name);
            if (signatureParameter !== undefined) {
                signatureParameter.description = parameter.description;
            }
        }

        return { signature, description };
    }

    private static parseMethodSignature(s: string): MethodSignature {
        const parts = s.match(/(?<modifiers>(\w+\s+)*)(?<name>\w+(?=\s*\())\((?<parameters>[^\)]*)\)(\s*:\s*(?<return_type>.*$))?/);
        Assert.Object.hasValue(parts);

        const modifiersString = parts.groups?.["modifiers"]?.trim();
        const name = parts.groups?.["name"]?.trim();
        const parametersString = parts.groups?.["parameters"]?.trim();
        const returnType = parts.groups?.["return_type"]?.trim();

        Assert.String.isNotNullOrEmpty(name);

        const modifiers = new Set<string>();
        if (!StringUtils.isNullOrEmpty(modifiersString)) {
            for (const modifierString of modifiersString!.split(" ")) {
                modifiers.add(modifierString);
            }
        }

        const parameters: MethodParameter[] = [];
        if (!StringUtils.isNullOrEmpty(parametersString)) {
            for (const parameterString of parametersString!.split(",").map(x => x.trim())) {
                const parameterStringParts = parameterString.split(":").map(x => x.trim());
                const parameterName = ArrayUtils.getAsserted(parameterStringParts, 0);
                const parameterType = Scraper.parseType(ArrayUtils.getAsserted(parameterStringParts, 1));

                parameters.push({ name: parameterName, type: parameterType, description: [] });
            }
        }

        return { name, modifiers: Array.from(modifiers), parameters, returnType }
    }
}

