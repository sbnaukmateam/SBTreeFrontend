import { createSelector } from 'reselect';

export const selectorMembers = state => state.members;

export const selectorMembersMap = createSelector(
  selectorMembers,
  state => state.map,
);

export const selectorMembersFiltered = createSelector(
  selectorMembers,
  state => state.filtered,
);
