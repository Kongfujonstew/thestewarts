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

// dep
export const auth = (email, password) => {
  return api('/auth', { email, password })
    .then(resp => resp.json()
      .then(json => json)
    );
};

export const graphql = query => {
  return api('/graphql', { query })
    .then(resp => resp.json()
      .then(json => {
        const { data, errors } = json;
        if (errors || !data) return null;
        return data[Object.keys(data)[0]];
      })
    );
};
