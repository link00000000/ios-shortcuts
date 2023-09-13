import { Color } from "./color";
import { Point } from "./point";

/**
 * Linear gradient.
 *
 * A linear gradient to be used in a widget.
 */
export declare class LinearGradient {
    /**
     * Colors of the gradient.
     *
     * The array of colors should include the same amount of elements as the gradients locationsproperty.
     */
    colors: Color[];

    /**
     * Locations of each color.
     *
     * Each location should be a value in the range of 0 to 1 and indicates the locationof each color in the gradients colors array.
     *
     * The array of locations should include the same amount of elements as the gradientscolors property.
     */
    locations: number[];

    /**
     * Point to start the gradient.
     *
     * The normalized starting point of the gradient. The endPoint and startPoint together
     * controls the direction of the gradient. The X and Y component should each range from0 to 1. Defaults to (0, 1).
     */
    startPoint: Point;

    /**
     * Point to end the gradient.
     *
     * The normalized ending point of the gradient. The endPoint and startPoint together
     * controls the direction of the gradient. The X and Y component should each range from0 to 1. Defaults to (0, 1).
     */
    endPoint: Point;

    /**
     * Constructs a linear gradient.
     */
    constructor();
}
