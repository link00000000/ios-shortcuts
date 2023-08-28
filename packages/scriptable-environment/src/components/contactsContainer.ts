/**
 * Collection of contacts.
 *
 * If you're signed into multiple accounts on your device, you may have multiple contact
 * containers. A contact can be in only one container. CardDAV accounts usually have
 * a single container whereas Exchange accounts may have multiple containers. A container
 * may have multiple groups. While a single contact can only belong to one container,a contact may belong to many groups.
 */
export declare class ContactsContainer {

    /**
     * Identifier of the contacts container.
     */
    public readonly identifier: string;

    /**
     * Name of the contacts container.
     */
    public readonly name: string;

    /**
     * Fetches default contacts container.
     *
     * @returns {Promise<ContactsContainer>} Promise that provides the default contacts container when fulfilled.
     */
    public static default(): Promise<ContactsContainer>;

    /**
     * Fetches all contacts containers.
     *
     * @returns {ContactsContainer[]} Promise that provides all contacts containers when fulfilled.
     */
    public static all(): ContactsContainer[];

    /**
     * Fetches a contacts container.
     *
     * @param {string} identifier - Identifier of the contacts container to fetch.
     *
     * @returns {Promise<ContactsContainer>} Promise that provides the contacts container when fulfilled.
     */
    public static withIdentifier(identifier: string): Promise<ContactsContainer>;
}
