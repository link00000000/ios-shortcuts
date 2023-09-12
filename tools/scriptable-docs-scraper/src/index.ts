import path from "node:path";
import arg from "arg";
import axios from "axios";
import { Scraper } from "./scraper";

const args = arg({
    "--out": String,
    "-o": "--out"
});

if (!args["--out"]) {
    throw new Error("Missing required argument: --out")
}

const outDir = path.resolve(args["--out"]);
console.log("Out: " + outDir);

axios.get("https://docs.scriptable.app/alert/").then(response => {
    const scraper = new Scraper(response.data);
    const result = scraper.parse();
    console.dir(result);
});
