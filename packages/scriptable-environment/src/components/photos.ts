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
     * @returns {Promise<Image>} Promise that provide the selected image when fulfilled.
     */
    public fromLibrary(): Promise<Image>;

    /**
     * Opens the camera for taking an image.
     *
     * @returns {Promise<Image>} Promise that provide the captured image when fulfilled.
     */
    public fromCamera(): Promise<Image>;

    /**
     * Get latest photo.
     *
     * @returns {Promise<Image>} Promise that provides the photo when fulfilled.
     */
    public latestPhoto(): Promise<Image>;

    /**
     * Get latest photos.
     *
     * @param {number} count - Number of photos to fetch.
     *
     * @returns {Image[]} Promise that provides the photos when fulfilled.
     */
    public latestPhotos(count: number): Image[];

    /**
     * Get latest screenshot.
     *
     * @returns {Promise<Image>} Promise that provides the screenshot when fulfilled.
     */
    public latestScreenshot(): Promise<Image>;

    /**
     * Get latest screenshots.
     *
     * @param {number} count - Number of screenshots to fetch.
     *
     * @returns {Image[]} Promise that provides the screenshots when fulfilled.
     */
    public latestScreenshots(count: number): Image[];

    /**
     * Removes latest photo.     */
    public removeLatestPhoto(): void;

    /**
     * Removes latest photos.
     *
     * @param {number} count - Number of photos to remove.     */
    public removeLatestPhotos(count: number)): void;

    /**
     * Removes latest screenshot.     */
    public removeLatestScreenshot(): void;

    /**
     * Removes latest screenshots.
     *
     * @param {number} count - Number of screenshots to remove.     */
    public removeLatestScreenshots(count: number)): void;

    /**
     * Save an image.
     *
     * @param {Image} image - The image to save.     */
    public save(image: Image)): void;
}
