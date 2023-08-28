/**
 * Renders a table.
 *
 * Tables present data in a structured manner. A table contains rows which in turn containscells.
 */
export declare class UITable {

    /**
     * Whether to show separators.
     */
    public showSeparators: boolean;

    /**
     * Constructs a table.     */
    public UITable(): void;

    /**
     * Adds a row.
     *
     * @param {UITableRow} row - Row to add.     */
    public addRow(row: UITableRow)): void;

    /**
     * Removes a row.
     *
     * @param {UITableRow} row - Row to remove.     */
    public removeRow(row: UITableRow)): void;

    /**
     * Removes all rows.     */
    public removeAllRows(): void;

    /**
     * Reloads the table.     */
    public reload(): void;

    /**
     * Presents the table.
     *
     * @param {boolean} fullscreen - Optional. Set to true to present the web view in fullscreen. This only has an effect when used within the app. Defaults to false.
     *
     * @returns {Promise<void>} Promise that is fulfilled when the table is dismissed.
     */
    public present(fullscreen: boolean): Promise;
}
