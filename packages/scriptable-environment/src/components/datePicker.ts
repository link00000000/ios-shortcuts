/**
 * Presents a date picker.
 *
 * Use the date picker to select a date. After configuring the date picker, call pickTime(),
 * pickDate(), pickDateAndTime() or pickCountDownTimer() which will present the date
 * picker modally. The pickTime(), pickDate() and pickDateAndTime() methods returns
 * a promise that carries the selected date and the pickCountDownTimer() method retrnsa promise that carries the selected duration.
 *
 * The date picker can be configured towards picking a date with or without time, justa time or picking hours and minutes for a timer.
 */
export declare class DatePicker {
    /**
     * Minimum date that is selected in the picker.
     *
     * The minimum date, along with the maximum date, specifies the valid date range. The
     * minimum and maximum dates are ignored if the minimum date is greater than the maximumdate. The dates are also ignored in countdown-timer mode.
     */
    minimumDate: Date;

    /**
     * Maximum date that is selected in the picker.
     *
     * The maximum date, along with the minimum date, specifies the valid date range. The
     * minimum and maximum dates are ignored if the minimum date is greater than the maximumdate. The dates are also ignored in countdown-timer mode.
     */
    maximumDate: Date;

    /**
     * Countdown duration displayed by the date picker.
     *
     * Use this property to get and set the duration of a countdown when calling the pickCountDownDuration()
     * function to present the picker. The default value is zero and the maximum value is23:59 (86,399 seconds).
     */
    countdownDuration: number;

    /**
     * Interval at which the date picker displays minutes.
     *
     * Use the property to set the interval of the minute wheel. The default and minimumvalue is 1 and the maximum value is 30.
     */
    minuteInterval: number;

    /**
     * The initially selected date.
     *
     * Use this property to specify the initially selected date and time when picking a
     * date, a time or both using date picker. If no date is specified, the current dateand time will be selected initially.
     *
     * Be aware that this property does not hold the selected date after the date picker
     * has been dismissed. The promises returned by pickTime(), pickDate() and PickDateAndTime()carries the selected date.
     */
    initialDate: Date;

    /**
     * Constructs a new date picker.
     *
     * Use the date picker to present a view for selecting a date.
     *
     * The date picker can be configured towards picking a date with or
     * without time, just a time or picking hours and minutes for a timer.
     */
    constructor();

    /**
     * Presents the date picker displaying hours and minutes.
     *
     * Use the method to pick a time. The date picker will display hours and minutes and,depending on the locale of the device, an AM/PM designation.
     *
     * The returned date will be the current date with the hour and minute set to the selectedvalues. Use the initialDate property to set the initially selected date.
     */
    pickTime(): Promise<Date>;

    /**
     * Presents the date picker displaying day, month and year.
     *
     * Use the method to pick a date. The date picker will display the,
     * day, month and year. Use the initialDate property to set the initially selected date.
     */
    pickDate(): Promise<Date>;

    /**
     * Presents the date picker displaying date and time.
     *
     * Use the method to pick a date and a time. The date picker will display the day, month,
     * year, hour, minutes and, depending on the locale of the device, an AM/PM designation.Use the initialDate property to set the initially selected date.
     */
    pickDateAndTime(): Promise<Date>;

    /**
     * Presents the date picker for selecting the duration of a countdown.
     *
     * Use the method to pick the duration of a countdown, e.g. a timer. The date picker
     * will display hours and minutes. Use the countdownDuration property to set the initiallyselected duration.
     */
    pickCountdownDuration(): Promise<number>;
}
