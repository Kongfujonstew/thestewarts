import express from 'express';
import graphql from '../../graphql';
import path from 'path';
import { publicMW, privateMW, adminMW, graphqlMW } from '../middleware';
import { renderPublic, renderPrivate, renderAdmin } from '../../client/ssrentry';
const router = express.Router();
const publicDir = process.env.NODE_ENV === 'production' ? './public' : '../../public';

router.use('/public', express.static(path.resolve(__dirname, publicDir)));
router.get('/private', ...privateMW, renderPrivate);
router.get('/admin', ...adminMW, renderAdmin);
router.use('/graphql', ...graphqlMW, graphql);
router.get('/', ...publicMW, renderPublic);
router.get('*', (req, res) => {res.status(404).send(`<body style="background-color: #3c3c3c;"><h1>404 - Not Found</h1></body>`)});

export default router;
