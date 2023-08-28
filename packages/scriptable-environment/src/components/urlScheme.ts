/**
 * Manages URL schemes for Scriptable.
 *
 * Use URL schemes to launch the app and perform an action, such as running a script.
 * The app conforms to the scriptable:// URL scheme. The following actions can be performedusing the URL scheme.
 *
 * Adding a script
 * To add a new script, you should use the following URL scheme:
 *
 * scriptable:///add
 *
 * Opening a script
 * To open an existing script, you should use the following URL scheme:
 *
 * scriptable:///open/Example
 *
 * The scriptName query parameter is the name of the script to open. scriptName must
 * be URL encoded. You may optionally add the query parameter openSettings with a valueof true to automatically open the script settings.
 *
 * Running a script
 * To run an existing script, you should use the following URL scheme:
 *
 * scriptable:///run/Example
 *
 * The scriptName query parameter is the name of the script to run. scriptName mustbe URL encoded.
 *
 * If you set openEditor to true, the script will run with the editor shown opposed
 * to running directly from the list of scripts. Opening the editor to run the scriptis beneficial in cases where you need to view messages logged to the console.
 *
 * In addition to the scriptable:// scheme, you can also perform the above actions usingthe universal link open.scriptable.app, e.g. https://open.scriptable.app/run/Example
 */
export declare class URLScheme {

    /**
     * Gets all parameters from invocation of URL scheme.
     *
     * @returns {{string: string}} All query parameters.
     */
    public allParameters(): {string: string};

    /**
     * Gets a parameters from invocation of URL scheme.
     *
     * @param {string} name - Name of the query parameter to get the value for.
     *
     * @returns {string} Value of query parameter.
     */
    public parameter(name: string): string;

    /**
     * URL for opening the script.
     *
     * @returns {string} URL for opening script.
     */
    public forOpeningScript(): string;

    /**
     * URL for opening script settings.
     *
     * @returns {string} URL for opening script settings.
     */
    public forOpeningScriptSettings(): string;

    /**
     * URL for running script.
     *
     * @returns {string} URL for opening script settings.
     */
    public forRunningScript(): string;
}