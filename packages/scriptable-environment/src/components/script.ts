/**
 * Access information about the script.
 *
 * Allows for accessing information about the script that is currently being run andcontrolling selected parts of the script execution.
 */
export declare class Script {
    /**
     * Name of the script.
     */
    static name(): string;

    /**
     * Informs the system about script completion.
     *
     * Call this function to inform the system that the script has completed running.
     *
     * When a script is run inside Siri and the Shortcuts app, Scriptable use heuristics
     * to determine if the script has completed. If you find that a script takes too long
     * to complete, you can manually call the complete function to stop the execution. Notethat this should be done as the very last action the script performs.
     *
     * When the script is run from a share sheet, the complete function will complete executionand dismiss the presented view.
     */
    static complete(): void;

    /**
     * Sets output when running the script as a shortcut action.
     *
     * Use this function to pass values to other actions in the Shortcuts app. The output
     * can be a text, a number, a boolean, a dictionary or a file path pointing to a filestored in iCloud.
     *
     * You can also use JavaScript's return keyword to output a value to a shortcut.
     *
     * @param value {any} - Value to provide as output.
     */
    static setShortcutOutput(value: any): void;

    /**
     * Sets the widget to be displayed.
     *
     * @param widget {any} - Widget to display.
     */
    static setWidget(widget: any): void;
}
