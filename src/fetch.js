import { fetchUtils } from 'react-admin';

export const doFetch = (uri, options) => {
  const url = uri.match(/^http/) ? uri : '/' + uri;
  if (!options) options = {};
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  const me = localStorage.getItem('auth');
  if (me) {
    const { token } = JSON.parse(me);
    options.headers.set('Authorization', `Bearer ${token}`);
  }
  return fetchUtils.fetchJson(url, options);
}