/**
 * Event driven XML parser.
 *
 * The XMLParser is an event driven XML parser that calls provided callback functionswhen it encounters elements to be parsed. It does not iself do any parsing.
 */
export declare class XMLParser {
    /**
     * Function called when the parser begins parsing a document.
     */
    didStartDocument: fn();

    /**
     * Function called when the parser ends parsing a document.
     *
     * When the parser calls the function, it has successfully completed parsing the document.
     */
    didEndDocument: fn();

    /**
     * Function called when starting to parse an element.
     *
     * Called by the parser when it encounters a start tag for an element. The function
     * takes the element name as a parameter as well as a key value pair containing allthe attributes associated with the element.
     *
     * Use this function to update your state and prepare for receiving the characters of
     * the element. After this function is called, the parser will call the foundCharacterscallback function with all or parts of the characters of the element.
     */
    didStartElement: fn(string, {string: string}/* TODO: Check type */);

    /**
     * Function called when ended parsing an element.
     *
     * Called by the parser when it encounters an end tag for an element. The function takesthe element name as a parameter.
     */
    didEndElement: fn();

    /**
     * Function called when the parser finds characters of an element.
     *
     * The parser calls this function with a string whenever it finds characters for thecurrent element. This function may be called several times for a single element.
     */
    foundCharacters: fn();

    /**
     * Function called when the parser encounters an error.
     *
     * The parser will call this function when it encounters a fatal error preventing itfrom continuing to parse. When the function is called the parsing is stopped.
     */
    parseErrorOccurred: fn();

    /**
     * XML string to be parsed.
     */
    string: string;

    /**
     * Constructs an XMLParser.
     *
     * Constructs an event driven XML parser. It does not do any parsing on its own andtherefore the callback functions must be set before starting to parse.
     *
     * @param string {string} - XML string to be parsed.
     */
    constructor(string: string);

    /**
     * Starts parsing.
     *
     * Before calling this function you should ensure that the parser is correctly configured,i.e. the necessary callback functions should be set.
     */
    parse(): bool;
}
