/**
 * Represents a font and text size.
 *
 * The font can be used to style texts, for example in widgets.
 */
export declare class Font {
    /**
     * Constructs a new font.
     *
     * Refer to iosfonts.com for a list of the fonts that are available in iOS and iPadOS.
     *
     * @param name {string} - Name of the font.
     * @param size {number} - Size of the font.
     */
    constructor(name: string, size: number);

    /**
     * Preferred font for large titles.
     */
    static largeTitle(): Font;

    /**
     * Preferred font for first level hierarchical headings.
     */
    static title1(): Font;

    /**
     * Preferred font for second level hierarchical headings.
     */
    static title2(): Font;

    /**
     * Preferred font for third level hierarchical headings.
     */
    static title3(): Font;

    /**
     * Preferred font for headings.
     */
    static headline(): Font;

    /**
     * Preferred font for subheadings.
     */
    static subheadline(): Font;

    /**
     * Preferred font for body texts.
     */
    static body(): Font;

    /**
     * Preferred font for callouts.
     */
    static callout(): Font;

    /**
     * Preferred font for footnotes.
     */
    static footnote(): Font;

    /**
     * Preferred font for standard captions.
     */
    static caption1(): Font;

    /**
     * Preferred font for alternate captions.
     */
    static caption2(): Font;

    /**
     * Creates a system font.
     *
     * @param size {number} - Size of the text.
     */
    static systemFont(size: number): Font;

    /**
     * Creates an ultra light system font.
     *
     * @param size {number} - Size of the text.
     */
    static ultraLightSystemFont(size: number): Font;

    /**
     * Creates a thin system font.
     *
     * @param size {number} - Size of the text.
     */
    static thinSystemFont(size: number): Font;

    /**
     * Creates a light system font.
     *
     * @param size {number} - Size of the text.
     */
    static lightSystemFont(size: number): Font;

    /**
     * Creates a regular system font.
     *
     * @param size {number} - Size of the text.
     */
    static regularSystemFont(size: number): Font;

    /**
     * Creates a medium system font.
     *
     * @param size {number} - Size of the text.
     */
    static mediumSystemFont(size: number): Font;

    /**
     * Creates a semibold system font.
     *
     * @param size {number} - Size of the text.
     */
    static semiboldSystemFont(size: number): Font;

    /**
     * Creates a bold system font.
     *
     * @param size {number} - Size of the text.
     */
    static boldSystemFont(size: number): Font;

    /**
     * Creates a heavy system font.
     *
     * @param size {number} - Size of the text.
     */
    static heavySystemFont(size: number): Font;

    /**
     * Creates a font with the system appearance with the black weight.
     *
     * @param size {number} - Size of the text.
     */
    static blackSystemFont(size: number): Font;

    /**
     * Creates an italic system font.
     *
     * @param size {number} - Size of the text.
     */
    static italicSystemFont(size: number): Font;

    /**
     * Creates an ultra light monospaced system font.
     *
     * @param size {number} - Size of the text.
     */
    static ultraLightMonospacedSystemFont(size: number): Font;

    /**
     * Creates a thin monospaced system font.
     *
     * @param size {number} - Size of the text.
     */
    static thinMonospacedSystemFont(size: number): Font;

    /**
     * Creates a light monospaced system font.
     *
     * @param size {number} - Size of the text.
     */
    static lightMonospacedSystemFont(size: number): Font;

    /**
     * Creates a regular monospaced system font.
     *
     * @param size {number} - Size of the text.
     */
    static regularMonospacedSystemFont(size: number): Font;

    /**
     * Creates a medium monospaced system font.
     *
     * @param size {number} - Size of the text.
     */
    static mediumMonospacedSystemFont(size: number): Font;

    /**
     * Creates a semibold monospaced system font.
     *
     * @param size {number} - Size of the text.
     */
    static semiboldMonospacedSystemFont(size: number): Font;

    /**
     * Creates a bold monospaced system font..
     *
     * @param size {number} - Size of the text.
     */
    static boldMonospacedSystemFont(size: number): Font;

    /**
     * Creates a heavy monospaced system font.
     *
     * @param size {number} - Size of the text.
     */
    static heavyMonospacedSystemFont(size: number): Font;

    /**
     * Creates a monospaced system font with the black weight.
     *
     * @param size {number} - Size of the text.
     */
    static blackMonospacedSystemFont(size: number): Font;

    /**
     * Creates an ultra light and rounded system font.
     *
     * @param size {number} - Size of the text.
     */
    static ultraLightRoundedSystemFont(size: number): Font;

    /**
     * Creates a thin and rounded system font.
     *
     * @param size {number} - Size of the text.
     */
    static thinRoundedSystemFont(size: number): Font;

    /**
     * Creates a light and rounded system font.
     *
     * @param size {number} - Size of the text.
     */
    static lightRoundedSystemFont(size: number): Font;

    /**
     * Creates a regular and rounded system font.
     *
     * @param size {number} - Size of the text.
     */
    static regularRoundedSystemFont(size: number): Font;

    /**
     * Creates a medium and rounded system font.
     *
     * @param size {number} - Size of the text.
     */
    static mediumRoundedSystemFont(size: number): Font;

    /**
     * Creates a semibold and rounded system font.
     *
     * @param size {number} - Size of the text.
     */
    static semiboldRoundedSystemFont(size: number): Font;

    /**
     * Creates a bold and rounded system font.
     *
     * @param size {number} - Size of the text.
     */
    static boldRoundedSystemFont(size: number): Font;

    /**
     * Creates a heavy and rounded system font.
     *
     * @param size {number} - Size of the text.
     */
    static heavyRoundedSystemFont(size: number): Font;

    /**
     * Creates a rounded system font with the black weight.
     *
     * @param size {number} - Size of the text.
     */
    static blackRoundedSystemFont(size: number): Font;
}
