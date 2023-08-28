/**
 * Access information about the script.
 *
 * Allows for accessing information about the script that is currently being run andcontrolling selected parts of the script execution.
 */
export declare class Script {

    /**
     * Name of the script.
     *
     * @returns {string} undefined
     */
    public name(): string;

    /**
     * Informs the system about script completion.     */
    public complete(): void;

    /**
     * Sets output when running the script as a shortcut action.
     *
     * @param {any} value - Value to provide as output.     */
    public setShortcutOutput(value: any)): void;

    /**
     * Sets the widget to be displayed.
     *
     * @param {any} widget - Widget to display.     */
    public setWidget(widget: any)): void;
}
