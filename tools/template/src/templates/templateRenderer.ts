import path from "node:path";
import fs from "node:fs/promises";

export abstract class TemplateRenderer<TTemplateVariables extends Record<string, any> | void = void> {
    protected outputDirectory: string;

    protected constructor(workingDirectory: string) {
        this.outputDirectory = workingDirectory;
    }

    public abstract render(variables: TTemplateVariables): void;

    protected async writeTemplateToFile(filePath: string, template: string) {
        const absoluteFilePath = path.resolve(this.outputDirectory, filePath);

        await fs.mkdir(path.resolve(absoluteFilePath, ".."), { recursive: true });
        await fs.writeFile(absoluteFilePath, template);
    }
}
