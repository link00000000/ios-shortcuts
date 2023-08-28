import { TextField } from "./textField";

/**
 * Presents an alert.
 *
 * Use this to configure an alert presented modally or as a sheet. After configuringthe alert, call presentAlert() or presentSheet() to present the alert.
 * 
 * The two presentations methods will return a value which carries the index of theaction that was selected when fulfilled.
 */
export declare class Alert {

    /**
     * Title displayed in the alert. Usually a short string.
     */
    public title: string;

    /**
     * Detailed message displayed in the alert.
     */
    public message: string;

    /**
     * Constructs a new alert.
     */
    public new(): void;

    /**
     * Adds an action to the alert.
     *
     * @param title - Title of the action.
     */
    public addAction(title: string): void;

    /**
     * Adds a destructive action to the alert.
     *
     * @param title - Title of the action.
     */
    public addDestructiveAction(title: string): void;

    /**
     * Adds a cancel action to the alert.
     *
     * @param title - Title of the action.
     */
    public addCancelAction(title: string): void;

    /**
     * Adds a text field prompting for user input.
     *
     * @param placeholder - Optional placeholder that will be displayed when the text field is empty.
     * @param text - Optional default value for the text field.
     *
     * @returns Text field added to the alert.
     */
    public addTextField(placeholder: string, text: string): TextField;

    /**
     * Adds a secure text field prompting for user input.
     *
     * @param placeholder - Optional placeholder that will be displayed when the text field is empty.
     * @param text - Optional default value for the text field.
     *
     * @returns Text field added to the alert.
     */
    public addSecureTextField(placeholder?: string, text?: string): TextField;

    /**
     * Retrieves value of a text field.
     *
     * @param index - Index of text field to retrieve for value.
     *
     * @returns Value of the text field at the specified index.
     */
    public textFieldValue(index: number): string;

    /**
     * Presents the alert modally.
     *
     * @returns A promise carrying the selected action index when fulfilled.
     */
    public present(): Promise<number>;

    /**
     * Presents the alert modally.
     *
     * @returns A promise carrying the selected action index when fulfilled.
     */
    public presentAlert(): Promise<number>;

    /**
     * Presents the alert as a sheet.
     *
     * @returns A promise carrying the selected action index when fulfilled.
     */
    public presentSheet(): Promise<number>;
}
