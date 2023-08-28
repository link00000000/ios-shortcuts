/**
 * Structure representing a rectangle.
 *
 * The structure has a width, height and a coordinate in a two-dimensional coordinatesystem.
 */
export declare class Rect {

    /**
     * Minimum X value.
     */
    public minX: number;

    /**
     * Minimum Y value.
     */
    public minY: number;

    /**
     * Maximum X value.
     */
    public maxX: number;

    /**
     * Maximum Y value.
     */
    public maxY: number;

    /**
     * X value.
     */
    public x: number;

    /**
     * Y value.
     */
    public y: number;

    /**
     * Width of rectangle.
     */
    public width: number;

    /**
     * Height of rectangle.
     */
    public height: number;

    /**
     * Point that specifies the rectangles origin.
     */
    public origin: Point;

    /**
     * Size of the rectangle.
     */
    public size: Size;

    /**
     * Constructs a rectangle.
     *
     * @param {number} x - X coordinate.
     * @param {number} y - Y coordinate.
     * @param {number} width - Width of rectangle.
     * @param {number} height - Height of rectangle.     */
    public Rect(x: number, y: number, width: number, height: number)): void;
}
