import { promisify } from 'util';

export const promisifyAll = obj => Object.entries(obj)
  .reduce((prev, [key, value]) => Object.assign(prev, {
    [key]: typeof value === 'function' ? promisify(value) : value,
  }), {});
