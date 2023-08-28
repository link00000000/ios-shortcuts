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
    public image: Image;

    /**
     * Constructs a SF symbol.
     *
     * @param {string} symbolName - Name of the symbol.
     *
     * @returns {SFSymbol} Constructed SF symbol or null if no symbol with the name exists.
     */
    public named(symbolName: string): SFSymbol;

    /**
     * Configures the symbol with the specified font information.     */
    public applyFont(font: Font)): void;

    /**
     * Configures the symbol to use an ultra light weight.     */
    public applyUltraLightWeight(): void;

    /**
     * Configures the symbol to use an thin weight.     */
    public applyThinWeight(): void;

    /**
     * Configures the symbol to use an light weight.     */
    public applyLightWeight(): void;

    /**
     * Configures the symbol to use an regular weight.     */
    public applyRegularWeight(): void;

    /**
     * Configures the symbol to use an medium weight.     */
    public applyMediumWeight(): void;

    /**
     * Configures the symbol to use an semibold weight.     */
    public applySemiboldWeight(): void;

    /**
     * Configures the symbol to use an bold weight.     */
    public applyBoldWeight(): void;

    /**
     * Configures the symbol to use an heavy weight.     */
    public applyHeavyWeight(): void;

    /**
     * Configures the symbol to use an black weight.     */
    public applyBlackWeight(): void;
}
