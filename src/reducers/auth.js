import { handleActions } from 'redux-actions';
import actionTypes from '../actionTypes';

// HERE'S BLACK MAGIC, DRAGONS AND EERY BATS ABOVE THE SCARY TOWER
// TODO refactor, store token in redux
const initialState = {
  loggedIn: false,
  user: null,
  error: null,
  loading: false,
};

const handleStart = state => ({
  ...state,
  loading: true,
  error: null,
});

const authSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  loggedIn: true,
  error: null,
  user: payload,
});

const loginFail = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload,
  loggedIn: false,
  user: null,
});

const verifyFail = state => ({
  ...state,
  loading: false,
  loggedIn: false,
  user: null,
  error: null,
});

const signupSuccess = state => ({
  ...state,
  loading: false,
  error: null,
});

const logoutStart = state => ({
  ...state,
  loading: true,
  error: null,
  loggedIn: false,
  user: null,
});
const handleSuccess = state => ({
  ...state,
  loading: false,
});
const handleFailure = (state, { payload }) => ({
  ...state,
  error: payload,
});

export const auth = handleActions({
  [actionTypes.AUTH_VERIFY_START]: handleStart,
  [actionTypes.AUTH_VERIFY_SUCCESS]: authSuccess,
  [actionTypes.AUTH_VERIFY_FAIL]: verifyFail,
  [actionTypes.AUTH_LOGIN_START]: handleStart,
  [actionTypes.AUTH_LOGIN_SUCCESS]: authSuccess,
  [actionTypes.AUTH_LOGIN_FAIL]: loginFail,
  [actionTypes.AUTH_SIGNUP_START]: handleStart,
  [actionTypes.AUTH_SIGNUP_SUCCESS]: signupSuccess,
  [actionTypes.AUTH_SIGNUP_FAIL]: handleFailure,
  [actionTypes.AUTH_LOGOUT_START]: logoutStart,
  [actionTypes.AUTH_LOGOUT_FAIL]: handleFailure,
  [actionTypes.CHANGE_PASS_MAIL_START]: handleStart,
  [actionTypes.CHANGE_PASS_MAIL_SUCCESS]: handleSuccess,
  [actionTypes.CHANGE_PASS_MAIL_FAIL]: handleFailure,
  [actionTypes.CHANGE_PASSWORD_START]: handleStart,
  [actionTypes.CHANGE_PASSWORD_SUCCESS]: handleSuccess,
  [actionTypes.CHANGE_PASSWORD_FAIL]: handleFailure,
}, initialState);
