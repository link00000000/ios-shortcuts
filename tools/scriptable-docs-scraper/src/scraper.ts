import jsdom from "jsdom";
import GuardUtils from "@ios-shortcuts/utils";

interface Class {
    description: string;
}

interface PropertySignature {
    name: string;
    type: string;
}

interface Property {
    signature: PropertySignature;
    examples: string[];
    description: string;
}

interface MethodParameter {
    name: string;
    type: string;
    description: string;
}

interface MethodSignature {
    name: string;
    parameters: MethodParameter[];
    returnType: string;
    modifiers: string[];
}

interface Method {
    signature: MethodSignature;
    description: string;
}

interface Article {
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

    public getArticle() {
        const elems = this.document.getElementsByTagName("article");
        const articleElem = elems[0];

        if (articleElem === undefined) {
            throw new Error("Could not find element of with tag <article />");
        }
        
        return articleElem;
    }

    public getArticleSections() {
        const article = this.getArticle();
        const sectionHeaders = ["H1", "H2"];
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

        return sections;
    }

    public static parseArticle(sections: Element[][]): Article {
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
        let description: string[] = [];
        
        // Skip the first element since that is the name
        for (let i = 1; i < section.length; ++i) {
            const textContent = section[i]?.textContent?.trim();
            if (textContent === undefined || textContent === null) {
                continue;
            }

            description.push(textContent);
        }

        return { description: description.join("\n\n") };
    }

    public static parseProperty(section: Element[]): Property {
        const description: string[] = [];
        const modifiers = new Set<string>();
        let signature: PropertySignature | undefined = undefined;

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
                if (i === section.length - 1) {
                    if (signature !== undefined) {
                        throw new Error("Found property signature but signature was already parsed for this property");
                    }

                    const textContent = elem.textContent?.trim();
                    GuardUtils
                    
                    if (textContent === undefined || textContent.length === 0) {
                        throw new Error("Text content of property signature is empty")
                    }

                    signature = elem.textContent?.trim();
                }
            }
        }
    }

    public static parseMethod(section: Element[]): Method {
    }
}

