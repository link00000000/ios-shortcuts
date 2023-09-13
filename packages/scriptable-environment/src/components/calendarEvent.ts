/**
 * Manages events in calendars.
 *
 * Used for creating, fetching and removing events from your calendars.
 */
export declare class CalendarEvent {
    /**
     * Identifier of event.
     */
    readonly identifier: string;

    /**
     * Title of event.
     */
    title: string;

    /**
     * Location of event.
     */
    location: string;

    /**
     * Notes associated with event.
     */
    notes: string;

    /**
     * Start date of event.
     */
    startDate: Date;

    /**
     * End date of event.
     */
    endDate: Date;

    /**
     * Whether the event is an all-day event.
     */
    isAllDay: boolean;

    /**
     * Attendees associated with the event.
     *
     * An array of objects on the following form:
     *
     * Note that the property is read-only since iOS does not expose API to modify the attendeesof an event.
     * @example
     * {
     *   "isCurrentUser": false,
     *   "name": "John Appleseed",
     *   "status": "accepted",
     *   "type": "person",
     *   "role": "required"
     * }
     */
    readonly attendees: any[];

    /**
     * Availability during the event.
     *
     * Indicates how the event should be treated for scheduling purposes. The followingvalues are supported:
     *
     * Be aware that not all calendars support all of these availabilities and some calendars
     * may not support availability at all. Use Calendar.supportsAvailability() to checkif a calendar supports a specific availability.
     */
    availability: string;

    /**
     * Time zone of event.
     *
     * Geopolitical region identifier that identifies the time zone, e.g. "Europe/Copenhagen","America/New_York" and "Asia/Tokyo".
     */
    timeZone: string;

    /**
     * Calendar the event is stored in.
     */
    calendar: Calendar;

    /**
     * Constructs an event.
     *
     * In order to add the event to your calendar, you must call the save() function.
     */
    constructor();

    /**
     * Adds a recurrence rule.
     *
     * Recurrence rules specify when the eventer or reminder should be repeated. See thedocumentation of RecurrenceRule for more information on creating rules.
     *
     * @param recurrenceRule {RecurrenceRule} - Recurrence rule to add to the reminder.
     */
    addRecurrenceRule(recurrenceRule: RecurrenceRule): void;

    /**
     * Removes all recurrence rules.
     */
    removeAllRecurrenceRules(): void;

    /**
     * Saves event.
     *
     * Saves changes to an event, inserting it into the calendar if it is newly created.
     */
    save(): void;

    /**
     * Removes event from calendar.
     */
    remove(): void;

    /**
     * Presents a view for editing the calendar event.
     *
     * The presented view supports editing various attributes of the event,
     * including title, location, dates, recurrence and alerts.
     */
    presentEdit(): Promise<CalendarEvent>;

    /**
     * Presents a view for creating a calendar event.
     *
     * The presented view supports editing various attributes of the event,
     * including title, location, dates, recurrence and alerts.
     */
    static presentCreate(): Promise<CalendarEvent>;

    /**
     * Events occurring today.
     *
     * @param calendars {Calendar[]} - Calendars to fetch events for. Defaults to all calendars.
     */
    static today(calendars: Calendar[]): Promise<[CalendarEvent]>;

    /**
     * Events occurring tomorrow.
     *
     * @param calendars {Calendar[]} - Calendars to fetch events for. Defaults to all calendars.
     */
    static tomorrow(calendars: Calendar[]): Promise<[CalendarEvent]>;

    /**
     * Events that occurred yesterday.
     *
     * @param calendars {Calendar[]} - Calendars to fetch events for. Defaults to all calendars.
     */
    static yesterday(calendars: Calendar[]): Promise<[CalendarEvent]>;

    /**
     * Events that occur this week.
     *
     * @param calendars {Calendar[]} - Calendars to fetch events for. Defaults to all calendars.
     */
    static thisWeek(calendars: Calendar[]): Promise<[CalendarEvent]>;

    /**
     * Events that occur next week.
     *
     * @param calendars {Calendar[]} - Calendars to fetch events for. Defaults to all calendars.
     */
    static nextWeek(calendars: Calendar[]): Promise<[CalendarEvent]>;

    /**
     * Events that occurred last week.
     *
     * @param calendars {Calendar[]} - Calendars to fetch events for. Defaults to all calendars.
     */
    static lastWeek(calendars: Calendar[]): Promise<[CalendarEvent]>;

    /**
     * Events that occurs between two dates.
     *
     * @param startDate {Date} - Start date to fetch events for.
     * @param endDate {Date} - End date to fetch events for.
     * @param calendars {Calendar[]} - Calendars to fetch events for. Defaults to all calendars.
     */
    static between(startDate: Date, endDate: Date, calendars: Calendar[]): Promise<[CalendarEvent]>;
}
