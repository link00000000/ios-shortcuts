/**
 * Context for drawing images.
 *
 * An instance of DrawContext is a canvas on which you can draw an image using shapes,
 * texts and other images. You must specify the size of your canvas by setting the size
 * property. At any point after beginning your drawing and before ending your drawingcan you call getImage() to get an image object of your drawing.
 */
export declare class DrawContext {
    /**
     * Size of canvas.
     *
     * Specifies the size of the canvas on which you are drawing. The image returned bygetImage() will have this exact size,
     * except if respectScreenScale is true.
     */
    size: Size;

    /**
     * Enable to respect the scale of the screen.
     *
     * Devices have a screen scale that is used to convert between the logical coordinate
     * space and the device coordinate space. For example, retina screens have a screen
     * scale of 2 or 3 meaning that one point in the logical coordinate space is represented
     * by four or nine pixels. Respecting the screen scale will multiply the specified size
     * of the canvas by the screen scale. For example a canvas of size 200 by 200 will be
     * 600 by 600 when the image is rendered on a retina screen with a screen scale of 3.
     * When respecting the screen scale is disabled, you may experience that your images
     * looks blurry because essentially the size you have specified will be stretched whenrendered on the screen. Default is false.
     */
    respectScreenScale: boolean;

    /**
     * Determines whether the context is opaque.
     *
     * When enabled your image will be rendered opaque. Default is true.
     */
    opaque: boolean;

    /**
     * Constructs a canvas to draw on.
     *
     * Constructs a new canvas to draw images, shapes and texts on.
     */
    constructor();

    /**
     * Retrieves the image.
     *
     * Call this to retrieve the image you have drawn to the context.
     */
    getImage(): Image;

    /**
     * Draws an image in the specified rect.
     *
     * Draws the image in the rectangle. The image will be scaled to fit within the rectangle.
     *
     * @param image {Image} - Image to draw.
     * @param rect {Rect} - Rectangle to draw the image in.
     */
    drawImageInRect(image: Image, rect: Rect): void;

    /**
     * Draws an image at the specified point.
     *
     * Draws the image at the point. The top-left corner of the image will be drawn at thespecified point.
     *
     * @param image {Image} - Image to draw.
     * @param point {Point} - Point at which to draw top-left corner of the image.
     */
    drawImageAtPoint(image: Image, point: Point): void;

    /**
     * Sets the fill color.
     *
     * Sets the fill color to be used when performing a fill operation. Any fill operation
     * performed afterwards will fill with the specified color until another call to setFillColoris made.
     *
     * @param color {Color} - Color to set for filling.
     */
    setFillColor(color: Color): void;

    /**
     * Sets the stroke color.
     *
     * Sets the stroke color to be used when performing a stroke operation. Any stroke operation
     * performed afterwards will stroke with the specified color until another call to setStrokeColoris made.
     *
     * @param color {Color} - Color to set for stroking.
     */
    setStrokeColor(color: Color): void;

    /**
     * Sets the line width for stroking.
     *
     * Sets the line width to be used when performing a stroke operation.
     *
     * @param width {number} - Line width to use for stroking.
     */
    setLineWidth(width: number): void;

    /**
     * Fills a rectangle.
     *
     * Fills the rectangle with the color set when calling setFillColor.
     *
     * @param rect {Rect} - Rectangle to fill.
     */
    fill(rect: Rect): void;

    /**
     * Fills a rectangle.
     *
     * Fills the rectangle with the color set when calling setFillColor.
     *
     * @param rect {Rect} - Rectangle to fill.
     */
    fillRect(rect: Rect): void;

    /**
     * Fills an ellipse.
     *
     * Fills the ellipse that fits within the supplied rectangle with the color set whencalling setFillColor.
     *
     * @param rect {Rect} - Rectangle incapsulating the ellipse to fill.
     */
    fillEllipse(rect: Rect): void;

    /**
     * Strokes a rectangle.
     *
     * Draws a line around the rectangle using the color set when calling setStrokeColor.The line will have the width set when calling setLineWidth.
     *
     * @param rect {Rect} - Rectangle to stroke.
     */
    stroke(rect: Rect): void;

    /**
     * Strokes a rectangle.
     *
     * Draws a line around the rectangle using the color set when calling setStrokeColor.The line will have the width set when calling setLineWidth.
     *
     * @param rect {Rect} - Rectangle to stroke.
     */
    strokeRect(rect: Rect): void;

    /**
     * Strokes an ellipse.
     *
     * Draws a line around the ellipse that fits within the supplied rectangle. The line
     * will have the color set when calling setStrokeColor and the width set when callingsetLineWidth.
     *
     * @param rect {Rect} - Rectangle incapsulating the ellipse to stroke.
     */
    strokeEllipse(rect: Rect): void;

    /**
     * Adds a path to the context.
     *
     * After adding a path to the context, the path can be stroked or filled by calling
     * strokePath and fillPath. Note that only the path that was added latest will be affectedby calls to strokePath and fillPath.
     *
     * @param path {Path} - Path to add to the context.
     */
    addPath(path: Path): void;

    /**
     * Strokes the path that was added the latest.
     *
     * The path that was added the latest to the context is stroked with the color set usingsetStrokeColor and the line width set using setLineWidth.
     */
    strokePath(): void;

    /**
     * Fills the path that was added the latest.
     *
     * The path that was latest added to the context is filled with the color set usingsetFillColor.
     */
    fillPath(): void;

    /**
     * Draws text at a position.
     *
     * Call this to draw a text string to the context. The top-left of the text will bedrawn at the specified position.
     *
     * @param text {string} - Text to draw.
     * @param pos {Point} - Position to draw the top-left of the text.
     */
    drawText(text: string, pos: Point): void;

    /**
     * Draws text in a rectangle.
     *
     * Call this to draw a text string in a rectangle. Specify how the text should be aligned
     * within the rectangle by calling setTextAlignedLeft, setTextAlignedCenter or setTextAlignedRightbefore drawing the text.
     *
     * @param text {string} - Text to draw.
     * @param rect {Rect} - Rectangle to draw text in.
     */
    drawTextInRect(text: string, rect: Rect): void;

    /**
     * Sets the font size used when drawing text.
     *
     * @deprecated
     * Deprecated in version 1.5. Use the setFont() function instead.
     *
     * Sets the font size to be used when drawing texts to the context.
     *
     * @param size {number} - Font size to use when drawing text.
     */
    setFontSize(size: number): void;

    /**
     * Sets the font to use when drawing text.
     *
     * Sets the font to be used when drawing texts to the context.
     *
     * @param font {Font} - Font to use when drawing text.
     */
    setFont(font: Font): void;

    /**
     * Sets the text color used when drawing text.
     *
     * Sets the text color to be used when drawing text strings to the context.
     *
     * @param color {Color} - Color to use when drawing text.
     */
    setTextColor(color: Color): void;

    /**
     * Specifies that texts should be left aligned.
     *
     * Sets text alignment to left. Texts drawn after calling this will be left alignedinside the provided rectangle.
     */
    setTextAlignedLeft(): void;

    /**
     * Specifies that texts should be center aligned.
     *
     * Sets text alignment to center. Texts drawn after calling this will be center alignedinside the provided rectangle.
     */
    setTextAlignedCenter(): void;

    /**
     * Specifies that texts should be right aligned.
     *
     * Sets text alignment to right. Texts drawn after calling this will be right alignedinside the provided rectangle.
     */
    setTextAlignedRight(): void;
}
