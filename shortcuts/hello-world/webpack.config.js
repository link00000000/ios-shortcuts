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
            __PACKAGE_NAME__: `"${require("./package.json").name}"`,
            __PACKAGE_VERSION__: `"${env.version ?? "development"}"`,
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
