/**
 * Secure storage for credentials.
 *
 * The keychain is a secure storage for credentials, keys etc. Use the set() method
 * to add values to the keychain. You can then later use the get() method to retrievethe value.
 */
export declare class Keychain {
    /**
     * Check if keychain contains a key.
     *
     * Checks if the keychain contains the specified key.
     *
     * @param key {string} - Key to look up in the keychain.
     */
    static contains(key: string): boolean;

    /**
     * Add value for a specified key to keychain.
     *
     * Adds the value to the keychain, assigning it to the specified key. If the key alreadyexists in the keychain, the value is overwritten.
     *
     * Values are securely stored in an encrypted database.
     *
     * @param key {string} - Key which the value should be assigned to.
     * @param value {string} - Value to assign to the specified key.
     */
    static set(key: string, value: string): void;

    /**
     * Reads a value from the keychain.
     *
     * Reads the value for the specified key. If the key doesn't exist the method will throwan error. Used the contains method to check if a key exists in the keychain.
     *
     * @param key {string} - Key to read value for.
     */
    static get(key: string): string;

    /**
     * Remove key from keychain.
     *
     * @param key {string} - Key to remove from the keychain.
     */
    static remove(key: string): void;
}
