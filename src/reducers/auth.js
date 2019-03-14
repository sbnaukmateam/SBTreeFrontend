import { handleActions } from 'redux-actions';
import actionTypes from '../actionTypes';

// HERE'S BLACK MAGIC, DRAGONS AND EERY BATS ABOVE THE SCARY TOWER
// TODO refactor, store token in redux
const initialState = {
  reset: {
    message: null,
    error: null,
  },
  auth: {
    token: null,
    user: null,
    loggedIn: false,
    error: null,
    loading: false,
  },
};

const handleStartReset = state => ({
  ...state,
  reset: {
    ...state.reset,
    message: 'loading',
    error: null,
  },
});
const handleStartAuth = state => ({
  ...state,
  auth: {
    ...state.auth,
    loading: true,
    error: null,
  },
});
const authSuccess = (state, { payload }) => ({
  ...state,
  auth: {
    ...state.auth,
    loading: false,
    loggedIn: true,
    error: null,
    user: payload,
  },
});

const loginFail = (state, { payload }) => ({
  ...state,
  auth: {
    ...state.auth,
    loading: false,
    error: payload,
    loggedIn: false,
    user: null,
  },
});

const verifyFail = state => ({
  ...state,
  auth: {
    ...state.auth,
    loading: false,
    loggedIn: false,
    user: null,
    error: null,
  },
});

const signupSuccess = (state, { payload }) => ({
  ...state,
  auth: {
    ...state.auth,
    loading: false,
    loggedIn: true,
    error: null,
    user: payload,
  },
});

const logoutSuccess = state => ({
  ...state,
  auth: {
    ...state.auth,
    loading: false,
    error: null,
    loggedIn: false,
    user: null,
  },
});
const logoutFail = (state, { payload }) => ({
  ...state,
  auth: {
    ...state.auth,
    loading: false,
    error: payload,
  },
});

const forgotPasswordSuccess = state => ({
  ...state,
  reset: {
    ...state.reset,
    message: 'sentMail',
    error: null,
  },
});
const changePasswordSuccess = state => ({
  ...state,
  reset: {
    ...state.reset,
    message: 'passChanged',
    error: null,
  },
});

const handleFailureReset = (state, { payload }) => ({
  ...state,
  reset: {
    ...state.reset,
    error: payload,
    message: '',
  },
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
  [actionTypes.FORGOT_PASSWORD_START]: handleStartReset,
  [actionTypes.FORGOT_PASSWORD_SUCCESS]: forgotPasswordSuccess,
  [actionTypes.FORGOT_PASSWORD_FAIL]: handleFailureReset,
  [actionTypes.CHANGE_PASSWORD_START]: handleStartReset,
  [actionTypes.CHANGE_PASSWORD_SUCCESS]: changePasswordSuccess,
  [actionTypes.CHANGE_PASSWORD_FAIL]: handleFailureReset,
}, initialState);
