import { createSelector } from 'reselect';

export const selectorMembers = state => state.members;

export const selectorMembersList = createSelector(
  selectorMembers,
  state => state.list,
);

export const selectorMembersProfile = createSelector(
  selectorMembers,
  state => state.profile,
);

export const selectorMembersPatron = createSelector(
  selectorMembers,
  state => state.profile,
);

export const selectorMembersId = createSelector(
  selectorMembers,
  state => state.id,
);
