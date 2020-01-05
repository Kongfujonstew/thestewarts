import path from 'path';
import express from 'express';
// import graphql from '../../graphql';
import bodyParser from 'body-parser';
// import { passwordAuth, tokenAuth } from '../auth/authenticate';
// import { publicMW, privateMW, adminMW, graphqlMW } from '../middleware';
import { gzip } from '../middleware/utils/headers';
import { renderPublic /* , renderPrivate, renderAdmin */ } from '../../client/ssrentry';
const router = express.Router();
const publicDir = process.env.PRODUCTION ? './public' : '../../public';

//static assets
router.use('/public', gzip, express.static(path.resolve(__dirname, publicDir)));

//explicit login attempt from client
// router.post('/auth', bodyParser.json(), passwordAuth);

//navigate to webpage with token, ie from link in email
// router.get('/auth/:token', tokenAuth);

//graphql
// router.use('/graphql', ...graphqlMW, graphql);

//the private app (more pages coming), locked - person and admin role only
// router.get('/private', ...privateMW, renderPrivate);

//admin app, locked to admin only
// router.get('/admin(/email)?(/blog)?$', ...adminMW, renderAdmin);

//public app - everything goes to wedding?
router.post('/email', bodyParser.json(), () => console.log('EMAIL POST RECEIVED!'));
router.get('/wedding', renderPublic);
router.get('/', renderPublic);

//Worst case/ 404
router.get('*', (req, res) => {res.status(404).send(`<body style="background-color: #3c3c3c;"><h1>404 - Not Found</h1></body>`)});

export default router;
