export const schemaHeaders = (schema) => {
  return {
    'Content-Profile': schema,
    'Accept-Profile': schema,
  }
}