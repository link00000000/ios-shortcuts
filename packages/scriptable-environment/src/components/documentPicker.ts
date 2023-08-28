/**
 * Presents a document picker.
 *
 * Use this to present a picker that allows opening a document from Files app or exportinga document to Files app.
 * 
 * When opening a document, the picker will prompt you to select one or more documents
 * after which you will get the path for the documents. Use the FileManager to readthe content of these files.
 * 
 * When exporting a document, the picker will ask you to select a destination to storethe document.
 */
export declare class DocumentPicker {

    /**
     * Opens a document.
     *
     * @param {string[]} types - Types of files to select. Specified using UTIs. Defaults to all files.
     *
     * @returns {string[]} Promise that provides paths for the selected documents when fulfilled.
     */
    public open(types: string[]): string[];

    /**
     * Opens a file of any file type.
     *
     * @returns {Promise<string>} Promise that provides paths for the selected files when fulfilled.
     */
    public openFile(): Promise<string>;

    /**
     * Opens a folder.
     *
     * @returns {Promise<string>} Promise that provides paths for the selected folders when fulfilled.
     */
    public openFolder(): Promise<string>;

    /**
     * Exports a file to a document.
     *
     * @param {string} path - Path of the file to export.
     *
     * @returns {string[]} Promise that provides paths for the selected file destination when fulfilled.
     */
    public export(path: string): string[];

    /**
     * Exports a string to a document.
     *
     * @param {string} content - Content of the document to export.
     * @param {string} name - Optional name of the document to export.
     *
     * @returns {string[]} Promise that provides the path of the selected destination when fulfilled.
     */
    public exportString(content: string, name: string): string[];

    /**
     * Exports an image.
     *
     * @param {Image} image - Image to export.
     * @param {string} name - Optional name of the image to export.
     *
     * @returns {string[]} Promise that provides the path of the selected destination when fulfilled.
     */
    public exportImage(image: Image, name: string): string[];

    /**
     * Exports data.
     *
     * @param {Data} data - Data to export.
     * @param {string} name - Optional name of the image to export.
     *
     * @returns {string[]} Promise that provides the path of the selected destination when fulfilled.
     */
    public exportData(data: Data, name: string): string[];
}