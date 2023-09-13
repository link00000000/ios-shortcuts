/**
 * Presents an interface for dictation.
 *
 * Presents an interface that lets you dictate a text. You can specify the locale of
 * the text you want to dictate when calling the start() function. Dictation must manuallybe stopped from the presented interface when you are finished dictating.
 */
export var Dictation: {
    /**
     * Starts dictation.
     *
     * Presents an interface that shows the dictated string. Press "Done"
     * when you are done dictating the text.
     *
     * @param locale {string} - Optional string identifier that specifies the language to
     * dictate in. E.g. "en" for English, "it" for Italian and "da" for Danish. Defaultsto the locale of the device.
     */
    static start(locale: string): Promise<string>;
}
