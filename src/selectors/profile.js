import { createSelector } from 'reselect';

export const selectorProfile = state => state.profile;

export const selectorMessage = createSelector(
  selectorProfile,
  state => state.message,
);

export const selectorCurrentProfile = createSelector(
  selectorProfile,
  state => state.profile,
);

export const selectorPatron = createSelector(
  selectorProfile,
  state => state.patron,
);
