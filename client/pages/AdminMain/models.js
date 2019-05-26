import {
  createAddress,
  updateAddressById,
  deleteAddressById,
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
  fields: ['address1', 'address2', 'city', 'state', 'zip', 'country'],
  create: createAddress,
  updateById: updateAddressById,
  deleteById: deleteAddressById
};

const lists = {
  name: 'lists',
  fields: ['name'],
  create: createList,
  updateById: updateListById,
  deleteById: deleteListById
};

const locations = {
  name: 'locations',
  fields: ['name', 'address_id'],
  create: createLocation,
  updateById: updateLocationById,
  deleteById: deleteLocationById
};

const quotes =  {
  name: 'quotes',
  fields: ['author', 'text'],
  create: createQuote,
  updateById: updateQuoteById,
  deleteById: deleteQuoteById
};

const songs = {
  name: 'songs',
  fields: ['artist', 'html', 'title', 'url'],
  create: createSong,
  updateById: updateSongById,
  deleteById: deleteSongById
};

export const simple = [ lists, locations, quotes, songs, addresses ];
