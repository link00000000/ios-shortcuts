import { Color } from "./color";
import { Font } from "./font";
import { Point } from "./point";

/**
 * Date element shown in a widget.
 *
 * A date shown in a widget. Dates will update periodically when shown in a widget.
 *
 * You do not create instances of this element directly. Instead you should call addDate()on an instance of a ListWidget.
 */
export declare class WidgetDate {
    /**
     * Date to show in a widget.
     */
    date: Date;

    /**
     * Color of the text.
     */
    textColor: Color;

    /**
     * Font and text size of the text.
     */
    font: Font;

    /**
     * Opacity of the text.
     *
     * Opacity of the text. This must be a value between 0 and 1. Defaults to 1.
     */
    textOpacity: number;

    /**
     * Maximum number of lines.
     *
     * Maximum number of lines to display. The limit is disabled when the value is 0 orless. Defaults to 0.
     */
    lineLimit: number;

    /**
     * Minimum amount the text scales down to.
     *
     * Sets the minimum amount that text scales down to fit in the available space. For
     * example, a text with a minimum scale factor of 0.5 allows the widget to draw the
     * text in a font size half the size of the actual font. The scale factor should bea fraction between 0 and 1, both inclusive. Defaults to 1.
     */
    minimumScaleFactor: number;

    /**
     * Color of the shadow.
     *
     * Sets the color of the shadow cast by the text. The shadowRadius property must havea value greater than zero for this property to have an effect. Defaults to black.
     */
    shadowColor: Color;

    /**
     * Size of the shadow.
     *
     * Sets the size of the shadow cast by the text. Defaults to 0.
     */
    shadowRadius: number;

    /**
     * Offset of the shadow.
     *
     * Sets the offset of the shadow cast by the text. The shadowRadius property must havea value greater than zero for this property to have an effect. Defaults to (0, 0).
     */
    shadowOffset: Point;

    /**
     * URL to open.
     *
     * The URL will be opened when the text is tapped. This is only supported in medium
     * and large widgets. Small widgets can only have a single tap target, which is specifiedby the url on the widget.
     */
    url: string;

    /**
     * Left aligns the text.
     *
     * Specifies that text should be left aligned. This is the default.
     *
     * This does not affect texts placed in stacks. Use spacers instead when aligning text
     * in stacks. To align the text to left right in a horizontal stack, you should placea spacer after the text.
     */
    leftAlignText(): void;

    /**
     * Center aligns the text.
     *
     * Specifies that text should be center aligned.
     *
     * This does not affect texts placed in stacks. Use spacers instead when aligning text
     * in stacks. To align the text in the center of a horizontal stack, you should placea spacer both before and after the text.
     */
    centerAlignText(): void;

    /**
     * Right aligns the text.
     *
     * Specifies that text should be right aligned.
     *
     * This does not affect texts placed in stacks. Use spacers instead when aligning text
     * in stacks. To align the text to the right in a horizontal stack, you should placea spacer before the text.
     */
    rightAlignText(): void;

    /**
     * Display time component of the date.
     *
     * Example output:
     *     11:23PM
     */
    applyTimeStyle(): void;

    /**
     * Display entire date.
     *
     * Example output:
     *     June 3, 2019
     *
     * This is the default.
     */
    applyDateStyle(): void;

    /**
     * Display date as relative to now.
     *
     * Example output:
     *     2 hours, 23 minutes
     *     1 year, 1 month
     */
    applyRelativeStyle(): void;

    /**
     * Display date as offset from now.
     *
     * Example output:
     *     +2 hours
     *     -3 months
     */
    applyOffsetStyle(): void;

    /**
     * Display date as timer counting from now.
     *
     * Example output:
     *    2:32
     *    36:59:01
     */
    applyTimerStyle(): void;
}
