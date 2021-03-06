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
export const selectorAuthUser = createSelector(
  selectorAuthorization,
  state => state.user,
);
export const selectorAuthInitial = createSelector(
  selectorAuthorization,
  state => state.initial,
);
