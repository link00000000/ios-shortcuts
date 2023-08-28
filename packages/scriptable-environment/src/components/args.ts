import { Image } from "./image";
import { Notification } from "./notification";

/**
 * Arguments passed to the script.
 *
 * Arguments are passed to the script when the script is executed from a share sheet.You can specify the types of arguments a script supports from the script settings.
 */
export declare const args: {

    /**
     * Number of arguments supplied by a share sheet.
     */
    readonly length: number;

    /**
     * All arguments supplied by a share sheet.
     */
    readonly all: any[];

    /**
     * Plain texts supplied by a share sheet or a shortcut action.
     */
    readonly plainTexts: string[];

    /**
     * URLs supplied by a share sheet or a shortcut action.
     */
    readonly urls: string[];

    /**
     * File URLs supplied by a share sheet or a shortcut action.
     */
    readonly fileURLs: string[];

    /**
     * Images supplied by a share sheet or a shortcut action.
     */
    readonly images: Image[];

    /**
     * Query parameters from a URL scheme.
     */
    readonly queryParameters: string;

    /**
     * Arguments passed from a Siri Shortcut.
     */
    readonly siriShortcutArguments: string;

    /**
     * Parameter passed to a Shortcut.
     */
    readonly shortcutParameter: any;

    /**
     * Parameter passed to a widget.
     */
    readonly widgetParameter: any;

    /**
     * Notification being handled by the script.
     */
    readonly notification: Notification;
}
