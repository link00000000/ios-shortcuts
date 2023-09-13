/**
 * Stores color data including opacity.
 *
 * A color can be created using a hex value, e.g. #FF0000 and optionally an alpha orit can be created using the provided system colors.
 */
export declare class Color {
    /**
     * HEX representation.
     */
    readonly hex: string;

    /**
     * Amount of red in the color.
     */
    readonly red: number;

    /**
     * Amount of green in the color.
     */
    readonly green: number;

    /**
     * Amount of blue in the color.
     */
    readonly blue: number;

    /**
     * Alpha of the color.
     */
    readonly alpha: number;

    /**
     * Constructs a black color.
     */
    static black(): Color;

    /**
     * Constructs a dark gray color.
     */
    static darkGray(): Color;

    /**
     * Constructs a light gray color.
     */
    static lightGray(): Color;

    /**
     * Constructs a white color.
     */
    static white(): Color;

    /**
     * Constructs a gray color.
     */
    static gray(): Color;

    /**
     * Constructs a red color.
     */
    static red(): Color;

    /**
     * Constructs a green color.
     */
    static green(): Color;

    /**
     * Constructs a blue color.
     */
    static blue(): Color;

    /**
     * Constructs a cyan color.
     */
    static cyan(): Color;

    /**
     * Constructs a yellow color.
     */
    static yellow(): Color;

    /**
     * Constructs a magenta color.
     */
    static magenta(): Color;

    /**
     * Constructs a orange color.
     */
    static orange(): Color;

    /**
     * Constructs a purple color.
     */
    static purple(): Color;

    /**
     * Constructs a brown color.
     */
    static brown(): Color;

    /**
     * Constructs a transparent color.
     */
    static clear(): Color;

    /**
     * Constructs a color.
     *
     * Constructs a new color with a hex value and optionally an alpha value. The hex value
     * may specify the alpha value but this will be ignored if the alpha value parameteris provided. Examples of valid hex values: #ff0000, #00ff0080 
     * #00f and #ff. The hashtag is optional.
     *
     * @param hex {string} - Hex value.
     * @param alpha {number} - Alpha value.
     */
    constructor(hex: string, alpha: number);

    /**
     * Creates a dynamic color.
     *
     * The dynamic color will use either its light or dark variant depending the appearanceof the system.
     *
     * Dynamic colors are not supported when used with DrawContext.
     *
     * @param lightColor {Color} - Color used in light appearance.
     * @param darkColor {Color} - Color used in dark appearance.
     */
    static dynamic(lightColor: Color, darkColor: Color): Color;
}
