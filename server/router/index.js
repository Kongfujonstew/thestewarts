import express from 'express';
import graphql from '../../graphql';
import path from 'path';
import { publicMW, privateMW, adminMW, graphqlMW } from '../middleware';
import { gzip } from '../middleware/utils/headers';
import { renderPublic, renderPrivate, renderAdmin } from '../../client/ssrentry';
const router = express.Router();
const publicDir = process.env.PRODUCTION ? './public' : '../../public';

router.use('/public', gzip, express.static(path.resolve(__dirname, publicDir)));
router.get('/private$', ...privateMW, renderPrivate);
router.get('/admin(/email)?$', ...adminMW, renderAdmin);
router.use('/graphql', ...graphqlMW, graphql);
router.get('/login', ...publicMW, renderPublic);
router.get('/$', ...publicMW, renderPublic);
router.get('*', (req, res) => {res.status(404).send(`<body style="background-color: #3c3c3c;"><h1>404 - Not Found</h1></body>`)});

export default router;
