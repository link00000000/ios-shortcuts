import { ContactsContainer } from "./contactsContainer";
import { ContactsGroup } from "./contactsGroup";
import { Image } from "./image";

/**
 * Contact in the address book.
 *
 * The type represents a contact in the address book. You can use the type to fetchand update contacts in the address book.
 * 
 * If you are signed into multiple accounts on the device, you may have multiple sources
 * that populate the address book. A source is is represented as a ContactsContainer.
 * A contact may be in only one container. A CardDAV account usually has a single containerwhereas an Exchange account may have multiple containers.
 */
export declare class Contact {
    /**
     * Uniquely identifies the contact on the device.
     */
    readonly identifier: string;

    /**
     * Name prefix.
     */
    namePrefix: string;

    /**
     * Given name.
     */
    givenName: string;

    /**
     * Middle name.
     */
    middleName: string;

    /**
     * Family name.
     */
    familyName: string;

    /**
     * Nickname.
     */
    nickname: string;

    /**
     * Birthday.
     */
    birthday: Date;

    /**
     * Profile picture.
     */
    image: Image;

    /**
     * Email addresses.
     *
     * An array of objects on the following form:
     *
     * The identifier uniquely identifies the email address on this device. The label isa description of the email address and the value holds the email address itself.
     *
     * When updating this property, you must set the entire array of email addresses that
     * you would like to store on the contact. Each value in the array must have the "value"key. The other keys are optional.
     * @example
     * {
     *   "identifier": "UUID-ABC-123",
     *   "label": "Home",
     *   "localizedLabel": "Home",
     *   "value": "[email protected]"
     * }
     */
    emailAddresses: {string: string}/* TODO: Check type */[];

    /**
     * Phone numbers.
     *
     * An array of objects on the following form:
     *
     * The identifier uniquely identifies the phone number on this device. The label isa description of the phone number and the value holds the phone number itself.
     *
     * When updating this property, you must set the entire array of phone numbers that
     * you would like to store on the contact. Each value in the array must have the "value"key. The other keys are optional.
     * @example
     * {
     *   "identifier": "UUID-ABC-123",
     *   "label": "Home",
     *   "localizedLabel": "Home",
     *   "value": "(111)234-5678"
     * }
     */
    phoneNumbers: {string: string}/* TODO: Check type */[];

    /**
     * Postal addresses.
     *
     * An array of objects on the following form:
     *
     * The identifier uniquely identifies the pstal address on this device. The label isa description of the phone number and the value holds the phone number itself.
     *
     * When updating this property, you must set the entire array of postal addresses thatyou would like to store on the contact. The "identifier" key is optional.
     * @example
     * {
     *   "identifier": "UUID-ABC-123",
     *   "label": "Home",
     *   "localizedLabel": "Home",
     *   "street": "240  Terry Lane",
     *   "city": "New York",
     *   "state": "New York",
     *   "postalCode": "10001",
     *   "country": "United States of America"
     * }
     */
    postalAddresses: {string: string}/* TODO: Check type */[];

    /**
     * Social profiles.
     *
     * An array of objects on the following form:
     *
     * The identifier uniquely identifies the social profile on this device. The label is
     * a description of the social profile, the service is the social profile's service
     * name, the URL contains a link to the social profile, the userIdentifier is the identifierof the social profile and the username is the name for the social profile.
     *
     * When updating this property, you must set the entire array of social profiles thatyou would like to store on the contact. The "identifier" key is optional.
     * @example
     * {
     *   "identifier": "UUID-ABC-123",
     *   "label": "Twitter",
     *   "localizedLabel": "Twitter",
     *   "service": "Twitter",
     *   "url": "https://twitter.com/scriptableapp",
     *   "userIdentifier": null,
     *   "username": "scriptableapp"
     * }
     */
    socialProfiles: {string: string}/* TODO: Check type */[];

    /**
     * Note for the contact.
     *
     * For security reasons, a contact's notes cannot be accessed in Siri, the Shortcutsapp and in a notification.
     */
    note: string;

    /**
     * URL addresses.
     *
     * When updating this property, you must set the entire array of URL addresses thatyou would like to store on the contact. The "identifier" key is optional.
     */
    urlAddresses: {string: string}/* TODO: Check type */[];

    /**
     * Dates.
     *
     * When updating this property, you must set the entire array of dates that you wouldlike to store on the contact. The "identifier" key is optional.
     */
    dates: {string: any}/* TODO: Check type */[];

    /**
     * Name of the organization associated with the contact.
     */
    organizationName: string;

    /**
     * Name of the department associated with the contact.
     */
    departmentName: string;

    /**
     * The contact's job title.
     */
    jobTitle: string;

    /**
     * Whether or not name prefix is available.
     *
     * The namePrefix property may not be available if the container does not support it.In that case any value set on the property will be ignored.
     */
    readonly isNamePrefixAvailable: boolean;

    /**
     * Whether or not given name is available.
     *
     * The givenName property may not be available if the container does not support it.In that case any value set on the property will be ignored.
     */
    readonly isGiveNameAvailable: boolean;

    /**
     * Whether or not middle name is available.
     *
     * The middleName property may not be available if the container does not support it.In that case any value set on the property will be ignored.
     */
    readonly isMiddleNameAvailable: boolean;

    /**
     * Whether or not family name is available.
     *
     * The familyName property may not be available if the container does not support it.In that case any value set on the property will be ignored.
     */
    readonly isFamilyNameAvailable: boolean;

    /**
     * Whether or not nickname is available.
     *
     * The nickname property may not be available if the container does not support it.In that case any value set on the property will be ignored.
     */
    readonly isNicknameAvailable: boolean;

    /**
     * Whether or not birthday is available.
     *
     * The birthday property may not be available if the container does not support it.In that case any value set on the property will be ignored.
     */
    readonly isBirthdayAvailable: boolean;

    /**
     * Whether or not email addresses are available.
     *
     * The emailAddresses property may not be available if the container does not supportit. In that case any value set on the property will be ignored.
     */
    readonly isEmailAddressesAvailable: boolean;

    /**
     * Whether or not phone numbers are available.
     *
     * The phoneNumbers property may not be available if the container does not supportit. In that case any value set on the property will be ignored.
     */
    readonly isPhoneNumbersAvailable: boolean;

    /**
     * Whether or not postal addresses are available.
     *
     * The postalAddresses property may not be available if the container does not supportit. In that case any value set on the property will be ignored.
     */
    readonly isPostalAddressesAvailable: boolean;

    /**
     * Whether or not social profiles are available.
     *
     * The socialProfiles property may not be available if the container does not supportit. In that case any value set on the property will be ignored.
     */
    readonly isSocialProfilesAvailable: boolean;

    /**
     * Whether or not image is available.
     *
     * The image property may not be available if the container does not support it. Inthat case any value set on the property will be ignored.
     */
    readonly isImageAvailable: boolean;

    /**
     * Whether or not note is available.
     *
     * The note property may not be available if the container does not support it. In thatcase any value set on the property will be ignored.
     */
    readonly isNoteAvailable: boolean;

    /**
     * Whether or not URL addresses are available.
     *
     * The urlAddresses property may not be available if the container does not supportit. In that case any value set on the property will be ignored.
     */
    readonly isURLAddressesAvailable: boolean;

    /**
     * Whether or not organization name is available.
     *
     * The organizationName property may not be available if the container does not supportit. In that case any value set on the property will be ignored.
     */
    readonly isOrganizationNameAvailable: boolean;

    /**
     * Whether or not department name is available.
     *
     * The departmentName property may not be available if the container does not supportit. In that case any value set on the property will be ignored.
     */
    readonly isDepartmentNameAvailable: boolean;

    /**
     * Whether or not job title is available.
     *
     * The jobTitle property may not be available if the container does not support it.In that case any value set on the property will be ignored.
     */
    readonly isJobTitleAvailable: boolean;

    /**
     * Whether or not dates are available.
     *
     * The date property may not be available if the container does not support it. In thatcase any value set on the property will be ignored.
     */
    readonly isDatesAvailable: boolean;

    /**
     * Constructs a contact.
     *
     * In order to add the contact to your address book, you must queue it for insertion
     * using Contact.add(). When you're done making changes to the address book you shouldcall Contact.persistChanges() to persist the changes.
     */
    constructor();

    /**
     * Fetches contacts.
     *
     * Fetches the contacts in the specified containers. A contact can be in only one container.
     *
     * @param containers {ContactsContainer[]} - Containers to fetch contacts from.
     */
    static all(containers: ContactsContainer[]): Promise<[Contact]>;

    /**
     * Fetches contacts in groups.
     *
     * Fetches the contacts in the specified contacts groups. A contact may belong to manygroups.
     *
     * @param groups {ContactsGroup[]} - Groups to fetch contacts from.
     */
    static inGroups(groups: ContactsGroup[]): Promise<[Contact]>;

    /**
     * Queues a contact to be added.
     *
     * After you have created a contact, you must queue the contact to be added to the addressbook and invoke Contact.persistChanges() to persist the changes to the address book.
     *
     * For performance reasons, it is best to batch changes to the address book. Therefore
     * you should queue all updates, insertions and removals of contacts and contacts groups
     * to as large batches as possible and then call Contact.persistChanges() when you wantto persist the changes to the address book.
     *
     * @param contact {Contact} - Contact to queue to be added.
     * @param containerIdentifier {string} - Optional. Identifier of container to add thecontact to. If null is specified, the contact will be added to the default container.
     */
    static add(contact: Contact, containerIdentifier: string): void;

    /**
     * Queues an update to a contact.
     *
     * After you have updated one or more properties on a contact, you must queue the contact
     * to be updated and invoke Contact.persistChanges() to persist the changes to the addressbook.
     *
     * For performance reasons, it is best to batch changes to the address book. Therefore
     * you should queue all updates, insertions and removals of contacts and contacts groups
     * to as large batches as possible and then call Contact.persistChanges() when you wantto persist the changes to the address book.
     *
     * @param contact {Contact} - Contact to queue to be updated.
     */
    static update(contact: Contact): void;

    /**
     * Queues a contact to be deleted.
     *
     * To delete a contact, you must queue the contact for deletion and invoke Contact.persistChanges()to persist the changes to the address book.
     *
     * For performance reasons, it is best to batch changes to the address book. Therefore
     * you should queue all updates, insertions and removals of contacts and contacts groups
     * to as large batches as possible and then call Contact.persistChanges() when you wantto persist the changes to the address book.
     *
     * @param contact {Contact} - Contact to queue to be deleted.
     */
    static delete(contact: Contact): void;

    /**
     * Persist queued changes to the address book.
     *
     * Call this function to persist changes queued with Contact.add(), Contact.update()and Contact.delete().
     *
     * For performance reasons, it is best to batch changes to the address book. Therefore
     * you should queue all updates, insertions and removals of contacts and contacts groups
     * to as large batches as possible and then call Contact.persistChanges() when you wantto persist the changes to the address book.
     */
    static persistChanges(): Promise<void>;
}
