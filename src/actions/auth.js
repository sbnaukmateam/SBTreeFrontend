/* eslint-disable comma-dangle */
import { push } from 'connected-react-router';
import actionTypes from '../actionTypes';
import { api, setAuth, parseParams } from '../util';
import { selectorRouterSearch } from '../selectors';

const verifyUser = () => async (dispatch) => {
  dispatch({ type: actionTypes.AUTH_VERIFY_START });
  try {
    const result = await api.verify();
    dispatch({ type: actionTypes.AUTH_VERIFY_SUCCESS, payload: result });
  } catch (err) {
    dispatch({ type: actionTypes.AUTH_VERIFY_FAIL, payload: err.toString() });
  }
};

const signIn = data => async (dispatch, getState) => {
  const search = selectorRouterSearch(getState());
  const { back: backUrl } = parseParams(search);
  dispatch({ type: actionTypes.AUTH_LOGIN_START });
  try {
    const { username, password } = data;
    const result = await api.signIn(username, password);
    dispatch({ type: actionTypes.AUTH_LOGIN_SUCCESS, payload: result });
    dispatch({ type: actionTypes.MODAL_CLOSE });
    if (backUrl) {
      dispatch(push(backUrl));
    }
  } catch (err) {
    dispatch({ type: actionTypes.AUTH_LOGIN_FAIL, payload: err.toString() });
  }
};

const signUp = data => async (dispatch) => {
  dispatch({ type: actionTypes.AUTH_SIGNUP_START });
  try {
    const {
      username, password, name, surname,
    } = data;
    const result = await api.signUp(username, password, name, surname);
    dispatch({ type: actionTypes.AUTH_SIGNUP_SUCCESS, payload: result });
    dispatch({ type: actionTypes.MODAL_CLOSE });
  } catch (err) {
    dispatch({ type: actionTypes.AUTH_SIGNUP_FAIL, payload: err.toString() });
  }
};
const setAuthAction = (data) => {
  setAuth(data);
  return {
    type: actionTypes.SET_AUTH,
  };
};
const logout = () => (dispatch) => {
  dispatch({ type: actionTypes.AUTH_LOGOUT_START });
  try {
    setAuthAction();
    dispatch({ type: actionTypes.AUTH_LOGOUT_SUCCESS });
  } catch (err) {
    dispatch({ type: actionTypes.AUTH_LOGOUT_FAIL, payload: err.toString() });
  }
};
const forgotPassword = data => async (dispatch) => {
  dispatch({ type: actionTypes.FORGOT_PASSWORD_START });
  try {
    const { username } = data;
    const result = await api.sendChangePassMailMock(username);
    dispatch({ type: actionTypes.FORGOT_PASSWORD_SUCCESS, payload: result });
    dispatch({ type: actionTypes.MODAL_CLOSE });
  } catch (err) {
    dispatch({ type: actionTypes.FORGOT_PASSWORD_FAIL, payload: err.toString() });
  }
};
const changePassword = data => async (dispatch) => {
  dispatch({ type: actionTypes.CHANGE_PASSWORD_START });
  try {
    const { password } = data;
    const result = await api.changePasswordMock(password);
    dispatch({ type: actionTypes.CHANGE_PASSWORD_SUCCESS, payload: result });
    dispatch({ type: actionTypes.MODAL_CLOSE });
  } catch (err) {
    dispatch({ type: actionTypes.CHANGE_PASSWORD_FAIL, payload: err.toString() });
  }
};


export const authActions = {
  verifyUser, signIn, signUp, logout, forgotPassword, changePassword, setAuth: setAuthAction,
};
