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
     * @param {string} key - Key to look up in the keychain.
     *
     * @returns {boolean} True if the key exists in the keychain, otherwise false.
     */
    public contains(key: string): boolean;

    /**
     * Add value for a specified key to keychain.
     *
     * @param {string} key - Key which the value should be assigned to.
     * @param {string} value - Value to assign to the specified key.     */
    public set(key: string, value: string)): void;

    /**
     * Reads a value from the keychain.
     *
     * @param {string} key - Key to read value for.
     *
     * @returns {string} Value assigned to the specified key.
     */
    public get(key: string): string;

    /**
     * Remove key from keychain.
     *
     * @param {string} key - Key to remove from the keychain.     */
    public remove(key: string)): void;
}
