/**
 * Cell in a UITableRow.
 *
 * Cells are shown horizontally in a UITableRow which in turn is shown
 * vertically in a UITable. Cells have content, e.g. a text or an image.
 */
export declare class UITableCell {

    /**
     * Relative width of the cell.
     */
    public widthWeight: number;

    /**
     * Called when the button is tapped.     */
    public fn(): void;

    /**
     * Whether to dismiss the table when the button is tapped.
     */
    public dismissOnTap: boolean;

    /**
     * Color of the title.
     */
    public titleColor: Color;

    /**
     * Color of the subtitle.
     */
    public subtitleColor: Color;

    /**
     * Font of the title.
     */
    public titleFont: Font;

    /**
     * Font of the subtitle.
     */
    public subtitleFont: Font;

    /**
     * Constructs a text cell.
     *
     * @param {string} title - Optional title to show in the cell.
     * @param {string} subtitle - Optional subtitle shown below the title.
     *
     * @returns {UITableCell} Constructed cell.
     */
    public text(title: string, subtitle: string): UITableCell;

    /**
     * Constructs an image cell.
     *
     * @param {Image} image - Image to show in the cell.
     *
     * @returns {UITableCell} Constructed cell.
     */
    public image(image: Image): UITableCell;

    /**
     * Constructs an image cell.
     *
     * @param {string} url - URL to image.
     *
     * @returns {UITableCell} Constructed cell.
     */
    public imageAtURL(url: string): UITableCell;

    /**
     * Constructs a button cell.
     *
     * @param {string} title - Title of the button.
     *
     * @returns {UITableCell} Constructed cell.
     */
    public button(title: string): UITableCell;

    /**
     * Left aligns content.     */
    public leftAligned(): void;

    /**
     * Center aligns content.     */
    public centerAligned(): void;

    /**
     * Right aligns content.     */
    public rightAligned(): void;
}
