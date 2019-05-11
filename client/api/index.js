import { fetch } from 'whatwg-fetch';

export default (path, body, headers) => {
  const url = window.location.origin + path;
  fetch(url, {
    method: 'POST',
    headers: headers || {},
    body: JSON.stringify(body);
  });
};
