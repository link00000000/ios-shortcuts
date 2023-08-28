/**
 * Creates a textual representation of the amount of time between two dates.
 *
 * The relative date formatter takes two dates as input and creates a textual representation
 * that communicates the relative time between the two dates, e.g. "yesterday" and "in1 week".
 */
export declare class RelativeDateTimeFormatter {

    /**
     * Locale to use when formatting.
     */
    public locale: string;

    /**
     * Constructs a relative date and time formatter.     */
    public RelativeDateTimeFormatter(): void;

    /**
     * Creates a localized string communicating the amount of time between two dates.
     *
     * @param {Date} date - The date to create a relative date and time for.
     * @param {Date} referenceDate - is relative to.
     *
     * @returns {string} A textual representation of the amount of time between the two dates.
     */
    public string(date: Date, referenceDate: Date): string;

    /**
     * Prefers named dates and times.     */
    public useNamedDateTimeStyle(): void;

    /**
     * Prefers numeric dates and times.     */
    public useNumericDateTimeStyle(): void;
}
