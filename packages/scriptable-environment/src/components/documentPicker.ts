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
export var DocumentPicker: {
    /**
     * Opens a document.
     *
     * Presents a document picker for opening a document from the Files app. It is up to
     * the user to specify which types of files can be opened. Types are specified as UTIs,
     * e.g. "public.plain-text" or "public.image". If you want to open a file of any file
     * type, see the openFile function and if you want to open a folder, see the openFolderfunction.
     *
     * When fulfilled the returned promise will provide the paths for the selected documents.Use an instance of FileManager to read the contents of the files.
     *
     * @param types {string[]} - Types of files to select. Specified using UTIs. Defaultsto all files.
     */
    static open(types: string[]): Promise<[string]>;

    /**
     * Opens a file of any file type.
     *
     * Presents a document picker for opening a file from the Files app. The document pickerwill allow the selection of any file.
     *
     * When fulfilled the returned promise will provide the paths for the selected files.
     */
    static openFile(): Promise<string>;

    /**
     * Opens a folder.
     *
     * Presents a document picker for opening a folder from the Files app.
     *
     * When fulfilled the returned promise will provide the paths for the selected files.
     */
    static openFolder(): Promise<string>;

    /**
     * Exports a file to a document.
     *
     * Exports the file to a document with. A picker prompting for a destination to exportthe document to is presented.
     *
     * @param path {string} - Path of the file to export.
     */
    static export(path: string): Promise<[string]>;

    /**
     * Exports a string to a document.
     *
     * Exports a string to a new file. The name of the file can optionally be specified.A picker prompting for a destination to export the document to is presented.
     *
     * @param content {string} - Content of the document to export.
     * @param name {string} - Optional name of the document to export.
     */
    static exportString(content: string, name: string): Promise<[string]>;

    /**
     * Exports an image.
     *
     * Exports an image to a new file. The name of the file can optionally be specified.A picker prompting for a destination to export the document to is presented.
     *
     * @param image {Image} - Image to export.
     * @param name {string} - Optional name of the image to export.
     */
    static exportImage(image: Image, name: string): Promise<[string]>;

    /**
     * Exports data.
     *
     * Exports data to a new file. The name of the file can optionally be specified. A pickerprompting for a destination to export the document to is presented.
     *
     * @param data {Data} - Data to export.
     * @param name {string} - Optional name of the image to export.
     */
    static exportData(data: Data, name: string): Promise<[string]>;
}
