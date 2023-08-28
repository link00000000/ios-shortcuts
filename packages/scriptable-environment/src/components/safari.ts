/**
 * Presents a website.
 *
 * Presents a website either in-app or by leaving the app an opening the Safari app.
 */
export declare class Safari {

    /**
     * Presents a website in-app.
     *
     * @param {string} url - URL of website to present.
     * @param {boolean} fullscreen - Optional. Set to true to display the web view in fullsceen. This only has an effect when used within the app. Defaults to true.
     *
     * @returns {Promise<void>} undefined
     */
    public openInApp(url: string, fullscreen: boolean): Promise;

    /**
     * Presents a website.
     *
     * @param {string} url - URL of website to present.     */
    public open(url: string)): void;
}
