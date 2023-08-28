import { Calendar } from "./calendar";
import { RecurrenceRule } from "./recurrenceRule";

/**
 * Manages events in calendars.
 *
 * Used for creating, fetching and removing events from your calendars.
 */
export declare class CalendarEvent {

    /**
     * Identifier of event.
     */
    public readonly identifier: string;

    /**
     * Title of event.
     */
    public title: string;

    /**
     * Location of event.
     */
    public location: string;

    /**
     * Notes associated with event.
     */
    public notes: string;

    /**
     * Start date of event.
     */
    public startDate: Date;

    /**
     * End date of event.
     */
    public endDate: Date;

    /**
     * Whether the event is an all-day event.
     */
    public isAllDay: boolean;

    /**
     * Attendees associated with the event.
     */
    public readonly attendees: any[];

    /**
     * Availability during the event.
     */
    public availability: string;

    /**
     * Time zone of event.
     */
    public timeZone: string;

    /**
     * Calendar the event is stored in.
     */
    public calendar: Calendar;

    /**
     * Constructs an event.
     */
    public new(): void;

    /**
     * Adds a recurrence rule.
     *
     * @param recurrenceRule - Recurrence rule to add to the reminder.
     */
    public addRecurrenceRule(recurrenceRule: RecurrenceRule): void;

    /**
     * Removes all recurrence rules.
     */
    public removeAllRecurrenceRules(): void;

    /**
     * Saves event.
     */
    public save(): void;

    /**
     * Removes event from calendar.
     */
    public remove(): void;

    /**
     * Presents a view for editing the calendar event.
     *
     * @returns Promise that provides the updated event when fulfilled.
     */
    public presentEdit(): Promise<CalendarEvent>;

    /**
     * Presents a view for creating a calendar event.
     *
     * @returns Promise that provides the created event when fulfilled.
     */
    public presentCreate(): Promise<CalendarEvent>;

    /**
     * Events occurring today.
     *
     * @param calendars - Calendars to fetch events for. Defaults to all calendars.
     *
     * @returns Promise that provides the events when fulfilled.
     */
    public today(calendars: Calendar[]): CalendarEvent[];

    /**
     * Events occurring tomorrow.
     *
     * @param calendars - Calendars to fetch events for. Defaults to all calendars.
     *
     * @returns Promise that provides the events when fulfilled.
     */
    public tomorrow(calendars: Calendar[]): CalendarEvent[];

    /**
     * Events that occurred yesterday.
     *
     * @param calendars - Calendars to fetch events for. Defaults to all calendars.
     *
     * @returns Promise that provides the events when fulfilled.
     */
    public yesterday(calendars: Calendar[]): CalendarEvent[];

    /**
     * Events that occur this week.
     *
     * @param calendars - Calendars to fetch events for. Defaults to all calendars.
     *
     * @returns Promise that provides the events when fulfilled.
     */
    public thisWeek(calendars: Calendar[]): CalendarEvent[];

    /**
     * Events that occur next week.
     *
     * @param calendars - Calendars to fetch events for. Defaults to all calendars.
     *
     * @returns Promise that provides the events when fulfilled.
     */
    public nextWeek(calendars: Calendar[]): CalendarEvent[];

    /**
     * Events that occurred last week.
     *
     * @param calendars - Calendars to fetch events for. Defaults to all calendars.
     *
     * @returns Promise that provides the events when fulfilled.
     */
    public lastWeek(calendars: Calendar[]): CalendarEvent[];

    /**
     * Events that occurs between two dates.
     *
     * @param startDate - Start date to fetch events for.
     * @param endDate - End date to fetch events for.
     * @param calendars - Calendars to fetch events for. Defaults to all calendars.
     *
     * @returns Promise that provides the events when fulfilled.
     */
    public between(startDate: Date, endDate: Date, calendars: Calendar[]): CalendarEvent[];
}
