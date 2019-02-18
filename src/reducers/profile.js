import { handleActions } from 'redux-actions';
import actionTypes from '../actionTypes';

const initialState = {
  result: null,
  error: null,
  loading: false,
  initial: true,
};

const changePasswordStart = state => ({
  ...state,
  loading: true,
  error: null,
  result: null,
  initial: false,
});

const changePasswordSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  error: null,
  result: payload,
  initial: false,
});

const changePasswordFail = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload,
  result: null,
  initial: false,
});
const changeInfoStart = state => ({
  ...state,
  loading: true,
  error: null,
  result: null,
  initial: false,
});

const changeInfoSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  error: null,
  result: payload,
  initial: false,
});

const changeInfoFail = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload,
  result: null,
  initial: false,
});
export const infoChange = handleActions({
  [actionTypes.CHANGE_INFORMATION_START]: changeInfoStart,
  [actionTypes.CHANGE_INFORMATION_SUCCESS]: changeInfoSuccess,
  [actionTypes.CHANGE_INFORMATION_FAIL]: changeInfoFail,
}, initialState);
export const passwordChange = handleActions({
  [actionTypes.CHANGE_PASSWORD_START]: changePasswordStart,
  [actionTypes.CHANGE_PASSWORD_SUCCESS]: changePasswordSuccess,
  [actionTypes.CHANGE_PASSWORD_FAIL]: changePasswordFail,
}, initialState);
