/**
 * Image element shown in widget.
 *
 * An image shown in a widget. You do not create instances of this element directly.Instead you should call addImage() on an instance of a ListWidget.
 */
export declare class WidgetImage {

    /**
     * Image to show in widget.
     */
    public image: Image;

    /**
     * Whether the image is resizable.
     */
    public resizable: boolean;

    /**
     * Size of the image in the widget.
     */
    public imageSize: Size;

    /**
     * Opacity when shown in widget.
     */
    public imageOpacity: number;

    /**
     * Radius of the corners.
     */
    public cornerRadius: number;

    /**
     * Border width.
     */
    public borderWidth: number;

    /**
     * Border color.
     */
    public borderColor: Color;

    /**
     * Shape the image relative to its container.
     */
    public containerRelativeShape: boolean;

    /**
     * Tint color of the image.
     */
    public tintColor: Color;

    /**
     * URL to open.
     */
    public url: string;

    /**
     * Left aligns the image.     */
    public leftAlignImage(): void;

    /**
     * Center aligns the image.     */
    public centerAlignImage(): void;

    /**
     * Right aligns the image.     */
    public rightAlignImage(): void;

    /**
     * Uses fitting content mode.     */
    public applyFittingContentMode(): void;

    /**
     * Uses filling content mode.     */
    public applyFillingContentMode(): void;
}
