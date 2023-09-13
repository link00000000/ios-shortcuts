/**
 * Raw data representation.
 *
 * Raw data representation of strings, files and images.
 */
export var Data: {
    /**
     * Creates data from string.
     *
     * The provided string is assumed to be UTF8 encoded. If the string is not UTF8 encoded,the function will return null.
     *
     * @param string {string} - String to create data from.
     */
    static fromString(string: string): Data;

    /**
     * Reads data from file path.
     *
     * Reads the raw data of the file at the specified file path.
     *
     * @param filePath {string} - Path of file to read data from.
     */
    static fromFile(filePath: string): Data;

    /**
     * Creates data from base64 encoded string.
     *
     * The supplied string must be base64 encoded otherwise the function will return null.
     *
     * @param base64String {string} - Base64 encoded string to create data from.
     */
    static fromBase64String(base64String: string): Data;

    /**
     * Creates data from JPEG image.
     *
     * @param image {Image} - JPEG image to convert to data.
     */
    static fromJPEG(image: Image): Data;

    /**
     * Creates data from PNG image.
     *
     * @param image {Image} - PNG image to convert to data.
     */
    static fromPNG(image: Image): Data;

    /**
     * Creates a string from the data.
     *
     * The data is assumed to represent a UTF8 encoded string. If the string is not UTF8encoded string, the function will return null.
     */
    toRawString(): string;

    /**
     * Creates a base64 encoded string.
     *
     * Creates a base64 encoded string from the data.
     */
    toBase64String(): string;

    /**
     * Gets bytes from data.
     */
    getBytes(): [number];
}
