/**
 * A path describes a shape.
 *
 * Shapes can be descriped using a path. Use an instance of Path
 * to create complex shapes that can be drawn to a DrawContext.
 */
export declare class Path {
    /**
     * Constructs a path.
     *
     * Use the methods on the path to create complex shapes.
     */
    constructor();

    /**
     * Moves to a point.
     *
     * Moves to a point without drawing a line between the current
     * point and the new point.
     *
     * @param point {Point} - Point to move to.
     */
    move(point: Point): void;

    /**
     * Adds a line to a point.
     *
     * Add a line from the current point, e.g. set using the move method,
     * and to the new point.
     *
     * @param point {Point} - Point to add line to.
     */
    addLine(point: Point): void;

    /**
     * Adds a rectangle.
     *
     * This is a convenience function for adding a rectangle to the path starting from the
     * lower left corner and drawing the lines counter-clockwise until the rectangle isclosed.
     *
     * @param rect {Rect} - Rectangle to add.
     */
    addRect(rect: Rect): void;

    /**
     * Adds an ellipse.
     *
     * Adds an ellipse incapsulated by the provided rectangle to the path.
     *
     * @param rect {Rect} - Rectangle incapsulating the ellipse.
     */
    addEllipse(rect: Rect): void;

    /**
     * Adds a rounded rectangle.
     *
     * Adds a rounded rectangle to the path. The corner width specifies the horizontal sizeof the corner and the corner height specifies the the vertical size of the corner.
     *
     * @param rect {Rect} - Rectangle to add.
     * @param cornerWidth {number} - Horizontal size of the rounded corner.
     * @param cornerHeight {number} - Vertical size of the rounded corner.
     */
    addRoundedRect(rect: Rect, cornerWidth: number, cornerHeight: number): void;

    /**
     * Adds a cubic curve to a point.
     *
     * Adds a cubic Bezier curve to the path with the specified end point and control points.
     *
     * @param point {Point} - End point of the curve.
     * @param control1 {Point} - First control point of the curve.
     * @param control2 {Point} - Second control point of the curve.
     */
    addCurve(point: Point, control1: Point, control2: Point): void;

    /**
     * Adds a quadratic curve to a point.
     *
     * Adds a quadratic Bezier curve to the specified end point with the specified controlpoint.
     *
     * @param point {Point} - End point of the curve.
     * @param control {Point} - Control point of the curve.
     */
    addQuadCurve(point: Point, control: Point): void;

    /**
     * Adds a set of lines.
     *
     * Adds straight lines between an array of points. Calling this method is equivalent
     * to calling the move function with the first point in the array of points and thencalling addLine on the subsequent points in the array.
     *
     * @param points {Point[]} - Points to add lines between.
     */
    addLines(points: Point[]): void;

    /**
     * Adds a set of rectangles.
     *
     * Calling this is equivalent to repeatedly calling addRect.
     *
     * @param rects {Rect[]} - Rectangles to add.
     */
    addRects(rects: Rect[]): void;

    /**
     * Closes a sub path.
     *
     * Adds a straight line from the current point to the start of the current subpath.
     */
    closeSubpath(): void;
}
