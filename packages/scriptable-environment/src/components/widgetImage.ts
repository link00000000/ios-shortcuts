import { Color } from "./color";
import { Image } from "./image";
import { Size } from "./size";

/**
 * Image element shown in widget.
 *
 * An image shown in a widget. You do not create instances of this element directly.Instead you should call addImage() on an instance of a ListWidget.
 */
export declare class WidgetImage {
    /**
     * Image to show in widget.
     */
    image: Image;

    /**
     * Whether the image is resizable.
     *
     * When set to true, the image can be resized. Defaults to true.
     */
    resizable: boolean;

    /**
     * Size of the image in the widget.
     *
     * Size of the image. When set to null, the image will be shwon at its full size. Defaultsto null.
     */
    imageSize: Size;

    /**
     * Opacity when shown in widget.
     *
     * Opacity of the image. This must be a value between 0 and 1. Defaults to 1.
     */
    imageOpacity: number;

    /**
     * Radius of the corners.
     *
     * Radius of the rounded corners. This property is ignored when containerRelativeShapeis set to true. Defaults to 0.
     */
    cornerRadius: number;

    /**
     * Border width.
     *
     * Width of the border around the image. Defaults to 0.
     */
    borderWidth: number;

    /**
     * Border color.
     *
     * Color of the border around the image. Defaults to black.
     */
    borderColor: Color;

    /**
     * Shape the image relative to its container.
     *
     * When true the corners of the image will be rounded relative to the containing widget.The value of cornerRadius is ignored when this is true. Defaults to false.
     */
    containerRelativeShape: boolean;

    /**
     * Tint color of the image.
     *
     * Changes the color of the image. Set to null to show the original image. Defaultsto null.
     */
    tintColor: Color;

    /**
     * URL to open.
     *
     * The URL will be opened when the text is tapped. This is only supported in medium
     * and large widgets. Small widgets can only have a single tap target, which is specifiedby the url on the widget.
     */
    url: string;

    /**
     * Left aligns the image.
     *
     * Specifies that image should be left aligned. This is the default.
     */
    leftAlignImage(): void;

    /**
     * Center aligns the image.
     *
     * Specifies that image should be center aligned.
     */
    centerAlignImage(): void;

    /**
     * Right aligns the image.
     *
     * Specifies that image should be right aligned.
     */
    rightAlignImage(): void;

    /**
     * Uses fitting content mode.
     *
     * The image will fit the available space. This content mode is the default.
     */
    applyFittingContentMode(): void;

    /**
     * Uses filling content mode.
     *
     * The image will fill the available space.
     */
    applyFillingContentMode(): void;
}
