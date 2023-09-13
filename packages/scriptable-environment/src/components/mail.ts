import { Data } from "./data";
import { Image } from "./image";

/**
 * Sends a mail.
 *
 * Presents UI for sending a mail.
 */
export declare class Mail {
    /**
     * Recipients of the mail.
     *
     * Array of recipients to send the mail to. Elements in the array should be e-mail addresses.You will have a chance to modify this before the mail is sent.
     */
    toRecipients: string[];

    /**
     * Recipients to set CC on the mail.
     *
     * Array of recipients to set as CC on the mail. Elements in the array should be e-mailaddresses. You will have a chance to modify this before the mail is sent.
     */
    ccRecipients: string[];

    /**
     * Recipients to set BCC on the mail.
     *
     * Array of recipients to set as BCC on the mail. Elements in the array should be e-mailaddresses. You will have a chance to modify this before the mail is sent.
     */
    bccRecipients: string[];

    /**
     * Subject of the mail.
     *
     * Subject of the mail to send. You will have a chance to modify this before the mailis sent.
     */
    subject: string;

    /**
     * Body of the mail.
     *
     * Body of the mail to send. You will have a chance to modify this before the mail issent.
     */
    body: string;

    /**
     * Whether body is HTML.
     *
     * Set to true if the body of the mail is HTML. Defaults to false.
     */
    isBodyHTML: boolean;

    /**
     * Preferred email address to use in the from field.
     *
     * Sets the preferred email addressed to use when sending the mail. If no account withthe preferred email address is set up, the default email address is used.
     */
    preferredSendingEmailAddress: string;

    /**
     * Constructs a mail.
     */
    constructor();

    /**
     * Send the mail.
     *
     * Presents a screen from which the mail can be sent. The mail will not be sent untilyou have confirmed it from the presented screen.
     */
    send(): Promise<void>;

    /**
     * Adds an image attachment to the mail.
     *
     * @param image {Image} - Image to add to the mail.
     */
    addImageAttachment(image: Image): void;

    /**
     * Adds a file attachment to the mail.
     *
     * @param filePath {string} - Path of file to add to the mail.
     */
    addFileAttachment(filePath: string): void;

    /**
     * Adds a data attachment to the mail.
     *
     * When adding a data attachment to the mail, you are responsible for providing a valid
     * MIME type and filename. It is advised to use addImageAttachment and addFileAttachmentwhenever possible.
     *
     * @param data {Data} - Data representation of file to add to the mail.
     * @param mimeType {string} - MIME type of file represented by the data.
     * @param filename {string} - Name of the file represented by the data.
     */
    addDataAttachment(data: Data, mimeType: string, filename: string): void;
}
