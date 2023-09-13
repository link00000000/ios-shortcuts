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
     *
     * Specifies the horizontal spacing between cells in the row.
     */
    cellSpacing: number;

    /**
     * Height of the row.
     *
     * The height of the row defaults to 44.
     */
    height: number;

    /**
     * Whether the cell is a header.
     *
     * Headers are highlighted cells that helps users understand context. Defaults to false.
     */
    isHeader: boolean;

    /**
     * Whether to dismiss the table when the row is selected.
     *
     * This property will only have an effect if the row is selectable, i.e. onSelect hasa value. Otherwise it is ignored.
     *
     * Defaults to true.
     */
    dismissOnSelect: boolean;

    /**
     * Called when the row is selected.
     *
     * Called when the row is selected when the table is presented. If this has no value,the row cannot be selected. Defaults to null.
     *
     * Rows cannot be tapped when the tables is presented in Siri.
     */
    onSelect: fn();

    /**
     * Background color.
     */
    backgroundColor: Color;

    /**
     * Constructs a row.
     *
     * Rows are shown vertically in a UITable. A row contains cells which are displayedhorizontally.
     */
    constructor();

    /**
     * Adds a cell.
     *
     * Adds a cell to the row. Note that cells are shown in the order they are added tothe row.
     *
     * @param cell {UITableCell} - Cell to add to the row.
     */
    addCell(cell: UITableCell): void;

    /**
     * Adds a text cell.
     *
     * Constructs a new cell containing the specified string and adds it to the row.
     *
     * @param title {string} - Optional title to show in the cell.
     * @param subtitle {string} - Optional subtitle shown below the title in the cell.
     */
    addText(title: string, subtitle: string): UITableCell;

    /**
     * Adds an image cell.
     *
     * Constructs a new cell containing the specified image and adds it to the row.
     *
     * @param image {Image} - Image to show in the cell.
     */
    addImage(image: Image): UITableCell;

    /**
     * Adds an image cell.
     *
     * Constructs a new cell that loads the image at the specified url and adds the cellto the row.
     *
     * @param url {string} - URL to image.
     */
    addImageAtURL(url: string): UITableCell;

    /**
     * Adds a button cell.
     *
     * Constructs a new cell that contains a button. Set the onTap property to specify anaction to performed when the button is tapped.
     *
     * @param title {string} - Title of the button.
     */
    addButton(title: string): UITableCell;
}
