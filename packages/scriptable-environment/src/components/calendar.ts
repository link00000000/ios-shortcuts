import { Color } from "./color";

/**
 * Holds reminders and events.
 *
 * Use the Calendar type to get a specific calendar. The calendar is used with the Reminder
 * and CalendarEvent types when fetching reminders or events from a specific calendar
 * or when inserting into a calendar. If you are fetching reminders or events from all
 * calendars, you do not need to pass the calendars when performing the fetch with theReminder or CalendarEvent types.
 */
export declare class Calendar {

    /**
     * Calendar identifier.
     */
    public readonly identifier: string;

    /**
     * Title of calendar.
     */
    public title: string;

    /**
     * Whether the calendar is a subscribed calendar.
     */
    public readonly isSubscribed: boolean;

    /**
     * Indicates whether items can be added, edited, and deleted in the calendar.
     */
    public readonly allowsContentModifications: boolean;

    /**
     * Color of calendar.
     */
    public color: Color;

    /**
     * Checks if the calendar supports availability.
     *
     * @param availability - Availability to check against.
     *
     * @returns True if the calendar supports the availability, otherwise false.
     */
    public supportsAvailability(availability: string): boolean;

    /**
     * Saves calendar.
     */
    public save(): void;

    /**
     * Removes calendar.
     */
    public remove(): void;

    /**
     * Fetches calendars for reminders.
     *
     * @returns Promise that provides the calendars when fulfilled.
     */
    public static forReminders(): Calendar[];

    /**
     * Fetches calendars for events.
     *
     * @returns Promise that provides the calendars when fulfilled.
     */
    public static forEvents(): Calendar[];

    /**
     * Fetches a calendar that holds reminders.
     *
     * @param title - Title of calendar.
     *
     * @returns Promise that provides the calendar when fulfilled.
     */
    public static forRemindersByTitle(title: string): Promise<Calendar>;

    /**
     * Fetches a calendar that holds events.
     *
     * @param title - Title of calendar.
     *
     * @returns Promise that provides the calendar when fulfilled.
     */
    public static forEventsByTitle(title: string): Promise<Calendar>;

    /**
     * Create a new calendar that holds reminders.
     *
     * @returns Promise that provides the created calendar when fulfilled.
     */
    public static createForReminders(title: string): Promise<Calendar>;

    /**
     * Find or create a new calendar that holds reminders.
     *
     * @returns Promise that provides the calendar when fulfilled.
     */
    public static findOrCreateForReminders(title: string): Promise<Calendar>;

    /**
     * Default calendar for reminders.
     *
     * @returns Promise that provides the calendar when fulfilled.
     */
    public static defaultForReminders(): Promise<Calendar>;

    /**
     * Default calendar for events.
     *
     * @returns Promise that provides the calendar when fulfilled.
     */
    public static defaultForEvents(): Promise<Calendar>;

    /**
     * Presents a view for picking calendars.
     *
     * @param allowMultiple - Whether to allow picking multiple calenders. Defaults to false.
     *
     * @returns Promise that provides the calendars when fulfilled.
     */
    public static presentPicker(allowMultiple: boolean): Calendar[];
}
