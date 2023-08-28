/**
 * Read and write files on disk.
 *
 * A FileManager lets you read files stored on the disk and make changes to them. Pathsto files are supplied as strings.
 */
export declare class FileManager {

    /**
     * Creates a local FileManager.
     *
     * @returns {FileManager} Local FileManager.
     */
    public local(): FileManager;

    /**
     * Creates an iCloud FileManager.
     *
     * @returns {FileManager} iCloud FileManager.
     */
    public iCloud(): FileManager;

    /**
     * Read contents of a file as data.
     *
     * @param {string} filePath - Path of the file to read.
     *
     * @returns {Data} Contents of the file as a data or null if the file could not be read.
     */
    public read(filePath: string): Data;

    /**
     * Read contents of a file as string.
     *
     * @param {string} filePath - Path of the file to read.
     *
     * @returns {string} Contents of the file as a string or null if the file could not be read.
     */
    public readString(filePath: string): string;

    /**
     * Read contents of a file as an image.
     *
     * @param {string} filePath - Path of the file to read.
     *
     * @returns {Image} Contents of the file as an image or null if the file could not be read.
     */
    public readImage(filePath: string): Image;

    /**
     * Write data to a file.
     *
     * @param {string} filePath - Path of file to write to.
     * @param {Data} content - Data to write to disk.     */
    public write(filePath: string, content: Data)): void;

    /**
     * Write a string to a file.
     *
     * @param {string} filePath - Path of file to write to.
     * @param {string} content - Content to write to disk.     */
    public writeString(filePath: string, content: string)): void;

    /**
     * Write an image to a file.
     *
     * @param {string} filePath - Path of file to write to.
     * @param {Image} image - Image to write to disk.     */
    public writeImage(filePath: string, image: Image)): void;

    /**
     * Removes a file.
     *
     * @param {string} filePath - Path of file to remove.     */
    public remove(filePath: string)): void;

    /**
     * Moves a file.
     *
     * @param {string} sourceFilePath - Path of the file to move.
     * @param {string} destinationFilePath - Path to move the file to.     */
    public move(sourceFilePath: string, destinationFilePath: string)): void;

    /**
     * Copies a file.
     *
     * @param {string} sourceFilePath - Path of the file to copy.
     * @param {string} destinationFilePath - Path to copy the file to.     */
    public copy(sourceFilePath: string, destinationFilePath: string)): void;

    /**
     * Checks if the file exists.
     *
     * @param {string} filePath - File path to examine.
     *
     * @returns {boolean} True if the file exists otherwise false.
     */
    public fileExists(filePath: string): boolean;

    /**
     * Checks if a path points to a directory.
     *
     * @param {string} path - Path to examine.
     *
     * @returns {boolean} True if the path points to a directory otherwise false.
     */
    public isDirectory(path: string): boolean;

    /**
     * Creates a directory at the specified path.
     *
     * @param {string} path - Path of directory to create.
     * @param {boolean} intermediateDirectories - Whether to create all intermediate directories. Defaults to false.     */
    public createDirectory(path: string, intermediateDirectories: boolean): void;

    /**
     * Path of temporary directory.
     *
     * @returns {string} Path to temporary directory.
     */
    public temporaryDirectory(): string;

    /**
     * Path of cache directory.
     *
     * @returns {string} Path to temporary directory.
     */
    public cacheDirectory(): string;

    /**
     * Path of documents directory.
     *
     * @returns {string} Path to documents directory.
     */
    public documentsDirectory(): string;

    /**
     * Path of library directory.
     *
     * @returns {string} Path to library directory.
     */
    public libraryDirectory(): string;

    /**
     * Joins two path components.
     *
     * @param {string} lhsPath - Left-hand side part of the new path.
     * @param {string} rhsPath - Right-hand side part of the new path.
     *
     * @returns {string} Path with the two path components joined.
     */
    public joinPath(lhsPath: string, rhsPath: string): string;

    /**
     * Reads all tags from a file.
     *
     * @param {string} filePath - Path of file to read tags from.
     *
     * @returns {string[]} Read tags.
     */
    public allTags(filePath: string): string[];

    /**
     * Adds a tag to a file.
     *
     * @param {string} filePath - Path of file to add the tag to.
     * @param {string} tag - Tag to add. This can be an existing tag or a new tag.     */
    public addTag(filePath: string, tag: string)): void;

    /**
     * Removes a tag from a file.
     *
     * @param {string} filePath - Path of file to remove the tag from.
     * @param {string} tag - Tag to remove.     */
    public removeTag(filePath: string, tag: string)): void;

    /**
     * Reads an extended attribute from a file.
     *
     * @param {string} filePath - Path of file to read extended attribute from.
     * @param {string} name - Name of the extended attribute to read.
     *
     * @returns {string} Value of the extended attribute.
     */
    public readExtendedAttribute(filePath: string, name: string): string;

    /**
     * Writes an extended attribute to a file.
     *
     * @param {string} filePath - Path of file to add an extended attribute to.
     * @param {string} value - Value of the extended attribute.
     * @param {string} name - Name of the extended attribute. This is used to retrieve the value at a later point.     */
    public writeExtendedAttribute(filePath: string, value: string, name: string)): void;

    /**
     * Removes an extended attribute from a file.
     *
     * @param {string} filePath - Path of file to add an extended attribute to.
     * @param {string} name - Name of the extended attribute to remove.     */
    public removeExtendedAttribute(filePath: string, name: string)): void;

    /**
     * Reads all extended attributes on a file.
     *
     * @param {string} filePath - Path of file to read extended attributes from.
     *
     * @returns {string[]} An array of all extended attributes.
     */
    public allExtendedAttributes(filePath: string): string[];

    /**
     * Gets the UTI of the specified file.
     *
     * @param {string} filePath - Path of file to get UTI of.
     *
     * @returns {string} The UTI of the file.
     */
    public getUTI(filePath: string): string;

    /**
     * Lists content of directory.
     *
     * @param {string} directoryPath - Path to directory.
     *
     * @returns {string[]} Names of all the files and directories in the specified directory.
     */
    public listContents(directoryPath: string): string[];

    /**
     * Get name of a file.
     *
     * @param {string} filePath - path of file to get name of.
     * @param {boolean} includeFileExtension - Whether or not the file extension should be included. Defaults to false.
     *
     * @returns {string} Name of the file.
     */
    public fileName(filePath: string, includeFileExtension: boolean): string;

    /**
     * Get extension of a file.
     *
     * @param {string} filePath - Path of file to get extension from.
     *
     * @returns {string} Extension of the file.
     */
    public fileExtension(filePath: string): string;

    /**
     * Get path to a bookmarked file or folder.
     *
     * @param {string} name - Name of bookmark to create path for.
     *
     * @returns {string} Path to the bookmarked file or folder.
     */
    public bookmarkedPath(name: string): string;

    /**
     * Check if a bookmark exists.
     *
     * @param {string} name - Name of bookmark.
     *
     * @returns {boolean} True of a bookmark exists for the specified name, otherwise false.
     */
    public bookmarkExists(name: string): boolean;

    /**
     * Download file from iCloud if necessary.
     *
     * @param {string} filePath - Path of file to download from iCloud.
     *
     * @returns {Promise<void>} Promise that is fulfilled when the file have been downloaded.
     */
    public downloadFileFromiCloud(filePath: string): Promise;

    /**
     * Checks if a file is stored in iCloud.
     *
     * @param {string} filePath - Path of file.
     *
     * @returns {boolean} True if the file is stored in iCloud otherwise false.
     */
    public isFileStoredIniCloud(filePath: string): boolean;

    /**
     * Checks if a file have been downloaded.
     *
     * @param {string} filePath - Path of file.
     *
     * @returns {boolean} True if the file have been downloaded otherwise false.
     */
    public isFileDownloaded(filePath: string): boolean;

    /**
     * Reads the creation date of a file.
     *
     * @param {string} filePath - Path of file.
     *
     * @returns {Date} The date the file was created.
     */
    public creationDate(filePath: string): Date;

    /**
     * Reads the modification date of a file.
     *
     * @param {string} filePath - Path of file.
     *
     * @returns {Date} The date the file was last modified.
     */
    public modificationDate(filePath: string): Date;

    /**
     * Size of the file in kilobytes.
     *
     * @param {string} filePath - Path of file.
     *
     * @returns {number} The file size measured in kilobytes.
     */
    public fileSize(filePath: string): number;

    /**
     * Reads all file bookmarks created in settings.
     */
    public {
      "name": "My Bookmark",
      "source";
}
