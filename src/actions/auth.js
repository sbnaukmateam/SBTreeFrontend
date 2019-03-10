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
    const { username, password } = data;
    const result = await api.signIn(username, password);
    dispatch({ type: actionTypes.AUTH_LOGIN_SUCCESS, payload: result });
    dispatch({ type: actionTypes.MODAL_CLOSE });
  } catch (err) {
    dispatch({ type: actionTypes.AUTH_LOGIN_FAIL, payload: err.toString() });
  }
};

const signUp = data => async (dispatch) => {
  dispatch({ type: actionTypes.AUTH_SIGNUP_START });
  try {
    const { username, password } = data;
    const result = await api.signUp(username, password);
    dispatch({ type: actionTypes.AUTH_SIGNUP_SUCCESS, payload: result });
  } catch (err) {
    dispatch({ type: actionTypes.AUTH_SIGNUP_FAIL, payload: err.toString() });
  }
};

export const authActions = { verifyUser, signIn, signUp };
