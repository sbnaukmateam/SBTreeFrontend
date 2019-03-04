import { createSelector } from 'reselect';

export const selectorPing = state => state.ping;

export const selectorPingResult = createSelector(
  selectorPing,
  state => state.result,
);

export const selectorPingLoading = createSelector(
  selectorPing,
  state => state.loading,
);

export const selectorPingInitial = createSelector(
  selectorPing,
  state => state.initial,
);

export const selectorPingError = createSelector(
  selectorPing,
  state => state.error,
);
