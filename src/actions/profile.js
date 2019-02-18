import actionTypes from '../actionTypes';
import { api } from '../util';

const changePassword = newPassword => async (dispatch) => {
  dispatch({ type: actionTypes.CHANGE_PASSWORD_START });
  try {
    const result = await api.changePasswordMock(newPassword);
    dispatch({ type: actionTypes.CHANGE_PASSWORD_SUCCESS, payload: result });
  } catch (err) {
    dispatch({ type: actionTypes.CHANGE_PASSWORD_FAIL, payload: err.toString() });
  }
};

const changeInfo = data => async (dispatch) => {
  dispatch({ type: actionTypes.CHANGE_INFORMATION_START });
  try {
    const result = await api.changeInfoMock(data);
    dispatch({ type: actionTypes.CHANGE_INFORMATION_SUCCESS, payload: result });
  } catch (err) {
    dispatch({ type: actionTypes.CHANGE_INFORMATION_FAIL, payload: err.toString() });
  }
};
export const profileActions = { changePassword, changeInfo };
