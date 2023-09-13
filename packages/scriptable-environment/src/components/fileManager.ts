/**
 * Read and write files on disk.
 *
 * A FileManager lets you read files stored on the disk and make changes to them. Pathsto files are supplied as strings.
 */
export var FileManager: {
    /**
     * Creates a local FileManager.
     *
     * Creates a file manager for operating with files stored locally.
     */
    static local(): FileManager;

    /**
     * Creates an iCloud FileManager.
     *
     * Creates a file manager for operating with files stored in iCloud. iCloud must beenabled on the device in order to use this.
     */
    static iCloud(): FileManager;

    /**
     * Read contents of a file as data.
     *
     * Reads the contents of the file specified by the file path as raw data. To read thefile as a string see readString(filePath) and to read it as an image see readImage(filePath).
     *
     * The function will error if the file does not exist or if it exists in iCloud but
     * has not been download. Use fileExists(filePath) to check if a file exists and downloadFileFromiCloud(filePath)
     * to download the file. Note that it is always safe to call downloadFileFromiCloud(filePath),even if the file is stored locally on the device.
     *
     * @param filePath {string} - Path of the file to read.
     */
    read(filePath: string): Data;

    /**
     * Read contents of a file as string.
     *
     * The function will error if the file does not exist or if it exists in iCloud but
     * has not been download. Use fileExists(filePath) to check if a file exists and downloadFileFromiCloud(filePath)
     * to download the file. Note that it is always safe to call downloadFileFromiCloud(filePath),even if the file is stored locally on the device.
     *
     * @param filePath {string} - Path of the file to read.
     */
    readString(filePath: string): string;

    /**
     * Read contents of a file as an image.
     *
     * Reads the contents of the file specified by the file path and converts it to an image.
     *
     * The function will error if the file does not exist or if it exists in iCloud but
     * has not been download. Use fileExists(filePath) to check if a file exists and downloadFileFromiCloud(filePath)
     * to download the file. Note that it is always safe to call downloadFileFromiCloud(filePath),even if the file is stored locally on the device.
     *
     * @param filePath {string} - Path of the file to read.
     */
    readImage(filePath: string): Image;

    /**
     * Write data to a file.
     *
     * @param filePath {string} - Path of file to write to.
     * @param content {Data} - Data to write to disk.
     */
    write(filePath: string, content: Data): void;

    /**
     * Write a string to a file.
     *
     * Writes the content to the specified file path on disk. If the file does not already
     * exist, it will be created. If the file already exists the contents of the file willbe overwritten with the new content.
     *
     * @param filePath {string} - Path of file to write to.
     * @param content {string} - Content to write to disk.
     */
    writeString(filePath: string, content: string): void;

    /**
     * Write an image to a file.
     *
     * Writes the image to the specified file path on disk. If the file does not already
     * exist, it will be created. If the file already exists the contents of the file willbe overwritten with the new content.
     *
     * @param filePath {string} - Path of file to write to.
     * @param image {Image} - Image to write to disk.
     */
    writeImage(filePath: string, image: Image): void;

    /**
     * Removes a file.
     *
     * Removes the file at the specified path. Use with caution. Removed files cannot berestored.
     *
     * @param filePath {string} - Path of file to remove.
     */
    remove(filePath: string): void;

    /**
     * Moves a file.
     *
     * Moves the file from the source path to the destination path.
     * Caution: This operation will replace any existing file at the the destination.
     *
     * @param sourceFilePath {string} - Path of the file to move.
     * @param destinationFilePath {string} - Path to move the file to.
     */
    move(sourceFilePath: string, destinationFilePath: string): void;

    /**
     * Copies a file.
     *
     * Copies the file from the source path to the destination path.
     * 
     * If a file already exists at the destination file path, the operation will fail andthe file will not be copied.
     *
     * @param sourceFilePath {string} - Path of the file to copy.
     * @param destinationFilePath {string} - Path to copy the file to.
     */
    copy(sourceFilePath: string, destinationFilePath: string): void;

    /**
     * Checks if the file exists.
     *
     * Checks if the file exists at the specified file path. Checking this before moving
     * or copying to a destination can be a good idea as those operations will replace anyexisting file at the destination file path.
     *
     * @param filePath {string} - File path to examine.
     */
    fileExists(filePath: string): bool;

    /**
     * Checks if a path points to a directory.
     *
     * @param path {string} - Path to examine.
     */
    isDirectory(path: string): bool;

    /**
     * Creates a directory at the specified path.
     *
     * You can optionally create all intermediate directories.
     *
     * @param path {string} - Path of directory to create.
     * @param intermediateDirectories {boolean} - Whether to create all intermediate directories.Defaults to false.
     */
    createDirectory(path: string, intermediateDirectories: boolean): void;

    /**
     * Path of temporary directory.
     *
     * Used to retrieve the path of a temporary directory on disk. 
     * 
     * Data persisted in a temporary directory will generally live shorter than data persistedin the cache directory.
     *
     * The operating system may at any time delete files stored in this directory
     * and therefore you should not rely on it for long time storage.
     * 
     * If you need long time storage, see documentsDirectory() or libraryDirectory(). Thisdirectory is not shared between the app, the action extension and Siri.
     */
    temporaryDirectory(): string;

    /**
     * Path of cache directory.
     *
     * Used to retrieve the path of a cache directory on disk. 
     * The operating system may at any time delete files stored in this directory
     * and therefore you should not rely on it for long time storage.
     *
     * Data persisted in the cache directory will generally live longer than data persistedin a temporary directory.
     *
     * If you need long time storage, see documentsDirectory() or libraryDirectory(). Thisdirectory is not shared between the app, the action extension and Siri.
     */
    cacheDirectory(): string;

    /**
     * Path of documents directory.
     *
     * Used to retrieve the path to the documents directory. Your scripts are stored in
     * this directory. If you have iCloud enabled, your scripts will be stored in the documents
     * directory in iCloud otherwise they will be stored in the local documents directory.
     * The directory can be used for long time storage. Documents stored in this directory
     * can be accessed using the Files app. Files stored in the local documents directorywill not appear in the Files app.
     */
    documentsDirectory(): string;

    /**
     * Path of library directory.
     *
     * Used to retrieve the path to the library directory. The directory can be used for
     * long time storage. Documents stored in this directory cannot be accessed using theFiles app.
     */
    libraryDirectory(): string;

    /**
     * Joins two path components.
     *
     * Joins two paths to created one path. For example to join the path to a directory
     * with the name of a file. This is the suggested approach for creating new file pathspassed to the read and write functions of a FileManager.
     *
     * @param lhsPath {string} - Left-hand side part of the new path.
     * @param rhsPath {string} - Right-hand side part of the new path.
     */
    joinPath(lhsPath: string, rhsPath: string): string;

    /**
     * Reads all tags from a file.
     *
     * The tags are read from the file at the specified path. Tags can either be read, addedand removed using the Files app by using the APIs provided by a FileManager.
     *
     * The function will error if the file does not exist or if it exists in iCloud but
     * has not been download. Use fileExists(filePath) to check if a file exists and downloadFileFromiCloud(filePath)
     * to download the file. Note that it is always safe to call downloadFileFromiCloud(filePath),even if the file is stored locally on the device.
     *
     * @param filePath {string} - Path of file to read tags from.
     */
    allTags(filePath: string): [string];

    /**
     * Adds a tag to a file.
     *
     * A tag can only be added to a file once. It is not possible to specify a color for
     * the tag. You can create the tags using the Files app to specify the color and thenadd them to files afterwards using the FileManager API.
     *
     * The function will error if the file does not exist or if it exists in iCloud but
     * has not been download. Use fileExists(filePath) to check if a file exists and downloadFileFromiCloud(filePath)
     * to download the file. Note that it is always safe to call downloadFileFromiCloud(filePath),even if the file is stored locally on the device.
     *
     * @param filePath {string} - Path of file to add the tag to.
     * @param tag {string} - Tag to add. This can be an existing tag or a new tag.
     */
    addTag(filePath: string, tag: string): void;

    /**
     * Removes a tag from a file.
     *
     * The function will error if the file does not exist or if it exists in iCloud but
     * has not been download. Use fileExists(filePath) to check if a file exists and downloadFileFromiCloud(filePath)
     * to download the file. Note that it is always safe to call downloadFileFromiCloud(filePath),even if the file is stored locally on the device.
     *
     * @param filePath {string} - Path of file to remove the tag from.
     * @param tag {string} - Tag to remove.
     */
    removeTag(filePath: string, tag: string): void;

    /**
     * Reads an extended attribute from a file.
     *
     * Extended attributes are metadata that can be stored on a file. Note that extendedattributes are not synced with iCloud.
     *
     * The function will return null if the attribute does not exist.
     *
     * The function will error if the file does not exist or if it exists in iCloud but
     * has not been download. Use fileExists(filePath) to check if a file exists and downloadFileFromiCloud(filePath)
     * to download the file. Note that it is always safe to call downloadFileFromiCloud(filePath),even if the file is stored locally on the device.
     *
     * @param filePath {string} - Path of file to read extended attribute from.
     * @param name {string} - Name of the extended attribute to read.
     */
    readExtendedAttribute(filePath: string, name: string): string;

    /**
     * Writes an extended attribute to a file.
     *
     * Extended attributes are metadata that can be stored on a file. Note that extendedattributes are not synced with iCloud.
     *
     * The function will error if the file does not exist or if it exists in iCloud but
     * has not been download. Use fileExists(filePath) to check if a file exists and downloadFileFromiCloud(filePath)
     * to download the file. Note that it is always safe to call downloadFileFromiCloud(filePath),even if the file is stored locally on the device.
     *
     * @param filePath {string} - Path of file to add an extended attribute to.
     * @param value {string} - Value of the extended attribute.
     * @param name {string} - Name of the extended attribute. This is used to retrieve thevalue at a later point.
     */
    writeExtendedAttribute(filePath: string, value: string, name: string): void;

    /**
     * Removes an extended attribute from a file.
     *
     * Extended attributes are metadata that can be stored on a file. Note that extendedattributes are not synced with iCloud.
     *
     * The function will error if the file does not exist or if it exists in iCloud but
     * has not been download. Use fileExists(filePath) to check if a file exists and downloadFileFromiCloud(filePath)
     * to download the file. Note that it is always safe to call downloadFileFromiCloud(filePath),even if the file is stored locally on the device.
     *
     * @param filePath {string} - Path of file to add an extended attribute to.
     * @param name {string} - Name of the extended attribute to remove.
     */
    removeExtendedAttribute(filePath: string, name: string): void;

    /**
     * Reads all extended attributes on a file.
     *
     * Extended attributes are metadata that can be stored on a file. Note that extendedattributes are not synced with iCloud.
     *
     * @param filePath {string} - Path of file to read extended attributes from.
     */
    allExtendedAttributes(filePath: string): [string];

    /**
     * Gets the UTI of the specified file.
     *
     * The Uniform Type Identifier is a string that identifies the type of file.
     *
     * @param filePath {string} - Path of file to get UTI of.
     */
    getUTI(filePath: string): string;

    /**
     * Lists content of directory.
     *
     * Lists all the contents in the specified directory. The returned array contains filenamesto all files and directories in the specified directory.
     *
     * @param directoryPath {string} - Path to directory.
     */
    listContents(directoryPath: string): [string];

    /**
     * Get name of a file.
     *
     * Takes a file path and returns the name of the file. Also supports getting the nameof a directory.
     * The returned file name optionally includes the extension of the file.
     *
     * @param filePath {string} - path of file to get name of.
     * @param includeFileExtension {boolean} - Whether or not the file extension shouldbe included. Defaults to false.
     */
    fileName(filePath: string, includeFileExtension: boolean): string;

    /**
     * Get extension of a file.
     *
     * Takes a file path and returns the extension of the file, e.g. ".jpg" or ".js". Returnsen empty string for directories.
     *
     * @param filePath {string} - Path of file to get extension from.
     */
    fileExtension(filePath: string): string;

    /**
     * Get path to a bookmarked file or folder.
     *
     * Gets the path to a bookmarked file or filder. Use file bookmarks to access filesand folders outside Scriptables documents directory.
     *
     * You can edit your file bookmarks from Scriptables settings.
     *
     * The function will throw an error if the bookmark doesn't exist.
     *
     * Please beware that bookmarks created from Scriptables settings only can be used when
     * running a script in the app and not from the Share Sheet, Siri and Shortcuts. If
     * you wish to use a bookmark from Siri or the Shortcuts app, the bookmark must be createdusing Scriptables "Create File Bookmark" shortcut action using the Shortcuts app.
     *
     * @param name {string} - Name of bookmark to create path for.
     */
    bookmarkedPath(name: string): string;

    /**
     * Check if a bookmark exists.
     *
     * Checks if a file bookmark exists with the specified name.
     *
     * You can edit your file bookmarks from Scriptables settings.
     *
     * Please beware that bookmarks created from Scriptables settings only can be used when
     * running a script in the app and not from the Share Sheet, Siri and Shortcuts. If
     * you wish to use a bookmark from Siri or the Shortcuts app, the bookmark must be createdusing Scriptables "Create File Bookmark" shortcut action using the Shortcuts app.
     *
     * @param name {string} - Name of bookmark.
     */
    bookmarkExists(name: string): bool;

    /**
     * Download file from iCloud if necessary.
     *
     * Downloads the file from iCloud if it have not already been downloaded. If you pass
     * in a path to a file that is not stored in iCloud, the returned promise will be resolvedimmediately making it safe to pass in any file path.
     *
     * @param filePath {string} - Path of file to download from iCloud.
     */
    downloadFileFromiCloud(filePath: string): Promise;

    /**
     * Checks if a file is stored in iCloud.
     *
     * Checks if a file is stored in iCloud or locally on the device. 
     * 
     * The function returns false if the file does not exist. Check if a file exists usingfileExists(filePath)
     *
     * @param filePath {string} - Path of file.
     */
    isFileStoredIniCloud(filePath: string): bool;

    /**
     * Checks if a file have been downloaded.
     *
     * If a file is stored in iCloud and it has not been downloaded, this function returns
     * false. In that case, the file can be downloaded using downloadFileFromiCloud(filePath.
     * If the file is not stored in iCloud but rather locally on the device, this functionreturns true.
     *
     * The function returns false if the file does not exist. Check if a file exists usingfileExists(filePath)
     *
     * @param filePath {string} - Path of file.
     */
    isFileDownloaded(filePath: string): bool;

    /**
     * Reads the creation date of a file.
     *
     * The returned value will be null if the creation date cannot be read.
     *
     * @param filePath {string} - Path of file.
     */
    creationDate(filePath: string): Date;

    /**
     * Reads the modification date of a file.
     *
     * The returned value will be null if the modification date cannot be read.
     *
     * @param filePath {string} - Path of file.
     */
    modificationDate(filePath: string): Date;

    /**
     * Size of the file in kilobytes.
     *
     * The returned value will be null if the file size cannot be read.
     *
     * @param filePath {string} - Path of file.
     */
    fileSize(filePath: string): number;

    /**
     * Reads all file bookmarks created in settings.
     *
     * File bookmarks are used to bookmark a file or a folder and read or write to it later.File bookmarks are created from Scriptables settings.
     *
     * This function returns all file bookmarks as an array of objects that take the followingform.
     *
     * The source can either be host for file bookmarks that can be used in the app or siri_shortcutsfor file bookmarks that can be used in Siri and Shortcuts.
     */
    allFileBookmarks(): [{string: string}];
}
