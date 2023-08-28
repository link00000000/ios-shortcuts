import { Image } from "./image";

/**
 * Raw data representation.
 *
 * Raw data representation of strings, files and images.
 */
export declare class Data {

    /**
     * Creates data from string.
     *
     * @param {string} string - String to create data from.
     *
     * @returns {Data} Data representation of string.
     */
    public static fromString(string: string): Data;

    /**
     * Reads data from file path.
     *
     * @param {string} filePath - Path of file to read data from.
     *
     * @returns {Data} Data representation of file.
     */
    public static fromFile(filePath: string): Data;

    /**
     * Creates data from base64 encoded string.
     *
     * @param {string} base64String - Base64 encoded string to create data from.
     *
     * @returns {Data} Data representation of string.
     */
    public static fromBase64String(base64String: string): Data;

    /**
     * Creates data from JPEG image.
     *
     * @param {Image} image - JPEG image to convert to data.
     *
     * @returns {Data} Data representation of image.
     */
    public static fromJPEG(image: Image): Data;

    /**
     * Creates data from PNG image.
     *
     * @param {Image} image - PNG image to convert to data.
     *
     * @returns {Data} Data representation of image.
     */
    public static fromPNG(image: Image): Data;

    /**
     * Creates a string from the data.
     *
     * @returns {string} Data converted to string.
     */
    public toRawString(): string;

    /**
     * Creates a base64 encoded string.
     *
     * @returns {string} Base64 encoded string.
     */
    public toBase64String(): string;

    /**
     * Gets bytes from data.
     *
     * @returns {number[]} Array of bytes.
     */
    public getBytes(): number[];
}
