import { Size } from "./size";

/**
 * Provides information about the device.
 *
 * Reads information about the current device and its screen.
 */
export declare class Device {
    /**
     * Name identifying the device.
     *
     * You can find and edit the name of your device in the system settings.
     */
    static name(): string;

    /**
     * Name of the operating system:
     */
    static systemName(): string;

    /**
     * Version of the operating system.
     */
    static systemVersion(): string;

    /**
     * Model of the device, e.g. "iPhone".
     */
    static model(): string;

    /**
     * Whether the device is a phone.
     *
     * You can use this property to choose behavior of a script depending on
     * whether its running on a phone or a pad.
     */
    static isPhone(): boolean;

    /**
     * Whether the device is a pad.
     *
     * You can use this property to choose behavior of a script depending on
     * whether its running on a phone or a pad.
     */
    static isPad(): boolean;

    /**
     * Size of the screen.
     *
     * The value is measured in points. For an explanation of the relationship between
     * points and pixels, see the documentation of the screenScale() method.
     * 
     * The value takes the device rotation into account, so the value will vary betweenportrait and landscape.
     */
    static screenSize(): Size;

    /**
     * Resolution of the screen.
     *
     * The value is measured in pixels. The value does not take the rotation of the deviecinto account.
     */
    static screenResolution(): Size;

    /**
     * Scale of the screen.
     *
     * Standard resolution displays have a scale of 1.0 where one point on the screen equals
     * one pixel. Retina displays will have a scale factor of 2.0 or 3.0 where one pointon the screen is four or nine pixels, respectively.
     */
    static screenScale(): number;

    /**
     * Brightness of the screen in percentage.
     *
     * The value range from 0 to 1. To set the screen brightness, refer to the setScreenBrightness()function.
     */
    static screenBrightness(): number;

    /**
     * Whether the device is in portrait with the home button or home indicator at the bottom.
     */
    static isInPortrait(): boolean;

    /**
     * Whether the device is in portrait but upside down with the home button or home indicatorat the top.
     */
    static isInPortraitUpsideDown(): boolean;

    /**
     * Whether the device is in landscape with the home button or home indicator on theright side.
     */
    static isInLandscapeLeft(): boolean;

    /**
     * Whether the device is in landscape with the home button or home indicator on theleft side.
     */
    static isInLandscapeRight(): boolean;

    /**
     * Whether the device is lying parallel to the ground with the screen facing upwards.
     */
    static isFaceUp(): boolean;

    /**
     * Whether the device is lying parallel to the ground with the screen facing downwards.
     */
    static isFaceDown(): boolean;

    /**
     * Current battery level.
     *
     * The value is in percentage ranging between 0 and 1.
     */
    static batteryLevel(): number;

    /**
     * Whether the device is being not plugged into power and thus discharging.
     */
    static isDischarging(): boolean;

    /**
     * Whether the device is being charged.
     */
    static isCharging(): boolean;

    /**
     * Whether the device is fully charged.
     */
    static isFullyCharged(): boolean;

    /**
     * The preferred langauges.
     *
     * The list is ordered according to the language preferences specified in the systemsettings.
     */
    static preferredLanguages(): [string];

    /**
     * Identifier for the device locale.
     */
    static locale(): string;

    /**
     * Identifier for the device language.
     */
    static language(): string;

    /**
     * Whether the device is using dark appearance.
     *
     * This API is not supported in widgets.
     */
    static isUsingDarkAppearance(): boolean;

    /**
     * The device volume.
     *
     * The value range from 0 to 1.
     */
    static volume(): number;

    /**
     * Sets the brightness of the screen.
     *
     * The value range from 0 to 1. To get the screen brightness, refer to the screenBrightness()function.
     *
     * @param percentage {number} - Percentage to set the screen brightness to. Value between0 and 1.
     */
    static setScreenBrightness(percentage: number): void;
}
