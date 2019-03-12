/* eslint-disable linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style */
import { createSelector } from 'reselect';

export const selectorRouter = state => state.router;

export const selectorLocation = createSelector(
  selectorRouter,
  state => state.location,
);

export const selectorRouterPathname = createSelector(
  selectorLocation,
  state => state.pathname,
);

export const selectorRouterSearch = createSelector(
  selectorLocation,
  state => state.search,
);
