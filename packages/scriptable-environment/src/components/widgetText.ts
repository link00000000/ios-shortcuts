/**
 * Text element shown in a widget.
 *
 * A text shown in a widget. You do not create instances of this element directly. Insteadyou should call addText() on an instance of a ListWidget.
 */
export declare class WidgetText {

    /**
     * Text to show in a widget.
     */
    public text: string;

    /**
     * Color of the text.
     */
    public textColor: Color;

    /**
     * Font and text size of the text.
     */
    public font: Font;

    /**
     * Opacity of the text.
     */
    public textOpacity: number;

    /**
     * Maximum number of lines.
     */
    public lineLimit: number;

    /**
     * Minimum amount the text scales down to.
     */
    public minimumScaleFactor: number;

    /**
     * Color of the shadow.
     */
    public shadowColor: Color;

    /**
     * Size of the shadow.
     */
    public shadowRadius: number;

    /**
     * Offset of the shadow.
     */
    public shadowOffset: Point;

    /**
     * URL to open.
     */
    public url: string;

    /**
     * Left aligns the text.     */
    public leftAlignText(): void;

    /**
     * Center aligns the text.     */
    public centerAlignText(): void;

    /**
     * Right aligns the text.     */
    public rightAlignText(): void;
}
