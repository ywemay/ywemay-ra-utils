export const prepSearch = (params, fields) => {
  const filter = params.filter;
  if (filter?.q !== undefined) {
    const q = filter.q;
    const w = fields.map(v => (`${v}.like.%${q}%`)).join(',');
    filter['or@'] = `(${w})`;
    delete filter.q;
  }
  return params;
}

export function getBeforeGetList(searchFields) {
  return async (params) => prepSearch(params, searchFields.split(','))
}

export function getListCBProps(resource, searchFields) {
  return {
    resource,
    beforeGetList: getBeforeGetList(searchFields),
  }
}
