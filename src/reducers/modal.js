import { handleActions } from 'redux-actions';
import actionTypes from '../actionTypes';

const initialState = {
  open: null,
};


const modalSuccess = (state, { payload }) => ({
  ...state,
  open: payload,
});


export const modal = handleActions({
  [actionTypes.MODAL_LOGIN]: modalSuccess,
  [actionTypes.MODAL_SIGNUP]: modalSuccess,
  [actionTypes.MODAL_CLOSE]: modalSuccess,
}, initialState);
