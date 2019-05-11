// Public/ auth utils

import { makeValues, makeColumns } from './helpers';

export default {
  isTokenValid: ({ token }) => new Promise((resolve, reject) => {
    // TODO replace me with db thing
    resolve(token === '999' || token === '998');
  }),

  whoAmI: ({ token }) => new Promise((resolve, reject) => {
    if (token === '999') {
      resolve({ role: 'person', token: '999' });
    } else if (token === '998') {
      resolve({ role: 'admin', token: '998' });
    } else {
      resolve({ role: 'rando' });
    }
  }),

  isPasswordCorrect: ({ email, password} ) => new Promise((resolve, reject) => {
    // TODO replace me with security thing
    const fakeToken = '999'
    if (password === 'password' && email === 'jon@jon.com') {
      resolve(fakeToken);
    };
    reject(false);
  }),

  isTokenValidMAYBE: ({ token }) => `SELECT 1 FROM user WHERE token=${token}`,
  getTokenPasswordLoginMAYBE: ({ email, password }) => `SELECT token FROM user WHERE email=${email} AND token=CRYPT(${password, 'TODO'})`
  // createPerson: ({ person }) => `INSERT INTO person (${makeColumns(person)}) VALUES (${makeValues(person)}) RETURNING *;`,
  // createAddress: ({ address }) => `INSERT INTO address (${makeColumns(address)}) VALUES (${makeValues(address)}) RETURNING *;`,
  // getLocationById: ({ id }) => `SELECT * FROM location WHERE id=${id};`,
};
