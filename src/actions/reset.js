import actionTypes from '../actionTypes';
import { api } from '../util';

const setResetAction = data => ({
  type: actionTypes.SET_AUTH,
  payload: data,
});
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
    setResetAction();
    dispatch({ type: actionTypes.CHANGE_PASSWORD_SUCCESS, payload: result });
    dispatch({ type: actionTypes.MODAL_CLOSE });
  } catch (err) {
    dispatch({ type: actionTypes.CHANGE_PASSWORD_FAIL, payload: err.toString() });
  }
};
export const resetActions = {
  changePassword, forgotPassword, setReset: setResetAction,
};
