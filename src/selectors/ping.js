import { createSelector } from 'reselect';

export const selectorPing = state => state.ping;

export const selectorResult = createSelector(
  selectorPing,
  state => state.result,
);

export const selectorLoading = createSelector(
  selectorPing,
  state => state.loading,
);

export const selectorInitial = createSelector(
  selectorPing,
  state => state.initial,
);

export const selectorError = createSelector(
  selectorPing,
  state => state.error,
);
