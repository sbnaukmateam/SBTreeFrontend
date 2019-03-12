/* eslint-disable linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style */
import { createSelector } from 'reselect';

export const selectorAuth = state => state.auth;

export const selectorLoggedIn = createSelector(
  selectorAuth,
  state => state.loggedIn,
);

export const selectorAuthError = createSelector(
  selectorAuth,
  state => state.error,
);
