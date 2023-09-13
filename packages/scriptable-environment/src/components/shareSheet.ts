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
     * Presents a share sheet with an array of items to share. The activities included inthe presented sheet will vary based
     * on the type of item.
     *
     * @param activityItems {any[]} - Items to perform activity on.
     */
    static present(activityItems: any[]): Promise<{string: any}>;
}
