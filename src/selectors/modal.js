import { createSelector } from 'reselect';

export const selectorModal = state => state.modal;
export const selectorModalResult = createSelector(
  selectorModal,
  state => state.open,
);
