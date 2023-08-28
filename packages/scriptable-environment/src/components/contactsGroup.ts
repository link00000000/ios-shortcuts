/**
 * Group of contacts.
 *
 * A contacts container may have several groups of contacts. A contact can only belong
 * to a single contacts container but may belong to zero or more contacts groups. Forexample, an iCloud account has only one container but may have many groups.
 */
export declare class ContactsGroup {

    /**
     * Identifier of the contacts group.
     */
    public identifier: string;

    /**
     * Name of the contacts group.
     */
    public name: string;

    /**
     * Constructs a contacts group.     */
    public ContactsGroup(): void;

    /**
     * Fetches contacts groups.
     *
     * @param {ContactsContainer[]} containers - Container to fetch contacts groups from.
     *
     * @returns {ContactsGroup[]} Promise that provides the contacts groups when fulfilled.
     */
    public all(containers: ContactsContainer[]): ContactsGroup[];

    /**
     * Adds a contact to the group.
     *
     * @param {Contact} contact - Contact to add to the group.     */
    public addMember(contact: Contact)): void;

    /**
     * Removes a contact from the group.
     *
     * @param {Contact} contact - Contact to add to the group.     */
    public removeMember(contact: Contact)): void;

    /**
     * Queues a contacts group to be added.
     *
     * @param {ContactsGroup} group - Contacts group to queue to be added.
     * @param {string} containerIdentifier - Optional. Identifier of container to add the contacts group to. If null is specified, the group will be added to the default container.     */
    public add(group: ContactsGroup, containerIdentifier: string)): void;

    /**
     * Queues an update to a contacts group.
     *
     * @param {ContactsGroup} group - Contacts group to queue to be updated.     */
    public update(group: ContactsGroup)): void;

    /**
     * Queues a contacts group to be deleted.
     *
     * @param {ContactsGroup} group - Contacts group to queue to be deleted.     */
    public delete(group: ContactsGroup)): void;
}
