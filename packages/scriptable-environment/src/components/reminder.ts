/**
 * Manages reminders in calendars.
 *
 * Used for creating, fetching and removing reminders from your calendars.
 */
export declare class Reminder {

    /**
     * Identifier of reminder.
     */
    public identifier: string;

    /**
     * Title of reminder.
     */
    public title: string;

    /**
     * Notes associated with reminder.
     */
    public notes: string;

    /**
     * Whether the reminder is completed.
     */
    public isCompleted: boolean;

    /**
     * Whether the reminder is overdue.
     */
    public isOverdue: boolean;

    /**
     * Priority of reminder.
     */
    public priority: number;

    /**
     * Due date of reminder.
     */
    public dueDate: Date;

    /**
     * Whether the due date includes a time.
     */
    public dueDateIncludesTime: boolean;

    /**
     * Completion date of reminder.
     */
    public completionDate: Date;

    /**
     * Creation date of reminder.
     */
    public creationDate: Date;

    /**
     * Calendar the reminder is stored in.
     */
    public calendar: Calendar;

    /**
     * Constructs a reminder.     */
    public Reminder(): void;

    /**
     * Adds a recurrence rule.
     *
     * @param {RecurrenceRule} recurrenceRule - Recurrence rule to add to the reminder.     */
    public addRecurrenceRule(recurrenceRule: RecurrenceRule)): void;

    /**
     * Removes all recurrence rules.     */
    public removeAllRecurrenceRules(): void;

    /**
     * Saves reminder.     */
    public save(): void;

    /**
     * Removes reminder from calendar.     */
    public remove(): void;

    /**
     * Fetches the schedule of reminders.
     *
     * @param {Calendar[]} calendars - Calendars to fetch reminders for. Defaults to all calendars.
     *
     * @returns {Reminder[]} Promise that provides the reminders when fulfilled.
     */
    public scheduled(calendars: Calendar[]): Reminder[];

    /**
     * Fetches all reminders.
     *
     * @param {Calendar[]} calendars - Calendars to fetch reminders for. Defaults to all calendars.
     *
     * @returns {Reminder[]} Promise that provides the reminders when fulfilled.
     */
    public all(calendars: Calendar[]): Reminder[];

    /**
     * Fetches all completed reminders.
     *
     * @param {Calendar[]} calendars - Calendars to fetch reminders for. Defaults to all calendars.
     *
     * @returns {Reminder[]} Promise that provides the reminders when fulfilled.
     */
    public allCompleted(calendars: Calendar[]): Reminder[];

    /**
     * Fetches all incomplete reminders.
     *
     * @param {Calendar[]} calendars - Calendars to fetch reminders for. Defaults to all calendars.
     *
     * @returns {Reminder[]} Promise that provides the reminders when fulfilled.
     */
    public allIncomplete(calendars: Calendar[]): Reminder[];

    /**
     * Fetches all reminders due today.
     *
     * @param {Calendar[]} calendars - Calendars to fetch reminders for. Defaults to all calendars.
     *
     * @returns {Reminder[]} Promise that provides the reminders when fulfilled.
     */
    public allDueToday(calendars: Calendar[]): Reminder[];

    /**
     * Fetches completed reminders due today.
     *
     * @param {Calendar[]} calendars - Calendars to fetch reminders for. Defaults to all calendars.
     *
     * @returns {Reminder[]} Promise that provides the reminders when fulfilled.
     */
    public completedDueToday(calendars: Calendar[]): Reminder[];

    /**
     * Fetches incomplete reminders due today.
     *
     * @param {Calendar[]} calendars - Calendars to fetch reminders for. Defaults to all calendars.
     *
     * @returns {Reminder[]} Promise that provides the reminders when fulfilled.
     */
    public incompleteDueToday(calendars: Calendar[]): Reminder[];

    /**
     * Fetches all reminders due tomorrow.
     *
     * @param {Calendar[]} calendars - Calendars to fetch reminders for. Defaults to all calendars.
     *
     * @returns {Reminder[]} Promise that provides the reminders when fulfilled.
     */
    public allDueTomorrow(calendars: Calendar[]): Reminder[];

    /**
     * Fetches completed reminders due tomorrow.
     *
     * @param {Calendar[]} calendars - Calendars to fetch reminders for. Defaults to all calendars.
     *
     * @returns {Reminder[]} Promise that provides the reminders when fulfilled.
     */
    public completedDueTomorrow(calendars: Calendar[]): Reminder[];

    /**
     * Fetches incomplete reminders due tomorrow.
     *
     * @param {Calendar[]} calendars - Calendars to fetch reminders for. Defaults to all calendars.
     *
     * @returns {Reminder[]} Promise that provides the reminders when fulfilled.
     */
    public incompleteDueTomorrow(calendars: Calendar[]): Reminder[];

    /**
     * Fetches all reminders due yesterday.
     *
     * @param {Calendar[]} calendars - Calendars to fetch reminders for. Defaults to all calendars.
     *
     * @returns {Reminder[]} Promise that provides the reminders when fulfilled.
     */
    public allDueYesterday(calendars: Calendar[]): Reminder[];

    /**
     * Fetches completed reminders due yesterday.
     *
     * @param {Calendar[]} calendars - Calendars to fetch reminders for. Defaults to all calendars.
     *
     * @returns {Reminder[]} Promise that provides the reminders when fulfilled.
     */
    public completedDueYesterday(calendars: Calendar[]): Reminder[];

    /**
     * Fetches incomplete reminders due yesterday.
     *
     * @param {Calendar[]} calendars - Calendars to fetch reminders for. Defaults to all calendars.
     *
     * @returns {Reminder[]} Promise that provides the reminders when fulfilled.
     */
    public incompleteDueYesterday(calendars: Calendar[]): Reminder[];

    /**
     * Fetches all reminders due this week.
     *
     * @param {Calendar[]} calendars - Calendars to fetch reminders for. Defaults to all calendars.
     *
     * @returns {Reminder[]} Promise that provides the reminders when fulfilled.
     */
    public allDueThisWeek(calendars: Calendar[]): Reminder[];

    /**
     * Fetches completed reminders due this week.
     *
     * @param {Calendar[]} calendars - Calendars to fetch reminders for. Defaults to all calendars.
     *
     * @returns {Reminder[]} Promise that provides the reminders when fulfilled.
     */
    public completedDueThisWeek(calendars: Calendar[]): Reminder[];

    /**
     * Fetches incomplete reminders due this week.
     *
     * @param {Calendar[]} calendars - Calendars to fetch reminders for. Defaults to all calendars.
     *
     * @returns {Reminder[]} Promise that provides the reminders when fulfilled.
     */
    public incompleteDueThisWeek(calendars: Calendar[]): Reminder[];

    /**
     * Fetches all reminders due next week.
     *
     * @param {Calendar[]} calendars - Calendars to fetch reminders for. Defaults to all calendars.
     *
     * @returns {Reminder[]} Promise that provides the reminders when fulfilled.
     */
    public allDueNextWeek(calendars: Calendar[]): Reminder[];

    /**
     * Fetches completed reminders due next week.
     *
     * @param {Calendar[]} calendars - Calendars to fetch reminders for. Defaults to all calendars.
     *
     * @returns {Reminder[]} Promise that provides the reminders when fulfilled.
     */
    public completedDueNextWeek(calendars: Calendar[]): Reminder[];

    /**
     * Fetches incomplete reminders due next week.
     *
     * @param {Calendar[]} calendars - Calendars to fetch reminders for. Defaults to all calendars.
     *
     * @returns {Reminder[]} Promise that provides the reminders when fulfilled.
     */
    public incompleteDueNextWeek(calendars: Calendar[]): Reminder[];

    /**
     * Fetches all reminders due last week.
     *
     * @param {Calendar[]} calendars - Calendars to fetch reminders for. Defaults to all calendars.
     *
     * @returns {Reminder[]} Promise that provides the reminders when fulfilled.
     */
    public allDueLastWeek(calendars: Calendar[]): Reminder[];

    /**
     * Fetches completed reminders due last week.
     *
     * @param {Calendar[]} calendars - Calendars to fetch reminders for. Defaults to all calendars.
     *
     * @returns {Reminder[]} Promise that provides the reminders when fulfilled.
     */
    public completedDueLastWeek(calendars: Calendar[]): Reminder[];

    /**
     * Fetches incomplete reminders due last week.
     *
     * @param {Calendar[]} calendars - Calendars to fetch reminders for. Defaults to all calendars.
     *
     * @returns {Reminder[]} Promise that provides the reminders when fulfilled.
     */
    public incompleteDueLastWeek(calendars: Calendar[]): Reminder[];

    /**
     * Fetches reminders completed today.
     *
     * @param {Calendar[]} calendars - Calendars to fetch reminders for. Defaults to all calendars.
     *
     * @returns {Reminder[]} Promise that provides the reminders when fulfilled.
     */
    public completedToday(calendars: Calendar[]): Reminder[];

    /**
     * Fetches reminders completed this week.
     *
     * @param {Calendar[]} calendars - Calendars to fetch reminders for. Defaults to all calendars.
     *
     * @returns {Reminder[]} Promise that provides the reminders when fulfilled.
     */
    public completedThisWeek(calendars: Calendar[]): Reminder[];

    /**
     * Fetches reminders completed last week.
     *
     * @param {Calendar[]} calendars - Calendars to fetch reminders for. Defaults to all calendars.
     *
     * @returns {Reminder[]} Promise that provides the reminders when fulfilled.
     */
    public completedLastWeek(calendars: Calendar[]): Reminder[];

    /**
     * Fetches due reminders.
     *
     * @param {Calendar[]} calendars - Calendars to fetch reminders for. Defaults to all calendars.
     *
     * @returns {Reminder[]} Promise that provides the reminders when fulfilled.
     */
    public allDueBetween(startDate: Date, endDate: Date, calendars: Calendar[]): Reminder[];

    /**
     * Fetches completed reminders.
     *
     * @param {Calendar[]} calendars - Calendars to fetch reminders for. Defaults to all calendars.
     *
     * @returns {Reminder[]} Promise that provides the reminders when fulfilled.
     */
    public completedDueBetween(startDate: Date, endDate: Date, calendars: Calendar[]): Reminder[];

    /**
     * Fetches incomplete reminders.
     *
     * @param {Calendar[]} calendars - Calendars to fetch reminders for. Defaults to all calendars.
     *
     * @returns {Reminder[]} Promise that provides the reminders when fulfilled.
     */
    public incompleteDueBetween(startDate: Date, endDate: Date, calendars: Calendar[]): Reminder[];

    /**
     * Fetches completed reminders.
     *
     * @param {Calendar[]} calendars - Calendars to fetch reminders for. Defaults to all calendars.
     *
     * @returns {Reminder[]} Promise that provides the reminders when fulfilled.
     */
    public completedBetween(startDate: Date, endDate: Date, calendars: Calendar[]): Reminder[];
}
