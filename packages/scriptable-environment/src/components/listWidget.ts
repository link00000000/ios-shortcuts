/**
 * Widget showing a list of elements.
 *
 * A widget showing a list of elements. Pass the widget to Script.setWidget() displayit on your Home screen.
 *
 * Be aware that the widget will refresh periodically and the rate at which the widgetrefreshes is largely determined by the operating system.
 *
 * Also note that there are memory limitations when running a script in a widget. Whenusing too much memory the widget will crash and not render correctly.
 */
export declare class ListWidget {

    /**
     * Background color of the widget.
     */
    public backgroundColor: Color;

    /**
     * Background image.
     */
    public backgroundImage: Image;

    /**
     * Background gradient.
     */
    public backgroundGradient: LinearGradient;

    /**
     * Spacing between elements.
     */
    public spacing: number;

    /**
     * URL to open.
     */
    public url: string;

    /**
     * Earliest date to refresh the widget.
     */
    public refreshAfterDate: Date;

    /**
     * Constructs a new list widget.     */
    public ListWidget(): void;

    /**
     * Add text to the widget.
     *
     * @returns {WidgetText} Text element.
     */
    public addText(text: string): WidgetText;

    /**
     * Add date to the widget.
     *
     * @returns {WidgetDate} Date element.
     */
    public addDate(date: Date): WidgetDate;

    /**
     * Add image to the widget.
     *
     * @returns {WidgetImage} Image element.
     */
    public addImage(image: Image): WidgetImage;

    /**
     * Add spacer.
     *
     * @param {number} length - Length of the spacer. Pass null to create a spacer with a flexible length.
     *
     * @returns {WidgetSpacer} Spacer element.
     */
    public addSpacer(length: number): WidgetSpacer;

    /**
     * Add stack.
     *
     * @returns {WidgetStack} Stack element.
     */
    public addStack(): WidgetStack;

    /**
     * Set padding.
     *
     * @param {number} top - Padding on the top edge.
     * @param {number} leading - Padding on the leading edge.
     * @param {number} bottom - Padding on the bottom edge.
     * @param {number} trailing - Padding on the trailing edge.     */
    public setPadding(top: number, leading: number, bottom: number, trailing: number)): void;

    /**
     * Use the default padding.     */
    public useDefaultPadding(): void;

    /**
     * Presents a preview of the widget.
     *
     * @returns {Promise<void>} Promise that is fulfilled when the preview is dismissed.
     */
    public presentSmall(): Promise;

    /**
     * Presents a preview of the widget.
     *
     * @returns {Promise<void>} Promise that is fulfilled when the preview is dismissed.
     */
    public presentMedium(): Promise;

    /**
     * Presents a preview of the widget.
     *
     * @returns {Promise<void>} Promise that is fulfilled when the preview is dismissed.
     */
    public presentLarge(): Promise;

    /**
     * Presents a preview of the widget.
     *
     * @returns {Promise<void>} Promise that is fulfilled when the preview is dismissed.
     */
    public presentExtraLarge(): Promise;
}
