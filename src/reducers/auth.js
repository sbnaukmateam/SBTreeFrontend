import { handleActions } from 'redux-actions';
import actionTypes from '../actionTypes';

const initialState = {
  result: null,
  error: null,
  loading: false,
};

const authVerifyStart = state => ({
  ...state,
  loading: true,
  error: null,
  result: null,
});

const authVerifySuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  error: null,
  result: payload,
});

const authVerifyFail = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload,
  result: null,
});
const authLoginStart = state => ({
  ...state,
  loading: true,
  error: null,
  result: null,
});

const authLoginSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  error: null,
  result: payload,
});

const authLoginFail = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload,
  result: null,
});
const authSignUpStart = state => ({
  ...state,
  loading: true,
  error: null,
  result: null,
});

const authSignUpSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  error: null,
  result: payload,
});

const authSignUpFail = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload,
  result: null,
});
export const auth = handleActions({
  [actionTypes.AUTH_VERIFY_START]: authVerifyStart,
  [actionTypes.AUTH_VERIFY_SUCCESS]: authVerifySuccess,
  [actionTypes.AUTH_VERIFY_FAIL]: authVerifyFail,
  [actionTypes.AUTH_LOGIN_START]: authLoginStart,
  [actionTypes.AUTH_LOGIN_SUCCESS]: authLoginSuccess,
  [actionTypes.AUTH_LOGIN_FAIL]: authLoginFail,
  [actionTypes.AUTH_SIGNUP_START]: authSignUpStart,
  [actionTypes.AUTH_SIGNUP_SUCCESS]: authSignUpSuccess,
  [actionTypes.AUTH_SIGNUP_FAIL]: authSignUpFail,
}, initialState);
