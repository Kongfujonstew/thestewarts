import settings from './settings';
import preferences from './preferences';

export default `
  input AddressInput {
    address1: String,
    address2: String,
    city: String,
    state: String!,
    zip: String!,
    country: String!,
    notes: String,
    settings: SettingsInput
  },
  input PersonInput {
    email: String,
    firstname: String,
    lastname: String,
    phone: String,
    address_id: Int,
    food: String,
    notes: String,
    preferences: PreferencesInput,
    settings: SettingsInput
  }
  input EventInput {
    name: String,
    time: String,
    address_id: Int,
    send_invitations: Boolean,
    auto_rsvp_w_wedding: Boolean,
    notes: String,
    img: String,
    settings: SettingsInput,
  },
  input AttendanceInput {
    person_id: Int!,
    event_id: Int!,
    notes: String,
    invitation_sent: Boolean,
    rsvpd: Boolean,
    rsvpyes: Boolean,
    preferences: PreferencesInput,
    settings: SettingsInput
  },
  input GroupoInput {
    parent_id: Int,
    name: String!,
    notes: String,
    preferences: PreferencesInput,
    settings: SettingsInput
  },
  input LocationInput {
    address_id: Int,
    name: String!,
    notes: String,
    settings: SettingsInput,
  },
  input QuoteInput {
    text: String,
    author: String,
    settings: SettingsInput
  },
  input BlogInput {
    date: String!,
    title: String!,
    text: String!,
    settings: SettingsInput
  },
  input SongInput {
    artist: String!,
    title: String!,
    url: String!,
    notes: String,
    html: String,
    settings: SettingsInput
  },
  input ListInput {
    name: String!,
    settings: SettingsInput
  },
  input PreferencesInput {
    ${preferences}
  },
  input SettingsInput {
    ${settings}
  }
`;
