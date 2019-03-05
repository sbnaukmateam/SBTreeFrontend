import { createSelector } from 'reselect';

export const selectorMembers = state => state.members;

export const selectorMembersMap = createSelector(
  selectorMembers,
  state => state.map,
);

export const selectorMembersById = id => createSelector(
  selectorMembersFull,
  state => state[id],
);

export const selectorMembersFiltered = createSelector(
  selectorMembers,
  state => state.filtered,
);
