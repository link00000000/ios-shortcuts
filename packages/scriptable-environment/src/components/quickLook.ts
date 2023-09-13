/**
 * Presents an item.
 *
 * Use the quick look to present a file, an image or text string. The quick look willtry to choose the best suited presentation of the item.
 */
export var QuickLook: {
    /**
     * Presents the item.
     *
     * Chooses the best suited presentation of the item and performs
     * the presentation if possible.
     *
     * @param item {any} - Item to be present.
     * @param fullscreen {boolean} - Optional. Set to true to present the item in fullscreen.This only has an effect when used within the app. Defaults to false.
     */
    static present(item: any, fullscreen: boolean): Promise;
}
