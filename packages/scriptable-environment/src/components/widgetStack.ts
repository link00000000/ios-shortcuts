/**
 * Stack element shown in widget.
 *
 * Shows a stack in the widget.
 */
export declare class WidgetStack {

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
     * Size of the stack.
     */
    public size: Size;

    /**
     * Radius of the corners.
     */
    public cornerRadius: number;

    /**
     * Border width.
     */
    public borderWidth: number;

    /**
     * Border color.
     */
    public borderColor: Color;

    /**
     * URL to open.
     */
    public url: string;

    /**
     * Add text to the stack.
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
     * Add image to the stack.
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
     * Top aligns the content.     */
    public topAlignContent(): void;

    /**
     * Center aligns the content.     */
    public centerAlignContent(): void;

    /**
     * Bottom aligns the content.     */
    public bottomAlignContent(): void;

    /**
     * Layout elements horizontally.     */
    public layoutHorizontally(): void;

    /**
     * Layout elements vertically.     */
    public layoutVertically(): void;
}
