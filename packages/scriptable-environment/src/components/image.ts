/**
 * Manages image data.
 *
 * Images objects contains image data. APIs in Scriptable that work with images, eitherby taking an image as input or returning an image, will use this the Image type.
 */
export declare class Image {

    /**
     * Size of the image in pixels.
     */
    public size: Size;

    /**
     * Creates an image from file.
     *
     * @param {string} filePath - File path to read image from.
     *
     * @returns {Image} The read image or null if the image could not be read.
     */
    public fromFile(filePath: string): Image;

    /**
     * Creates an image from raw data.
     *
     * @param {Data} data - Data to read image from.
     *
     * @returns {Image} The read image or null if the image could not be read.
     */
    public fromData(data: Data): Image;
}