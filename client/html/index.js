import React from 'react';
import styles from '../styles/js';
const gz = process.env.PRODUCTION ? '.gz' : '';

export default (html, data, css, app) => `
  <!doctype html>
    <html>
    <head>
      <link rel="shortcut icon" type="image/x-icon" href="/public/images/favicon.ico" />


      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">

      <link href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah|Permanent+Marker|Sacramento|Shadows+Into+Light|Stylish&display=swap" rel="stylesheet">


      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <script>window.__INITIAL__DATA__ = ${JSON.stringify(data)}</script>
      <style id="jss-server-side">${css}</style>
      <style>${styles.common}</style>
      <style>${styles[app]}</style>
      <style>#testOctopus{color:yellow;}</style>
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="/public/js/${app}.js${gz}"></script>
    </body>
  </html>
`;
