// Public/ auth utils

import { makeValues, makeColumns } from './helpers';

export default {
  createPerson: ({ person }) => `INSERT INTO person (${makeColumns(person)}) VALUES (${makeValues(person)}) RETURNING *;`,
  // createAddress: ({ address }) => `INSERT INTO address (${makeColumns(address)}) VALUES (${makeValues(address)}) RETURNING *;`,
  // getLocationById: ({ id }) => `SELECT * FROM location WHERE id=${id};`,
};
