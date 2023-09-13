import { Color } from "./color";
import { Font } from "./font";

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
    text: string;

    /**
     * Placeholder shown in the text field while it is empty.
     */
    placeholder: string;

    /**
     * Hides the text that is entered when set to true.
     *
     * The default value is false.
     */
    isSecure: boolean;

    /**
     * Color of the text.
     */
    textColor: Color;

    /**
     * Font of the text.
     */
    font: Font;

    /**
     * Use the default keyboard for entering text.
     */
    setDefaultKeyboard(): void;

    /**
     * Use a keyboard that prominently features the numbers 0 through 9.
     */
    setNumberPadKeyboard(): void;

    /**
     * Use a numeric keyboard with a decimal point for entering text.
     */
    setDecimalPadKeyboard(): void;

    /**
     * Use a numeric keyboard with punctuation for entering text.
     */
    setNumbersAndPunctuationKeyboard(): void;

    /**
     * Use a keyboard that prominently feaetures the numbers 0 through 9 and the * and #characters.
     */
    setPhonePadKeyboard(): void;

    /**
     * Use a keyboard that prominently features the space and period characters.
     */
    setWebSearchKeyboard(): void;

    /**
     * Use a keyboard that prominently features the @, period and space characters.
     */
    setEmailAddressKeyboard(): void;

    /**
     * Use a keyboard that prominently faetures the period and slash characters and the".com" string.
     */
    setURLKeyboard(): void;

    /**
     * Use a keyboard that prominently features the @ and # characters.
     */
    setTwitterKeyboard(): void;

    /**
     * Left aligns the text.
     *
     * This is the default text alignment.
     */
    leftAlignText(): void;

    /**
     * Center aligns the text.
     */
    centerAlignText(): void;

    /**
     * Right aligns the text.
     */
    rightAlignText(): void;
}
