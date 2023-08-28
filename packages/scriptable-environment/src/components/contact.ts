import { ContactsContainer } from "./contactsContainer";
import { ContactsGroup } from "./contactsGroup";
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
    identifier?: string,
    label?: string,
    localizedLabel?: string,
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
    identifier?: string,
    label?: string,
    localizedLabel?: string,
    value: string
}

/**
 * @example
 * {
 *     "identifier": "UUID-ABC-123",
 *     "label": "Home",
 *     "localizedLabel": "Home",
 *     "street": "240  Terry Lane",
 *     "city": "New York",
 *     "state": "New York",
 *     "postalCode": "10001",
 *     "country": "United States of America"
 * }
 */
export type ContactPostalAddress = {
    identifier?: string;
    label: string;
    localizedLabel: string;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
}

/**
 * @example
 * {
 *     "identifier": "UUID-ABC-123",
 *     "label": "Twitter",
 *     "localizedLabel": "Twitter",
 *     "service": "Twitter",
 *     "url": "https://twitter.com/scriptableapp",
 *     "userIdentifier": null,
 *     "username": "scriptableapp"
 * }
 */
export type ContactSocialProfile = {
    identifier?: string;
    label: string;
    localizedLabel: string;
    service: string;
    url: string;
    userIdentifier: null;
    username: string;
}

/**
 * @example
 * {
 *     "identifier": "UUID-ABC-123"
 * }
 */
export type ContactUrlAddress = {
    identifier?: string;
    // TODO 
}

/**
 * @example
 * {
 *     "identifier": "UUID-ABC-123"
 * }
 */
export type ContactUrlDate = {
    identifier?: string;
    // TODOi 
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
    public postalAddresses: ContactPostalAddress[];

    /**
     * Social profiles.
     */
    public socialProfiles: ContactSocialProfile[];

    /**
     * Note for the contact.
     */
    public note: string;

    /**
     * URL addresses.
     */
    public urlAddresses: ContactUrlAddress[];

    /**
     * Dates.
     */
    public dates: ContactUrlDate[];

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
    public readonly isNamePrefixAvailable: boolean;

    /**
     * Whether or not given name is available.
     */
    public readonly isGiveNameAvailable: boolean;

    /**
     * Whether or not middle name is available.
     */
    public readonly isMiddleNameAvailable: boolean;

    /**
     * Whether or not family name is available.
     */
    public readonly isFamilyNameAvailable: boolean;

    /**
     * Whether or not nickname is available.
     */
    public readonly isNicknameAvailable: boolean;

    /**
     * Whether or not birthday is available.
     */
    public readonly isBirthdayAvailable: boolean;

    /**
     * Whether or not email addresses are available.
     */
    public readonly isEmailAddressesAvailable: boolean;

    /**
     * Whether or not phone numbers are available.
     */
    public readonly isPhoneNumbersAvailable: boolean;

    /**
     * Whether or not postal addresses are available.
     */
    public readonly isPostalAddressesAvailable: boolean;

    /**
     * Whether or not social profiles are available.
     */
    public readonly isSocialProfilesAvailable: boolean;

    /**
     * Whether or not image is available.
     */
    public readonly isImageAvailable: boolean;

    /**
     * Whether or not note is available.
     */
    public readonly isNoteAvailable: boolean;

    /**
     * Whether or not URL addresses are available.
     */
    public readonly isURLAddressesAvailable: boolean;

    /**
     * Whether or not organization name is available.
     */
    public readonly isOrganizationNameAvailable: boolean;

    /**
     * Whether or not department name is available.
     */
    public readonly isDepartmentNameAvailable: boolean;

    /**
     * Whether or not job title is available.
     */
    public readonly isJobTitleAvailable: boolean;

    /**
     * Whether or not dates are available.
     */
    public readonly isDatesAvailable: boolean;

    /**
     * Constructs a contact.
     */
    public new(): Contact;

    /**
     * Fetches contacts.
     *
     * @param containers - Containers to fetch contacts from.
     *
     * @returns Promise that provides the contacts when fulfilled.
     */
    public static all(containers: ContactsContainer[]): Contact[];

    /**
     * Fetches contacts in groups.
     *
     * @param groups - Groups to fetch contacts from.
     *
     * @returns Promise that provides the contacts when fulfilled.
     */
    public static inGroups(groups: ContactsGroup[]): Contact[];

    /**
     * Queues a contact to be added.
     *
     * @param contact - Contact to queue to be added.
     * @param containerIdentifier - Optional. Identifier of container to add the contact to. If null is specified, the contact will be added to the default container.
     */
    public static add(contact: Contact, containerIdentifier: string): void;

    /**
     * Queues an update to a contact.
     *
     * @param contact - Contact to queue to be updated.
     */
    public static update(contact: Contact): void;

    /**
     * Queues a contact to be deleted.
     *
     * @param contact - Contact to queue to be deleted.
     */
    public static delete(contact: Contact): void;

    /**
     * Persist queued changes to the address book.
     *
     * @returns Promise that fulfills when the changes have been persisted.
     */
    public static persistChanges(): Promise<void>;
}
