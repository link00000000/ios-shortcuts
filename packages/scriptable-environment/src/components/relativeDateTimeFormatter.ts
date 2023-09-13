/**
 * Creates a textual representation of the amount of time between two dates.
 *
 * The relative date formatter takes two dates as input and creates a textual representation
 * that communicates the relative time between the two dates, e.g. "yesterday" and "in1 week".
 */
export declare class RelativeDateTimeFormatter {
    /**
     * Locale to use when formatting.
     *
     * The locale should be specified using a string identifier, e.g. "en", "it" or "da".When no locale is set, the formatter will use the current locale of the device.
     */
    locale: string;

    /**
     * Constructs a relative date and time formatter.
     *
     * The formatter creates a textual representation of the time between two points intime.
     */
    constructor();

    /**
     * Creates a localized string communicating the amount of time between two dates.
     *
     * Creates a localized textual representation of the amount of time between to dates.
     * If the two dates are the same, the function will return "now". If the reference date
     * is yesterday, the function will return "yesterday". Other examples include "in 10seconds", "2 hours ago", "last week" and "next year".
     *
     * @param date {Date} - The date to create a relative date and time for.
     * @param referenceDate {Date} - The reference date that is relative to.
     */
    string(date: Date, referenceDate: Date): string;

    /**
     * Prefers named dates and times.
     *
     * When using the named style, the formatter tries to find a suitable textual representation
     * over a numeric value for the relative time, e.g. "now" instead of "in 0 seconds"and "yesterday" instead of "1 day ago".
     *
     * When no named representation is found the formatter will fallback to using the numericstyle.
     */
    useNamedDateTimeStyle(): void;

    /**
     * Prefers numeric dates and times.
     *
     * When using the numeric style, the formatter will always prefer numeric representations
     * over named representations. E.g. it will return "in 0 seconds" instead of "now" and"1 day ago" instead of "yesteday".
     */
    useNumericDateTimeStyle(): void;
}
