/**
 * Adds messages to the log.
 *
 * The console can be used to log information when running your script. The log maybe useful when debugging your script, e.g. to examine values of variables.
 */
export declare const console: {

    /**
     * Logs a message to the console.
     *
     * @param {any} message - Message to log to the console.
     */
    log(message: any): void;

    /**
     * Logs a warning message to the console.
     *
     * @param {any} message - Message to log to the console.
     */
    warn(message: any): void;

    /**
     * Logs an error message to the console.
     *
     * @param {any} message - Message to log to the console.
     */
    error(message: any): void;

    /**
     * Logs an error message to the console.
     *
     * @deprecated Deprecated in version 1.3. Use console.error(message) instead.
     *
     * @param {any} message - Message to log to the console.
     */
    logError(message: any): void;
}
