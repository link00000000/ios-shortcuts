import { Data } from "./data";
import { Image } from "./image";

/**
 * Sends a message.
 *
 * Presents UI for sending a message.
 */
export declare class Message {
    /**
     * Recipients of the message.
     *
     * Array of recipients to send the message to. Elements in the array should be phonenumbers. You will have a chance to modify this before the message is sent.
     */
    recipients: string[];

    /**
     * Body of the message.
     *
     * Body of the message to send. You will have a chance to modify this before the messageis sent.
     */
    body: string;

    /**
     * Constructs a message.
     *
     * Constructs a message to be sent either as a text message or an iMessage.
     */
    constructor();

    /**
     * Send the message.
     *
     * Presents a screen from which the message can be sent. The message will not be sentuntil you have confirmed it from the presented screen.
     */
    send(): Promise<void>;

    /**
     * Adds an image attachment to the message.
     *
     * @param image {Image} - Image to add to the message.
     */
    addImageAttachment(image: Image): void;

    /**
     * Adds a file attachment to the message.
     *
     * @param filePath {string} - Path of file to add to the message.
     */
    addFileAttachment(filePath: string): void;

    /**
     * Adds a data attachment to the message.
     *
     * When adding a data attachment to the message, you are responsible for providing a
     * valid Uniform Type Identifier and filename. It is advised to use addImageAttachmentand addFileAttachment whenever possible.
     *
     * @param data {Data} - Data representation of file to add to the message.
     * @param uti {string} - UTI of file represented by the data.
     * @param filename {string} - Name of the file represented by the data.
     */
    addDataAttachment(data: Data, uti: string, filename: string): void;
}
