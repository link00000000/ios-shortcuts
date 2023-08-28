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
     */
    public minimumDate: Date;

    /**
     * Maximum date that is selected in the picker.
     */
    public maximumDate: Date;

    /**
     * Countdown duration displayed by the date picker.
     */
    public countdownDuration: number;

    /**
     * Interval at which the date picker displays minutes.
     */
    public minuteInterval: number;

    /**
     * The initially selected date.
     */
    public initialDate: Date;

    /**
     * Constructs a new date picker.     */
    public DatePicker(): void;

    /**
     * Presents the date picker displaying hours and minutes.
     *
     * @returns {Promise<Date>} Promise that carries the selected time when fulfilled.
     */
    public pickTime(): Promise<Date>;

    /**
     * Presents the date picker displaying day, month and year.
     *
     * @returns {Promise<Date>} Promise that carries the selected date when fulfilled.
     */
    public pickDate(): Promise<Date>;

    /**
     * Presents the date picker displaying date and time.
     *
     * @returns {Promise<Date>} Promise that carries the selected date and time when fulfilled.
     */
    public pickDateAndTime(): Promise<Date>;

    /**
     * Presents the date picker for selecting the duration of a countdown.
     *
     * @returns {Promise<number>} Promise that carries the selected duration when fulfilled.
     */
    public pickCountdownDuration(): Promise<number>;
}
