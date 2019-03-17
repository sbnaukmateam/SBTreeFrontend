import { promisify } from 'util';

export const promisifyAll = obj => Object.entries(obj)
  .reduce((prev, [key, value]) => (typeof value === 'function'
    ? Object.assign(prev, { [`${key}Async`]: promisify(value) })
    : prev), obj);
