/**
 * Sends a mail.
 *
 * Presents UI for sending a mail.
 */
export declare class Mail {

    /**
     * Recipients of the mail.
     */
    public toRecipients: string[];

    /**
     * Recipients to set CC on the mail.
     */
    public ccRecipients: string[];

    /**
     * Recipients to set BCC on the mail.
     */
    public bccRecipients: string[];

    /**
     * Subject of the mail.
     */
    public subject: string;

    /**
     * Body of the mail.
     */
    public body: string;

    /**
     * Whether body is HTML.
     */
    public isBodyHTML: boolean;

    /**
     * Preferred email address to use in the from field.
     */
    public preferredSendingEmailAddress: string;

    /**
     * Constructs a mail.     */
    public Mail(): void;

    /**
     * Send the mail.
     *
     * @returns {Promise<void>} Promise that is fulfilled when the mail have been sent or saved.
     */
    public send(): Promise;

    /**
     * Adds an image attachment to the mail.
     *
     * @param {Image} image - Image to add to the mail.     */
    public addImageAttachment(image: Image)): void;

    /**
     * Adds a file attachment to the mail.
     *
     * @param {string} filePath - Path of file to add to the mail.     */
    public addFileAttachment(filePath: string)): void;

    /**
     * Adds a data attachment to the mail.
     *
     * @param {Data} data - Data representation of file to add to the mail.
     * @param {string} mimeType - MIME type of file represented by the data.
     * @param {string} filename - Name of the file represented by the data.     */
    public addDataAttachment(data: Data, mimeType: string, filename: string)): void;
}
