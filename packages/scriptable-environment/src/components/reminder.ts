import { Calendar } from "./calendar";
import { RecurrenceRule } from "./recurrenceRule";

/**
 * Manages reminders in calendars.
 *
 * Used for creating, fetching and removing reminders from your calendars.
 */
export declare class Reminder {
    /**
     * Identifier of reminder.
     */
    readonly identifier: string;

    /**
     * Title of reminder.
     */
    title: string;

    /**
     * Notes associated with reminder.
     */
    notes: string;

    /**
     * Whether the reminder is completed.
     */
    isCompleted: boolean;

    /**
     * Whether the reminder is overdue.
     */
    readonly isOverdue: boolean;

    /**
     * Priority of reminder.
     *
     * Specifies the prirority of the reminder with 0 representing an undefined priority,1 the highest priority, and 9 the lowest priority.
     */
    priority: number;

    /**
     * Due date of reminder.
     */
    dueDate: Date;

    /**
     * Whether the due date includes a time.
     *
     * When this is true, assignments to the dueDate property will include a time, whenthis is false, the time component of the date will be ignored. Defaults to true.
     */
    dueDateIncludesTime: boolean;

    /**
     * Completion date of reminder.
     */
    readonly completionDate: Date;

    /**
     * Creation date of reminder.
     */
    readonly creationDate: Date;

    /**
     * Calendar the reminder is stored in.
     */
    calendar: Calendar;

    /**
     * Constructs a reminder.
     *
     * In order to add the reminder to your calendar, you must call the save() function.
     */
    constructor();

    /**
     * Adds a recurrence rule.
     *
     * Recurrence rules specify when the reminder should be repeated. See the documentationof RecurrenceRule for more information on creating rules.
     *
     * @param recurrenceRule {RecurrenceRule} - Recurrence rule to add to the reminder.
     */
    addRecurrenceRule(recurrenceRule: RecurrenceRule): void;

    /**
     * Removes all recurrence rules.
     */
    removeAllRecurrenceRules(): void;

    /**
     * Saves reminder.
     *
     * Saves changes to a reminder, inserting it into the calendar if it is newly created.
     */
    save(): void;

    /**
     * Removes reminder from calendar.
     */
    remove(): void;

    /**
     * Fetches the schedule of reminders.
     *
     * The fetched result contains reminders that are due today and reminders that are overdue.This is similar to the reminders shown in the Reminders apps "Scheduled" list.
     * For performance reasons iOS limits fetched results to events within a four year timespan.
     *
     * @param calendars {Calendar[]} - Calendars to fetch reminders for. Defaults to allcalendars.
     */
    static scheduled(calendars: Calendar[]): Promise<[Reminder]>;

    /**
     * Fetches all reminders.
     *
     * For performance reasons iOS limits fetched results to events within a four year timespan.
     *
     * @param calendars {Calendar[]} - Calendars to fetch reminders for. Defaults to allcalendars.
     */
    static all(calendars: Calendar[]): Promise<[Reminder]>;

    /**
     * Fetches all completed reminders.
     *
     * For performance reasons iOS limits fetched results to events within a four year timespan.
     *
     * @param calendars {Calendar[]} - Calendars to fetch reminders for. Defaults to allcalendars.
     */
    static allCompleted(calendars: Calendar[]): Promise<[Reminder]>;

    /**
     * Fetches all incomplete reminders.
     *
     * For performance reasons iOS limits fetched results to events within a four year timespan.
     *
     * @param calendars {Calendar[]} - Calendars to fetch reminders for. Defaults to allcalendars.
     */
    static allIncomplete(calendars: Calendar[]): Promise<[Reminder]>;

    /**
     * Fetches all reminders due today.
     *
     * @param calendars {Calendar[]} - Calendars to fetch reminders for. Defaults to allcalendars.
     */
    static allDueToday(calendars: Calendar[]): Promise<[Reminder]>;

    /**
     * Fetches completed reminders due today.
     *
     * @param calendars {Calendar[]} - Calendars to fetch reminders for. Defaults to allcalendars.
     */
    static completedDueToday(calendars: Calendar[]): Promise<[Reminder]>;

    /**
     * Fetches incomplete reminders due today.
     *
     * @param calendars {Calendar[]} - Calendars to fetch reminders for. Defaults to allcalendars.
     */
    static incompleteDueToday(calendars: Calendar[]): Promise<[Reminder]>;

    /**
     * Fetches all reminders due tomorrow.
     *
     * @param calendars {Calendar[]} - Calendars to fetch reminders for. Defaults to allcalendars.
     */
    static allDueTomorrow(calendars: Calendar[]): Promise<[Reminder]>;

    /**
     * Fetches completed reminders due tomorrow.
     *
     * @param calendars {Calendar[]} - Calendars to fetch reminders for. Defaults to allcalendars.
     */
    static completedDueTomorrow(calendars: Calendar[]): Promise<[Reminder]>;

    /**
     * Fetches incomplete reminders due tomorrow.
     *
     * @param calendars {Calendar[]} - Calendars to fetch reminders for. Defaults to allcalendars.
     */
    static incompleteDueTomorrow(calendars: Calendar[]): Promise<[Reminder]>;

    /**
     * Fetches all reminders due yesterday.
     *
     * @param calendars {Calendar[]} - Calendars to fetch reminders for. Defaults to allcalendars.
     */
    static allDueYesterday(calendars: Calendar[]): Promise<[Reminder]>;

    /**
     * Fetches completed reminders due yesterday.
     *
     * @param calendars {Calendar[]} - Calendars to fetch reminders for. Defaults to allcalendars.
     */
    static completedDueYesterday(calendars: Calendar[]): Promise<[Reminder]>;

    /**
     * Fetches incomplete reminders due yesterday.
     *
     * @param calendars {Calendar[]} - Calendars to fetch reminders for. Defaults to allcalendars.
     */
    static incompleteDueYesterday(calendars: Calendar[]): Promise<[Reminder]>;

    /**
     * Fetches all reminders due this week.
     *
     * @param calendars {Calendar[]} - Calendars to fetch reminders for. Defaults to allcalendars.
     */
    static allDueThisWeek(calendars: Calendar[]): Promise<[Reminder]>;

    /**
     * Fetches completed reminders due this week.
     *
     * @param calendars {Calendar[]} - Calendars to fetch reminders for. Defaults to allcalendars.
     */
    static completedDueThisWeek(calendars: Calendar[]): Promise<[Reminder]>;

    /**
     * Fetches incomplete reminders due this week.
     *
     * @param calendars {Calendar[]} - Calendars to fetch reminders for. Defaults to allcalendars.
     */
    static incompleteDueThisWeek(calendars: Calendar[]): Promise<[Reminder]>;

    /**
     * Fetches all reminders due next week.
     *
     * @param calendars {Calendar[]} - Calendars to fetch reminders for. Defaults to allcalendars.
     */
    static allDueNextWeek(calendars: Calendar[]): Promise<[Reminder]>;

    /**
     * Fetches completed reminders due next week.
     *
     * @param calendars {Calendar[]} - Calendars to fetch reminders for. Defaults to allcalendars.
     */
    static completedDueNextWeek(calendars: Calendar[]): Promise<[Reminder]>;

    /**
     * Fetches incomplete reminders due next week.
     *
     * @param calendars {Calendar[]} - Calendars to fetch reminders for. Defaults to allcalendars.
     */
    static incompleteDueNextWeek(calendars: Calendar[]): Promise<[Reminder]>;

    /**
     * Fetches all reminders due last week.
     *
     * @param calendars {Calendar[]} - Calendars to fetch reminders for. Defaults to allcalendars.
     */
    static allDueLastWeek(calendars: Calendar[]): Promise<[Reminder]>;

    /**
     * Fetches completed reminders due last week.
     *
     * @param calendars {Calendar[]} - Calendars to fetch reminders for. Defaults to allcalendars.
     */
    static completedDueLastWeek(calendars: Calendar[]): Promise<[Reminder]>;

    /**
     * Fetches incomplete reminders due last week.
     *
     * @param calendars {Calendar[]} - Calendars to fetch reminders for. Defaults to allcalendars.
     */
    static incompleteDueLastWeek(calendars: Calendar[]): Promise<[Reminder]>;

    /**
     * Fetches reminders completed today.
     *
     * Note that this does not take the due date into account. This will return all remindersthat you have completed today.
     *
     * @param calendars {Calendar[]} - Calendars to fetch reminders for. Defaults to allcalendars.
     */
    static completedToday(calendars: Calendar[]): Promise<[Reminder]>;

    /**
     * Fetches reminders completed this week.
     *
     * Note that this does not take the due date into account. This will return all remindersthat you have completed this week.
     *
     * @param calendars {Calendar[]} - Calendars to fetch reminders for. Defaults to allcalendars.
     */
    static completedThisWeek(calendars: Calendar[]): Promise<[Reminder]>;

    /**
     * Fetches reminders completed last week.
     *
     * Note that this does not take the due date into account. This will return all remindersthat you have completed last week.
     *
     * @param calendars {Calendar[]} - Calendars to fetch reminders for. Defaults to allcalendars.
     */
    static completedLastWeek(calendars: Calendar[]): Promise<[Reminder]>;

    /**
     * Fetches due reminders.
     *
     * Fetches reminders that are due within the time interval constituted by
     * the start and end dates.
     *
     * @param startDate {Date}
     * @param endDate {Date}
     * @param calendars {Calendar[]} - Calendars to fetch reminders for. Defaults to allcalendars.
     */
    static allDueBetween(startDate: Date, endDate: Date, calendars: Calendar[]): Promise<[Reminder]>;

    /**
     * Fetches completed reminders.
     *
     * Fetches reminders that are completed and that were due within the time interval constitutedby the start and end dates.
     *
     * @param startDate {Date}
     * @param endDate {Date}
     * @param calendars {Calendar[]} - Calendars to fetch reminders for. Defaults to allcalendars.
     */
    static completedDueBetween(startDate: Date, endDate: Date, calendars: Calendar[]): Promise<[Reminder]>;

    /**
     * Fetches incomplete reminders.
     *
     * Fetches reminders that are incomplete and that were due within the time intervalconstituted by the start and end dates.
     *
     * @param startDate {Date}
     * @param endDate {Date}
     * @param calendars {Calendar[]} - Calendars to fetch reminders for. Defaults to allcalendars.
     */
    static incompleteDueBetween(startDate: Date, endDate: Date, calendars: Calendar[]): Promise<[Reminder]>;

    /**
     * Fetches completed reminders.
     *
     * Fetches reminders that were completed within the time interval constituted by thestart and end dates.
     *
     * @param startDate {Date}
     * @param endDate {Date}
     * @param calendars {Calendar[]} - Calendars to fetch reminders for. Defaults to allcalendars.
     */
    static completedBetween(startDate: Date, endDate: Date, calendars: Calendar[]): Promise<[Reminder]>;
}
