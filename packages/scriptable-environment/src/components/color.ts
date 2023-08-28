/**
 * Stores color data including opacity.
 *
 * A color can be created using a hex value, e.g. #FF0000 and optionally an alpha orit can be created using the provided system colors.
 */
export declare class Color {

    /**
     * HEX representation.
     */
    public hex: string;

    /**
     * Amount of red in the color.
     */
    public red: number;

    /**
     * Amount of green in the color.
     */
    public green: number;

    /**
     * Amount of blue in the color.
     */
    public blue: number;

    /**
     * Alpha of the color.
     */
    public alpha: number;

    /**
     * Constructs a black color.
     *
     * @returns {Color} A black color.
     */
    public black(): Color;

    /**
     * Constructs a dark gray color.
     *
     * @returns {Color} A dark gray color.
     */
    public darkGray(): Color;

    /**
     * Constructs a light gray color.
     *
     * @returns {Color} A light gray color.
     */
    public lightGray(): Color;

    /**
     * Constructs a white color.
     *
     * @returns {Color} A white color.
     */
    public white(): Color;

    /**
     * Constructs a gray color.
     *
     * @returns {Color} A gray color.
     */
    public gray(): Color;

    /**
     * Constructs a red color.
     *
     * @returns {Color} A red color.
     */
    public static red(): Color;

    /**
     * Constructs a green color.
     *
     * @returns {Color} A green color.
     */
    public static green(): Color;

    /**
     * Constructs a blue color.
     *
     * @returns {Color} A blue color.
     */
    public static blue(): Color;

    /**
     * Constructs a cyan color.
     *
     * @returns {Color} A cyan color.
     */
    public static cyan(): Color;

    /**
     * Constructs a yellow color.
     *
     * @returns {Color} A yellow color.
     */
    public static yellow(): Color;

    /**
     * Constructs a magenta color.
     *
     * @returns {Color} A magenta color.
     */
    public static magenta(): Color;

    /**
     * Constructs a orange color.
     *
     * @returns {Color} A orange color.
     */
    public static orange(): Color;

    /**
     * Constructs a purple color.
     *
     * @returns {Color} A purple color.
     */
    public static purple(): Color;

    /**
     * Constructs a brown color.
     *
     * @returns {Color} A brown color.
     */
    public static brown(): Color;

    /**
     * Constructs a transparent color.
     *
     * @returns {Color} A transparent color.
     */
    public static clear(): Color;

    /**
     * Constructs a color.
     *
     * @param {string} hex - Hex value.
     * @param {number} alpha - Alpha value.     */
    public new(hex: string, alpha: number): void;

    /**
     * Creates a dynamic color.
     *
     * @param {Color} lightColor - Color used in light appearance.
     * @param {Color} darkColor - Color used in dark appearance.
     *
     * @returns {Color} Dynamic color.
     */
    public static dynamic(lightColor: Color, darkColor: Color): Color;
}
