/**
 * Converts between dates and strings.
 *
 * The date formatter can convert between dates and their textual representations.
 */
export declare class DateFormatter {
    /**
     * Date format to be used by the formatter.
     *
     * Sets a fixed format to be used by the formatter. For example the date "2019-08-2616:47" can be represented using the format "yyyy-MM-dd HH:mm".
     *
     * When converting dates to strings, it's advised to use some of the predefined formats
     * for dates and times that can be applied using functions on the formatter, e.g. useMediumDateStyle()and useMediumTimeStyle().
     *
     * Year:
     *
     * Quarter:
     *
     * Month:
     *
     * Day:
     *
     * Hour:
     *
     * Minute:
     *
     * Second:
     *
     * Time zone:
     *
     * A great resource for experimenting with date formats is nsdateformatter.com developedby Ben Scheirman.
     */
    dateFormat: string;

    /**
     * Locale to use when formatting.
     *
     * The locale should be specified using a string identifier, e.g. "en", "it" or "da".When no locale is set, the formatter will use the current locale of the device.
     */
    locale: string;

    /**
     * Constructs a date formatter.
     *
     * To convert between dates and their textual representation, use the string() and date()functions.
     */
    constructor();

    /**
     * Creates a string from a date.
     *
     * @param date {Date} - The date to convert to a string.
     */
    string(date: Date): string;

    /**
     * Creates a date from a string.
     *
     * Uses the date formatters configuration to parse the string into a date. If the string
     * cannot be parsed with the date foramtters configuration, the function will returnnull.
     *
     * @param str {string} - The string to parse into a date.
     */
    date(str: string): Date;

    /**
     * Use no style for the date.
     *
     * This will remove the date from the formatted string.
     */
    useNoDateStyle(): void;

    /**
     * Use a short style for the date.
     *
     * Dates with a short style are typically numeric only e.g. "08/23/19".
     */
    useShortDateStyle(): void;

    /**
     * Use a medium style for the date.
     *
     * Dates with a medium style usually includes abbreviations, e.g. "Aug 23, 2019" or"7:16:42 PM".
     */
    useMediumDateStyle(): void;

    /**
     * Use a long style for the date.
     *
     * Dates with a long style usually includes a full text, e.g. "August 23, 2019".
     */
    useLongDateStyle(): void;

    /**
     * Use a full style for the date.
     *
     * Dates with a full style includes all details, e.g. "Friday, August 23, 2019 AD".
     */
    useFullDateStyle(): void;

    /**
     * Use no style for the time.
     *
     * This will remove the time from the formatted string.
     */
    useNoTimeStyle(): void;

    /**
     * Use a short style for the time.
     *
     * Times with a short style are typically numeric only but also includes the periodfor 12-hour clocks, e.g. "7:17 PM".
     */
    useShortTimeStyle(): void;

    /**
     * Use a short style for the time.
     *
     * Times with a medium style usually includes abbreviations, e.g. "7:16:42 PM".
     */
    useMediumTimeStyle(): void;

    /**
     * Use a long style for the time.
     *
     * Times with a long style usually includes a full text, e.g. "7:16:42 PM PST".
     */
    useLongTimeStyle(): void;

    /**
     * Use a full style for the time.
     *
     * Times with a full style includes all details, e.g. "7:16:42 PM Pacific Standard Time".
     */
    useFullTimeStyle(): void;
}
