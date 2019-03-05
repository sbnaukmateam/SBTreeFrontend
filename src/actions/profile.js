import actionTypes from '../actionTypes';
import { api } from '../util';
import { db } from '../nedb';

const changePassword = newPassword => async (dispatch) => {
  dispatch({ type: actionTypes.CHANGE_PASSWORD_START });
  try {
    const result = await api.changePasswordMock(newPassword);
    dispatch({ type: actionTypes.CHANGE_PASSWORD_SUCCESS, payload: result });
  } catch (err) {
    dispatch({ type: actionTypes.CHANGE_PASSWORD_FAIL, payload: err.toString() });
  }
};

const changeInfo = (id, data) => async (dispatch) => {
  dispatch({ type: actionTypes.CHANGE_INFORMATION_START });
  try {
    const result = await api.changeInfoMock(id, data);
    await db.members.update({ id }, data);
    dispatch({ type: actionTypes.CHANGE_INFORMATION_SUCCESS, payload: result });
  } catch (err) {
    dispatch({ type: actionTypes.CHANGE_INFORMATION_FAIL, payload: err.toString() });
  }
};

const loadProfile = (id, projection) => async (dispatch) => {
  dispatch({ type: actionTypes.NEDB_LOAD_PROFILE_START });
  try {
    const result = await db.members.findOne({ id }, projection);
    dispatch({ type: actionTypes.NEDB_LOAD_PROFILE_SUCCESS, result });
  } catch (err) {
    dispatch({ type: actionTypes.NEDB_LOAD_PROFILE_FAIL, payload: err.toString() });
  }
};

export const profileActions = { changePassword, changeInfo, loadProfile };
