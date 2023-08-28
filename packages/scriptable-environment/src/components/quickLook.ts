/**
 * Presents an item.
 *
 * Use the quick look to present a file, an image or text string. The quick look willtry to choose the best suited presentation of the item.
 */
export declare class QuickLook {

    /**
     * Presents the item.
     *
     * @param {any} item - Item to be present.
     * @param {boolean} fullscreen - Optional. Set to true to present the item in fullscreen. This only has an effect when used within the app. Defaults to false.
     *
     * @returns {Promise<void>} Promise that is fulfilled when the quick look is dismissed.
     */
    public present(item: any, fullscreen: boolean): Promise;
}