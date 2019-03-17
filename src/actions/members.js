import actionTypes from '../actionTypes';
import { api } from '../util';
import { db } from '../nedb';

const fetchMembers = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_MEMBERS_START });
  try {
    const result = await api.getMembersMock();
    await db.members.remove({}, { multi: true });
    await Promise.all(result.map(member => db.members.insert(member)));
    dispatch({ type: actionTypes.FETCH_MEMBERS_SUCCESS });
  } catch (err) {
    dispatch({ type: actionTypes.FETCH_MEMBERS_FAIL, payload: err.toString() });
  }
};


export const membersActions = { fetchMembers };
