import actionTypes from '../actionTypes';
import { api } from '../util';

const verifyUser = () => async (dispatch) => {
  dispatch({ type: actionTypes.AUTH_VERIFY_START });
  try {
    const result = await api.verify();
    dispatch({ type: actionTypes.AUTH_VERIFY_SUCCESS, payload: result });
  } catch (err) {
    dispatch({ type: actionTypes.AUTH_VERIFY_FAIL, payload: err.toString() });
  }
};

const signIn = data => async (dispatch) => {
  dispatch({ type: actionTypes.AUTH_LOGIN_START });
  try {
    const result = await api.signIn(data);
    dispatch({ type: actionTypes.AUTH_LOGIN_SUCCESS, payload: result });
  } catch (err) {
    dispatch({ type: actionTypes.AUTH_LOGIN_FAIL, payload: err.toString() });
  }
};

const signUp = data => async (dispatch) => {
  dispatch({ type: actionTypes.AUTH_SIGNUP_START });
  try {
    const result = await api.signUp(data);
    dispatch({ type: actionTypes.AUTH_SIGNUP_SUCCESS, payload: result });
  } catch (err) {
    dispatch({ type: actionTypes.AUTH_SIGNUP_FAIL, payload: err.toString() });
  }
};

export const authActions = { verifyUser, signIn, signUp };
