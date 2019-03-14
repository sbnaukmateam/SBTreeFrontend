import { createSelector } from 'reselect';

export const selectorAuthorisation = state => state.auth;
export const selectorAuth = createSelector(
  selectorAuthorisation,
  state => state.auth,
);
export const selectorReset = createSelector(
  selectorAuthorisation,
  state => state.reset,
);
export const selectorLoggedIn = createSelector(
  selectorAuth,
  state => state.loggedIn,
);
export const selectorAuthError = createSelector(
  selectorAuth,
  state => state.error,
);
