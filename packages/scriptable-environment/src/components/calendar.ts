/**
 * Holds reminders and events.
 *
 * Use the Calendar type to get a specific calendar. The calendar is used with the Reminder
 * and CalendarEvent types when fetching reminders or events from a specific calendar
 * or when inserting into a calendar. If you are fetching reminders or events from all
 * calendars, you do not need to pass the calendars when performing the fetch with theReminder or CalendarEvent types.
 */
export var Calendar: {
    /**
     * Calendar identifier.
     */
    readonly identifier: string;

    /**
     * Title of calendar.
     */
    title: string;

    /**
     * Whether the calendar is a subscribed calendar.
     */
    readonly isSubscribed: boolean;

    /**
     * Indicates whether items can be added, edited, and deleted in the calendar.
     */
    readonly allowsContentModifications: boolean;

    /**
     * Color of calendar.
     */
    color: Color;

    /**
     * Checks if the calendar supports availability.
     *
     * The following values are supported:
     *
     * Not all calendars support all of these availabilities and some calendars may not
     * support availability at all. Use this function to check if the calendar supportsa specific availability.
     *
     * @param availability {string} - Availability to check against.
     */
    supportsAvailability(availability: string): bool;

    /**
     * Saves calendar.
     *
     * Saves changes to the calendar.
     */
    save(): void;

    /**
     * Removes calendar.
     *
     * The calendar is removed immediately. This cannot be undone.
     */
    remove(): void;

    /**
     * Fetches calendars for reminders.
     *
     * A calendar can only hold either reminders or events. Call this function to fetchall calendars that can hold reminders.
     */
    static forReminders(): Promise<[Calendar]>;

    /**
     * Fetches calendars for events.
     *
     * A calendar can only hold either reminders or events. Call this function to fetchall calendars that can hold events.
     */
    static forEvents(): Promise<[Calendar]>;

    /**
     * Fetches a calendar that holds reminders.
     *
     * @param title {string} - Title of calendar.
     */
    static forRemindersByTitle(title: string): Promise<Calendar>;

    /**
     * Fetches a calendar that holds events.
     *
     * @param title {string} - Title of calendar.
     */
    static forEventsByTitle(title: string): Promise<Calendar>;

    /**
     * Create a new calendar that holds reminders.
     *
     * This will create a new list for reminders in the Reminders app. The list is automaticallysaved so there is no need to call save() after creating the list.
     *
     * @param title {string}
     */
    static createForReminders(title: string): Promise<Calendar>;

    /**
     * Find or create a new calendar that holds reminders.
     *
     * This will attempt to find a calendar for reminders with the specified name. If no
     * calendar is found, a new calendar is created and the calendar will appear as a reminder
     * list in the Reminders app. If multiple calendars are found for the specified name,
     * the first one will be returned.  The list is automatically saved so there is no needto call save() in the case the list was created.
     *
     * @param title {string}
     */
    static findOrCreateForReminders(title: string): Promise<Calendar>;

    /**
     * Default calendar for reminders.
     *
     * A calendar can only hold either reminders or events. Call this function to get thedefault calendar that can hold reminders.
     */
    static defaultForReminders(): Promise<Calendar>;

    /**
     * Default calendar for events.
     *
     * A calendar can only hold either reminders or events. Call this function to get thedefault calendar that can hold events.
     */
    static defaultForEvents(): Promise<Calendar>;

    /**
     * Presents a view for picking calendars.
     *
     * @param allowMultiple {boolean} - Whether to allow picking multiple calenders. Defaultsto false.
     */
    static presentPicker(allowMultiple: boolean): Promise<[Calendar]>;
}
