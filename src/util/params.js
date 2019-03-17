import { parse, stringify } from 'querystring';

export const parseParams = (queryString) => {
  if (queryString && queryString[0] === '?') {
    return parse(queryString.substring(1));
  }
  return parse(queryString);
};

export const stringifyParams = params => params && `?${stringify(params)}`;
