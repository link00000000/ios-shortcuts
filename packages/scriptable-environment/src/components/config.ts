/**
 * Configuration the script runs with.
 *
 * Contains information about the configuration the script is currently being run under.
 */
export declare var config: {
    /**
     * Whether the script is running in the app.
     */
    readonly runsInApp: boolean;

    /**
     * Whether the script is running in the action extension.
     */
    readonly runsInActionExtension: boolean;

    /**
     * Whether the script is running with Siri.
     */
    readonly runsWithSiri: boolean;

    /**
     * Whether the script is running in a widget.
     */
    readonly runsInWidget: boolean;

    /**
     * Whether the script is running in a notification.
     */
    readonly runsInNotification: boolean;

    /**
     * Whether the script was run from the home screen. You can add a script to the homescreen from the script settings.
     */
    readonly runsFromHomeScreen: boolean;

    /**
     * The size of the widget the script is running in.
     *
     * Possible values are: small, medium, large extraLarge and null. The value is nullwhen the script is not running in a widget.
     */
    readonly widgetFamily: string;
}
