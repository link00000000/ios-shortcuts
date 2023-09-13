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
    readonly identifier: string;

    /**
     * Name of the contacts container.
     */
    readonly name: string;

    /**
     * Fetches default contacts container.
     */
    static default(): Promise<ContactsContainer>;

    /**
     * Fetches all contacts containers.
     */
    static all(): Promise<[ContactsContainer]>;

    /**
     * Fetches a contacts container.
     *
     * @param identifier {string} - Identifier of the contacts container to fetch.
     */
    static withIdentifier(identifier: string): Promise<ContactsContainer>;
}
