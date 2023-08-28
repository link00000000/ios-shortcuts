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
     * @returns A black color.
     */
    public black(): Color;

    /**
     * Constructs a dark gray color.
     *
     * @returns A dark gray color.
     */
    public darkGray(): Color;

    /**
     * Constructs a light gray color.
     *
     * @returns A light gray color.
     */
    public lightGray(): Color;

    /**
     * Constructs a white color.
     *
     * @returns A white color.
     */
    public white(): Color;

    /**
     * Constructs a gray color.
     *
     * @returns A gray color.
     */
    public gray(): Color;

    /**
     * Constructs a red color.
     *
     * @returns A red color.
     */
    public static red(): Color;

    /**
     * Constructs a green color.
     *
     * @returns A green color.
     */
    public static green(): Color;

    /**
     * Constructs a blue color.
     *
     * @returns A blue color.
     */
    public static blue(): Color;

    /**
     * Constructs a cyan color.
     *
     * @returns A cyan color.
     */
    public static cyan(): Color;

    /**
     * Constructs a yellow color.
     *
     * @returns A yellow color.
     */
    public static yellow(): Color;

    /**
     * Constructs a magenta color.
     *
     * @returns A magenta color.
     */
    public static magenta(): Color;

    /**
     * Constructs a orange color.
     *
     * @returns A orange color.
     */
    public static orange(): Color;

    /**
     * Constructs a purple color.
     *
     * @returns A purple color.
     */
    public static purple(): Color;

    /**
     * Constructs a brown color.
     *
     * @returns A brown color.
     */
    public static brown(): Color;

    /**
     * Constructs a transparent color.
     *
     * @returns A transparent color.
     */
    public static clear(): Color;

    /**
     * Constructs a color.
     *
     * @param hex - Hex value.
     * @param alpha - Alpha value.
     */
    public new(hex: string, alpha: number): void;

    /**
     * Creates a dynamic color.
     *
     * @param lightColor - Color used in light appearance.
     * @param darkColor - Color used in dark appearance.
     *
     * @returns Dynamic color.
     */
    public static dynamic(lightColor: Color, darkColor: Color): Color;
}
