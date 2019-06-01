import {
  createAddress,
  updateAddressById,
  deleteAddressById,
  createPerson,
  updatePersonById,
  deletePersonById,
  createGroup,
  updateGroupById,
  deleteGroupById,
  createEvent,
  updateEventById,
  deleteEventById,
  createList,
  updateListById,
  deleteListById,
  createLocation,
  updateLocationById,
  deleteLocationById,
  createQuote,
  updateQuoteById,
  deleteQuoteById,
  createSong,
  updateSongById,
  deleteSongById
} from '../../../queries';

const addresses = {
  name: 'addresses',
  fields: [ 'address1', 'address2', 'city', 'state', 'zip', 'country', 'notes', 'settings' ],
  create: createAddress,
  updateById: updateAddressById,
  deleteById: deleteAddressById,
  breakdowns: [
    (address, props) => ({
      name: 'People',
      items: props.people.filter(person => person.address_id === address.id),
      fields: [ 'id', 'firstname', 'lastname' ]
    })
  ]
};

const people = {
  name: 'people',
  singular: 'person',
  fields: [ 'firstname', 'lastname', 'email', 'phone', 'address_id', 'food', 'notes', 'preferences' ],
  create: createPerson,
  updateById: updatePersonById,
  deleteById: deletePersonById,
  breakdowns: [
    (person, props) => ({
      name: 'Address',
      items: props.addresses.filter(address => address.id === person.address_id)
    }),
    (person, props) => ({
      name: 'Lists',
      items: props.lists.filter(list => list.members.some(member => member.id === person.id)),
      fields: [ 'id', 'name', 'settings' ]
    }),
    (person, props) => ({
      name: 'Attendances/Invitations',
      items: props.attendances.filter(attendance => attendance.person_id === person.id)
    }),
    (person, props) => ({
      name: 'RSVPd Attendances/Invitations',
      items: props.attendances.filter(attendance => attendance.person_id === person.id && !!attendance.rsvpd)
    }),
    (person, props) => ({
      name: 'RSVP Yes Attendances/Invitations',
      items: props.attendances.filter(attendance => attendance.person_id === person.id && !!attendance.rsvpyes)
    }),
    (person, props) => ({
      name: 'Groups',
      items: props.groups.filter(group => group.members.some(member => member.id === person.id)),
      fields: [ 'id', 'name', 'notes', 'preferences', 'settings' ]
    }),
    (person, props) => ({
      name: 'Quotes',
      items: props.quotes.filter(quote => quote.members.some(member => member.id === person.id)),
      fields: [ 'id', 'author', 'text', 'settings' ]
    }),
    (person, props) => ({
      name: 'Preferences',
      items: [ person ],
      fields: [ 'preferences' ]
    })
  ]
};

const groups = {
  name: 'groups',
  fields: [ 'name', 'settings' ],
  create: createGroup,
  updateById: updateGroupById,
  deleteById: deleteGroupById,
  breakdowns: [
    (group, props) => ({
      name: 'Members',
      items: group.members,
      fields: [ 'id', 'firstname', 'lastname' ]
    })
  ]
};

const events = {
  name: 'events',
  fields: [ 'name', 'time', 'address_id', 'send_invitations', 'notes', 'img', 'settings' ],
  create: createEvent,
  updateById: updateEventById,
  deleteById: deleteEventById,
  breakdowns: [
    (event, props) => ({
      name: 'Attendances/Invitees',
      items: props.attendances.filter(attendance => attendance.event_id === event.id)
        .map(attendance => props.people.find(person => person.id === attendance.person_id)),
      fields: [ 'id', 'firstname', 'lastname' ]
    }),
    (event, props) => ({
      name: 'RSVPs',
      items: props.attendances.filter(attendance => attendance.event_id === event.id && !!attendance.rsvpd)
        .map(attendance => props.people.find(person => person.id === attendance.person_id)),
      fields: [ 'id', 'firstname', 'lastname' ]
    }),
    (event, props) => ({
      name: 'RSVPs Yes',
      items: props.attendances.filter(attendance => attendance.event_id === event.id && !!attendance.rsvpyes)
        .map(attendance => props.people.find(person => person.id === attendance.person_id)),
      fields: [ 'id', 'firstname', 'lastname' ]
    })
  ]
};

// const attendances = {
//   name: 'attendances',
//   fields: [ 'name', 'time', 'address_id', 'send_invitations', 'notes', 'img', 'settings' ],
//   create: createAttendance,
//   updateById: updateEventById,
//   deleteById: deleteEventById,
// };

const lists = {
  name: 'lists',
  fields: [ 'name', 'settings' ],
  create: createList,
  updateById: updateListById,
  deleteById: deleteListById,
  breakdowns: [
    (list, props) => ({
      name: 'Members',
      items: list.members,
      fields: [ 'id', 'firstname', 'lastname' ]
    })
  ]
};

const locations = {
  name: 'locations',
  fields: ['name', 'address_id', 'notes', 'settings'],
  create: createLocation,
  updateById: updateLocationById,
  deleteById: deleteLocationById,
  breakdowns: [
    (location, props) => ({
      name: 'Address',
      items: props.addresses.filter(address => address.id === location.address_id)
    })
  ]
};

const quotes =  {
  name: 'quotes',
  singular: 'quote',
  fields: ['author', 'text', 'settings'],
  create: createQuote,
  updateById: updateQuoteById,
  deleteById: deleteQuoteById,
  breakdowns: [
    (quote, props) => ({
      name: 'Members',
      items: quote.members,
      fields: [ 'id', 'firstname', 'lastname' ]
    })
  ]
};

const songs = {
  name: 'songs',
  fields: ['artist', 'html', 'title', 'url', 'settings'],
  create: createSong,
  updateById: updateSongById,
  deleteById: deleteSongById
};

export default [ addresses, people, groups, events, locations, lists, quotes, songs ];
