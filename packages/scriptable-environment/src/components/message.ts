/**
 * Sends a message.
 *
 * Presents UI for sending a message.
 */
export declare class Message {

    /**
     * Recipients of the message.
     */
    public recipients: string[];

    /**
     * Body of the message.
     */
    public body: string;

    /**
     * Constructs a message.     */
    public Message(): void;

    /**
     * Send the message.
     *
     * @returns {Promise<void>} Promise that is fulfilled when the message have been sent.
     */
    public send(): Promise;

    /**
     * Adds an image attachment to the message.
     *
     * @param {Image} image - Image to add to the message.     */
    public addImageAttachment(image: Image)): void;

    /**
     * Adds a file attachment to the message.
     *
     * @param {string} filePath - Path of file to add to the message.     */
    public addFileAttachment(filePath: string)): void;

    /**
     * Adds a data attachment to the message.
     *
     * @param {Data} data - Data representation of file to add to the message.
     * @param {string} uti - UTI of file represented by the data.
     * @param {string} filename - Name of the file represented by the data.     */
    public addDataAttachment(data: Data, uti: string, filename: string)): void;
}
