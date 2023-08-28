/**
 * Presents websites and evaluates JavaScript on websites.
 *
 * Supports rendering HTML as well as loading a file and rendering it. A file can beof various types. It could for example be an HTML file or an image.
 *
 * The web view also supports evaluating JavaScript on a website.
 */
export declare class WebView {

    /**
     * Function called upon load of a request.     */
    public fn(Request) -> bool: void): void;

    /**
     * Constructs web view.     */
    public WebView(): void;

    /**
     * Loads HTML and renders it.
     *
     * @param {string} html - HTML to load and render.
     * @param {string} baseURL - Optional. Base URL used to resolve relative URLs in the HTML.
     * @param {Size} preferredSize - Optional. Preferred size of the view. This size is not guaranteed to be respected and is only used when the script is run with Siri or in the Shortcuts app.
     * @param {boolean} fullscreen - Optional. Set to true to present the web view in fullscreen. This only has an effect when used within the app. Defaults to false.
     *
     * @returns {Promise<void>} Promise that carries no value. Once the web view have been closed, the promise will complete.
     */
    public loadHTML(html: string, baseURL: string, preferredSize: Size, fullscreen: boolean): Promise;

    /**
     * Loads a file and renders it.
     *
     * @param {string} fileURL - URL of the file to load and render.
     * @param {Size} preferredSize - Optional. Preferred size of the view. This size is not guaranteed to be respected and is only used when the script is run with Siri or in the Shortcuts app.
     * @param {boolean} fullscreen - Optional. Set to true to present the web view in fullscreen. This only has an effect when used within the app. Defaults to false.
     *
     * @returns {Promise<void>} Promise that carries no value. Once the web view have been closed, the promise will complete.
     */
    public loadFile(fileURL: string, preferredSize: Size, fullscreen: boolean): Promise;

    /**
     * Loads URL in web view and presents the web view.
     *
     * @param {string} url - URL to load into the web view.
     * @param {Size} preferredSize - Optional. Preferred size of the view. This size is not guaranteed to be respected and is only used when the script is run with Siri or in the Shortcuts app.
     * @param {boolean} fullscreen - Optional. Set to true to present the web view in fullscreen. This only has an effect when used within the app. Defaults to false.
     *
     * @returns {Promise<void>} Promise that carries no value. Once the web view have been closed, the promise will complete.
     */
    public loadURL(url: string, preferredSize: Size, fullscreen: boolean): Promise;

    /**
     * Loads URL in web view.
     *
     * @param {string} url - URL to load into the web view.
     *
     * @returns {Promise<void>} Promise that carries no value. Once the web view has finished loading, the promise will complete.
     */
    public loadURL(url: string): Promise;

    /**
     * Loads request in web view.
     *
     * @param {Request} request - Request to load into the web view.
     *
     * @returns {Promise<void>} Promise that carries no value. Once the web view has finished loading, the promise will complete.
     */
    public loadRequest(request: Request): Promise;

    /**
     * Loads HTML in web view.
     *
     * @param {string} html - HTML to load into the web view.
     * @param {string} baseURL - Optional. Base URL used to resolve relative URLs in the HTML.
     *
     * @returns {Promise<void>} Promise that carries no value. Once the web view has finished loading, the promise will complete.
     */
    public loadHTML(html: string, baseURL: string): Promise;

    /**
     * Loads file in the web view.
     *
     * @param {string} fileURL - URL of the file to load and render.
     *
     * @returns {Promise<void>} Promise that carries no value. Once the web view has finished loading, the promise will complete.
     */
    public loadFile(fileURL: string): Promise;

    /**
     * Evaluates JavaScript in the web view.
     *
     * @param {string} javaScript - JavaScript to evaluate in the web view.
     * @param {boolean} useCallback - Optional. If true the web view waits for the globally available completion function of the web view to be called before terminating. Defaults to false.
     *
     * @returns {Promise<any>} Promise that carries the result of evaluating the JavaScript.
     */
    public evaluateJavaScript(javaScript: string, useCallback: boolean): Promise<any>;

    /**
     * Reads and returns HTML from the loaded website.
     *
     * @returns {Promise<any>} Promise that carries the HTML of the loaded website.
     */
    public getHTML(): Promise<any>;

    /**
     * Presents the web view.
     *
     * @param {boolean} fullscreen - Set to true to present the web view in fullscreen. Defaults to false.
     *
     * @returns {Promise<void>} Promise that is fulfilled when the presented web view is dismissed. The promise carries no value.
     */
    public present(fullscreen: boolean): Promise;

    /**
     * Waits for the web view to load.
     *
     * @returns {Promise<any>} Promise that is fulfilled when the web view has finished the active load.
     */
    public waitForLoad(): Promise<any>;
}
