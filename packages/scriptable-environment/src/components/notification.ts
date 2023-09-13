/**
 * Schedules and manages notifications.
 *
 * Notifications are scheduled for delivery at some point in the future. A notificationmay be delivered even when Scriptable is not running.
 */
export declare class Notification {
    /**
     * Identifier of the notification.
     *
     * To reschedule a notification, use the identifier of an existing notification.
     */
    identifier: string;

    /**
     * Title of the notification.
     */
    title: string;

    /**
     * Subtitle of the notification.
     */
    subtitle: string;

    /**
     * Body of the notification.
     */
    body: string;

    /**
     * Preferred height of the notification.
     *
     * By default Scriptable attempts to determine an appropriate height for your notification.
     * If you want to override the default behavior, you can specify a preferred content
     * height. The preferred content height is only used when running a script inside the
     * notification, i.e. when scriptName is not null. iOS may limit the height of the notificationin which case the preferred content height is not guaranteed to be respected.
     */
    preferredContentHeight: number;

    /**
     * Number to display in the app icon's badge.
     *
     * When the number is zero, no badge is displayed. When the number is greater than zero,
     * the number is displayed in the app icon's badge. Setting the value to null, willleave the badge unchanged. The default value is null.
     */
    badge: number;

    /**
     * Identifier for grouping the notification.
     *
     * Notifications are grouped by the identifier on the Home screen and in the NotificationCenter.
     */
    threadIdentifier: string;

    /**
     * Custom information.
     *
     * Store any custom information for the notification. This can be accessed from theNotification.opened property when a script is run from a notification.
     */
    userInfo: {string: any}/* TODO: Check type */;

    /**
     * Sound of the notification.
     *
     * Set to null if you do not want any sound. Set to one of the following values if youwant a sound.
     *
     * By default the notification is delivered with no sound.
     */
    sound: string;

    /**
     * URL to open when notification is tapped.
     *
     * The Scriptable application will open the URL when the notification is tapped. This
     * can be a URL that uses Scriptables URL scheme, the URL scheme of another applicationor a website URL.
     */
    openURL: string;

    /**
     * Delivery date of the notification.
     *
     * If the notification has already been delivered, for example because it was fetched
     * using Notification.allDelivered(), the deliveryDate will be populated. Otherwiseit will be null.
     *
     * The property cannot be set. In order to specify a future delivery date for a notification,
     * see the setTriggerDate function. For recurring notifications, see the setDailyTriggerand setWeeklyTrigger functions.
     */
    readonly deliveryDate: Date;

    /**
     * Next trigger date of the notification.
     *
     * The next trigger date is the point in time where the next notification will be delivered.
     *
     * The property cannot be set. In order to specify a future delivery date for a notification,
     * see the setTriggerDate function. For recurring notifications, see the setDailyTriggerand setWeeklyTrigger functions.
     */
    readonly nextTriggerDate: Date;

    /**
     * Name of script to run in rich notification.
     *
     * When notification is force touched or long pressed, Scriptable can run a script inside
     * the notification without opening the app. Set the scriptName to a name of an existingscript to run it inside the notification.
     */
    scriptName: string;

    /**
     * Actions added to the notification.
     *
     * An array of objects on the following form:
     *
     * To add a notification, use Notification.addAction.
     * @example
     * {
     *   "title": "Open Website",
     *   "url": "https://scriptable.app"
     * }
     */
    readonly actions: {string: string}/* TODO: Check type */;

    /**
     * Notification a script is running in.
     *
     * @deprecated
     * Deprecated in version 1.3. Use args.notification instead.
     *
     * The notification that a script is being run in or the application was opened from.
     *
     * The notification contains all information that was set when the notification was
     * originally scheduled, including the userInfo property which can be used to containcustom data that might be relevant when running the script.
     */
    static current(): Notification;

    /**
     * Constructs a notification.
     */
    constructor();

    /**
     * Schedules the notification.
     *
     * When a new notification is constructed, it must be scheduled, otherwise it will not
     * be delivered. If an existing notification is modified, it must also be scheduledagain for the changes to take effect.
     */
    schedule(): Promise<void>;

    /**
     * Removes the notification.
     *
     * Removes all future triggers of the notification.
     */
    remove(): Promise<void>;

    /**
     * Sets the notification to be triggered on a date and time.
     *
     * @param date {Date} - Date and time to trigger the notification on.
     */
    setTriggerDate(date: Date): void;

    /**
     * Sets the notification to be triggered daily.
     *
     * Sets the notification to be triggered on a specific time of the day. When the notification
     * repeats, it will be sent at the same time on all future days. If the notificationis not repating it will be sent on the next occurrence of the specified time.
     *
     * @param hour {number} - Hour of the day to trigger the notification.
     * @param minute {number} - Minute of the day to trigger the notification.
     * @param repeats {boolean} - If true the notification will be sent daily on the specifiedtime, otherwise it will only be sent once. Defaults to false.
     */
    setDailyTrigger(hour: number, minute: number, repeats: boolean): void;

    /**
     * Sets the notification to be triggered weekly.
     *
     * Sets the notification to be triggered on a specific day of the week and a specific
     * time of that day. When the notification repeats, it will be sent at the same time
     * on all future days. If the notification is not repating it will be sent on the nextoccurrence of the specified time.
     *
     * @param weekday {number} - Day of the week to trigger the notification.
     * @param hour {number} - Hour of the day to trigger the notification.
     * @param minute {number} - Minute of the day to trigger the notification.
     * @param repeats {boolean} - If true the notification will be sent daily on the specifiedtime, otherwise it will only be sent once. Defaults to false.
     */
    setWeeklyTrigger(weekday: number, hour: number, minute: number, repeats: boolean): void;

    /**
     * Adds an action button.
     *
     * Actions are shown as buttons in the notification. When screen space is unlimited,
     * the system shows up to 10 actions. When the space is limited the system shows atmost two actions.
     *
     * @param title {string} - Title of the action.
     * @param url {string} - URL to open when choosing the action.
     * @param destructive {boolean} - Optional. If set to true, the button is displayed
     * with special highlighting to indicate that it performs a destructive task. Defaultsto false.
     */
    addAction(title: string, url: string, destructive: boolean): void;

    /**
     * All pending notifications.
     *
     * Fetches all notifications that have been scheduled from Scriptable and are waitingto be delivered.
     */
    static allPending(): Promise<[Notification]>;

    /**
     * Delivered notifications displayed in the Notification Center.
     *
     * Fetches all notifications that have been scheduled from Scriptable and that are stilldisplayed in the Notification Center of iOS.
     */
    static allDelivered(): Promise<[Notification]>;

    /**
     * Removes all pending notifications.
     *
     * Removes all notifications that have been scheduled from Scriptable and are waitingto be delivered.
     *
     * Use with caution. This removes all notifications scheduled across all of your scriptsand the action cannot be undone.
     */
    static removeAllPending(): Promise<void>;

    /**
     * Removes all delivered notifications.
     *
     * Removes all notifications that have been scheduled from Scriptable and that are stilldisplayed in the Notification Center of iOS.
     */
    static removeAllDelivered(): Promise<void>;

    /**
     * Removes pending notifications.
     *
     * Removes notifications with the specified identifiers. The notifications are only
     * removed if they are pending, that is they have been scheduled and are waiting tobe delivered. To remove delivered notifications, see Notification.removeDelivered().
     *
     * @param identifiers {string[]}
     */
    static removePending(identifiers: string[]): Promise<void>;

    /**
     * Removes delivered notifications.
     *
     * Removes notifications with the specified identifiers. The notifications are onlyremoved if they have been delivered. To remove pending notifications, see Notification.removePending().
     *
     * @param identifiers {string[]}
     */
    static removeDelivered(identifiers: string[]): Promise<void>;

    /**
     * Resets the current notification.
     *
     * Effectively sets args.notification to null.
     *
     * When a notification scheduled from Scriptable has been tapped to open the app or
     * while the app was open, args.notification will have a value until Scriptable is quit.You can manually reset the value using Notification.resetCurrent.
     */
    static resetCurrent(): void;
}
