import React from 'react';
import styles from '../styles/js';
// Base64 js images - eg 'public'/'wedding' lotus png for background image
import images from './images';
const gz = '';
// const gz = process.env.PRODUCTION ? '.gz' : '';

// <script>window.__INITIAL__DATA__ = ${JSON.stringify(data)}</script>
export default (html, data, css, app) => `
  <!doctype html>
    <html>
    <head>
      <link rel="shortcut icon" type="image/x-icon" href="/public/images/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <style id="jss-server-side">${css}</style>

      <link href="https://fonts.googleapis.com/css?family=Baskervville&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Great+Vibes&display=swap" rel="stylesheet">
      <style id="fonts">
        @font-face {
          font-family: MrsEavesRoman;
          src: url("public/fonts/MrsEavesOT-Roman.otf") format("opentype");
        }

        @font-face {
          font-family: MrsEavesItalic;
          src: url("public/fonts/MrsEavesOT-Italic.otf") format("opentype");
        }

        @font-face {
          font-family: Enamel;
          src: url("public/fonts/Enamel.ttf") format("truetype");
        }
      </style>
      <style>${styles[app] /* this is just public eg, wedding */}</style>
      <style>${images /* watch out this huge Base64 inline style is added for every page */}</style>
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="/public/js/${app}.js${gz}"></script>
    </body>
  </html>
`;
