import { handleActions } from 'redux-actions';
import actionTypes from '../actionTypes';

const initialState = {
  open: null,
  error: null,
  loading: false,
};

const modalStart = state => ({
  ...state,
  loading: true,
  error: null,
  open: null,
});

const modalSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  error: null,
  open: payload,
});

const modalFail = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload,
  open: null,
});


export const modal = handleActions({
  [actionTypes.MODAL_LOGIN_START]: modalStart,
  [actionTypes.MODAL_LOGIN_SUCCESS]: modalSuccess,
  [actionTypes.MODAL_LOGIN_FAIL]: modalFail,
  [actionTypes.MODAL_SIGNUP_START]: modalStart,
  [actionTypes.MODAL_SIGNUP_SUCCESS]: modalSuccess,
  [actionTypes.MODAL_SIGNUP_FAIL]: modalFail,
  [actionTypes.MODAL_CLOSE_START]: modalStart,
  [actionTypes.MODAL_CLOSE_SUCCESS]: modalSuccess,
  [actionTypes.MODAL_CLOSE_FAIL]: modalFail,
}, initialState);
