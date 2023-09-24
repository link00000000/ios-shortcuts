import { TemplateRenderer } from "./templateRenderer";

type TemplateVariables = {
    projectName: string;
};

export class ShortcutTemplateRenderer extends TemplateRenderer<TemplateVariables> {
    public constructor(outputDirectory: string) {
        super(outputDirectory);
    }

    public async render({ projectName }: TemplateVariables): Promise<void> {

        await this.writeTemplateToFile("src/index.ts", `
import "@ios-shortcuts/scriptable-environment";

console.log("Package name: " + __PACKAGE_NAME__);
console.log("Package version: " + __PACKAGE_VERSION__);
       `);

        await this.writeTemplateToFile("@types/webpack.global.d.ts", `
export {}

declare global {
    export var __PACKAGE_NAME__: string;
    export var __PACKAGE_VERSION__: "development" | string & {}; // string & {} so that Typescript will recommend using specified string literals before any other string
}
       `);


        await this.writeTemplateToFile("package.json", `
{
    "name": "@ios-shortcuts/${projectName}",
    "private": true,
    "scripts": {
        "clean": "rimraf dist",
        "build": "webpack",
        "repl": "node -r @ios-shortcuts/scriptable-simulator -i",
        "start": "node -r @ios-shortcuts/scriptable-simulator ./dist/bundle.js"
    },
    "devDependencies": {
        "@ios-shortcuts/scriptable-environment": "workspace:^",
        "@ios-shortcuts/scriptable-simulator": "workspace:^",
        "rimraf": "~5.0.0",
        "ts-loader": "~9.4.0",
        "ts-node": "^10.9.1",
        "tsconfig-paths-webpack-plugin": "~4.1.0",
        "typescript": "~4.9.0",
        "webpack": "~5.88.0",
        "webpack-cli": "~5.1.0"
    }
}
       `);


        await this.writeTemplateToFile("tsconfig.build.json", `
{
    "extends": "../../tsconfig.build.json",

    "compilerOptions": {
        "outDir": "./dist"
    },

    "include": [
        "src/**/*",
        "@types/**/*"
    ]
}
       `);

        await this.writeTemplateToFile("tsconfig.json", `
{
    "extends": "../../tsconfig.json",

    "include": [
        "src/**/*",
        "@types/**/*"
    ]
}
       `);

       await this.writeTemplateToFile("webpack.config.js", `
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const { DefinePlugin } = require("webpack");

module.exports = (env) => ({
    entry: "./src/index.ts",
    mode: env.production ? "production" : "development",
    output: {
        filename: "bundle.js",
    },
    plugins: [
        new DefinePlugin({
            __PACKAGE_NAME__: \`"\${require("./package.json").name}"\`,
            __PACKAGE_VERSION__: \`"\${env.version ?? "development"}"\`,
        })
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        plugins: [
            new TsconfigPathsPlugin(),
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: { configFile: "tsconfig.build.json" },
            },
        ],
    },
    optimization: {
        usedExports: false,
    }
});
        `);
    }
}
