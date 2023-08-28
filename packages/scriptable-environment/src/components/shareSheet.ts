/**
 * Offers standard activities to perform on items.
 *
 * The activity picker presents activities that can be performed on a set of items.
 * For example sending an item via an email or SMS, saving an item to disk or openingan item in a third party app.
 * Available activites vary depending on the provided items.
 */
export declare class ShareSheet {

    /**
     * Presents the activity picker.
     *
     * @param {any[]} activityItems - Items to perform activity on.
     *
     * @returns {Promise<{string: any}>} Promise carrying a value that tells which activity that was performed, if any. The promise is fulfilled when the sheet is dismissed.
     */
    public present(activityItems: any[]): Promise<{string: any}>;
}