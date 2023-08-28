/**
 * Event driven XML parser.
 *
 * The XMLParser is an event driven XML parser that calls provided callback functionswhen it encounters elements to be parsed. It does not iself do any parsing.
 */
export declare class XMLParser {

    /**
     * Function called when the parser begins parsing a document.     */
    public fn(): void;

    /**
     * Function called when the parser ends parsing a document.     */
    public fn(): void;

    /**
     * Function called when starting to parse an element.     */
    public fn(string: void, {string: string})): void;

    /**
     * Function called when ended parsing an element.     */
    public fn(): void;

    /**
     * Function called when the parser finds characters of an element.     */
    public fn(): void;

    /**
     * Function called when the parser encounters an error.     */
    public fn(): void;

    /**
     * XML string to be parsed.
     */
    public string: string;

    /**
     * Constructs an XMLParser.
     *
     * @param {string} string - XML string to be parsed.     */
    public XMLParser(string: string)): void;

    /**
     * Starts parsing.
     *
     * @returns {boolean} Whether parsing was successfully started.
     */
    public parse(): boolean;
}
