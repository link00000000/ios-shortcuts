/**
 * Adds messages to the log.
 *
 * The console can be used to log information when running your script. The log maybe useful when debugging your script, e.g. to examine values of variables.
 */
export var console: {
    /**
     * Logs a message to the console.
     *
     * The message will have a default appearance. Refer to console.error(message) to logerrors.
     *
     * You can also use the global function log(message) which is a shorthand for console.log.
     *
     * @param message {any} - Message to log to the console.
     */
    static log(message: any): void;

    /**
     * Logs a warning message to the console.
     *
     * The message will have a distinctive appearance. Refer to console.log(message) tolog informative messages and console.error(message) to log errors.
     *
     * You can also use the global function logWarning(message) which is a shorthand forconsole.warn.
     *
     * @param message {any} - Message to log to the console.
     */
    static warn(message: any): void;

    /**
     * Logs an error message to the console.
     *
     * The message will have a distinctive appearance. Refer to console.log(message) tolog informative message and console.warn(message) to log warnings.
     *
     * You can also use the global function logError(message) which is a shorthand for console.error.
     *
     * @param message {any} - Message to log to the console.
     */
    static error(message: any): void;

    /**
     * Logs an error message to the console.
     *
     * @deprecated
     * Deprecated in version 1.3. Use console.error(message) instead.
     *
     * The message will have a distinctive appearance. Refer to console.log(message) tolog informative message and console.warn(message) to log warnings.
     *
     * You can also use the global function logError(message) which is a shorthand for console.error.
     *
     * @param message {any} - Message to log to the console.
     */
    static logError(message: any): void;
}
