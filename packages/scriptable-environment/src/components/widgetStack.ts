import { Color } from "./color";
import { Image } from "./image";
import { LinearGradient } from "./linearGradient";
import { Size } from "./size";
import { WidgetDate } from "./widgetDate";
import { WidgetImage } from "./widgetImage";
import { WidgetSpacer } from "./widgetSpacer";
import { WidgetText } from "./widgetText";

/**
 * Stack element shown in widget.
 *
 * Shows a stack in the widget.
 */
export declare class WidgetStack {
    /**
     * Background color of the widget.
     */
    backgroundColor: Color;

    /**
     * Background image.
     */
    backgroundImage: Image;

    /**
     * Background gradient.
     */
    backgroundGradient: LinearGradient;

    /**
     * Spacing between elements.
     *
     * Specifies the spacing between elements in the stack. You can also use the addSpacer()function on the widget to add spacing between elements. Defaults to 0.
     */
    spacing: number;

    /**
     * Size of the stack.
     *
     * Specifies the size of the stack when shown in a widget. When a dimension is set to
     * zero or less, the widget will automatically decide a length for that dimension. Bothdimensions default to 0.
     */
    size: Size;

    /**
     * Radius of the corners.
     *
     * Radius of the rounded corners. Defaults to 0.
     */
    cornerRadius: number;

    /**
     * Border width.
     *
     * Width of the border around the stack. Defaults to 0.
     */
    borderWidth: number;

    /**
     * Border color.
     *
     * Color of the border around the stack. Defaults to black.
     */
    borderColor: Color;

    /**
     * URL to open.
     *
     * The URL will be opened when the text is tapped. This is only supported in medium
     * and large widgets. Small widgets can only have a single tap target, which is specifiedby the url on the widget.
     */
    url: string;

    /**
     * Add text to the stack.
     *
     * Adds a text element to the stack. Use the properties on the returned element to stylethe text.
     *
     * @param text {string}
     */
    addText(text: string): WidgetText;

    /**
     * Add date to the widget.
     *
     * Adds a date element to the widget. Use the properties on the returned element tostyle the date.
     *
     * @param date {Date}
     */
    addDate(date: Date): WidgetDate;

    /**
     * Add image to the stack.
     *
     * Adds an image element to the stack. Use the properties on the returned element tostyle the image.
     *
     * @param image {Image}
     */
    addImage(image: Image): WidgetImage;

    /**
     * Add spacer.
     *
     * Adds a spacer to the stack. This can be used to offset the content horizontally inthe stack.
     *
     * @param length {number} - Length of the spacer. Pass null to create a spacer witha flexible length.
     */
    addSpacer(length: number): WidgetSpacer;

    /**
     * Add stack.
     *
     * Adds a stack to the widget. Stacks layout elements horizontally by default.
     */
    addStack(): WidgetStack;

    /**
     * Set padding.
     *
     * Sets the padding on each side of the stack.
     *
     * @param top {number} - Padding on the top edge.
     * @param leading {number} - Padding on the leading edge.
     * @param bottom {number} - Padding on the bottom edge.
     * @param trailing {number} - Padding on the trailing edge.
     */
    setPadding(top: number, leading: number, bottom: number, trailing: number): void;

    /**
     * Use the default padding.
     *
     * Configure the stack to use the default padding. Any padding previously defined withsetPadding() will be discarded.
     */
    useDefaultPadding(): void;

    /**
     * Top aligns the content.
     *
     * Specifies that content should be top aligned. This is the default.
     */
    topAlignContent(): void;

    /**
     * Center aligns the content.
     *
     * Specifies that content should be center aligned.
     */
    centerAlignContent(): void;

    /**
     * Bottom aligns the content.
     *
     * Specifies that content should be bottom aligned.
     */
    bottomAlignContent(): void;

    /**
     * Layout elements horizontally.
     *
     * Specifies that the stack should layout elements horizontally. This is the default.
     */
    layoutHorizontally(): void;

    /**
     * Layout elements vertically.
     *
     * Specifies that the stack should layout elements vertically.
     */
    layoutVertically(): void;
}
