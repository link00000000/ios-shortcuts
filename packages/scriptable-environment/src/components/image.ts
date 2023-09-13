import { Data } from "./data";
import { Size } from "./size";

/**
 * Manages image data.
 *
 * Images objects contains image data. APIs in Scriptable that work with images, eitherby taking an image as input or returning an image, will use this the Image type.
 */
export declare class Image {
    /**
     * Size of the image in pixels.
     */
    readonly size: Size;

    /**
     * Creates an image from file.
     *
     * Loads an image from the specified file path. If the image could not be read, thefunction will return null.
     *
     * @param filePath {string} - File path to read image from.
     */
    static fromFile(filePath: string): Image;

    /**
     * Creates an image from raw data.
     *
     * Loads an image from the raw data. If the image could not be read, the function willreturn null.
     *
     * @param data {Data} - Data to read image from.
     */
    static fromData(data: Data): Image;
}
