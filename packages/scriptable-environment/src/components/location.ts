/**
 * Fetches your location.
 *
 * Uses GPS, WiFi and cellular hardware to determine your location. The first time you
 * use the API, the application will prompt you to authorize access to your location.
 * If you do not authorize access, the application cannot fetch your location. You canchange this later from the system settings.
 */
export var Location: {
    /**
     * Fetches your location.
     *
     * Your location is fetched using GPS, WiFi and cellular hardware. The object carried
     * by the promise includes the latitude, longitude and altitude as well as the horizontaland vertical accuracy measured in meters.
     */
    static current(): Promise<{string: number}>;

    /**
     * Uses best accuracy. This is default.
     *
     * Set this when you want to achieve the best possible accuracy when retrieving yourlocation. This is the default accuracy.
     */
    static setAccuracyToBest(): void;

    /**
     * Sets accuracy to within ten meters.
     */
    static setAccuracyToTenMeters(): void;

    /**
     * Sets accuracy to within hundred meters.
     */
    static setAccuracyToHundredMeters(): void;

    /**
     * Sets accuracy to within one kilometer.
     */
    static setAccuracyToKilometer(): void;

    /**
     * Sets accuracy to within three kilometers.
     */
    static setAccuracyToThreeKilometers(): void;

    /**
     * Performs reverse-geocoding for a location.
     *
     * A reverse-geocoding request fetches information about the current location. The datais delivered by Apple's geocoding service.
     *
     * @param latitude {number} - Latitude of coordinate to fetch information about.
     * @param longitude {number} - Longitude of coordinate to fetch information about.
     * @param locale {string} - Optional. Preferred locale to fetch information in. Usesthe default locale of the device if null.
     */
    static reverseGeocode(latitude: number, longitude: number, locale: string): [{string: any}];
}
