/**
 * Open x-callback-url requests.
 *
 * Opens apps that support x-callback-url and waits for a response from the target application.You can find a list of apps that support x-callback-url at x-callback-url.com/apps.
 */
export declare class CallbackURL {
    /**
     * Construct CallbackURL.
     *
     * Constructs an object that opens x-callback-url requests and waits for a responsefrom the target app.
     *
     * @param baseURL {string} - Base URL of the request. This is usally something likemy-app://x-callback-url/action
     */
    constructor(baseURL: string);

    /**
     * Construct CallbackURL.
     *
     * Appends a key/value pair to the base URL as a query parameter. The name and value
     * are automatically encoded. Do not add the x-callback-url paramters, i.e. x-source,x-success, x-error and x-cancel as Scriptable will add those.
     *
     * @param name {string} - Name of the query parameter to add.
     * @param value {string} - Value of the query parameter to add.
     */
    addParameter(name: string, value: string): void;

    /**
     * Opens the callback URL.
     *
     * Opens the target app and waits for the target app to perform the action. The returned
     * promise contains the query parameters supplied by the target app when it invokes
     * the callback. If the action failed in the target app or the action was cancelled,
     * the promise will be rejected. The promise is also rejected if the action times outbecause the target app did not invoke the callback.
     */
    open(): Promise<{string: string}>;

    /**
     * Creates the callback URL.
     *
     * Creates a callback URL with the specified base URL and query parameters.
     */
    getURL(): string;
}
