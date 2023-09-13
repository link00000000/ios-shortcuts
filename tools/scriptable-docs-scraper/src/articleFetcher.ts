import { StringUtils } from "@ios-shortcuts/utils";
import axios from "axios";
import { JSDOM } from 'jsdom';

export class ArticleFetcher {
    private static readonly baseUrl = "https://docs.scriptable.app/";
        
    public static async fetchArticleUrls() {
        const sitemap = await this.fetchSiteMap();
        const locs = Array.from(sitemap.getElementsByTagName("loc"));

        return locs
            .map(l => l.textContent)
            .filter(l => l?.match(new RegExp(`${this.baseUrl}.+`)))
            .filter(l => !StringUtils.isNullOrEmpty(l))
            .map(l => l!);
    }
    
    public static async fetchArticle(url: string) {
        const response = await axios.get<string>(url);
        return response.data;
    }

    private static async fetchSiteMap() {
        const response = await axios.get<string>(`${ArticleFetcher.baseUrl}sitemap.xml`);
        const sitemap = new JSDOM(response.data);
        return sitemap.window.document;
    }
}