/**
 * Performs HTTP requests.
 *
 * Performs a URL request and returns the response in an appropriate format.
 */
export declare class Request {
    /**
     * URL to send request to.
     */
    url: string;

    /**
     * HTTP method used for the request.
     *
     * Specifies the HTTP method to use when sending the request. The default is to sendthe request using the GET HTTP method.
     */
    method: string;

    /**
     * HTTP headers to send with the request.
     *
     * Key value pairs where the key is the name of an HTTP header and the value will besent as the value for the HTTP header.
     */
    headers: {string: string}/* TODO: Check type */;

    /**
     * Body to send with the request.
     *
     * The body will be send along the request. While this property can be any value, currentlyonly strings and Data is supported.
     *
     * Be aware that this property is ignored if you convert the request to a multipartrequest using addParameterToMultipart,
     * addFileToMultipart or addFileDataToMultipart.
     */
    body: any;

    /**
     * Timeout interval of the request.
     *
     * If a request remains idle for longer than the timeout interval, the request is consideredtimed out.
     *
     * The timeout interval is measured in seconds and defaults to 60 seconds.
     */
    timeoutInterval: number;

    /**
     * Function called upon redirect.
     *
     * The function determines how redirects should be handled. By default redirects are
     * allowed. When invoked the function is supplied with the request that we're about
     * to redirect to. The function can return the request to continue redirecting or it
     * can return another request to redirect to. Returning null will stop the redirect.
     * Note that onRedirect will only be invoked on the initial request. Consecutive redirectsshould be handled on the initial request.
     */
    onRedirect: fn(Request) -> Request;

    /**
     * Response of the request.
     *
     * The response is not populated until the request has been completed. The responseis an object that looks like the following example.
     * @example
     * {
     *   "url": "https://example.com/",
     *   "statusCode": 200
     *   "mimeType": "application/json",
     *   "textEncodingName": "utf-8",
     *   "headers": {
     *     "Content-Type": "application/json;charset=utf-8",
     *     "Content-Length": "17671"
     *   },
     *   "cookies": [{
     *     "path": "/",
     *     "httpOnly": true,
     *     "domain": "www.example.com",
     *     "sessionOnly": true,
     *     "name": "JSESSIONID",
     *     "value": "7616271F4878CFD05182D20C45F4CEB3"
     *   }]
     * }
     */
    readonly response: {string: any}/* TODO: Check type */;

    /**
     * Allow the request even if it is deemed insecure.
     *
     * By default Scriptable will attempt to reject requests that are deemed insecure.
     *
     * As an example, Scriptable will reject communicating with a server that has an invalid
     * certificate. Such servers might be malicious and may put confidentional informationat risk. By enabling this setting, those requests will be allowed.
     *
     * Enable this setting at your own risk.
     */
    allowInsecureRequest: boolean;

    /**
     * Constructs a request.
     *
     * Constructs a new request that will be sent to the provided URL. The request is not
     * sent until an appropriate load method is called, e.g. loadImage for downloading andinterpreting the response as an image.
     *
     * @param url {string} - URL to send request to.
     */
    constructor(url: string);

    /**
     * Sends request.
     *
     * Call to send the configured request to the specified URL. The raw response is providedwhen the returned promise is fulfilled.
     */
    load(): Promise<Data>;

    /**
     * Sends request and parses response as a string.
     *
     * Call to send the configured request to the specified URL. The response is parsedto a string and provided when the returned promise is fulfilled.
     */
    loadString(): Promise<string>;

    /**
     * Sends request and parses response as JSON.
     *
     * Call to send the configured request to the specified URL. The response is expectedto be a valid JSON string and is parsed into an object.
     */
    loadJSON(): Promise<any>;

    /**
     * Sends request and parses response as an image.
     *
     * Call to send the configured request to the specified URL. The response is expectedto be an image.
     */
    loadImage(): Promise<Image>;

    /**
     * Adds a parameter to a multipart request.
     *
     * Converts the request to a multipart request and adds a parameter with the specified
     * name and value. Be aware that the body property on the request is ignored for multipartrequests as parameters and files added to the request constitutes the body.
     *
     * Calling this function will make the request a multipart request. When the requestis send, the content type will automatically be set to "multipart/form-data".
     *
     * @param name {string} - Name of the parameter.
     * @param value {string} - Value of the parameter.
     */
    addParameterToMultipart(name: string, value: string): void;

    /**
     * Adds a file to a multipart request.
     *
     * Converts the request to a multipart request and adds the file to the request. Be
     * aware that the body property on the request is ignored for multipart requests asparameters and files added to the request constitutes the body.
     *
     * Calling this function will make the request a multipart request. When the requestis send, the content type will automatically be set to "multipart/form-data".
     *
     * @param data {Data} - File data to add.
     * @param mimeType {string} - MIME type of the file to add.
     * @param name {string} - Name of the parameter which holds the file.
     * @param filename {string} - Name of the file.
     */
    addFileDataToMultipart(data: Data, mimeType: string, name: string, filename: string): void;

    /**
     * Adds a file to a multipart request.
     *
     * Converts the request to a multipart request and adds the file to the request. The
     * function will automatically determine the MIME type of the file as well as the filename.
     * Be aware that the body property on the request is ignored for multipart requestsas parameters and files added to the request constitutes the body.
     *
     * Calling this function will make the request a multipart request. When the requestis send, the content type will automatically be set to "multipart/form-data".
     *
     * @param filePath {string} - Path of the file to add.
     * @param name {string} - Name of the parameter which holds the file.
     * @param filename {string} - Optional name of the uploaded file.
     */
    addFileToMultipart(filePath: string, name: string, filename: string): void;

    /**
     * Adds an image to a multipart request.
     *
     * Converts the request to a multipart request and adds the image to the request. The
     * function will automatically determine the MIME type of the file Be aware that the
     * body property on the request is ignored for multipart requests as parameters andfiles added to the request constitutes the body.
     *
     * Calling this function will make the request a multipart request. When the requestis send, the content type will automatically be set to "multipart/form-data".
     *
     * @param image {Image} - Image to add.
     * @param name {string} - Name of the parameter which holds the file.
     * @param filename {string} - Optional name of the uploaded file.
     */
    addImageToMultipart(image: Image, name: string, filename: string): void;
}
