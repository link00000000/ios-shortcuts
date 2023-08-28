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
     */
    public size: Size;

    /**
     * Enable to respect the scale of the screen.
     */
    public respectScreenScale: boolean;

    /**
     * Determines whether the context is opaque.
     */
    public opaque: boolean;

    /**
     * Constructs a canvas to draw on.     */
    public DrawContext(): void;

    /**
     * Retrieves the image.
     *
     * @returns {Image} The image drawn to the context.
     */
    public getImage(): Image;

    /**
     * Draws an image in the specified rect.
     *
     * @param {Image} image - Image to draw.
     * @param {Rect} rect - Rectangle to draw the image in.     */
    public drawImageInRect(image: Image, rect: Rect)): void;

    /**
     * Draws an image at the specified point.
     *
     * @param {Image} image - Image to draw.
     * @param {Point} point - Point at which to draw top-left corner of the image.     */
    public drawImageAtPoint(image: Image, point: Point)): void;

    /**
     * Sets the fill color.
     *
     * @param {Color} color - Color to set for filling.     */
    public setFillColor(color: Color)): void;

    /**
     * Sets the stroke color.
     *
     * @param {Color} color - Color to set for stroking.     */
    public setStrokeColor(color: Color)): void;

    /**
     * Sets the line width for stroking.
     *
     * @param {number} width - Line width to use for stroking.     */
    public setLineWidth(width: number)): void;

    /**
     * Fills a rectangle.
     *
     * @param {Rect} rect - Rectangle to fill.     */
    public fill(rect: Rect)): void;

    /**
     * Fills a rectangle.
     *
     * @param {Rect} rect - Rectangle to fill.     */
    public fillRect(rect: Rect)): void;

    /**
     * Fills an ellipse.
     *
     * @param {Rect} rect - Rectangle incapsulating the ellipse to fill.     */
    public fillEllipse(rect: Rect)): void;

    /**
     * Strokes a rectangle.
     *
     * @param {Rect} rect - Rectangle to stroke.     */
    public stroke(rect: Rect)): void;

    /**
     * Strokes a rectangle.
     *
     * @param {Rect} rect - Rectangle to stroke.     */
    public strokeRect(rect: Rect)): void;

    /**
     * Strokes an ellipse.
     *
     * @param {Rect} rect - Rectangle incapsulating the ellipse to stroke.     */
    public strokeEllipse(rect: Rect)): void;

    /**
     * Adds a path to the context.
     *
     * @param {Path} path - Path to add to the context.     */
    public addPath(path: Path)): void;

    /**
     * Strokes the path that was added the latest.     */
    public strokePath(): void;

    /**
     * Fills the path that was added the latest.     */
    public fillPath(): void;

    /**
     * Draws text at a position.
     *
     * @param {string} text - Text to draw.
     * @param {Point} pos - Position to draw the top-left of the text.     */
    public drawText(text: string, pos: Point)): void;

    /**
     * Draws text in a rectangle.
     *
     * @param {string} text - Text to draw.
     * @param {Rect} rect - Rectangle to draw text in.     */
    public drawTextInRect(text: string, rect: Rect)): void;

    /**
     * Sets the font size used when drawing text.
     *
     * @param {number} size - Font size to use when drawing text.     */
    public setFontSize(size: number)): void;

    /**
     * Sets the font to use when drawing text.
     *
     * @param {Font} font - Font to use when drawing text.     */
    public setFont(font: Font)): void;

    /**
     * Sets the text color used when drawing text.
     *
     * @param {Color} color - Color to use when drawing text.     */
    public setTextColor(color: Color)): void;

    /**
     * Specifies that texts should be left aligned.     */
    public setTextAlignedLeft(): void;

    /**
     * Specifies that texts should be center aligned.     */
    public setTextAlignedCenter(): void;

    /**
     * Specifies that texts should be right aligned.     */
    public setTextAlignedRight(): void;
}
