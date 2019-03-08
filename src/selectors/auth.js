import { createSelector } from 'reselect';

export const selectorAuth = state => state.auth;
export const selectorAuthResult = createSelector(
  selectorAuth,
  state => state.result,
);
