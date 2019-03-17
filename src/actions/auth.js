import { push } from 'connected-react-router';
import actionTypes from '../actionTypes';
import {
  api, setAuth, getAuth, parseParams,
} from '../util';
import { selectorRouterSearch } from '../selectors';

const verifyUser = () => async (dispatch) => {
  dispatch({ type: actionTypes.AUTH_VERIFY_START });
  try {
    const user = await api.verify();
    const role = { isAdmin: true, isActive: true, status: 'BRATCHYK' };
    const token = getAuth();
    dispatch({ type: actionTypes.AUTH_VERIFY_SUCCESS, payload: { user, role, token } });
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
    const { token, user } = await api.signIn(username, password);
    const role = { isAdmin: true, isActive: true, status: 'BRATCHYK' }; // await api.getRoleMock(username, password);
    setAuth(token);
    dispatch({ type: actionTypes.AUTH_LOGIN_SUCCESS, payload: { user, role, token } });
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

const logout = () => (dispatch) => {
  dispatch({ type: actionTypes.AUTH_LOGOUT_START });
  try {
    setAuth(null);
    dispatch({ type: actionTypes.AUTH_LOGOUT_SUCCESS });
  } catch (err) {
    dispatch({ type: actionTypes.AUTH_LOGOUT_FAIL, payload: err.toString() });
  }
};

export const authActions = {
  verifyUser, signIn, signUp, logout,
};
