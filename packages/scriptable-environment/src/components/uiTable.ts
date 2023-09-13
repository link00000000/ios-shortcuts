/**
 * Renders a table.
 *
 * Tables present data in a structured manner. A table contains rows which in turn containscells.
 */
export declare class UITable {
    /**
     * Whether to show separators.
     *
     * Whether to show separators between rows. Defaults to false.
     */
    showSeparators: boolean;

    /**
     * Constructs a table.
     *
     * Use a table to present data in a structured manner.
     */
    constructor();

    /**
     * Adds a row.
     *
     * Adds a row to the table. Rows are shown vertically in the table view, i.e. from thetop and down. Rows are rendered in the order they are added.
     *
     * @param row {UITableRow} - Row to add.
     */
    addRow(row: UITableRow): void;

    /**
     * Removes a row.
     *
     * Removes a row from the table.
     *
     * @param row {UITableRow} - Row to remove.
     */
    removeRow(row: UITableRow): void;

    /**
     * Removes all rows.
     *
     * Removes all rows from the table. If the table is presented, you must call the reloadfunction in order for the changes to be reflected visually.
     */
    removeAllRows(): void;

    /**
     * Reloads the table.
     *
     * If you add or remove rows while a table view is presented, you must reload the tablein order for the changes to take effect.
     */
    reload(): void;

    /**
     * Presents the table.
     *
     * @param fullscreen {boolean} - Optional. Set to true to present the web view in fullscreen.This only has an effect when used within the app. Defaults to false.
     */
    present(fullscreen: boolean): Promise;
}
