/**
 * A timer that fires after a time interval has elapsed.
 *
 * The timer fires after a specified time interval has elapsed. The timer can be repeatingin which case it will fire multiple times.
 */
export declare class Timer {
    /**
     * The frequency at which the timer fires, in milliseconds.
     *
     * Be aware that the time interval is specified in setting. Defaults to 0, causing thetimer to fire instantly.
     */
    timeInterval: number;

    /**
     * Whether the timer should repeat.
     *
     * A repeating timer will keep firing until it is invalidated. In contrast to non-repeatingtimers, repeating timers are not automatically invalidated. Defaults to false.
     */
    repeats: boolean;

    /**
     * Constructs a timer.
     *
     * Constructs a timer that fires after a specified time interval.
     */
    constructor();

    /**
     * Schedules the timer.
     *
     * Schedules the timer using its configuration. The supplied function is called whenthe timer fires. To stop the timer from firing, call the invalidate() function.
     *
     * @param callback {() => void} - The callback to be called when the timer fires.
     */
    schedule(callback: () => void): void;

    /**
     * Stops the timer from firing.
     *
     * Stops the timer from firing ever again. Non-repeating timers are automatically invalidatedafter they have fired once. Repeating timers must be manually invalidated.
     */
    invalidate(): void;

    /**
     * Schedules a timer.
     *
     * This is a convenience function for creating a new timer. The created timer is instantlyscheduled and will fire after the specified time interval.
     *
     * @param timeInterval {number} - The time interval to fire the timer at.
     * @param repeats {boolean} - Whether the timer should repeat or not.
     * @param callback {() => void} - The callback to be called when the timer fires.
     */
    static schedule(timeInterval: number, repeats: boolean, callback: () => void): void;
}
