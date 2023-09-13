/**
 * Presents a website.
 *
 * Presents a website either in-app or by leaving the app an opening the Safari app.
 */
export var Safari: {
    /**
     * Presents a website in-app.
     *
     * Presents a website without leaving the app.
     *
     * @param url {string} - URL of website to present.
     * @param fullscreen {boolean} - Optional. Set to true to display the web view in fullsceen.This only has an effect when used within the app. Defaults to true.
     */
    static openInApp(url: string, fullscreen: boolean): Promise;

    /**
     * Presents a website.
     *
     * Presents a website in the Safari app, thus leaving the current app.
     *
     * @param url {string} - URL of website to present.
     */
    static open(url: string): void;
}
