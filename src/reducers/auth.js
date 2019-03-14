import { handleActions } from 'redux-actions';
import actionTypes from '../actionTypes';

// HERE'S BLACK MAGIC, DRAGONS AND EERY BATS ABOVE THE SCARY TOWER
// TODO refactor, store token in redux
const initialState = {
  token: null,
  user: null,
  loggedIn: false,
  error: null,
  loading: false,
};

const handleStartAuth = state => ({
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

const signupSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  loggedIn: true,
  error: null,
  user: payload,
});

const logoutSuccess = state => ({
  ...state,
  loading: false,
  error: null,
  loggedIn: false,
  user: null,
});
const logoutFail = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload,
});


export const auth = handleActions({
  [actionTypes.AUTH_VERIFY_START]: handleStartAuth,
  [actionTypes.AUTH_VERIFY_SUCCESS]: authSuccess,
  [actionTypes.AUTH_VERIFY_FAIL]: verifyFail,
  [actionTypes.AUTH_LOGIN_START]: handleStartAuth,
  [actionTypes.AUTH_LOGIN_SUCCESS]: authSuccess,
  [actionTypes.AUTH_LOGIN_FAIL]: loginFail,
  [actionTypes.AUTH_SIGNUP_START]: handleStartAuth,
  [actionTypes.AUTH_SIGNUP_SUCCESS]: signupSuccess,
  [actionTypes.AUTH_SIGNUP_FAIL]: verifyFail,
  [actionTypes.AUTH_LOGOUT_START]: handleStartAuth,
  [actionTypes.AUTH_LOGOUT_FAIL]: logoutFail,
  [actionTypes.AUTH_LOGOUT_SUCCESS]: logoutSuccess,
}, initialState);