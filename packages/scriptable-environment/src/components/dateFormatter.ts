/**
 * Converts between dates and strings.
 *
 * The date formatter can convert between dates and their textual representations.
 */
export declare class DateFormatter {

    /**
     * Date format to be used by the formatter.
     *
     * Sets a fixed format to be used by the formatter. For example the date "2019-08-26 16:47" can be represented using the format "yyyy-MM-dd HH:mm".
     *
     * When converting dates to strings, it's advised to use some of the predefined formats for dates and times that can be applied using functions on the formatter, e.g. useMediumDateStyle() and useMediumTimeStyle().
     *
     * Year:
     *  - y: Year with no padding. Example: "2019"
     *  - yy: Year with two zeros. Adds padding if necessary. Example: "19"
     *  - yyyy: Year with a minimum of four digits. Adds padding if necessary. Example: "2019"
     *
     * Quarter:
     *  - Q: Quarter of the year. Example: "4"
     *  - QQQQ: Quarter spelled out. Example: "4th quarter"
     *
     * Month:
     *  - M: Numeric month of the year. Example: "1"
     *  - MM: Numeric month of the year. Adds padding if necessary. Example: "01"
     *  - MMM: Shorthand name of the month. Example: "Jan"
     *  - MMMM: Full name of the month. Example: "January"
     *  - MMMMM: Narrow name of the month. Example: "J"
     *
     * Day:
     *  - d: Day of the month. Example: "9"
     *  - dd: Day of the month. Adds padding if necessary. Example: "09"
     *  - F: Day of the week. Example: "3rd Friday in August"
     *  - E: Day of the week. Example: "Fri"
     *  - EEEE: Full name of the day. Example: "Friday"
     *  - EEEEE: Narrow day of the week. Example: "F"
     *
     * Hour:
     *  - h: Hour on a 12-hour clock. Example: "9"
     *  - hh: Hour on a 12-hour clock. Adds padding if necessary. Example: "09"
     *  - H: Hour on a 24-hour clock. Example: "21"
     *  - HH: Hour on a 24-hour clock. Adds padding if necessary. Example: "21"
     *  - a: AM/PM for times on a 12-hour clock. Example: "PM"
     *
     * Minute:
     *  - m: Minute. Example: "7"
     *  - mm: Minute. Adds padding if necessary. Example: "07"
     *
     * Second:
     *  - s: Seconds. Example: "4"
     *  - ss: Seconds. Adds padding if necessary. Example: "04"
     *  - SSS: Milliseconds. Example: "384"
     *
     * Time zone:
     *  - zzz: Three letter name of the time zone. Falls back to GMT-08:00 if the name is unknown. Example: "CST"
     *  - zzzz: Full name of the time zone. Falls back to GMT-08:00 if the name is unknown. Example: "Central Standard Time"
     *  - Z: Time zone in RFC 822 GMT format. Also matches a literal Z for Zulu (UTC) time. Example: "-0600"
     *  - ZZZZ: Time zone with abbreviation and offset. Example: "CST-06:00"
     *  - ZZZZZ: Time zone in ISO 8601 format. Example: "-06:00"
     *
     * A great resource for experimenting with date formats is nsdateformatter.com developed by Ben Scheirman.
     */
    public dateFormat: string;

    /**
     * Locale to use when formatting.
     *
     * The locale should be specified using a string identifier, e.g. "en", "it" or "da". When no locale is set, the formatter will use the current locale of the device.
     */
    public locale: string;

    /**
     * Constructs a date formatter.
     */
    public new(): DateFormatter;

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
     * Use no style for the date.
     *
     * This will remove the date from the formatted string.
     */
    public useNoDateStyle(): void;

    /**
     * Use a short style for the date.
     *
     * Dates with a short style are typically numeric only e.g. "08/23/19".
     */
    public useShortDateStyle(): void;

    /**
     * Use a medium style for the date.
     * Dates with a medium style usually includes abbreviations, e.g. "Aug 23, 2019" or "7:16:42 PM".
     */
    public useMediumDateStyle(): void;

    /**
     * Use a long style for the date.
     * Dates with a long style usually includes a full text, e.g. "August 23, 2019".
     */
    public useLongDateStyle(): void;

    /**
     * Use a full style for the date.
     * Dates with a full style includes all details, e.g. "Friday, August 23, 2019 AD".
     */
    public useFullDateStyle(): void;

    /**
     * Use no style for the time.
     * This will remove the time from the formatted string.
     */
    public useNoTimeStyle(): void;

    /**
     * Use a short style for the time. 
     *
     * Times with a short style are typically numeric only but also includes the period for 12-hour clocks, e.g. "7:17 PM".
     */
    public useShortTimeStyle(): void;

    /**
     * Use a short style for the time.
     *
     * Times with a medium style usually includes abbreviations, e.g. "7:16:42 PM".
     */
    public useMediumTimeStyle(): void;

    /**
     * Use a long style for the time.
     *
     * Times with a long style usually includes a full text, e.g. "7:16:42 PM PST".
     */
    public useLongTimeStyle(): void;

    /**
     * Use a full style for the time.
     *
     * Times with a full style includes all details, e.g. "7:16:42 PM Pacific Standard Time".
     */
    public useFullTimeStyle(): void;
}
