export default (html, data) => `
  <!doctype html>
    <html>
    <head>
      <link rel="shortcut icon" type="image/x-icon" href="/public/images/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <script>window.__INITIAL__DATA__ = ${JSON.stringify(data)}</script>
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="/public/js/home.js"></script>
    </body>
  </html>
`;
