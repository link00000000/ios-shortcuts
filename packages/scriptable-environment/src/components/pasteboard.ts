/**
 * Copy and paste strings or images.
 *
 * Copy and paste strings and images to and from the pasteboard.
 */
export declare class Pasteboard {

    /**
     * Copies a string to the pasteboard.
     *
     * @param {string} string - The string to copy to the pasteboard.     */
    public copy(string: string)): void;

    /**
     * Pastes a string from the pasteboard.
     *
     * @returns {string} String in the pasteboard or null if no string is in the pasteboard.
     */
    public paste(): string;

    /**
     * Copies a string to the pasteboard.
     *
     * @param {string} string - The string to copy to the pasteboard.     */
    public copyString(string: string)): void;

    /**
     * Pastes a string from the pasteboard.
     *
     * @returns {string} String in the pasteboard or null if no string is in the pasteboard.
     */
    public pasteString(): string;

    /**
     * Copies an image to the pasteboard.
     *
     * @param {Image} image - The image to copy to the pasteboard.     */
    public copyImage(image: Image)): void;

    /**
     * Pastes an image from the pasteboard.
     *
     * @returns {Image} Image in the pasteboard or null if no image is in the pasteboard.
     */
    public pasteImage(): Image;
}
