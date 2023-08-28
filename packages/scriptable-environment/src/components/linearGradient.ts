/**
 * Linear gradient.
 *
 * A linear gradient to be used in a widget.
 */
export declare class LinearGradient {

    /**
     * Colors of the gradient.
     */
    public colors: Color[];

    /**
     * Locations of each color.
     */
    public locations: number[];

    /**
     * Point to start the gradient.
     */
    public startPoint: Point;

    /**
     * Point to end the gradient.
     */
    public endPoint: Point;

    /**
     * Constructs a linear gradient.     */
    public LinearGradient(): void;
}
