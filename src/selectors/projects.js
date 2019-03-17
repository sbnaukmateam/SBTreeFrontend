import { createSelector } from 'reselect';

export const selectorProjects = state => state.projects;

export const selectorProjectsList = createSelector(
  selectorProjects,
  state => state.result,
);
