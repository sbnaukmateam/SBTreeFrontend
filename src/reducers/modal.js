import { handleActions } from 'redux-actions';
import actionTypes from '../actionTypes';

const initialState = {
  open: null,
  data: null,
};

const modalOpen = (state, { payload: { data, key } }) => ({
  ...state,
  open: key,
  data,
});

const modalClose = state => ({
  ...state,
  data: null,
  open: null,
});

export const modal = handleActions({
  [actionTypes.MODAL_OPEN]: modalOpen,
  [actionTypes.MODAL_CLOSE]: modalClose,
}, initialState);
