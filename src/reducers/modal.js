import { handleActions } from 'redux-actions';
import actionTypes from '../actionTypes';

const initialState = {
  open: null,
};


const modalOpen = (state, { payload }) => ({
  ...state,
  open: payload,
});

const modalClose = (state, { payload }) => ({
  ...state,
  open: payload,
});

export const modal = handleActions({
  [actionTypes.MODAL_OPEN]: modalOpen,
  [actionTypes.MODAL_CLOSE]: modalClose,
}, initialState);
