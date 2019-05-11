import path from 'path';
import express from 'express';
import graphql from '../../graphql';
import bodyParser from 'body-parser';
import { passwordAuth, tokenAuth } from '../auth';
import { publicMW, privateMW, adminMW, graphqlMW } from '../middleware';
import { gzip } from '../middleware/utils/headers';
import { renderPublic, renderPrivate, renderAdmin } from '../../client/ssrentry';
const router = express.Router();
const publicDir = process.env.PRODUCTION ? './public' : '../../public';

//static assets
router.use('/public', gzip, express.static(path.resolve(__dirname, publicDir)));

//explicit login attempt from client
router.post('/auth', bodyParser.json(), passwordAuth);

//navigate to webpage with token, ie from link in email
router.get('/auth/:token', tokenAuth);

//graphql
router.use('/graphql', ...graphqlMW, graphql);

//render and deliver the private app, locked - person and admin role only
router.get('/private$', ...privateMW, renderPrivate);

//admin app, locked - admin only
router.get('/admin(/email)?$', ...adminMW, renderAdmin);

//public app, login page TODO Add to public app w/ regex in route
router.get('/login', ...publicMW, renderPublic);

//public app
router.get('/', ...publicMW, renderPublic);

//Worst case/ 404
router.get('*', (req, res) => {res.status(404).send(`<body style="background-color: #3c3c3c;"><h1>404 - Not Found</h1></body>`)});

export default router;
