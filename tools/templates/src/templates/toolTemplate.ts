import { TemplateRenderer } from "./templateRenderer";

type TemplateVariables = {
    projectName: string;
};

export class ToolTemplateRenderer extends TemplateRenderer<TemplateVariables> {
    public constructor(outputDirectory: string) {
        super(outputDirectory);
    }

    public async render({ projectName }: TemplateVariables): Promise<void> {

        await this.writeTemplateToFile("src/index.ts", `
export const greet = (name: string = "world") => {
    console.log(\`Hello, \${name}!\`);
}
        `);


        await this.writeTemplateToFile("package.json", `
{
    "name": "@ios-shortcuts/${projectName}",
    "private": true,
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
        "@types/node": "^20.4.9",
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
