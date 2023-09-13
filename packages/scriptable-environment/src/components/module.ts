/**
 * The current module.
 *
 * Scriptable treats each file as a module. Consider the following file.
 *
 * let circle = importModule('circle')
 * let r = 2
 * let area = circle.area(r)
 * log('Area of circle: ' + area)
 *
 * The file imports the module circle.js which has the following contents.
 *
 * module.exports.area = (r) => {
 *   return Math.PI * Math.pow(r, 2)
 * }
 * 
 * module.exports.circumference = (r) => {
 *   return 2 * Math.PI * r
 * }
 *
 * The circle.js module exports the functions area and circumference. You can add any
 * function or object to the exports of a module to make them available when the moduleis imported with importModule.
 */
export declare var module: {
    /**
     * Path to file containing the module.
     *
     * This is the absolute path to the file containing the module.
     */
    readonly filename: string;

    /**
     * Exported functions and modules.
     *
     * Values assigned to exports are returned by the global importModule function whenthe module is imported.
     *
     * exports can be of any type but by default it is an empty object. Consider the followingexample which exports the area and circumference functions.
     *
     * Alternatively if you only need to export a single function or object, you can assigndirectly to the exports property as shown in the following examples.
     *
     * module.exports = "My string"
     * @example
     * module.exports.area = (r) => {
     *   return Math.PI * Math.pow(r, 2)
     * }
     * 
     * module.exports.circumference = (r) => {
     *   return 2 * Math.PI * r
     * }
     * @example
     * module.exports = (r) => {
     *   return 2 * Math.PI * r
     * }
     */
    exports: any;
}
