import React from 'react';
import styles from '../styles/js';
const gz = process.env.PRODUCTION ? '.gz' : '';

export default (html, data, css, page) => `
  <!doctype html>
    <html>
    <head>
      <link rel="shortcut icon" type="image/x-icon" href="/public/images/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <script>window.__INITIAL__DATA__ = ${JSON.stringify(data)}</script>
      <style id="jss-server-side">${css}</style>
      <style>${styles.common}</style>
      <style>${styles[page]}</style>
      <style>#testOctopus{color:yellow;}</style>
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="/public/js/${page}.js${gz}"></script>
    </body>
  </html>
`;
