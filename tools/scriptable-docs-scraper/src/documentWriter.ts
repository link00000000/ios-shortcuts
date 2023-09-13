import { Article, Class, Method, Property } from "./scraper";

export class TsDocumentWriter {
    private indentation = 0;
    private document = "";
    
    public static writeDocument(article: Article) {
        const writer = new TsDocumentWriter();

        const delcarationType = article.class.name.charAt(0) === article.class.name.charAt(0).toUpperCase() ? "class" : "var";
        writer.beginWriteDeclaration(article.class, delcarationType);

        for (let i = 0; i < article.properties.length; ++i) {
            if (i !== 0) {
                writer.endLine();
            }

            writer.writeProperty(article.properties[i]!);
        }
        
        // Add a blank space between property and method sections
        if (article.properties.length > 0 && article.methods.length > 0) {
            writer.endLine();
        }
        
        for (let i = 0; i < article.methods.length; ++i) {
            if (i !== 0) {
                writer.endLine();
            }
            
            writer.writeMethod(article.methods[i]!);
        }
        
        writer.endWriteDeclaration();
        
        return writer.document;
    }

    private beginWriteDeclaration(cls: Class, declarationType: "class" | "var") {
        if (cls.description.length > 0) {
            this.writeDocComment(cls.description);
        }
        
        this.indent();
        switch (declarationType) {
            case "class":
                this.document += `export declare class ${cls.name} {`;
                break;
            case "var":
                this.document += `export declare var ${cls.name}: {`
        }
        this.endLine();
        
        this.indentation++;
    }
    
    private endWriteDeclaration() {
        this.indentation--;
        
        this.indent();
        this.document += "}";
        this.endLine();
    }

    private writeProperty(property: Property) {
        this.beginDocComment();

        for (let i = 0; i < property.description.length; ++i) {
            if (i !== 0) {
                this.continueDocComment();
            }
            
            const description = property.description[i]!;
            if (description.toLowerCase().includes("deprecated")) {
                this.continueDocComment("@deprecated");                
            }
            this.continueDocComment(description);
        }
        
        if (property.examples.length > 0) {
            for (const example of property.examples) {
                this.continueDocComment("@example");
                this.continueDocComment(example);
            }
        }
        
        this.endDocComment();
        
        this.indent();
        this.document += `${property.modifiers.map(x => `${x} `)}${property.signature.name}: ${property.signature.type};`;
        this.endLine();
    }
    
    private writeMethod(method: Method) {
        this.beginDocComment();

        for (let i = 0; i < method.description.length; ++i) {
            if (i !== 0) {
                this.continueDocComment();
            }
            
            const description = method.description[i]!;
            if (description.toLowerCase().includes("deprecated")) {
                this.continueDocComment("@deprecated");
            }
            this.continueDocComment(description);
        }
        
        // Add an empty line between doc comments and parameters
        if (method.description.length > 0 && method.signature.parameters.length > 0) {
            this.continueDocComment();
        }
        
        for (let i = 0; i < method.signature.parameters.length; ++i) {
            const parameter = method.signature.parameters[i]!;

            if (parameter.description.length > 0) {
                this.continueDocComment(`@param ${parameter.name} {${parameter.type}} - ${parameter.description.join(" ")}`);
            }
            else {
                this.continueDocComment(`@param ${parameter?.name} {${parameter.type}}`);
            }
        }
        
        this.endDocComment();
        
        // If the method signature contains the 'new' modifier, then it is the constructor
        if (method.signature.modifiers.includes("new")) {
            this.indent();
            this.document += `${method.signature.modifiers.filter(x => x !== "new").map(x => `${x} `)}constructor(`;            
            for (let i = 0; i < method.signature.parameters.length; ++i) {
                if (i !== 0) {
                    this.document += ", ";                
                }

                const parameter = method.signature.parameters[i]!;
                this.document += `${parameter.name}: ${parameter.type}`;
            }
            this.document += ");";
            this.endLine();
        }
        else {
            this.indent();
            this.document += `${method.signature.modifiers.map(x => `${x} `)}${method.signature.name}(`;
            for (let i = 0; i < method.signature.parameters.length; ++i) {
                if (i !== 0) {
                    this.document += ", ";                
                }

                const parameter = method.signature.parameters[i]!;
                this.document += `${parameter.name}: ${parameter.type}`;
            }
            this.document += `): ${method.signature.returnType};`;
            this.endLine();
        }
    }
    
    private writeDocComment(lines: string[]) {
        this.beginDocComment();

        for (let i = 0; i < lines.length; ++i) {
            if (i !== 0) {
                this.continueDocComment();
            }
            
            this.continueDocComment(lines[i]);
        }
        
        this.endDocComment();
    }
    
    private beginDocComment() {
        this.indent();
        this.document += "/**";
        this.endLine();
    }
    
    private continueDocComment(line?: string) {
        if (line === undefined) {
            this.indent();
            this.document += " *";
            this.endLine();

            return;
        }

        // Wrap lines that are longer than 80 characters at the nearest word boundary
        const visualLines = line.replace(/(.{80}\S*)\s/g, '\n$1').trim().split("\n");
        for (const visualLine of visualLines) {
            this.indent();
            this.document += ` * ${visualLine}`;
            this.endLine();
        }
    }
    
    private endDocComment() {
        this.indent();
        this.document += " */";
        this.endLine();
    }
    
    private indent() {
        this.document += "    ".repeat(this.indentation);
    }
    
    private endLine() {
        this.document += "\n";
    }
}
