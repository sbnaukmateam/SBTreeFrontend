import { createSelector } from 'reselect';

export const selectorAuthorization = state => state.auth;

export const selectorLoggedIn = createSelector(
  selectorAuthorization,
  state => state.loggedIn,
);
export const selectorAuthError = createSelector(
  selectorAuthorization,
  state => state.error,
);
export const selectorRole = createSelector(
  selectorAuthorization,
  state => state.role,
);
