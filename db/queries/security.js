import { makeValues, makeColumns } from '../helpers/querystring';

export default {
  whoAmI: ({ token }) => `SELECT token, role, id FROM person WHERE token='${token}';`,
  isTokenValid:  ({ token }) => `SELECT token, role, id FROM person WHERE token='${token}';`,
  isPasswordCorrect: ({ email, password} ) => `SELECT token, role, id FROM person WHERE email='${email}' AND password='${password}';`
};
