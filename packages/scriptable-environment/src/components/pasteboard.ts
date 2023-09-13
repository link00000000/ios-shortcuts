/**
 * Copy and paste strings or images.
 *
 * Copy and paste strings and images to and from the pasteboard.
 */
export var Pasteboard: {
    /**
     * Copies a string to the pasteboard.
     *
     * @param string {string} - The string to copy to the pasteboard.
     */
    static copy(string: string): void;

    /**
     * Pastes a string from the pasteboard.
     */
    static paste(): string;

    /**
     * Copies a string to the pasteboard.
     *
     * @param string {string} - The string to copy to the pasteboard.
     */
    static copyString(string: string): void;

    /**
     * Pastes a string from the pasteboard.
     */
    static pasteString(): string;

    /**
     * Copies an image to the pasteboard.
     *
     * @param image {Image} - The image to copy to the pasteboard.
     */
    static copyImage(image: Image): void;

    /**
     * Pastes an image from the pasteboard.
     */
    static pasteImage(): Image;
}
