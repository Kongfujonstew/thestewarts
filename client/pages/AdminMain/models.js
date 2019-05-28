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
} from '../../queries';

const addresses = {
  name: 'addresses',
  fields: [ 'address1', 'address2', 'city', 'state', 'zip', 'country', 'notes', 'settings' ],
  create: createAddress,
  updateById: updateAddressById,
  deleteById: deleteAddressById
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
      name: 'address',
      items: props.addresses.filter(address => address.id === person.address_id)
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

  ]
};

const events = {
  name: 'events',
  fields: [ 'name', 'time', 'address_id', 'send_invitations', 'notes', 'img', 'settings' ],
  create: createEvent,
  updateById: updateEventById,
  deleteById: deleteEventById
};

const lists = {
  name: 'lists',
  fields: [ 'name', 'settings' ],
  create: createList,
  updateById: updateListById,
  deleteById: deleteListById
};

const locations = {
  name: 'locations',
  fields: ['name', 'address_id', 'notes', 'settings'],
  create: createLocation,
  updateById: updateLocationById,
  deleteById: deleteLocationById
};

const quotes =  {
  name: 'quotes',
  singular: 'quote',
  fields: ['author', 'text', 'settings'],
  create: createQuote,
  updateById: updateQuoteById,
  deleteById: deleteQuoteById
};

const songs = {
  name: 'songs',
  fields: ['artist', 'html', 'title', 'url', 'settings'],
  create: createSong,
  updateById: updateSongById,
  deleteById: deleteSongById
};

export const simple = [ addresses, people, groups, events, locations, lists, quotes, songs ];
