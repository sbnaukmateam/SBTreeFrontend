import { createSelector } from 'reselect';

export const selectorAuthorisation = state => state.auth;

export const selectorLoggedIn = createSelector(
  selectorAuthorisation,
  state => state.loggedIn,
);
export const selectorAuthError = createSelector(
  selectorAuthorisation,
  state => state.error,
);
