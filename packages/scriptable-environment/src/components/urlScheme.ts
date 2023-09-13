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
export var URLScheme: {
    /**
     * Gets all parameters from invocation of URL scheme.
     *
     * @deprecated
     * Deprecated in version 1.3. Use args.queryParameters instead.
     *
     * Gets all the query parameters that were passed in the URL when running this scriptby invoking its URL scheme.
     */
    static allParameters(): {string: string};

    /**
     * Gets a parameters from invocation of URL scheme.
     *
     * @deprecated
     * Deprecated in version 1.3. Use args.queryParameters instead.
     *
     * Gets the value of a query parameter that was passed in the URL when running thisscript by invoking its URL scheme.
     *
     * @param name {string} - Name of the query parameter to get the value for.
     */
    static parameter(name: string): string;

    /**
     * URL for opening the script.
     *
     * Gets the URL for opening the current script. When making a request to the returnedURL from another app, e.g. Safari, the script will be opened.
     */
    static forOpeningScript(): string;

    /**
     * URL for opening script settings.
     *
     * Gets the URL for opening the settings of the current script. When making a request
     * to the returned URL from another app, e.g. Safari, the settings of the current scriptwill be opened.
     */
    static forOpeningScriptSettings(): string;

    /**
     * URL for running script.
     *
     * Gets the URL for running the current script. When making a request to the returnedURL from another app, e.g. Safari, the current script will run.
     *
     * Get the query parameters using the args.queryParameters.
     */
    static forRunningScript(): string;
}
