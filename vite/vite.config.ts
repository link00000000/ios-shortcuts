import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
    plugins: [tsconfigPaths(), dts({ insertTypesEntry: true })],
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: require("./package.json").name,
            fileName: "index"
        }
    }
});
