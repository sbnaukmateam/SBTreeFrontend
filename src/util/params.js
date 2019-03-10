import { parse, stringify } from 'querystring';

export const parseParams = (queryString) => {
  if (queryString && queryString[0] === '?') {
    queryString = queryString.substring(1); // eslint-disable-line
  }
  return parse(queryString);
};

export const stringifyParams = params => params && `?${stringify(params)}`;
