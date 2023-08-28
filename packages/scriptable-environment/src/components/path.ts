/**
 * A path describes a shape.
 *
 * Shapes can be descriped using a path. Use an instance of Path
 * to create complex shapes that can be drawn to a DrawContext.
 */
export declare class Path {

    /**
     * Constructs a path.     */
    public Path(): void;

    /**
     * Moves to a point.
     *
     * @param {Point} point - Point to move to.     */
    public move(point: Point)): void;

    /**
     * Adds a line to a point.
     *
     * @param {Point} point - Point to add line to.     */
    public addLine(point: Point)): void;

    /**
     * Adds a rectangle.
     *
     * @param {Rect} rect - Rectangle to add.     */
    public addRect(rect: Rect)): void;

    /**
     * Adds an ellipse.
     *
     * @param {Rect} rect - Rectangle incapsulating the ellipse.     */
    public addEllipse(rect: Rect)): void;

    /**
     * Adds a rounded rectangle.
     *
     * @param {Rect} rect - Rectangle to add.
     * @param {number} cornerWidth - Horizontal size of the rounded corner.
     * @param {number} cornerHeight - Vertical size of the rounded corner.     */
    public addRoundedRect(rect: Rect, cornerWidth: number, cornerHeight: number)): void;

    /**
     * Adds a cubic curve to a point.
     *
     * @param {Point} point - End point of the curve.
     * @param {Point} control1 - First control point of the curve.
     * @param {Point} control2 - Second control point of the curve.     */
    public addCurve(point: Point, control1: Point, control2: Point)): void;

    /**
     * Adds a quadratic curve to a point.
     *
     * @param {Point} point - End point of the curve.
     * @param {Point} control - Control point of the curve.     */
    public addQuadCurve(point: Point, control: Point)): void;

    /**
     * Adds a set of lines.
     *
     * @param {Point[]} points - Points to add lines between.     */
    public addLines(points: Point[]): void;

    /**
     * Adds a set of rectangles.
     *
     * @param {Rect[]} rects - Rectangles to add.     */
    public addRects(rects: Rect[]): void;

    /**
     * Closes a sub path.     */
    public closeSubpath(): void;
}
