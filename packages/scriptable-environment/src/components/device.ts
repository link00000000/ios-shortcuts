/**
 * Provides information about the device.
 *
 * Reads information about the current device and its screen.
 */
export declare class Device {

    /**
     * Name identifying the device.
     *
     * @returns {string} undefined
     */
    public name(): string;

    /**
     * Name of the operating system:
     *
     * @returns {string} undefined
     */
    public systemName(): string;

    /**
     * Version of the operating system.
     *
     * @returns {string} undefined
     */
    public systemVersion(): string;

    /**
     * Model of the device, e.g. "iPhone".
     *
     * @returns {string} undefined
     */
    public model(): string;

    /**
     * Whether the device is a phone.
     *
     * @returns {boolean} undefined
     */
    public isPhone(): boolean;

    /**
     * Whether the device is a pad.
     *
     * @returns {boolean} undefined
     */
    public isPad(): boolean;

    /**
     * Size of the screen.
     *
     * @returns {Size} undefined
     */
    public screenSize(): Size;

    /**
     * Resolution of the screen.
     *
     * @returns {Size} undefined
     */
    public screenResolution(): Size;

    /**
     * Scale of the screen.
     *
     * @returns {number} undefined
     */
    public screenScale(): number;

    /**
     * Brightness of the screen in percentage.
     *
     * @returns {number} undefined
     */
    public screenBrightness(): number;

    /**
     * Whether the device is in portrait with the home button or home indicator at the bottom.
     *
     * @returns {boolean} undefined
     */
    public isInPortrait(): boolean;

    /**
     * Whether the device is in portrait but upside down with the home button or home indicatorat the top.
     *
     * @returns {boolean} undefined
     */
    public isInPortraitUpsideDown(): boolean;

    /**
     * Whether the device is in landscape with the home button or home indicator on theright side.
     *
     * @returns {boolean} undefined
     */
    public isInLandscapeLeft(): boolean;

    /**
     * Whether the device is in landscape with the home button or home indicator on theleft side.
     *
     * @returns {boolean} undefined
     */
    public isInLandscapeRight(): boolean;

    /**
     * Whether the device is lying parallel to the ground with the screen facing upwards.
     *
     * @returns {boolean} undefined
     */
    public isFaceUp(): boolean;

    /**
     * Whether the device is lying parallel to the ground with the screen facing downwards.
     *
     * @returns {boolean} undefined
     */
    public isFaceDown(): boolean;

    /**
     * Current battery level.
     *
     * @returns {number} undefined
     */
    public batteryLevel(): number;

    /**
     * Whether the device is being not plugged into power and thus discharging.
     *
     * @returns {boolean} undefined
     */
    public isDischarging(): boolean;

    /**
     * Whether the device is being charged.
     *
     * @returns {boolean} undefined
     */
    public isCharging(): boolean;

    /**
     * Whether the device is fully charged.
     *
     * @returns {boolean} undefined
     */
    public isFullyCharged(): boolean;

    /**
     * The preferred langauges.
     *
     * @returns {string[]} undefined
     */
    public preferredLanguages(): string[];

    /**
     * Identifier for the device locale.
     *
     * @returns {string} undefined
     */
    public locale(): string;

    /**
     * Identifier for the device language.
     *
     * @returns {string} undefined
     */
    public language(): string;

    /**
     * Whether the device is using dark appearance.
     *
     * @returns {boolean} undefined
     */
    public isUsingDarkAppearance(): boolean;

    /**
     * The device volume.
     *
     * @returns {number} undefined
     */
    public volume(): number;

    /**
     * Sets the brightness of the screen.
     *
     * @param {number} percentage - Percentage to set the screen brightness to. Value between 0 and 1.     */
    public setScreenBrightness(percentage: number)): void;
}
