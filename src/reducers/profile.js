import { handleActions } from 'redux-actions';
import actionTypes from '../actionTypes';

const initialState = {
  message: null,
  error: null,
  loading: false,
  initial: true,
};

const changePasswordStart = state => ({
  ...state,
  loading: true,
  error: null,
  message: null,
  initial: false,
});

const changePasswordSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  error: null,
  message: payload,
  initial: false,
});

const changePasswordFail = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload,
  message: null,
  initial: false,
});

const changeInfoStart = state => ({
  ...state,
  loading: true,
  error: null,
  message: null,
  initial: false,
});

const changeInfoSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  error: null,
  message: payload,
  initial: false,
});

const changeInfoFail = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload,
  message: null,
  initial: false,
});

export const profile = handleActions({
  [actionTypes.CHANGE_INFORMATION_START]: changeInfoStart,
  [actionTypes.CHANGE_INFORMATION_SUCCESS]: changeInfoSuccess,
  [actionTypes.CHANGE_INFORMATION_FAIL]: changeInfoFail,
  [actionTypes.CHANGE_PASSWORD_START]: changePasswordStart,
  [actionTypes.CHANGE_PASSWORD_SUCCESS]: changePasswordSuccess,
  [actionTypes.CHANGE_PASSWORD_FAIL]: changePasswordFail,
}, initialState);
