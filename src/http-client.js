import { doFetch } from './fetch';

export const httpClient = (uri, options) => {
  const { VITE_API_HOST } = import.meta.env;
  return doFetch([VITE_API_HOST, uri].join('/'), options); 
};

export const httpFilesClient = (uri, options) => {
  const { VITE_API_FILES_HOST } = import.meta.env;
  return doFetch([VITE_API_FILES_HOST, uri].join('/'), options); 
};
