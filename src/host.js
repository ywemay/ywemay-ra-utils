  const { VITE_API_HOST: api } = import.meta.env;
  const { VITE_API_FILES_HOST: files } = import.meta.env;

  export const host = { api, files }