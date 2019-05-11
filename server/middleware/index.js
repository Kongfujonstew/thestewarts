import whoami from './whoami';
import loadPublicData from './public';
import loadPersonData from './person';
import loadAdminData from './admin';
import { anyoneOk, noRandos, adminOnly } from '../auth/locks';

export const publicMW = [ whoami, anyoneOk ];
export const privateMW = [ whoami, noRandos, loadPublicData, loadPersonData ];
export const adminMW = [ whoami, adminOnly, loadAdminData ];
export const graphqlMW = [ whoami ];
