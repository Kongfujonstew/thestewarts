import 'whatwg-fetch';

const api = (path, body, headers) => {
  const url = window.location.origin + path;
  console.log('body: ', body)
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
};

export const auth = (email, password) => {
  return api('/auth', { email, password })
    .then(resp => resp.json()
      .then(json => json.token)
    );
};
