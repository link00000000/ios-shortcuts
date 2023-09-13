/**
 * Arguments passed to the script.
 *
 * Arguments are passed to the script when the script is executed from a share sheet.You can specify the types of arguments a script supports from the script settings.
 */
export var args: {
    /**
     * Number of arguments supplied by a share sheet.
     *
     * @deprecated
     * Deprecated in version 1.3. Instead of relying on this property, take the length ofthe array containing the data type you are interested in.
     *
     * The number of arguments passed to the script from the share seeht.
     */
    readonly length: number;

    /**
     * All arguments supplied by a share sheet.
     *
     * @deprecated
     * Deprecated in version 1.3. Instead of relying on this property, access the arraycontaining the data type you are interested in.
     *
     * All arguments supplied by the share sheet.
     */
    readonly all: any[];

    /**
     * Plain texts supplied by a share sheet or a shortcut action.
     *
     * All plain texts passed to the script from a share sheet or a shortcut action.
     *
     * If you have enabled "Text" as a share sheet input from the script settings, the scriptcan be run from any share sheet throughout the system that shares plain text.
     */
    readonly plainTexts: string[];

    /**
     * URLs supplied by a share sheet or a shortcut action.
     *
     * All URLs passed to the script from a share sheet or a shortcut action.
     *
     * If you have enabled "URLs" as a share sheet input from the script settings, the scriptcan be run from any share sheet throughout the system that shares URLs.
     */
    readonly urls: string[];

    /**
     * File URLs supplied by a share sheet or a shortcut action.
     *
     * All file URLs passed to the script from a share sheet or a shortcut action.
     *
     * If you have enabled "File URLs" as a share sheet input from the script settings,
     * the script can be run from any share sheet throughout the system that shares URLspointing to a file.
     *
     * When large files are passed from a share sheet or a shortcut action, the system may
     * terminate the process due to memory constraints. In that case, you should enable"Run in App" in the script settings or in the shortcut.
     */
    readonly fileURLs: string[];

    /**
     * Images supplied by a share sheet or a shortcut action.
     *
     * All images passed to the script from a share sheet or a shortcut action.
     *
     * If you have enabled "Images" as a share sheet input from the script settings, thescript can be run from any share sheet throughout the system that shares images.
     *
     * When large images are passed from a share sheet or a shortcut action, the system
     * may terminate the process due to memory constraints. In that case, you should enable"Run in App" in the script settings or in the shortcut.
     */
    readonly images: Image[];

    /**
     * Query parameters from a URL scheme.
     *
     * Query parameters are supplied to a script when running it from a URL scheme. Seethe documentation on Scriptables URL schems for more information.
     */
    readonly queryParameters: {string: string}/* TODO: Check type */;

    /**
     * Arguments passed from a Siri Shortcut.
     *
     * @deprecated
     * Deprecated in version 1.4. Instead of using args.shortcutArguments, pass an input
     * parameter to the shortcut action using the Shortcuts app and read the parameter usingargs.shortcutParameter.
     *
     * When creating a Siri Shortcut in Scriptable, you can define arguments that are passed
     * to the script when the shortcut is run. This lets you differentiate the behaviorof a script based on some predefiend arguments.
     *
     * For example, a script that checks the wather may expect an argument with the key
     * "city". When creating a Siri Shortcut for the script, the argument should be passedwith the value containing the name of the city to check the weather for.
     */
    readonly siriShortcutArguments: {string: string}/* TODO: Check type */;

    /**
     * Parameter passed to a Shortcut.
     *
     * When creating a shortcut using the Shortcuts app, you can pass an input parameterthat can be read in your script using args.shortcutParameter.
     *
     * This parameter can be any text, list, dictionary or file and will be exposed in your
     * script using the appropriate type. When passing a file, the "Run Script" action will
     * attempt to read the file as JSON or a plain text. If the file cannot be read as JSONor a plain text, a path to the file will be passed as the input parameter.
     */
    readonly shortcutParameter: any;

    /**
     * Parameter passed to a widget.
     *
     * When creating a widget on the Home screen, you can define a parameter that can beread in your script using args.widgetParameter.
     *
     * The parameter can be used to differentiate the behavior of multiple widgets.
     */
    readonly widgetParameter: any;

    /**
     * Notification being handled by the script.
     *
     * The notification that a script is being run in or the application was opened from.
     *
     * The notification contains all information that was set when the notification was
     * originally scheduled, including the userInfo property which can be used to containcustom data that might be relevant when running the script.
     */
    readonly notification: Notification;
}
