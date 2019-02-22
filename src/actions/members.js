import actionTypes from '../actionTypes';
import { api } from '../util';

const fetchMembers = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_MEMBERS_START });
  try {
    const result = await api.getMembersMock();
    dispatch({ type: actionTypes.FETCH_MEMBERS_SUCCESS, payload: result });
  } catch (err) {
    dispatch({ type: actionTypes.FETCH_MEMBERS_FAIL, payload: err.toString() });
  }
};

export const membersActions = { fetchMembers };
