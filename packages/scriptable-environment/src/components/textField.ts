/**
 * Text field in an alert.
 *
 * Use the text field to customize the appearance of the text entered into it.
 *
 * You do not create create instances of this. Instead you should add a text field toan Alert using the addTextField() and addSecureTextField() on the alert.
 */
export declare class TextField {

    /**
     * Text in the text field.
     */
    public text: string;

    /**
     * Placeholder shown in the text field while it is empty.
     */
    public placeholder: string;

    /**
     * Hides the text that is entered when set to true.
     */
    public isSecure: boolean;

    /**
     * Color of the text.
     */
    public textColor: Color;

    /**
     * Font of the text.
     */
    public font: Font;

    /**
     * Use the default keyboard for entering text.     */
    public setDefaultKeyboard(): void;

    /**
     * Use a keyboard that prominently features the numbers 0 through 9.     */
    public setNumberPadKeyboard(): void;

    /**
     * Use a numeric keyboard with a decimal point for entering text.     */
    public setDecimalPadKeyboard(): void;

    /**
     * Use a numeric keyboard with punctuation for entering text.     */
    public setNumbersAndPunctuationKeyboard(): void;

    /**
     * Use a keyboard that prominently feaetures the numbers 0 through 9 and the * and #characters.     */
    public setPhonePadKeyboard(): void;

    /**
     * Use a keyboard that prominently features the space and period characters.     */
    public setWebSearchKeyboard(): void;

    /**
     * Use a keyboard that prominently features the @, period and space characters.     */
    public setEmailAddressKeyboard(): void;

    /**
     * Use a keyboard that prominently faetures the period and slash characters and the".com" string.     */
    public setURLKeyboard(): void;

    /**
     * Use a keyboard that prominently features the @ and # characters.     */
    public setTwitterKeyboard(): void;

    /**
     * Left aligns the text.     */
    public leftAlignText(): void;

    /**
     * Center aligns the text.     */
    public centerAlignText(): void;

    /**
     * Right aligns the text.     */
    public rightAlignText(): void;
}
