import { handleActions } from 'redux-actions';
import actionTypes from '../actionTypes';

const initialState = {
  result: null,
  error: null,
  loading: false,
};

const authStart = state => ({
  ...state,
  loading: true,
  error: null,
  result: null,
});

const authSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  error: null,
  result: payload,
});

const authFail = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload,
  result: null,
});

export const auth = handleActions({
  [actionTypes.AUTH_VERIFY_START]: authStart,
  [actionTypes.AUTH_VERIFY_SUCCESS]: authSuccess,
  [actionTypes.AUTH_VERIFY_FAIL]: authFail,
  [actionTypes.AUTH_LOGIN_START]: authStart,
  [actionTypes.AUTH_LOGIN_SUCCESS]: authSuccess,
  [actionTypes.AUTH_LOGIN_FAIL]: authFail,
  [actionTypes.AUTH_SIGNUP_START]: authStart,
  [actionTypes.AUTH_SIGNUP_SUCCESS]: authSuccess,
  [actionTypes.AUTH_SIGNUP_FAIL]: authFail,
  [actionTypes.AUTH_LOGOUT_START]: authStart,
  [actionTypes.AUTH_LOGOUT_SUCCESS]: authSuccess,
  [actionTypes.AUTH_LOGOUT_FAIL]: authFail,
}, initialState);
