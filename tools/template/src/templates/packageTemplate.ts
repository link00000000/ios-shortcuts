import { TemplateRenderer } from "./templateRenderer";

type TemplateVariables = {
    projectName: string;
};

export class PackageTemplateRenderer extends TemplateRenderer<TemplateVariables> {
    public constructor(outputDirectory: string) {
        super(outputDirectory);
    }

    public async render({ projectName }: TemplateVariables): Promise<void> {

        await this.writeTemplateToFile("src/index.ts", `
console.log("Hello, world!");
        `);


        await this.writeTemplateToFile("package.json", `
{
    "name": "@ios-shortcuts/${projectName}",
    "main": "./dist/index",
    "types": "./dist/index",
    "files": [
        "dist"
    ],
    "scripts": {
        "build": "tsc --project tsconfig.build.json",
        "clean": "rimraf ./dist",
        "start": "node ./dist/index.js"
    },
    "devDependencies": {
        "rimraf": "~5.0.0",
        "typescript": "~4.9.0"
    }
}
       `);


        await this.writeTemplateToFile("tsconfig.build.json", `
{
    "extends": "../../tsconfig.build.json",

    "compilerOptions": {
        "outDir": "./dist",
        "types": ["node"]
    },

    "include": [
        "src/**/*"
    ]
}
       `);

        await this.writeTemplateToFile("tsconfig.json", `
{
    "extends": "../../tsconfig.json",

    "compilerOptions": {
        "types": ["node"]
    }
}
       `);
    }
}
