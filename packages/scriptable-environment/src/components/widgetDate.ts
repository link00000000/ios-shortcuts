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
    public date: Date;

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

    /**
     * Display time component of the date.     */
    public applyTimeStyle(): void;

    /**
     * Display entire date.     */
    public applyDateStyle(): void;

    /**
     * Display date as relative to now.     */
    public applyRelativeStyle(): void;

    /**
     * Display date as offset from now.     */
    public applyOffsetStyle(): void;

    /**
     * Display date as timer counting from now.     */
    public applyTimerStyle(): void;
}
