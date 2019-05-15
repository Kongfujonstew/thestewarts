import whoami from './whoami';
import loadPublicData from './public';
import loadPersonData from './person';
import loadAdminData from './admin';
import { anyoneOk, noRandos, adminOnly } from '../auth/permissions';

export const publicMW = [ whoami, anyoneOk, loadPublicData ];
export const privateMW = [ whoami, noRandos, loadPersonData ];
export const adminMW = [ whoami, adminOnly, loadAdminData ];
export const graphqlMW = [ whoami ];
