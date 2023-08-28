/**
 * Row in a UITable.
 *
 * Rows can be added to an instance of UITable. A row is shown vertically
 * 
 * in a UITable in the order they are added to the table. Rows contain cells which areshown horizontally in the order they are added to the row.
 */
export declare class UITableRow {

    /**
     * Spacing between cells.
     */
    public cellSpacing: number;

    /**
     * Height of the row.
     */
    public height: number;

    /**
     * Whether the cell is a header.
     */
    public isHeader: boolean;

    /**
     * Whether to dismiss the table when the row is selected.
     */
    public dismissOnSelect: boolean;

    /**
     * Called when the row is selected.     */
    public fn(): void;

    /**
     * Background color.
     */
    public backgroundColor: Color;

    /**
     * Constructs a row.     */
    public UITableRow(): void;

    /**
     * Adds a cell.
     *
     * @param {UITableCell} cell - Cell to add to the row.     */
    public addCell(cell: UITableCell)): void;

    /**
     * Adds a text cell.
     *
     * @param {string} title - Optional title to show in the cell.
     * @param {string} subtitle - Optional subtitle shown below the title in the cell.
     *
     * @returns {UITableCell} Constructed cell.
     */
    public addText(title: string, subtitle: string): UITableCell;

    /**
     * Adds an image cell.
     *
     * @param {Image} image - Image to show in the cell.
     *
     * @returns {UITableCell} Cosntructed cell.
     */
    public addImage(image: Image): UITableCell;

    /**
     * Adds an image cell.
     *
     * @param {string} url - URL to image.
     *
     * @returns {UITableCell} Cosntructed cell.
     */
    public addImageAtURL(url: string): UITableCell;

    /**
     * Adds a button cell.
     *
     * @param {string} title - Title of the button.
     *
     * @returns {UITableCell} Cosntructed cell.
     */
    public addButton(title: string): UITableCell;
}
