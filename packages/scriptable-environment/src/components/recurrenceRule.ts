/**
 * Recurrence rule used with reminders and calendar events.
 *
 * A recurrence rule specifies how often a reminder or a calendar event should repeat.
 */
export declare class RecurrenceRule {

    /**
     * Constructs a daily recurrence rule.
     *
     * @param {number} interval - Interval at which to repeat the rule.
     *
     * @returns {RecurrenceRule} Constructed recurrence rule.
     */
    public daily(interval: number): RecurrenceRule;

    /**
     * Constructs a daily recurrence rule with an end date.
     *
     * @param {number} interval - Interval at which to repeat the rule.
     * @param {Date} endDate - Date at which the recurrence rule should end.
     *
     * @returns {RecurrenceRule} Constructed recurrence rule.
     */
    public dailyEndDate(interval: number, endDate: Date): RecurrenceRule;

    /**
     * Constructs a daily recurrence rule with an occurrence count.
     *
     * @param {number} interval - Interval at which to repeat the rule.
     * @param {number} occurrenceCount - Number of times the rule should repeat before it ends.
     *
     * @returns {RecurrenceRule} Constructed recurrence rule.
     */
    public dailyOccurrenceCount(interval: number, occurrenceCount: number): RecurrenceRule;

    /**
     * Constructs a weekly recurrence rule.
     *
     * @param {number} interval - Interval at which to repeat the rule.
     *
     * @returns {RecurrenceRule} Constructed recurrence rule.
     */
    public weekly(interval: number): RecurrenceRule;

    /**
     * Constructs a weekly recurrence rule with an end date.
     *
     * @param {number} interval - Interval at which to repeat the rule.
     * @param {Date} endDate - Date at which the recurrence rule should end.
     *
     * @returns {RecurrenceRule} Constructed recurrence rule.
     */
    public weeklyEndDate(interval: number, endDate: Date): RecurrenceRule;

    /**
     * Constructs a weekly recurrence rule with an occurrence count.
     *
     * @param {number} interval - Interval at which to repeat the rule.
     * @param {number} occurrenceCount - Number of times the rule should repeat before it ends.
     *
     * @returns {RecurrenceRule} Constructed recurrence rule.
     */
    public weeklyOccurrenceCount(interval: number, occurrenceCount: number): RecurrenceRule;

    /**
     * Constructs a monthly recurrence rule.
     *
     * @param {number} interval - Interval at which to repeat the rule.
     *
     * @returns {RecurrenceRule} Constructed recurrence rule.
     */
    public monthly(interval: number): RecurrenceRule;

    /**
     * Constructs a monthly recurrence rule with an end date.
     *
     * @param {number} interval - Interval at which to repeat the rule.
     * @param {Date} endDate - Date at which the recurrence rule should end.
     *
     * @returns {RecurrenceRule} Constructed recurrence rule.
     */
    public monthlyEndDate(interval: number, endDate: Date): RecurrenceRule;

    /**
     * Constructs a monthly recurrence rule with an occurrence count.
     *
     * @param {number} interval - Interval at which to repeat the rule.
     * @param {number} occurrenceCount - Number of times the rule should repeat before it ends.
     *
     * @returns {RecurrenceRule} Constructed recurrence rule.
     */
    public monthlyOccurrenceCount(interval: number, occurrenceCount: number): RecurrenceRule;

    /**
     * Constructs a yearly recurrence rule.
     *
     * @param {number} interval - Interval at which to repeat the rule.
     *
     * @returns {RecurrenceRule} Constructed recurrence rule.
     */
    public yearly(interval: number): RecurrenceRule;

    /**
     * Constructs a yearly recurrence rule with an end date.
     *
     * @param {number} interval - Interval at which to repeat the rule.
     * @param {Date} endDate - Date at which the recurrence rule should end.
     *
     * @returns {RecurrenceRule} Constructed recurrence rule.
     */
    public yearlyEndDate(interval: number, endDate: Date): RecurrenceRule;

    /**
     * Constructs a yearly recurrence rule with an occurrence count.
     *
     * @param {number} interval - Interval at which to repeat the rule.
     * @param {number} occurrenceCount - Number of times the rule should repeat before it ends.
     *
     * @returns {RecurrenceRule} Constructed recurrence rule.
     */
    public yearlyOccurrenceCount(interval: number, occurrenceCount: number): RecurrenceRule;

    /**
     * Constructs a complex weekly recurrence rule.
     *
     * @param {number} interval - Interval at which to repeat the rule.
     * @param {number[]} daysOfTheWeek - Days of the week to repeat the rule. Values range from 1 to 7, with Sunday being 1.
     * @param {number[]} setPositions - Filters which recurrences to include in the rule's frequency.
     *
     * @returns {RecurrenceRule} Constructed recurrence rule.
     */
    public complexWeekly(interval: number, daysOfTheWeek: number[], setPositions: number[]): RecurrenceRule;

    /**
     * Constructs a complex weekly recurrence rule with an end date.
     *
     * @param {number} interval - Interval at which to repeat the rule.
     * @param {number[]} daysOfTheWeek - Days of the week to repeat the rule. Values range from 1 to 7, with Sunday being 1.
     * @param {number[]} setPositions - Filters which recurrences to include in the rule's frequency.
     * @param {Date} endDate - Date at which the recurrence rule should end.
     *
     * @returns {RecurrenceRule} Constructed recurrence rule.
     */
    public complexWeeklyEndDate(interval: number, daysOfTheWeek: number[], setPositions: number[], endDate: Date): RecurrenceRule;

    /**
     * Constructs a complex weekly recurrence rule with an occurrence count.
     *
     * @param {number} interval - Interval at which to repeat the rule.
     * @param {number[]} daysOfTheWeek - Days of the week to repeat the rule. Values range from 1 to 7, with Sunday being 1.
     * @param {number[]} setPositions - Filters which recurrences to include in the rule's frequency.
     * @param {number} occurrenceCount - Number of times the rule should repeat before it ends.
     *
     * @returns {RecurrenceRule} Constructed recurrence rule.
     */
    public complexWeeklyOccurrenceCount(interval: number, daysOfTheWeek: number[], setPositions: number[], occurrenceCount: number): RecurrenceRule;

    /**
     * Constructs a complex monthly recurrence rule.
     *
     * @param {number} interval - Interval at which to repeat the rule.
     * @param {number[]} daysOfTheWeek - Days of the week to repeat the rule. Values range from 1 to 7, with Sunday being 1.
     * @param {number[]} daysOfTheMonth - Days of the month to repeat the rule. Values range from 1 to 31 and from -1 to -31.
     * @param {number[]} setPositions - Filters which recurrences to include in the rule's frequency.
     *
     * @returns {RecurrenceRule} Constructed recurrence rule.
     */
    public complexMonthly(interval: number, daysOfTheWeek: number[], daysOfTheMonth: number[], setPositions: number[]): RecurrenceRule;

    /**
     * Constructs a complex monthly recurrence rule with an end date.
     *
     * @param {number} interval - Interval at which to repeat the rule.
     * @param {number[]} daysOfTheWeek - Days of the week to repeat the rule. Values range from 1 to 7, with Sunday being 1.
     * @param {number[]} daysOfTheMonth - Days of the month to repeat the rule. Values range from 1 to 31 and from -1 to -31.
     * @param {number[]} setPositions - Filters which recurrences to include in the rule's frequency.
     * @param {Date} endDate - Date at which the recurrence rule should end.
     *
     * @returns {RecurrenceRule} Constructed recurrence rule.
     */
    public complexMonthlyEndDate(interval: number, daysOfTheWeek: number[], daysOfTheMonth: number[], setPositions: number[], endDate: Date): RecurrenceRule;

    /**
     * Constructs a complex monthly recurrence rule with an occurrence count.
     *
     * @param {number} interval - Interval at which to repeat the rule.
     * @param {number[]} daysOfTheWeek - Days of the week to repeat the rule. Values range from 1 to 7, with Sunday being 1.
     * @param {number[]} daysOfTheMonth - Days of the month to repeat the rule. Values range from 1 to 31 and from -1 to -31.
     * @param {number[]} setPositions - Filters which recurrences to include in the rule's frequency.
     * @param {number} occurrenceCount - Number of times the rule should repeat before it ends.
     *
     * @returns {RecurrenceRule} Constructed recurrence rule.
     */
    public complexMonthlyOccurrenceCount(interval: number, daysOfTheWeek: number[], daysOfTheMonth: number[], setPositions: number[], occurrenceCount: number): RecurrenceRule;

    /**
     * Constructs a complex yearly recurrence rule.
     *
     * @param {number} interval - Interval at which to repeat the rule.
     * @param {number[]} daysOfTheWeek - Days of the week to repeat the rule. Values range from 1 to 7, with Sunday being 1.
     * @param {number[]} monthsOfTheYear - The months of the year to repeat the rule. Values range from 1 to 12.
     * @param {number[]} weeksOfTheYear - The weeks of the year to repeat the rule. Values range from 1 to 53 and -1 to -53.
     * @param {number[]} daysOfTheYear - The days of the year to repeat the rule. Values range from 1 to 366 and -1 to -366.
     * @param {number[]} setPositions - Filters which recurrences to include in the rule's frequency.
     *
     * @returns {RecurrenceRule} Constructed recurrence rule.
     */
    public complexYearly(interval: number, daysOfTheWeek: number[], monthsOfTheYear: number[], weeksOfTheYear: number[], daysOfTheYear: number[], setPositions: number[]): RecurrenceRule;

    /**
     * Constructs a complex yearly recurrence rule with an end date.
     *
     * @param {number} interval - Interval at which to repeat the rule.
     * @param {number[]} daysOfTheWeek - Days of the week to repeat the rule. Values range from 1 to 7, with Sunday being 1.
     * @param {number[]} monthsOfTheYear - The months of the year to repeat the rule. Values range from 1 to 12.
     * @param {number[]} weeksOfTheYear - The weeks of the year to repeat the rule. Values range from 1 to 53 and -1 to -53.
     * @param {number[]} daysOfTheYear - The days of the year to repeat the rule. Values range from 1 to 366 and -1 to -366.
     * @param {number[]} setPositions - Filters which recurrences to include in the rule's frequency.
     * @param {Date} endDate - Date at which the recurrence rule should end.
     *
     * @returns {RecurrenceRule} Constructed recurrence rule.
     */
    public complexYearlyEndDate(interval: number, daysOfTheWeek: number[], monthsOfTheYear: number[], weeksOfTheYear: number[], daysOfTheYear: number[], setPositions: number[], endDate: Date): RecurrenceRule;

    /**
     * Constructs a complex yearly recurrence rule with an occurrence count.
     *
     * @param {number} interval - Interval at which to repeat the rule.
     * @param {number[]} daysOfTheWeek - Days of the week to repeat the rule. Values range from 1 to 7, with Sunday being 1.
     * @param {number[]} monthsOfTheYear - The months of the year to repeat the rule. Values range from 1 to 12.
     * @param {number[]} weeksOfTheYear - The weeks of the year to repeat the rule. Values range from 1 to 53 and -1 to -53.
     * @param {number[]} daysOfTheYear - The days of the year to repeat the rule. Values range from 1 to 366 and -1 to -366.
     * @param {number[]} setPositions - Filters which recurrences to include in the rule's frequency.
     * @param {number} occurrenceCount - Number of times the rule should repeat before it ends.
     *
     * @returns {RecurrenceRule} Constructed recurrence rule.
     */
    public complexYearlyOccurrenceCount(interval: number, daysOfTheWeek: number[], monthsOfTheYear: number[], weeksOfTheYear: number[], daysOfTheYear: number[], setPositions: number[], occurrenceCount: number): RecurrenceRule;
}