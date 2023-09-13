/**
 * Structure representing a rectangle.
 *
 * The structure has a width, height and a coordinate in a two-dimensional coordinatesystem.
 */
export declare class Rect {
    /**
     * Minimum X value.
     *
     * The smallest x-coordinate in the rectangle.
     */
    readonly minX: number;

    /**
     * Minimum Y value.
     *
     * The smallest y-coordinate in the rectangle.
     */
    readonly minY: number;

    /**
     * Maximum X value.
     *
     * The greatest x-coordinate in the rectangle.
     */
    readonly maxX: number;

    /**
     * Maximum Y value.
     *
     * The greatest y-coordinate in the rectangle.
     */
    readonly maxY: number;

    /**
     * X value.
     *
     * The x-coordinate of the rectangle.
     */
    x: number;

    /**
     * Y value.
     *
     * The y-coordinate of the rectangle.
     */
    y: number;

    /**
     * Width of rectangle.
     *
     * The width of the rectangle.
     */
    width: number;

    /**
     * Height of rectangle.
     *
     * The height of the rectangle.
     */
    height: number;

    /**
     * Point that specifies the rectangles origin.
     *
     * The x- and y-coordinate that specifies the rectangles origin as a Point structure.
     */
    origin: Point;

    /**
     * Size of the rectangle.
     *
     * The width and height of the rectangle as a Size structure.
     */
    size: Size;

    /**
     * Constructs a rectangle.
     *
     * Constructs a new rectangle placed in a two-dimensional coordinate system.
     *
     * @param x {number} - X coordinate.
     * @param y {number} - Y coordinate.
     * @param width {number} - Width of rectangle.
     * @param height {number} - Height of rectangle.
     */
    constructor(x: number, y: number, width: number, height: number);
}
