import 'whatwg-fetch';
import glitter from './glitter';

export const sendEmail = message => {
  return fetch('/email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message)
  })
  .then(resp => resp.json()
    .then(json => {
      const { sent, error } = json;
      if (sent) {
        return true;
      }

      return false;
    })
    .catch(() => null)
  )
  .catch(() => null);
}

export const initGlitter = glitter;
