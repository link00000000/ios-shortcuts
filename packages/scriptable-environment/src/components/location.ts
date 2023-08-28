/**
 * Fetches your location.
 *
 * Uses GPS, WiFi and cellular hardware to determine your location. The first time you
 * use the API, the application will prompt you to authorize access to your location.
 * If you do not authorize access, the application cannot fetch your location. You canchange this later from the system settings.
 */
export declare class Location {

    /**
     * Fetches your location.
     *
     * @returns {Promise<{string: number}>} Promise providing an object containing information about your location.
     */
    public current(): Promise<{string: number}>;

    /**
     * Uses best accuracy. This is default.     */
    public setAccuracyToBest(): void;

    /**
     * Sets accuracy to within ten meters.     */
    public setAccuracyToTenMeters(): void;

    /**
     * Sets accuracy to within hundred meters.     */
    public setAccuracyToHundredMeters(): void;

    /**
     * Sets accuracy to within one kilometer.     */
    public setAccuracyToKilometer(): void;

    /**
     * Sets accuracy to within three kilometers.     */
    public setAccuracyToThreeKilometers(): void;

    /**
     * Performs reverse-geocoding for a location.
     *
     * @param {number} latitude - Latitude of coordinate to fetch information about.
     * @param {number} longitude - Longitude of coordinate to fetch information about.
     * @param {string} locale - Optional. Preferred locale to fetch information in. Uses the default locale of the device if null.
     *
     * @returns {[{string: any}]} Promise that carries all available information about the address when resolved.
     */
    public reverseGeocode(latitude: number, longitude: number, locale: string): [{string: any}];
}
