/**
 * Presents websites and evaluates JavaScript on websites.
 *
 * Supports rendering HTML as well as loading a file and rendering it. A file can beof various types. It could for example be an HTML file or an image.
 *
 * The web view also supports evaluating JavaScript on a website.
 */
export declare class WebView {
    /**
     * Function called upon load of a request.
     *
     * When the web view performs a request to load a resource, the function can determine
     * whether or not to allow the request. Disallowing request can speed up the time ittakes to load the website.
     *
     * By default all requests are allowed.
     */
    shouldAllowRequest: fn(Request) -> boolean;

    /**
     * Constructs web view.
     *
     * Constructs a new web view. Use a web view to evaluate JavaScript on websites.
     */
    constructor();

    /**
     * Loads HTML and renders it.
     *
     * @param html {string} - HTML to load and render.
     * @param baseURL {string} - Optional. Base URL used to resolve relative URLs in theHTML.
     * @param preferredSize {Size} - Optional. Preferred size of the view. This size is
     * not guaranteed to be respected and is only used when the script is run with Sirior in the Shortcuts app.
     * @param fullscreen {boolean} - Optional. Set to true to present the web view in fullscreen.This only has an effect when used within the app. Defaults to false.
     */
    static loadHTML(html: string, baseURL: string, preferredSize: Size, fullscreen: boolean): Promise;

    /**
     * Loads a file and renders it.
     *
     * Files can be of various types, including HTML files and images.
     *
     * The supplied HTML file can reference files and nested directories in the same directoryas the HTML file resides.
     *
     * The optional preferredSize parameter is ignored unless the script is run in a SiriShortcut.
     *
     * If you are displaying large images in a memory constrained envrionment, for example
     * in a Siri Shortcut, you should use the WebView bridge instead of the QuickLook bridge.
     * The technical reason for this is that a Siri Shortcut and other app extension processes
     * have very limited memory and loading a very large image will cause the app extension
     * to be terminated. However, the web view will run in a different process meaning thatit is not affected by the same memory constraints.
     *
     * @param fileURL {string} - URL of the file to load and render.
     * @param preferredSize {Size} - Optional. Preferred size of the view. This size is
     * not guaranteed to be respected and is only used when the script is run with Sirior in the Shortcuts app.
     * @param fullscreen {boolean} - Optional. Set to true to present the web view in fullscreen.This only has an effect when used within the app. Defaults to false.
     */
    static loadFile(fileURL: string, preferredSize: Size, fullscreen: boolean): Promise;

    /**
     * Loads URL in web view and presents the web view.
     *
     * The optional preferredSize parameter is ignored unless the script is run in a SiriShortcut.
     *
     * @param url {string} - URL to load into the web view.
     * @param preferredSize {Size} - Optional. Preferred size of the view. This size is
     * not guaranteed to be respected and is only used when the script is run with Sirior in the Shortcuts app.
     * @param fullscreen {boolean} - Optional. Set to true to present the web view in fullscreen.This only has an effect when used within the app. Defaults to false.
     */
    static loadURL(url: string, preferredSize: Size, fullscreen: boolean): Promise;

    /**
     * Loads URL in web view.
     *
     * Loads the URL in the web view. The returned promise will complete once the web viewhas finished loading.
     *
     * @param url {string} - URL to load into the web view.
     */
    loadURL(url: string): Promise;

    /**
     * Loads request in web view.
     *
     * When loading a request into the web view, the HTTP method, body and headers of therequest will be respected. The onRedirect function on the request will not be invoked.
     *
     * @param request {Request} - Request to load into the web view.
     */
    loadRequest(request: Request): Promise;

    /**
     * Loads HTML in web view.
     *
     * Loads the HTML into  the web view. The returned promise will complete once the webview has finished loading.
     *
     * @param html {string} - HTML to load into the web view.
     * @param baseURL {string} - Optional. Base URL used to resolve relative URLs in theHTML.
     */
    loadHTML(html: string, baseURL: string): Promise;

    /**
     * Loads file in the web view.
     *
     * Files can be of various types, including HTML files and images.
     *
     * The supplied HTML file can reference files and nested directories in the same directoryas the HTML file resides.
     *
     * @param fileURL {string} - URL of the file to load and render.
     */
    loadFile(fileURL: string): Promise;

    /**
     * Evaluates JavaScript in the web view.
     *
     * Evaluates JavaScript in the current context of the web view. The returned promisecarries the result of evaluating the JavaScript.
     *
     * When passing false to the useCallback parameter, which is the default value, evaluation
     * will terminate after evaluating the last line of the JavaScript. The value on thelast line of the script will be carried by the promise returned by evaluateJavaScript.
     *
     * When passing true to the useCallback parameter, evaluation will only complete after
     * the globally available completion function is called. Any value passed to the function,will be carried by the promise returned by evaluateJavaScript.
     *
     * The log is available from the evaluated JavaScript, i.e. messages passed to the globallyavailable log and logError functions will be shown in the log.
     *
     * @param javaScript {string} - JavaScript to evaluate in the web view.
     * @param useCallback {boolean} - Optional. If true the web view waits for the globally
     * available completion function of the web view to be called before terminating. Defaultsto false.
     */
    evaluateJavaScript(javaScript: string, useCallback: boolean): Promise<any>;

    /**
     * Reads and returns HTML from the loaded website.
     */
    getHTML(): Promise<any>;

    /**
     * Presents the web view.
     *
     * The web view is presented with the content that has been loaded into it.
     *
     * @param fullscreen {boolean} - Set to true to present the web view in fullscreen.Defaults to false.
     */
    present(fullscreen: boolean): Promise;

    /**
     * Waits for the web view to load.
     *
     * The returned promise will be fulfilled when the web view finishes loading. If theload fails, the promise will be fulfilled with an error.
     * 
     * Use this with caution. If the web view is not loading a new page or is not about
     * to load a new page, the returned promise will never be fulfilled. This limitation
     * exists because Scriptable cannot determine if a web view is about to load a pagein cases where evaluating JavaScript in the web view causes a new page to load.
     *
     * Generally this should only be used when loading causing a new page to load from evaluateJavaScript.In other cases, e.g. when loading a URL using loadURL,
     * the returned promise will be fulfilled when the page have been loaded.
     */
    waitForLoad(): Promise<any>;
}
