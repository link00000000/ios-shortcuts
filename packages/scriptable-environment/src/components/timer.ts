/**
 * A timer that fires after a time interval has elapsed.
 *
 * The timer fires after a specified time interval has elapsed. The timer can be repeatingin which case it will fire multiple times.
 */
export declare class Timer {

    /**
     * The frequency at which the timer fires, in milliseconds.
     */
    public timeInterval: number;

    /**
     * Whether the timer should repeat.
     */
    public repeats: boolean;

    /**
     * Constructs a timer.     */
    public Timer(): void;

    /**
     * Schedules the timer.
     *
     * @param {fn()} callback - The callback to be called when the timer fires.     */
    public schedule(callback: fn): void;

    /**
     * Stops the timer from firing.     */
    public invalidate(): void;

    /**
     * Schedules a timer.
     *
     * @param {number} timeInterval - The time interval to fire the timer at.
     * @param {boolean} repeats - Whether the timer should repeat or not.
     * @param {fn()} callback - The callback to be called when the timer fires.
     *
     * @returns {Timer} The constructed timer.
     */
    public schedule(timeInterval: number, repeats: boolean, callback: fn): Timer;
}
