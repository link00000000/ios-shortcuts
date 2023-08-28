/**
 * Performs HTTP requests.
 *
 * Performs a URL request and returns the response in an appropriate format.
 */
export declare class Request {

    /**
     * URL to send request to.
     */
    public url: string;

    /**
     * HTTP method used for the request.
     */
    public method: string;

    /**
     * HTTP headers to send with the request.
     */
    public headers: {string;

    /**
     * Body to send with the request.
     */
    public body: any;

    /**
     * Timeout interval of the request.
     */
    public timeoutInterval: number;

    /**
     * Function called upon redirect.     */
    public fn(Request) -> Request: void): void;

    /**
     * Response of the request.
     */
    public response: {string;

    /**
     * Allow the request even if it is deemed insecure.
     */
    public allowInsecureRequest: boolean;

    /**
     * Constructs a request.
     *
     * @param {string} url - URL to send request to.     */
    public Request(url: string)): void;

    /**
     * Sends request.
     *
     * @returns {Promise<Data>} Promise that provides the response as data when fulfilled.
     */
    public load(): Promise<Data>;

    /**
     * Sends request and parses response as a string.
     *
     * @returns {Promise<string>} Promise that provides the response as a string when fulfilled.
     */
    public loadString(): Promise<string>;

    /**
     * Sends request and parses response as JSON.
     *
     * @returns {Promise<any>} Promise that provides the response as an object when fulfilled.
     */
    public loadJSON(): Promise<any>;

    /**
     * Sends request and parses response as an image.
     *
     * @returns {Promise<Image>} Promise that provides the response as an image.
     */
    public loadImage(): Promise<Image>;

    /**
     * Adds a parameter to a multipart request.
     *
     * @param {string} name - Name of the parameter.
     * @param {string} value - Value of the parameter.     */
    public addParameterToMultipart(name: string, value: string)): void;

    /**
     * Adds a file to a multipart request.
     *
     * @param {Data} data - File data to add.
     * @param {string} mimeType - MIME type of the file to add.
     * @param {string} name - Name of the parameter which holds the file.
     * @param {string} filename - Name of the file.     */
    public addFileDataToMultipart(data: Data, mimeType: string, name: string, filename: string)): void;

    /**
     * Adds a file to a multipart request.
     *
     * @param {string} filePath - Path of the file to add.
     * @param {string} name - Name of the parameter which holds the file.
     * @param {string} filename - Optional name of the uploaded file.     */
    public addFileToMultipart(filePath: string, name: string, filename: string)): void;

    /**
     * Adds an image to a multipart request.
     *
     * @param {Image} image - Image to add.
     * @param {string} name - Name of the parameter which holds the file.
     * @param {string} filename - Optional name of the uploaded file.     */
    public addImageToMultipart(image: Image, name: string, filename: string)): void;
}
