/**
 * The current module.
 *
 * Scriptable treats each file as a module. Consider the following file.
 */
export declare class module {

    /**
     * The file imports the module circle.js which has the following contents.
     */
    public filename: string;

    /**
     * Exported functions and modules.
     */
    public exports: any;
}