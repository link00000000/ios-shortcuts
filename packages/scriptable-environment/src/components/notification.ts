/**
 * Schedules and manages notifications.
 *
 * Notifications are scheduled for delivery at some point in the future. A notificationmay be delivered even when Scriptable is not running.
 */
export declare class Notification {

    /**
     * Identifier of the notification.
     */
    public identifier: string;

    /**
     * Title of the notification.
     */
    public title: string;

    /**
     * Subtitle of the notification.
     */
    public subtitle: string;

    /**
     * Body of the notification.
     */
    public body: string;

    /**
     * Preferred height of the notification.
     */
    public preferredContentHeight: number;

    /**
     * Number to display in the app icon's badge.
     */
    public badge: number;

    /**
     * Identifier for grouping the notification.
     */
    public threadIdentifier: string;

    /**
     * Custom information.
     */
    public userInfo: {string;

    /**
     * Sound of the notification.
     */
    public sound: string;

    /**
     * URL to open when notification is tapped.
     */
    public openURL: string;

    /**
     * Delivery date of the notification.
     */
    public deliveryDate: Date;

    /**
     * Next trigger date of the notification.
     */
    public nextTriggerDate: Date;

    /**
     * Name of script to run in rich notification.
     */
    public scriptName: string;

    /**
     * Actions added to the notification.
     */
    public actions: {string;

    /**
     * Notification a script is running in.
     *
     * @returns {Notification} The notification that a script is running in.
     */
    public current(): Notification;

    /**
     * Constructs a notification.     */
    public Notification(): void;

    /**
     * Schedules the notification.
     *
     * @returns {Promise<void>} Promise that is fulfilled when the notification have been scheduled.
     */
    public schedule(): Promise;

    /**
     * Removes the notification.
     *
     * @returns {Promise<void>} Promise that is fulfilled when the notification have been removed.
     */
    public remove(): Promise;

    /**
     * Sets the notification to be triggered on a date and time.
     *
     * @param {Date} date - Date and time to trigger the notification on.     */
    public setTriggerDate(date: Date)): void;

    /**
     * Sets the notification to be triggered daily.
     *
     * @param {number} hour - Hour of the day to trigger the notification.
     * @param {number} minute - Minute of the day to trigger the notification.
     * @param {boolean} repeats - If true the notification will be sent daily on the specified time, otherwise it will only be sent once. Defaults to false.     */
    public setDailyTrigger(hour: number, minute: number, repeats: boolean): void;

    /**
     * Sets the notification to be triggered weekly.
     *
     * @param {number} weekday - Day of the week to trigger the notification.
     * @param {number} hour - Hour of the day to trigger the notification.
     * @param {number} minute - Minute of the day to trigger the notification.
     * @param {boolean} repeats - If true the notification will be sent daily on the specified time, otherwise it will only be sent once. Defaults to false.     */
    public setWeeklyTrigger(weekday: number, hour: number, minute: number, repeats: boolean): void;

    /**
     * Adds an action button.
     *
     * @param {string} title - Title of the action.
     * @param {string} url - URL to open when choosing the action.
     * @param {boolean} destructive - Optional. If set to true, the button is displayed with special highlighting to indicate that it performs a destructive task. Defaults to false.     */
    public addAction(title: string, url: string, destructive: boolean): void;

    /**
     * All pending notifications.
     *
     * @returns {Notification[]} Promise that carries all pending notifications when fulfilled.
     */
    public allPending(): Notification[];

    /**
     * Delivered notifications displayed in the Notification Center.
     *
     * @returns {Notification[]} Promise that carries all delivered notifications when fulfilled.
     */
    public allDelivered(): Notification[];

    /**
     * Removes all pending notifications.
     *
     * @returns {Promise<void>} Promise that is fulfilled when the notifications have been removed.
     */
    public removeAllPending(): Promise;

    /**
     * Removes all delivered notifications.
     *
     * @returns {Promise<void>} Promise that is fulfilled when the notifications have been removed.
     */
    public removeAllDelivered(): Promise;

    /**
     * Removes pending notifications.
     *
     * @returns {Promise<void>} Promise that is fulfilled when the notifications have been removed.
     */
    public removePending(identifiers: string[]): Promise;

    /**
     * Removes delivered notifications.
     *
     * @returns {Promise<void>} Promise that is fulfilled when the notifications have been removed.
     */
    public removeDelivered(identifiers: string[]): Promise;

    /**
     * Resets the current notification.     */
    public resetCurrent(): void;
}
