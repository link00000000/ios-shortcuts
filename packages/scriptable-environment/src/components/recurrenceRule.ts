/**
 * Recurrence rule used with reminders and calendar events.
 *
 * A recurrence rule specifies how often a reminder or a calendar event should repeat.
 */
export declare class RecurrenceRule {
    /**
     * Constructs a daily recurrence rule.
     *
     * The interval should have a value greater than 0 and specifies how often the pattern
     * repeats. For example, an interval of 1 specifies that the rule should repeat everyday and a value of 3 specifies that the rule should repeat every third day.
     *
     * @param interval {number} - Interval at which to repeat the rule.
     */
    static daily(interval: number): RecurrenceRule;

    /**
     * Constructs a daily recurrence rule with an end date.
     *
     * The interval should have a value greater than 0 and specifies how often the pattern
     * repeats. For example, an interval of 1 specifies that the rule should repeat everyday and a value of 3 specifies that the rule should repeat every third day.
     *
     * @param interval {number} - Interval at which to repeat the rule.
     * @param endDate {Date} - Date at which the recurrence rule should end.
     */
    static dailyEndDate(interval: number, endDate: Date): RecurrenceRule;

    /**
     * Constructs a daily recurrence rule with an occurrence count.
     *
     * The interval should have a value greater than 0 and specifies how often the pattern
     * repeats. For example, an interval of 1 specifies that the rule should repeat everyday and a value of 3 specifies that the rule should repeat every third day.
     *
     * @param interval {number} - Interval at which to repeat the rule.
     * @param occurrenceCount {number} - Number of times the rule should repeat before itends.
     */
    static dailyOccurrenceCount(interval: number, occurrenceCount: number): RecurrenceRule;

    /**
     * Constructs a weekly recurrence rule.
     *
     * The interval should have a value greater than 0 and specifies how often the pattern
     * repeats. For example, an interval of 1 specifies that the rule should repeat everyweek and a value of 3 specifies that the rule should repeat every third week.
     *
     * @param interval {number} - Interval at which to repeat the rule.
     */
    static weekly(interval: number): RecurrenceRule;

    /**
     * Constructs a weekly recurrence rule with an end date.
     *
     * The interval should have a value greater than 0 and specifies how often the pattern
     * repeats. For example, an interval of 1 specifies that the rule should repeat everyweek and a value of 3 specifies that the rule should repeat every third week.
     *
     * @param interval {number} - Interval at which to repeat the rule.
     * @param endDate {Date} - Date at which the recurrence rule should end.
     */
    static weeklyEndDate(interval: number, endDate: Date): RecurrenceRule;

    /**
     * Constructs a weekly recurrence rule with an occurrence count.
     *
     * The interval should have a value greater than 0 and specifies how often the pattern
     * repeats. For example, an interval of 1 specifies that the rule should repeat everyweek and a value of 3 specifies that the rule should repeat every third week.
     *
     * @param interval {number} - Interval at which to repeat the rule.
     * @param occurrenceCount {number} - Number of times the rule should repeat before itends.
     */
    static weeklyOccurrenceCount(interval: number, occurrenceCount: number): RecurrenceRule;

    /**
     * Constructs a monthly recurrence rule.
     *
     * The interval should have a value greater than 0 and specifies how often the pattern
     * repeats. For example, an interval of 1 specifies that the rule should repeat everymonth and a value of 3 specifies that the rule should repeat every third month.
     *
     * @param interval {number} - Interval at which to repeat the rule.
     */
    static monthly(interval: number): RecurrenceRule;

    /**
     * Constructs a monthly recurrence rule with an end date.
     *
     * The interval should have a value greater than 0 and specifies how often the pattern
     * repeats. For example, an interval of 1 specifies that the rule should repeat everymonth and a value of 3 specifies that the rule should repeat every third month.
     *
     * @param interval {number} - Interval at which to repeat the rule.
     * @param endDate {Date} - Date at which the recurrence rule should end.
     */
    static monthlyEndDate(interval: number, endDate: Date): RecurrenceRule;

    /**
     * Constructs a monthly recurrence rule with an occurrence count.
     *
     * The interval should have a value greater than 0 and specifies how often the pattern
     * repeats. For example, an interval of 1 specifies that the rule should repeat everymonth and a value of 3 specifies that the rule should repeat every third month.
     *
     * @param interval {number} - Interval at which to repeat the rule.
     * @param occurrenceCount {number} - Number of times the rule should repeat before itends.
     */
    static monthlyOccurrenceCount(interval: number, occurrenceCount: number): RecurrenceRule;

    /**
     * Constructs a yearly recurrence rule.
     *
     * The interval should have a value greater than 0 and specifies how often the pattern
     * repeats. For example, an interval of 1 specifies that the rule should repeat everyyear and a value of 3 specifies that the rule should repeat every third year.
     *
     * @param interval {number} - Interval at which to repeat the rule.
     */
    static yearly(interval: number): RecurrenceRule;

    /**
     * Constructs a yearly recurrence rule with an end date.
     *
     * The interval should have a value greater than 0 and specifies how often the pattern
     * repeats. For example, an interval of 1 specifies that the rule should repeat everyyear and a value of 3 specifies that the rule should repeat every third year.
     *
     * @param interval {number} - Interval at which to repeat the rule.
     * @param endDate {Date} - Date at which the recurrence rule should end.
     */
    static yearlyEndDate(interval: number, endDate: Date): RecurrenceRule;

    /**
     * Constructs a yearly recurrence rule with an occurrence count.
     *
     * The interval should have a value greater than 0 and specifies how often the pattern
     * repeats. For example, an interval of 1 specifies that the rule should repeat everyyear and a value of 3 specifies that the rule should repeat every third year.
     *
     * @param interval {number} - Interval at which to repeat the rule.
     * @param occurrenceCount {number} - Number of times the rule should repeat before itends.
     */
    static yearlyOccurrenceCount(interval: number, occurrenceCount: number): RecurrenceRule;

    /**
     * Constructs a complex weekly recurrence rule.
     *
     * The interval should have a value greater than 0 and specifies how often the pattern
     * repeats. For example, an interval of 1 specifies that the rule should repeat everyweek and a value of 3 specifies that the rule should repeat every third week.
     *
     * The setPositions filters which recurrences to include in the rule's frequency. For
     * example, a yearly recurrence rule that has a daysOfTheWeek value that specifies Monday
     * through Friday and setPositions contain 2 and -1, occurs only on the second weekdayand last weekday of every year.
     *
     * @param interval {number} - Interval at which to repeat the rule.
     * @param daysOfTheWeek {number[]} - Days of the week to repeat the rule. Values rangefrom 1 to 7, with Sunday being 1.
     * @param setPositions {number[]} - Filters which recurrences to include in the rule'sfrequency.
     */
    static complexWeekly(interval: number, daysOfTheWeek: number[], setPositions: number[]): RecurrenceRule;

    /**
     * Constructs a complex weekly recurrence rule with an end date.
     *
     * The interval should have a value greater than 0 and specifies how often the pattern
     * repeats. For example, an interval of 1 specifies that the rule should repeat everyweek and a value of 3 specifies that the rule should repeat every third week.
     *
     * The setPositions filters which recurrences to include in the rule's frequency. For
     * example, a yearly recurrence rule that has a daysOfTheWeek value that specifies Monday
     * through Friday and setPositions contain 2 and -1, occurs only on the second weekdayand last weekday of every year.
     *
     * @param interval {number} - Interval at which to repeat the rule.
     * @param daysOfTheWeek {number[]} - Days of the week to repeat the rule. Values rangefrom 1 to 7, with Sunday being 1.
     * @param setPositions {number[]} - Filters which recurrences to include in the rule'sfrequency.
     * @param endDate {Date} - Date at which the recurrence rule should end.
     */
    static complexWeeklyEndDate(interval: number, daysOfTheWeek: number[], setPositions: number[], endDate: Date): RecurrenceRule;

    /**
     * Constructs a complex weekly recurrence rule with an occurrence count.
     *
     * The interval should have a value greater than 0 and specifies how often the pattern
     * repeats. For example, an interval of 1 specifies that the rule should repeat everyweek and a value of 3 specifies that the rule should repeat every third week.
     *
     * The setPositions filters which recurrences to include in the rule's frequency. For
     * example, a yearly recurrence rule that has a daysOfTheWeek value that specifies Monday
     * through Friday and setPositions contain 2 and -1, occurs only on the second weekdayand last weekday of every year.
     *
     * @param interval {number} - Interval at which to repeat the rule.
     * @param daysOfTheWeek {number[]} - Days of the week to repeat the rule. Values rangefrom 1 to 7, with Sunday being 1.
     * @param setPositions {number[]} - Filters which recurrences to include in the rule'sfrequency.
     * @param occurrenceCount {number} - Number of times the rule should repeat before itends.
     */
    static complexWeeklyOccurrenceCount(interval: number, daysOfTheWeek: number[], setPositions: number[], occurrenceCount: number): RecurrenceRule;

    /**
     * Constructs a complex monthly recurrence rule.
     *
     * The interval should have a value greater than 0 and specifies how often the pattern
     * repeats. For example, an interval of 1 specifies that the rule should repeat everymonth and a value of 3 specifies that the rule should repeat every third month.
     *
     * The setPositions filters which recurrences to include in the rule's frequency. For
     * example, a yearly recurrence rule that has a daysOfTheWeek value that specifies Monday
     * through Friday and setPositions contain 2 and -1, occurs only on the second weekdayand last weekday of every year.
     *
     * @param interval {number} - Interval at which to repeat the rule.
     * @param daysOfTheWeek {number[]} - Days of the week to repeat the rule. Values rangefrom 1 to 7, with Sunday being 1.
     * @param daysOfTheMonth {number[]} - Days of the month to repeat the rule. Values rangefrom 1 to 31 and from -1 to -31.
     * @param setPositions {number[]} - Filters which recurrences to include in the rule'sfrequency.
     */
    static complexMonthly(interval: number, daysOfTheWeek: number[], daysOfTheMonth: number[], setPositions: number[]): RecurrenceRule;

    /**
     * Constructs a complex monthly recurrence rule with an end date.
     *
     * The interval should have a value greater than 0 and specifies how often the pattern
     * repeats. For example, an interval of 1 specifies that the rule should repeat everymonth and a value of 3 specifies that the rule should repeat every third month.
     *
     * The setPositions filters which recurrences to include in the rule's frequency. For
     * example, a yearly recurrence rule that has a daysOfTheWeek value that specifies Monday
     * through Friday and setPositions contain 2 and -1, occurs only on the second weekdayand last weekday of every year.
     *
     * @param interval {number} - Interval at which to repeat the rule.
     * @param daysOfTheWeek {number[]} - Days of the week to repeat the rule. Values rangefrom 1 to 7, with Sunday being 1.
     * @param daysOfTheMonth {number[]} - Days of the month to repeat the rule. Values rangefrom 1 to 31 and from -1 to -31.
     * @param setPositions {number[]} - Filters which recurrences to include in the rule'sfrequency.
     * @param endDate {Date} - Date at which the recurrence rule should end.
     */
    static complexMonthlyEndDate(interval: number, daysOfTheWeek: number[], daysOfTheMonth: number[], setPositions: number[], endDate: Date): RecurrenceRule;

    /**
     * Constructs a complex monthly recurrence rule with an occurrence count.
     *
     * The interval should have a value greater than 0 and specifies how often the pattern
     * repeats. For example, an interval of 1 specifies that the rule should repeat everymonth and a value of 3 specifies that the rule should repeat every third month.
     *
     * The setPositions filters which recurrences to include in the rule's frequency. For
     * example, a yearly recurrence rule that has a daysOfTheWeek value that specifies Monday
     * through Friday and setPositions contain 2 and -1, occurs only on the second weekdayand last weekday of every year.
     *
     * @param interval {number} - Interval at which to repeat the rule.
     * @param daysOfTheWeek {number[]} - Days of the week to repeat the rule. Values rangefrom 1 to 7, with Sunday being 1.
     * @param daysOfTheMonth {number[]} - Days of the month to repeat the rule. Values rangefrom 1 to 31 and from -1 to -31.
     * @param setPositions {number[]} - Filters which recurrences to include in the rule'sfrequency.
     * @param occurrenceCount {number} - Number of times the rule should repeat before itends.
     */
    static complexMonthlyOccurrenceCount(interval: number, daysOfTheWeek: number[], daysOfTheMonth: number[], setPositions: number[], occurrenceCount: number): RecurrenceRule;

    /**
     * Constructs a complex yearly recurrence rule.
     *
     * The interval should have a value greater than 0 and specifies how often the pattern
     * repeats. For example, an interval of 1 specifies that the rule should repeat everyyear and a value of 3 specifies that the rule should repeat every third year.
     *
     * The setPositions filters which recurrences to include in the rule's frequency. For
     * example, a yearly recurrence rule that has a daysOfTheWeek value that specifies Monday
     * through Friday and setPositions contain 2 and -1, occurs only on the second weekdayand last weekday of every year.
     *
     * @param interval {number} - Interval at which to repeat the rule.
     * @param daysOfTheWeek {number[]} - Days of the week to repeat the rule. Values rangefrom 1 to 7, with Sunday being 1.
     * @param monthsOfTheYear {number[]} - The months of the year to repeat the rule. Valuesrange from 1 to 12.
     * @param weeksOfTheYear {number[]} - The weeks of the year to repeat the rule. Valuesrange from 1 to 53 and -1 to -53.
     * @param daysOfTheYear {number[]} - The days of the year to repeat the rule. Valuesrange from 1 to 366 and -1 to -366.
     * @param setPositions {number[]} - Filters which recurrences to include in the rule'sfrequency.
     */
    static complexYearly(interval: number, daysOfTheWeek: number[], monthsOfTheYear: number[], weeksOfTheYear: number[], daysOfTheYear: number[], setPositions: number[]): RecurrenceRule;

    /**
     * Constructs a complex yearly recurrence rule with an end date.
     *
     * The interval should have a value greater than 0 and specifies how often the pattern
     * repeats. For example, an interval of 1 specifies that the rule should repeat everyyear and a value of 3 specifies that the rule should repeat every third week.
     *
     * The setPositions filters which recurrences to include in the rule's frequency. For
     * example, a yearly recurrence rule that has a daysOfTheWeek value that specifies Monday
     * through Friday and setPositions contain 2 and -1, occurs only on the second weekdayand last weekday of every year.
     *
     * @param interval {number} - Interval at which to repeat the rule.
     * @param daysOfTheWeek {number[]} - Days of the week to repeat the rule. Values rangefrom 1 to 7, with Sunday being 1.
     * @param monthsOfTheYear {number[]} - The months of the year to repeat the rule. Valuesrange from 1 to 12.
     * @param weeksOfTheYear {number[]} - The weeks of the year to repeat the rule. Valuesrange from 1 to 53 and -1 to -53.
     * @param daysOfTheYear {number[]} - The days of the year to repeat the rule. Valuesrange from 1 to 366 and -1 to -366.
     * @param setPositions {number[]} - Filters which recurrences to include in the rule'sfrequency.
     * @param endDate {Date} - Date at which the recurrence rule should end.
     */
    static complexYearlyEndDate(interval: number, daysOfTheWeek: number[], monthsOfTheYear: number[], weeksOfTheYear: number[], daysOfTheYear: number[], setPositions: number[], endDate: Date): RecurrenceRule;

    /**
     * Constructs a complex yearly recurrence rule with an occurrence count.
     *
     * The interval should have a value greater than 0 and specifies how often the pattern
     * repeats. For example, an interval of 1 specifies that the rule should repeat everyyear and a value of 3 specifies that the rule should repeat every third year.
     *
     * The setPositions filters which recurrences to include in the rule's frequency. For
     * example, a yearly recurrence rule that has a daysOfTheWeek value that specifies Monday
     * through Friday and setPositions contain 2 and -1, occurs only on the second weekdayand last weekday of every year.
     *
     * @param interval {number} - Interval at which to repeat the rule.
     * @param daysOfTheWeek {number[]} - Days of the week to repeat the rule. Values rangefrom 1 to 7, with Sunday being 1.
     * @param monthsOfTheYear {number[]} - The months of the year to repeat the rule. Valuesrange from 1 to 12.
     * @param weeksOfTheYear {number[]} - The weeks of the year to repeat the rule. Valuesrange from 1 to 53 and -1 to -53.
     * @param daysOfTheYear {number[]} - The days of the year to repeat the rule. Valuesrange from 1 to 366 and -1 to -366.
     * @param setPositions {number[]} - Filters which recurrences to include in the rule'sfrequency.
     * @param occurrenceCount {number} - Number of times the rule should repeat before itends.
     */
    static complexYearlyOccurrenceCount(interval: number, daysOfTheWeek: number[], monthsOfTheYear: number[], weeksOfTheYear: number[], daysOfTheYear: number[], setPositions: number[], occurrenceCount: number): RecurrenceRule;
}
