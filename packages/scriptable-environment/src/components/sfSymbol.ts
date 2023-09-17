import { Font } from "./font";
import { Image } from "./image";

/**
 * Representation of a SF symbol.
 *
 * SF symbols are Apple's configurable icons that are designed to look great with theSan Francisco font.
 *
 * Symbols are referenced by their name. You can find the symbol names in Apple's SF
 * Symbols app for macOS. You can also browse symbol names in the SF Symbols Browserand San Fransymbols apps for iOS.
 */
export declare class SFSymbol {
    /**
     * Convert the symbol to an image.
     */
    readonly image: Image;

    /**
     * Constructs a SF symbol.
     *
     * SF symbols are Apple's configurable icons that are designed to look great with theSan Francisco font.
     *
     * Symbols are referenced by their name. You can find the symbol names in Apple's SF
     * Symbols app for macOS. You can also browse symbol names in the SF Symbols Browserand San Fransymbols apps for iOS.
     *
     * @param symbolName {string} - Name of the symbol.
     */
    static named(symbolName: string): SFSymbol;

    /**
     * Configures the symbol with the specified font information.
     *
     * @param font {Font}
     */
    applyFont(font: Font): void;

    /**
     * Configures the symbol to use an ultra light weight.
     */
    applyUltraLightWeight(): void;

    /**
     * Configures the symbol to use an thin weight.
     */
    applyThinWeight(): void;

    /**
     * Configures the symbol to use an light weight.
     */
    applyLightWeight(): void;

    /**
     * Configures the symbol to use an regular weight.
     */
    applyRegularWeight(): void;

    /**
     * Configures the symbol to use an medium weight.
     */
    applyMediumWeight(): void;

    /**
     * Configures the symbol to use an semibold weight.
     */
    applySemiboldWeight(): void;

    /**
     * Configures the symbol to use an bold weight.
     */
    applyBoldWeight(): void;

    /**
     * Configures the symbol to use an heavy weight.
     */
    applyHeavyWeight(): void;

    /**
     * Configures the symbol to use an black weight.
     */
    applyBlackWeight(): void;
}
