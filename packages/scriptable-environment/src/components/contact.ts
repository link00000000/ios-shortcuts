import { Image } from "./image";

/**
 * @example
 * {
 *     "identifier": "UUID-ABC-123",
 *     "label": "Home",
 *     "localizedLabel": "Home",
 *     "value": "my@example.com"
 * }
 */
export type ContactEmailAddress = {
    identifier: string,
    label: string,
    localizedLabel: string,
    value: string
}

/**
 * @example
 * {
 *     "identifier": "UUID-ABC-123",
 *     "label": "Home",
 *     "localizedLabel": "Home",
 *     "value": "(111)234-5678"
 * }
 */
export type ContactPhoneNumber = {
    identifier: string,
    label: string,
    localizedLabel: string,
    value: string
}

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
    public readonly identifier: string;

    /**
     * Name prefix.
     */
    public namePrefix: string;

    /**
     * Given name.
     */
    public givenName: string;

    /**
     * Middle name.
     */
    public middleName: string;

    /**
     * Family name.
     */
    public familyName: string;

    /**
     * Nickname.
     */
    public nickname: string;

    /**
     * Birthday.
     */
    public birthday: Date;

    /**
     * Profile picture.
     */
    public image: Image;

    /**
     * Email addresses.
     */
    public emailAddresses: ContactEmailAddress[]

    /**
     * Phone numbers.
     */
    public phoneNumbers: ContactPhoneNumber[];

    /**
     * Postal addresses.
     */
    public postalAddresses: [{string;

    /**
     * Social profiles.
     */
    public socialProfiles: [{string;

    /**
     * Note for the contact.
     */
    public note: string;

    /**
     * URL addresses.
     */
    public urlAddresses: [{string;

    /**
     * Dates.
     */
    public dates: [{string;

    /**
     * Name of the organization associated with the contact.
     */
    public organizationName: string;

    /**
     * Name of the department associated with the contact.
     */
    public departmentName: string;

    /**
     * The contact's job title.
     */
    public jobTitle: string;

    /**
     * Whether or not name prefix is available.
     */
    public isNamePrefixAvailable: boolean;

    /**
     * Whether or not given name is available.
     */
    public isGiveNameAvailable: boolean;

    /**
     * Whether or not middle name is available.
     */
    public isMiddleNameAvailable: boolean;

    /**
     * Whether or not family name is available.
     */
    public isFamilyNameAvailable: boolean;

    /**
     * Whether or not nickname is available.
     */
    public isNicknameAvailable: boolean;

    /**
     * Whether or not birthday is available.
     */
    public isBirthdayAvailable: boolean;

    /**
     * Whether or not email addresses are available.
     */
    public isEmailAddressesAvailable: boolean;

    /**
     * Whether or not phone numbers are available.
     */
    public isPhoneNumbersAvailable: boolean;

    /**
     * Whether or not postal addresses are available.
     */
    public isPostalAddressesAvailable: boolean;

    /**
     * Whether or not social profiles are available.
     */
    public isSocialProfilesAvailable: boolean;

    /**
     * Whether or not image is available.
     */
    public isImageAvailable: boolean;

    /**
     * Whether or not note is available.
     */
    public isNoteAvailable: boolean;

    /**
     * Whether or not URL addresses are available.
     */
    public isURLAddressesAvailable: boolean;

    /**
     * Whether or not organization name is available.
     */
    public isOrganizationNameAvailable: boolean;

    /**
     * Whether or not department name is available.
     */
    public isDepartmentNameAvailable: boolean;

    /**
     * Whether or not job title is available.
     */
    public isJobTitleAvailable: boolean;

    /**
     * Whether or not dates are available.
     */
    public isDatesAvailable: boolean;

    /**
     * Constructs a contact.     */
    public Contact(): void;

    /**
     * Fetches contacts.
     *
     * @param {ContactsContainer[]} containers - Containers to fetch contacts from.
     *
     * @returns {Contact[]} Promise that provides the contacts when fulfilled.
     */
    public all(containers: ContactsContainer[]): Contact[];

    /**
     * Fetches contacts in groups.
     *
     * @param {ContactsGroup[]} groups - Groups to fetch contacts from.
     *
     * @returns {Contact[]} Promise that provides the contacts when fulfilled.
     */
    public inGroups(groups: ContactsGroup[]): Contact[];

    /**
     * Queues a contact to be added.
     *
     * @param {Contact} contact - Contact to queue to be added.
     * @param {string} containerIdentifier - Optional. Identifier of container to add the contact to. If null is specified, the contact will be added to the default container.     */
    public add(contact: Contact, containerIdentifier: string)): void;

    /**
     * Queues an update to a contact.
     *
     * @param {Contact} contact - Contact to queue to be updated.     */
    public update(contact: Contact)): void;

    /**
     * Queues a contact to be deleted.
     *
     * @param {Contact} contact - Contact to queue to be deleted.     */
    public delete(contact: Contact)): void;

    /**
     * Persist queued changes to the address book.
     *
     * @returns {Promise<void>} Promise that fulfills when the changes have been persisted. The promise carries no value.
     */
    public persistChanges(): Promise;
}
