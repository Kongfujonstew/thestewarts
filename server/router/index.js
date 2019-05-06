import express from 'express';
import graphql from '../../graphql';
import path from 'path';
import { publicMW, privateMW, adminMW, graphqlMW } from '../middleware';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import Public from '../../client/pages/Public';
import Private from '../../client/pages/Private';
import Admin from '../../client/pages/Admin';
// import models, { sequelize } from '../db/models';
import mainTemplate from '../../client/html';
const router = express.Router();
const fakeData = { name: 'JOE'};
const data = fakeData;


router.get('/', ...publicMW, (req, res) => {
  console.log('req: ', req)
  const componentHTML = ReactDOMServer.renderToString(
    <Public name={data.name} />
  );
  const html = mainTemplate(componentHTML, data);
  res.send(html);
});

router.get('/private', ...privateMW, (req, res) => {
  const context = {};
  const componentHTML = ReactDOMServer.renderToString(
    <Router location={req.url} context={context}>
      <Private />
    </Router>
  );
  const html = mainTemplate(componentHTML, data);
  res.send(html);
});

router.get('/admin', ...adminMW, (req, res) => {
  const context = {};
  const componentHTML = ReactDOMServer.renderToString(
    <Router location={req.url} context={context}>
      <Admin />
    </Router>
  );
  const html = mainTemplate(componentHTML, data);
  res.send(html);
});


router.use('/graphql', ...graphqlMW, graphql);
router.use('/public', express.static(path.resolve(__dirname, 'public')));
router.get('*', (req, res) => {res.status(404).send(`<body style="background-color: #3c3c3c;"><h1>404 - Not Found</h1></body>`)});

export default router;
