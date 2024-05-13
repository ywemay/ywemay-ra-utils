import { httpFilesClient } from './http-client';

export const upload = ({uri, file}) => new Promise((resolve, reject) => {
  const body = new FormData();
  body.append('file', file);
  httpFilesClient(uri, {
    method: 'POST',
      headers: new Headers({
        ContentType: 'multipart/form-data',
        Accept: '*', //'application/json',
      }),
      body,
  }).then(({body, status}) => {
    return status === 200 ? resolve(body) : reject(new Error('Failed to upload file.'))
  }).catch(err => {
    console.log(err)
    reject(err.response?.message || err)
  });
});