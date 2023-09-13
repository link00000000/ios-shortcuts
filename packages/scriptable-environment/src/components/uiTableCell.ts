/**
 * Cell in a UITableRow.
 *
 * Cells are shown horizontally in a UITableRow which in turn is shown
 * vertically in a UITable. Cells have content, e.g. a text or an image.
 */
export var UITableCell: {
    /**
     * Relative width of the cell.
     *
     * A width weight specifies the relative width of the cell. When computing the absolute
     * width of the cell, all width weights are taken into account. Consider the followingexample.
     *
     * Cell A has a width weight of 50.
     * Cell B has a width weight of 100.
     * Cell C has a width wegiht of 150.
     *
     * Assume that the row has an absolute width of 100. The width will be distributed among
     * cells A, B and C. B will be double as wide as A but C will be fifty percent widerthan B and three times as wide as A.
     */
    widthWeight: number;

    /**
     * Called when the button is tapped.
     *
     * Buttons cannot be tapped when the table is presented in Siri.
     */
    onTap: fn();

    /**
     * Whether to dismiss the table when the button is tapped.
     *
     * Defaults to false.
     */
    dismissOnTap: boolean;

    /**
     * Color of the title.
     *
     * This only has an effect on cells with a title. By default the color is null, in which
     * case an appropriate color is automatically chosen based on the theme of the app andthe context the script is running in.
     */
    titleColor: Color;

    /**
     * Color of the subtitle.
     *
     * This only has an effect on cells with a subtitle. By default the color is null, in
     * which case an appropriate color is automatically chosen based on the theme of theapp and the context the script is running in.
     */
    subtitleColor: Color;

    /**
     * Font of the title.
     */
    titleFont: Font;

    /**
     * Font of the subtitle.
     */
    subtitleFont: Font;

    /**
     * Constructs a text cell.
     *
     * Constructs a new cell containing text.
     *
     * @param title {string} - Optional title to show in the cell.
     * @param subtitle {string} - Optional subtitle shown below the title.
     */
    static text(title: string, subtitle: string): UITableCell;

    /**
     * Constructs an image cell.
     *
     * Constructs a new cell containing an image.
     *
     * @param image {Image} - Image to show in the cell.
     */
    static image(image: Image): UITableCell;

    /**
     * Constructs an image cell.
     *
     * Constructs a new cell that loads the image at the specified URL.
     *
     * @param url {string} - URL to image.
     */
    static imageAtURL(url: string): UITableCell;

    /**
     * Constructs a button cell.
     *
     * Constructs a new cell that contains a button. Set the onTap property to specify anaction to performed when the button is tapped.
     *
     * @param title {string} - Title of the button.
     */
    static button(title: string): UITableCell;

    /**
     * Left aligns content.
     *
     * Specifies that content in the cell should be left aligned.
     */
    leftAligned(): void;

    /**
     * Center aligns content.
     *
     * Specifies that content in the cell should be center aligned.
     */
    centerAligned(): void;

    /**
     * Right aligns content.
     *
     * Specifies that content in the cell should be right aligned.
     */
    rightAligned(): void;
}
