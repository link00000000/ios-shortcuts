/**
 * Open x-callback-url requests.
 *
 * Opens apps that support x-callback-url and waits for a response from the target application.You can find a list of apps that support x-callback-url at x-callback-url.com/apps.
 */
export declare class CallbackURL {

    /**
     * Construct CallbackURL.
     *
     * @param {string} baseURL - Base URL of the request. This is usally something like my-app://x-callback-url/action     */
    public CallbackURL(baseURL: string): void;

    /**
     * Construct CallbackURL.
     *
     * @param {string} name - Name of the query parameter to add.
     * @param {string} value - Value of the query parameter to add.     */
    public addParameter(name: string, value: string): void;

    /**
     * Opens the callback URL.
     *
     * @returns {Promise<{ string: string }>} Promise that provides the query parameters supplied by the target app when it invokes the callback.
     */
    public open(): Promise<{ string: string }>;

    /**
     * Creates the callback URL.
     *
     * @returns {string} Configured callback URL.
     */
    public getURL(): string;
}
