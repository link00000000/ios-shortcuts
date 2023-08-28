/**
 * Converts between dates and strings.
 *
 * The date formatter can convert between dates and their textual representations.
 */
export declare class DateFormatter {

    /**
     * Date format to be used by the formatter.
     */
    public dateFormat: string;

    /**
     * Locale to use when formatting.
     */
    public locale: string;

    /**
     * Constructs a date formatter.     */
    public DateFormatter(): void;

    /**
     * Creates a string from a date.
     *
     * @param {Date} date - The date to convert to a string.
     *
     * @returns {string} A textual representation of the date.
     */
    public string(date: Date): string;

    /**
     * Creates a date from a string.
     *
     * @param {string} str - The string to parse into a date.
     *
     * @returns {Date} A date representation of the string or null if the string could not be parsed.
     */
    public date(str: string): Date;

    /**
     * Use no style for the date.     */
    public useNoDateStyle(): void;

    /**
     * Use a short style for the date.     */
    public useShortDateStyle(): void;

    /**
     * Use a medium style for the date.     */
    public useMediumDateStyle(): void;

    /**
     * Use a long style for the date.     */
    public useLongDateStyle(): void;

    /**
     * Use a full style for the date.     */
    public useFullDateStyle(): void;

    /**
     * Use no style for the time.     */
    public useNoTimeStyle(): void;

    /**
     * Use a short style for the time.     */
    public useShortTimeStyle(): void;

    /**
     * Use a short style for the time.     */
    public useMediumTimeStyle(): void;

    /**
     * Use a long style for the time.     */
    public useLongTimeStyle(): void;

    /**
     * Use a full style for the time.     */
    public useFullTimeStyle(): void;
}
