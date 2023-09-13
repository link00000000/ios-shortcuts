import { Color } from "./color";
import { Image } from "./image";
import { LinearGradient } from "./linearGradient";
import { WidgetDate } from "./widgetDate";
import { WidgetImage } from "./widgetImage";
import { WidgetSpacer } from "./widgetSpacer";
import { WidgetStack } from "./widgetStack";
import { WidgetText } from "./widgetText";

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
    backgroundColor: Color;

    /**
     * Background image.
     */
    backgroundImage: Image;

    /**
     * Background gradient.
     */
    backgroundGradient: LinearGradient;

    /**
     * Spacing between elements.
     *
     * Specifies the spacing between elements in the widget. You can also use the addSpacer()function on the widget to add spacing between elements. Defaults to 0.
     */
    spacing: number;

    /**
     * URL to open.
     *
     * The URL will be opened when the widget is tapped. This will override any behavior
     * defined in the configuration of the widget. E.g. if the widget is configured to runthe script when interacting with the widget but a URL is set the URL will take precedence.
     */
    url: string;

    /**
     * Earliest date to refresh the widget.
     *
     * The property indicates when the widget can be refreshed again. The widget will not
     * be refreshed before the date have been reached. It is not guaranteed that the widgetwill refresh at exactly the specified date.
     *
     * The refresh rate of a widget is partly up to iOS/iPadOS. For example, a widget may
     * not refresh if the device is low on battery or the user is rarely looking at thewidget.
     *
     * When the property is null the default refresh interval is used. Defaults to null.
     */
    refreshAfterDate: Date;

    /**
     * Constructs a new list widget.
     *
     * A widget showing a list of elements. Pass the widget to Script.setWidget() to displayit on your Home screen.
     */
    constructor();

    /**
     * Add text to the widget.
     *
     * Adds a text element to the widget. Use the properties on the returned element tostyle the text.
     *
     * @param text {string}
     */
    addText(text: string): WidgetText;

    /**
     * Add date to the widget.
     *
     * Adds a date element to the widget. Use the properties on the returned element tostyle the date.
     *
     * @param date {Date}
     */
    addDate(date: Date): WidgetDate;

    /**
     * Add image to the widget.
     *
     * Adds an image element to the widget. Use the properties on the returned element tostyle the image.
     *
     * @param image {Image}
     */
    addImage(image: Image): WidgetImage;

    /**
     * Add spacer.
     *
     * Adds a spacer to the widget. This can be used to offset the content vertically inthe widget.
     *
     * @param length {number} - Length of the spacer. Pass null to create a spacer witha flexible length.
     */
    addSpacer(length: number): WidgetSpacer;

    /**
     * Add stack.
     *
     * Adds a stack to the widget. Stacks layout elements horizontally by default.
     */
    addStack(): WidgetStack;

    /**
     * Set padding.
     *
     * Sets the padding on each side of the widget.
     *
     * @param top {number} - Padding on the top edge.
     * @param leading {number} - Padding on the leading edge.
     * @param bottom {number} - Padding on the bottom edge.
     * @param trailing {number} - Padding on the trailing edge.
     */
    setPadding(top: number, leading: number, bottom: number, trailing: number): void;

    /**
     * Use the default padding.
     *
     * Configure the widget to use the default padding. Any padding previously defined withsetPadding() will be discarded.
     */
    useDefaultPadding(): void;

    /**
     * Presents a preview of the widget.
     *
     * The widget is presented in its small size.
     *
     * Widgets on the Home screen are updated periodically so while working on your widgetyou may want to preview it in the app.
     */
    presentSmall(): Promise<void>;

    /**
     * Presents a preview of the widget.
     *
     * The widget is presented in its medium size.
     *
     * Widgets on the Home screen are updated periodically so while working on your widgetyou may want to preview it in the app.
     */
    presentMedium(): Promise<void>;

    /**
     * Presents a preview of the widget.
     *
     * The widget is presented in its large size.
     *
     * Widgets on the Home screen are updated periodically so while working on your widgetyou may want to preview it in the app.
     */
    presentLarge(): Promise<void>;

    /**
     * Presents a preview of the widget.
     *
     * The widget is presented in its extra large size.
     *
     * Widgets on the Home screen are updated periodically so while working on your widgetyou may want to preview it in the app.
     *
     * Please be aware that extra large widgets are only available on iPads running iOS15 and newer.
     */
    presentExtraLarge(): Promise<void>;
}
