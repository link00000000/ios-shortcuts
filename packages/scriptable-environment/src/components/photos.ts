import { Image } from "./image";

/**
 * Provides access to your photo library.
 *
 * In order to read from your photo library, you must grant the app access to your photo
 * library. The first time you use the APIs, the app will prompt for access but if you
 * deny the request, all API calls will fail. In that case you must enable access tothe photo library from the system settings.
 */
export declare class Photos {
    /**
     * Presents the photo library for picking an image.
     *
     * Use this for picking an image from the photo library.
     */
    static fromLibrary(): Promise<Image>;

    /**
     * Opens the camera for taking an image.
     *
     * Use this for taking a new image using the camera.
     */
    static fromCamera(): Promise<Image>;

    /**
     * Get latest photo.
     *
     * Reads the latest photo from your photo library. If no photo is available, the promisewill be rejected.
     */
    static latestPhoto(): Promise<Image>;

    /**
     * Get latest photos.
     *
     * Reads the latests photos from your photo library. If no photo is available, the promisewill be rejected.
     *
     * @param count {number} - Number of photos to fetch.
     */
    static latestPhotos(count: number): Promise<[Image]>;

    /**
     * Get latest screenshot.
     *
     * Reads the latest screenshot from your photo library. If no screenshot is available,the promise will be rejected.
     */
    static latestScreenshot(): Promise<Image>;

    /**
     * Get latest screenshots.
     *
     * Reads the latests screenshots from your photo library. If no screenshot is available,the promise will be rejected.
     *
     * @param count {number} - Number of screenshots to fetch.
     */
    static latestScreenshots(count: number): Promise<[Image]>;

    /**
     * Removes latest photo.
     *
     * Before removing the photo, an alert is shown prompting you to confirm the removal.
     */
    static removeLatestPhoto(): void;

    /**
     * Removes latest photos.
     *
     * Before removing the photos, an alert is shown prompting you to confirm the removal.
     *
     * @param count {number} - Number of photos to remove.
     */
    static removeLatestPhotos(count: number): void;

    /**
     * Removes latest screenshot.
     *
     * Before removing the screenshot, an alert is shown prompting you to confirm the removal.
     */
    static removeLatestScreenshot(): void;

    /**
     * Removes latest screenshots.
     *
     * Before removing the screenshots, an alert is shown prompting you to confirm the removal.
     *
     * @param count {number} - Number of screenshots to remove.
     */
    static removeLatestScreenshots(count: number): void;

    /**
     * Save an image.
     *
     * Saves the image to the photo library.
     *
     * @param image {Image} - The image to save.
     */
    static save(image: Image): void;
}
