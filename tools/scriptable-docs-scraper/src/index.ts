import path from "node:path";
import fs from "node:fs/promises";
import arg from "arg";
import { Scraper } from "./scraper";
import { TsDocumentWriter } from "./documentWriter";
import { ArticleFetcher } from "./articleFetcher";
import { camelCase } from 'change-case';

const args = arg({
    "--out": String,
    "-o": "--out"
});

if (!args["--out"]) {
    throw new Error("Missing required argument: --out")
}

const outDir = path.resolve(args["--out"]);
console.log("Out: " + outDir);

ArticleFetcher.fetchArticleUrls().then(async (urls) => {
    let numberCompleted = 0;
    const totalCount = urls.length;

    const tasks = urls.map(async (url) => {
        const article = await ArticleFetcher.fetchArticle(url);
        const parsedArticle = new Scraper(article).parse();        
        const documentContent = TsDocumentWriter.writeDocument(parsedArticle);
        
        const outputFilePath = path.resolve(outDir, `${camelCase(parsedArticle.class.name)}.ts`);
        await fs.writeFile(outputFilePath, documentContent);
        
        console.log(`[${++numberCompleted}/${totalCount}] ${outputFilePath}`);
    });
    
    await Promise.allSettled(tasks);
    console.log("done");
});
