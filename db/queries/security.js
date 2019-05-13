// These are not available to graphql
import { makeValues, makeColumns } from './helpers';

export default {
  whoAmI: ({ token }) => `SELECT token, role FROM person WHERE token='${token}';`,
  isTokenValid:  ({ token }) => `SELECT token, role FROM person WHERE token='${token}';`,
  isPasswordCorrect: ({ email, password} ) => `SELECT token, role FROM person WHERE email='${email}' AND password='${password}';`
};
