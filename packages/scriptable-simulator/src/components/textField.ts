import { Color, Font, TextField } from "@ios-shortcuts/scriptable-environment";

export class SimulatedTextField implements TextField {
    text: string = "";
    placeholder: string = "";
    isSecure: boolean = true;
    textColor: Color = null!;
    font: Font = null!;

    setDefaultKeyboard(): void {
        throw new Error("Method not implemented.");
    }
    setNumberPadKeyboard(): void {
        throw new Error("Method not implemented.");
    }
    setDecimalPadKeyboard(): void {
        throw new Error("Method not implemented.");
    }
    setNumbersAndPunctuationKeyboard(): void {
        throw new Error("Method not implemented.");
    }
    setPhonePadKeyboard(): void {
        throw new Error("Method not implemented.");
    }
    setWebSearchKeyboard(): void {
        throw new Error("Method not implemented.");
    }
    setEmailAddressKeyboard(): void {
        throw new Error("Method not implemented.");
    }
    setURLKeyboard(): void {
        throw new Error("Method not implemented.");
    }
    setTwitterKeyboard(): void {
        throw new Error("Method not implemented.");
    }
    leftAlignText(): void {
        throw new Error("Method not implemented.");
    }
    centerAlignText(): void {
        throw new Error("Method not implemented.");
    }
    rightAlignText(): void {
        throw new Error("Method not implemented.");
    }

}
