/**
 * Represents a font and text size.
 *
 * The font can be used to style texts, for example in widgets.
 */
export declare class Font {

    /**
     * Constructs a new font.
     *
     * @param {string} name - Name of the font.
     * @param {number} size - Size of the font.     */
    public Font(name: string, size: number)): void;

    /**
     * Preferred font for large titles.
     *
     * @returns {Font} Preferred font.
     */
    public largeTitle(): Font;

    /**
     * Preferred font for first level hierarchical headings.
     *
     * @returns {Font} Preferred font.
     */
    public title1(): Font;

    /**
     * Preferred font for second level hierarchical headings.
     *
     * @returns {Font} Preferred font.
     */
    public title2(): Font;

    /**
     * Preferred font for third level hierarchical headings.
     *
     * @returns {Font} Preferred font.
     */
    public title3(): Font;

    /**
     * Preferred font for headings.
     *
     * @returns {Font} Preferred font.
     */
    public headline(): Font;

    /**
     * Preferred font for subheadings.
     *
     * @returns {Font} Preferred font.
     */
    public subheadline(): Font;

    /**
     * Preferred font for body texts.
     *
     * @returns {Font} Preferred font.
     */
    public body(): Font;

    /**
     * Preferred font for callouts.
     *
     * @returns {Font} Preferred font.
     */
    public callout(): Font;

    /**
     * Preferred font for footnotes.
     *
     * @returns {Font} Preferred font.
     */
    public footnote(): Font;

    /**
     * Preferred font for standard captions.
     *
     * @returns {Font} Preferred font.
     */
    public caption1(): Font;

    /**
     * Preferred font for alternate captions.
     *
     * @returns {Font} Preferred font.
     */
    public caption2(): Font;

    /**
     * Creates a system font.
     *
     * @param {number} size - Size of the text.
     *
     * @returns {Font} Font.
     */
    public systemFont(size: number): Font;

    /**
     * Creates an ultra light system font.
     *
     * @param {number} size - Size of the text.
     *
     * @returns {Font} Font.
     */
    public ultraLightSystemFont(size: number): Font;

    /**
     * Creates a thin system font.
     *
     * @param {number} size - Size of the text.
     *
     * @returns {Font} Font.
     */
    public thinSystemFont(size: number): Font;

    /**
     * Creates a light system font.
     *
     * @param {number} size - Size of the text.
     *
     * @returns {Font} Font.
     */
    public lightSystemFont(size: number): Font;

    /**
     * Creates a regular system font.
     *
     * @param {number} size - Size of the text.
     *
     * @returns {Font} Font.
     */
    public regularSystemFont(size: number): Font;

    /**
     * Creates a medium system font.
     *
     * @param {number} size - Size of the text.
     *
     * @returns {Font} Font.
     */
    public mediumSystemFont(size: number): Font;

    /**
     * Creates a semibold system font.
     *
     * @param {number} size - Size of the text.
     *
     * @returns {Font} Font.
     */
    public semiboldSystemFont(size: number): Font;

    /**
     * Creates a bold system font.
     *
     * @param {number} size - Size of the text.
     *
     * @returns {Font} Font.
     */
    public boldSystemFont(size: number): Font;

    /**
     * Creates a heavy system font.
     *
     * @param {number} size - Size of the text.
     *
     * @returns {Font} Font.
     */
    public heavySystemFont(size: number): Font;

    /**
     * Creates a font with the system appearance with the black weight.
     *
     * @param {number} size - Size of the text.
     *
     * @returns {Font} Font.
     */
    public blackSystemFont(size: number): Font;

    /**
     * Creates an italic system font.
     *
     * @param {number} size - Size of the text.
     *
     * @returns {Font} Font.
     */
    public italicSystemFont(size: number): Font;

    /**
     * Creates an ultra light monospaced system font.
     *
     * @param {number} size - Size of the text.
     *
     * @returns {Font} Font.
     */
    public ultraLightMonospacedSystemFont(size: number): Font;

    /**
     * Creates a thin monospaced system font.
     *
     * @param {number} size - Size of the text.
     *
     * @returns {Font} Font.
     */
    public thinMonospacedSystemFont(size: number): Font;

    /**
     * Creates a light monospaced system font.
     *
     * @param {number} size - Size of the text.
     *
     * @returns {Font} Font.
     */
    public lightMonospacedSystemFont(size: number): Font;

    /**
     * Creates a regular monospaced system font.
     *
     * @param {number} size - Size of the text.
     *
     * @returns {Font} Font.
     */
    public regularMonospacedSystemFont(size: number): Font;

    /**
     * Creates a medium monospaced system font.
     *
     * @param {number} size - Size of the text.
     *
     * @returns {Font} Font.
     */
    public mediumMonospacedSystemFont(size: number): Font;

    /**
     * Creates a semibold monospaced system font.
     *
     * @param {number} size - Size of the text.
     *
     * @returns {Font} Font.
     */
    public semiboldMonospacedSystemFont(size: number): Font;

    /**
     * Creates a bold monospaced system font..
     *
     * @param {number} size - Size of the text.
     *
     * @returns {Font} Font.
     */
    public boldMonospacedSystemFont(size: number): Font;

    /**
     * Creates a heavy monospaced system font.
     *
     * @param {number} size - Size of the text.
     *
     * @returns {Font} Font.
     */
    public heavyMonospacedSystemFont(size: number): Font;

    /**
     * Creates a monospaced system font with the black weight.
     *
     * @param {number} size - Size of the text.
     *
     * @returns {Font} Font.
     */
    public blackMonospacedSystemFont(size: number): Font;

    /**
     * Creates an ultra light and rounded system font.
     *
     * @param {number} size - Size of the text.
     *
     * @returns {Font} Font.
     */
    public ultraLightRoundedSystemFont(size: number): Font;

    /**
     * Creates a thin and rounded system font.
     *
     * @param {number} size - Size of the text.
     *
     * @returns {Font} Font.
     */
    public thinRoundedSystemFont(size: number): Font;

    /**
     * Creates a light and rounded system font.
     *
     * @param {number} size - Size of the text.
     *
     * @returns {Font} Font.
     */
    public lightRoundedSystemFont(size: number): Font;

    /**
     * Creates a regular and rounded system font.
     *
     * @param {number} size - Size of the text.
     *
     * @returns {Font} Font.
     */
    public regularRoundedSystemFont(size: number): Font;

    /**
     * Creates a medium and rounded system font.
     *
     * @param {number} size - Size of the text.
     *
     * @returns {Font} Font.
     */
    public mediumRoundedSystemFont(size: number): Font;

    /**
     * Creates a semibold and rounded system font.
     *
     * @param {number} size - Size of the text.
     *
     * @returns {Font} Font.
     */
    public semiboldRoundedSystemFont(size: number): Font;

    /**
     * Creates a bold and rounded system font.
     *
     * @param {number} size - Size of the text.
     *
     * @returns {Font} Font.
     */
    public boldRoundedSystemFont(size: number): Font;

    /**
     * Creates a heavy and rounded system font.
     *
     * @param {number} size - Size of the text.
     *
     * @returns {Font} Font.
     */
    public heavyRoundedSystemFont(size: number): Font;

    /**
     * Creates a rounded system font with the black weight.
     *
     * @param {number} size - Size of the text.
     *
     * @returns {Font} Font.
     */
    public blackRoundedSystemFont(size: number): Font;
}
