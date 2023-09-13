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
    title: string;

    /**
     * Detailed message displayed in the alert.
     */
    message: string;

    /**
     * Constructs a new alert.
     */
    constructor();

    /**
     * Adds an action to the alert.
     *
     * Adds an action button to the alert. To check if an action was selected, you should
     * use the first parameter provided when the promise returned by presentAlert() andpresentSheet() is resolved.
     *
     * @param title {string} - Title of the action.
     */
    addAction(title: string): void;

    /**
     * Adds a destructive action to the alert.
     *
     * Destructive action titles have a red text color, signaling that the action may modifyor delete data.
     *
     * @param title {string} - Title of the action.
     */
    addDestructiveAction(title: string): void;

    /**
     * Adds a cancel action to the alert.
     *
     * Adds a cancel action to the alert. When a cancel action is selected, the index provided
     * by presentAlert() or presentSheet() will always be -1. Please note that when running
     * on the iPad and presenting using presentSheet(), the action will not be shown inthe list of actions. The operation is cancelled by tapping outside the sheet.
     *
     * An alert can only contain a single cancel action. Attempting to add more cancel actionswill remove any previously added cancel actions.
     *
     * @param title {string} - Title of the action.
     */
    addCancelAction(title: string): void;

    /**
     * Adds a text field prompting for user input.
     *
     * Adds a text field to the alert controller prompting for user input. Retrieve thevalue for the text field using textFieldValue() and supply\e
     * 
     * the index of the text field. Indices for text fields are assigned in the same orderas they are added to the alert starting at 0.
     *
     * Text fields are not supported when using the sheet presentation.
     *
     * @param placeholder {string} - Optional placeholder that will be displayed when thetext field is empty.
     * @param text {string} - Optional default value for the text field.
     */
    addTextField(placeholder: string, text: string): TextField;

    /**
     * Adds a secure text field prompting for user input.
     *
     * Adds a secure text field to the alert controller prompting for user input. Values
     * entered into a secure text field will be hidden behind dots. Retrieve the value for
     * the text field using textFieldValue() and supply the index of the text field. Indices
     * for text fields are assigned in the same order as they are added to the alert startingat 0.
     *
     * @param placeholder {string} - Optional placeholder that will be displayed when thetext field is empty.
     * @param text {string} - Optional default value for the text field.
     */
    addSecureTextField(placeholder: string, text: string): TextField;

    /**
     * Retrieves value of a text field.
     *
     * Retrieves the value of a text field added using addTextField() or addSecureTextField().
     * Indices for text fields are assigned in the same order as they are added to the alertstarting at 0.
     *
     * @param index {number} - Index of text field to retrieve for value.
     */
    textFieldValue(index: number): string;

    /**
     * Presents the alert modally.
     *
     * This is a shorthand for presentAlert().
     */
    present(): Promise<number>;

    /**
     * Presents the alert modally.
     */
    presentAlert(): Promise<number>;

    /**
     * Presents the alert as a sheet.
     */
    presentSheet(): Promise<number>;
}
