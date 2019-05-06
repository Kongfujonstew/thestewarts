import path from 'path';
import Sequelize from 'sequelize';
import anyoneQueries from './queries/anyone';
import personQueries from './queries/person';
import adminQueries from './queries/admin';
import securityQueries from './queries/security';
import lock, { anyoneOk, noRandos, meOnly, adminOnly } from './locks';

const dev = [
  process.env.DATABASE_LOCAL,
  process.env.DATABASE_USER_LOCAL,
  process.env.DATABASE_PASSWORD_LOCAL,
  {
    host: 'localhost',
    dialect: 'postgres',
    define: {
      freezeTableName: true
    }
  }
];
const prod = [process.env.DATABASE_CLOUD];
const config = process.NODE_ENV === 'production' ? prod : dev;
const db = new Sequelize(...config);

export const anyone = lock(anyoneQueries, anyoneOk, db);
export const person = lock(personQueries, noRandos, db);
export const admin = lock(adminQueries, adminOnly, db);
export const security = security;
