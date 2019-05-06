import { makeValues, makeColumns } from './helpers';

export default {
  createPerson: ({ person }) => `INSERT INTO person (${makeColumns(person)}) VALUES (${makeValues(person)}) RETURNING *;`,
  createAddress: ({ address }) => `INSERT INTO address (${makeColumns(address)}) VALUES (${makeValues(address)}) RETURNING *;`,
  getLocationById: ({ id }) => `SELECT * FROM location WHERE id=${id};`,
  getAllLocations: () => `SELECT * FROM location;`,
  getQuoteById: ({ id }) => `SELECT * FROM quote WHERE id=${id};`,
  getAllQuotes: () => `SELECT * FROM quote;`,
  getBlogById: ({ id }) => `SELECT * FROM blog WHERE id=${id};`,
  getAllBlogs: () => `SELECT * FROM blog;`,
  getSongById: ({ id }) => `SELECT * FROM song WHERE id=${id};`,
  getAllSongs: () => `SELECT * FROM song;`
};
