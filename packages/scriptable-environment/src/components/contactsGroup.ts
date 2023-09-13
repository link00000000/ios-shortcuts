import { Contact } from "./contact";
import { ContactsContainer } from "./contactsContainer";

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
    readonly identifier: string;

    /**
     * Name of the contacts group.
     */
    name: string;

    /**
     * Constructs a contacts group.
     *
     * In order to add the group to your address book, you must queue it for insertion using
     * ContactsGroup.add(). When you're done making changes to the address book you shouldcall Contact.persistChanges() to persist the changes.
     */
    constructor();

    /**
     * Fetches contacts groups.
     *
     * Fetches the contacts groups in the specified containers. A group can be in only onecontainer.
     *
     * @param containers {ContactsContainer[]} - Container to fetch contacts groups from.
     */
    static all(containers: ContactsContainer[]): Promise<[ContactsGroup]>;

    /**
     * Adds a contact to the group.
     *
     * In order to persist the change, you should call Contact.persistChanges(). It is important
     * that the contact is added to the address book. To add the contact to the address
     * book, you should queue it for insertion using Contact.add() before persisting thechanges.
     *
     * @param contact {Contact} - Contact to add to the group.
     */
    addMember(contact: Contact): void;

    /**
     * Removes a contact from the group.
     *
     * In order to persist the change, you should call Contact.persistChanges().
     * 
     * It is important that the contact is added to the address book. To add the contact
     * to the address book, you should queue it for insertion using Contact.add() beforepersisting the changes.
     *
     * @param contact {Contact} - Contact to add to the group.
     */
    removeMember(contact: Contact): void;

    /**
     * Queues a contacts group to be added.
     *
     * After you have created a group, you must queue the group to be added to the addressbook and invoke Contact.persistChanges() to persist the changes to the address book.
     *
     * For performance reasons, it is best to batch changes to the address book. Therefore
     * you should queue all updates, insertions and removals of contacts and contacts groups
     * to as large batches as possible and then call Contact.persistChanges() when you wantto persist the changes to the address book.
     *
     * @param group {ContactsGroup} - Contacts group to queue to be added.
     * @param containerIdentifier {string} - Optional. Identifier of container to add thecontacts group to. If null is specified, the group will be added to the default container.
     */
    static add(group: ContactsGroup, containerIdentifier: string): void;

    /**
     * Queues an update to a contacts group.
     *
     * After you have updated one or more properties on a contacts group, you must queue
     * the group to be updated and invoke Contact.persistChanges() to persist the changesto the address book.
     *
     * For performance reasons, it is best to batch changes to the address book. Therefore
     * you should queue all updates, insertions and removals of contacts and contacts groups
     * to as large batches as possible and then call Contact.persistChanges() when you wantto persist the changes to the address book.
     *
     * @param group {ContactsGroup} - Contacts group to queue to be updated.
     */
    static update(group: ContactsGroup): void;

    /**
     * Queues a contacts group to be deleted.
     *
     * To delete a contacts group, you must queue the group for deletion and invoke Contact.persistChanges()to persist the changes to the address book.
     *
     * For performance reasons, it is best to batch changes to the address book. Therefore
     * you should queue all updates, insertions and removals of contacts and contacts groups
     * to as large batches as possible and then call Contact.persistChanges() when you wantto persist the changes to the address book.
     *
     * @param group {ContactsGroup} - Contacts group to queue to be deleted.
     */
    static delete(group: ContactsGroup): void;
}
