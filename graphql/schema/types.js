import preferences from './preferences';
import settings from './settings';

export default `
  type Address {
    id: Int,
    createdat: String,
    address1: String!,
    address2: String,
    city: String,
    state: String!,
    zip: String!,
    country: String!,
    notes: String,
    settings: SettingsObject
  },
  type Person {
    id: Int,
    createdat: String,
    email: String!,
    firstname: String,
    lastname: String,
    phone: String,
    address_id: Int,
    address: [Address],
    food: String,
    notes: String,
    settings: SettingsObject,
    preferences: PreferencesObject
  },
  type Event {
    id: Int,
    createdat: String,
    name: String!,
    img: String,
    time: String,
    address_id: Int,
    address1: String,
    address2: String,
    city: String,
    state: String,
    zip: String,
    country: String,
    send_invitations: Boolean,
    notes: String,
    preferences: PreferencesObject,
    settings: SettingsObject,
    invitation_sent: Boolean,
    rsvpd: Boolean,
    rsvpyes: Boolean,
    attendees: [Person]
  },
  type Attendance {
    id: Int,
    createdat: String,
    person_id: String!,
    event_id: String!,
    notes: String,
    invitation_sent: Boolean,
    rsvpd: Boolean,
    rsvpyes: Boolean,
    preferences: PreferencesObject,
    settings: SettingsObject,
    firstname: String,
    lastname: String,
    email: String
  },
  type Groupo {
    id: Int,
    createdat: String,
    parent_id: Int,
    name: String!,
    notes: String,
    preferences: PreferencesObject,
    settings: SettingsObject,
    members: [Person]
  },
  type Location {
    id: Int,
    createdat: String,
    name: String,
    address_id: Int,
    notes: String,
    settings: SettingsObject
  },
  type Quote {
    id: Int,
    createdat: String,
    text: String,
    author: String,
    members: [Person],
    notes: String,
    settings: SettingsObject
  },
  type Blog {
    id: Int,
    createdat: String,
    date: String,
    title: String,
    text: String,
    notes: String,
    settings: SettingsObject
  },
  type Song {
    id: Int,
    createdat: String,
    artist: String,
    title: String,
    url: String,
    notes: String,
    html: String,
    settings: SettingsObject
  },
  type List {
    id: Int,
    createdat: String,
    name: String!,
    members: [Person],
    settings: SettingsObject
  },
  type PublicData {
    quotes: [Quote],
    blogs: [Blog],
    songs: [Song],
    locations: [Location]
  },
  type PersonData {
    address: Address,
    person: Person!,
    events: [Event],
    groups: [Groupo],
    quotes: [Quote],
    songs: [Song],
    lists: [List]
  },
  type AdminData {
    addresses: [Address],
    people: [Person]!,
    events: [Event],
    groups: [Groupo],
    locations: [Location],
    quotes: [Quote],
    blogs: [Blog],
    songs: [Song],
    lists: [List]
  },
  type PreferencesObject {
    ${preferences}
  },
  type SettingsObject {
    ${settings}
  }
  type SuccessOrError {
    success: Boolean!,
    message: String
  }
`;
