import actionTypes from '../actionTypes';
import { api } from '../util';
import { db } from '../nedb';
import { selectorMembersId } from '../selectors';


const nedbQueryMembers = query => async (dispatch) => {
  dispatch({ type: actionTypes.NEDB_QUERY_MEMBERS_START });
  try {
    const result = await db.members.find(query);
    dispatch({ type: actionTypes.NEDB_QUERY_MEMBERS_SUCCESS, result });
  } catch (err) {
    dispatch({ type: actionTypes.NEDB_QUERY_MEMBERS_FAIL, payload: err.toString() });
  }
};

const nedbGetMember = id => async (dispatch) => {
  dispatch({ type: actionTypes.NEDB_GET_MEMBER_START, payload: id });
  try {
    const profile = await db.members.findOne({ id });
    if (!profile) {
      throw new Error('Profile not found!');
    }
    const patron = await db.members.findOne({ id: profile.patronId });
    const result = { profile, patron };
    dispatch({ type: actionTypes.NEDB_GET_MEMBER_SUCCESS, result });
  } catch (err) {
    dispatch({ type: actionTypes.NEDB_GET_MEMBER_FAIL, payload: err.toString() });
  }
};

const updateMember = (id, update) => async (dispatch, getState) => {
  dispatch({ type: actionTypes.NEDB_UPDATE_MEMBER_START });
  try {
    const profile = await api.changeInfoMock(id, update);
    await db.members.update({ id }, profile);
    const prevProfileId = selectorMembersId(getState()) || {};
    if (prevProfileId === id) {
      dispatch(nedbGetMember(id));
    }
    dispatch({ type: actionTypes.NEDB_UPDATE_MEMBER_SUCCESS });
  } catch (err) {
    dispatch({ type: actionTypes.NEDB_UPDATE_MEMBER_FAIL, payload: err.toString() });
  }
};

const fetchMembers = () => async (dispatch, getState) => {
  dispatch({ type: actionTypes.FETCH_MEMBERS_START });
  try {
    const result = await api.getMembersMock();
    await db.members.remove({}, { multi: true });
    await Promise.all(result.map(member => db.members.insert(member)));
    const id = selectorMembersId(getState());
    if (id) {
      dispatch(nedbGetMember(id));
    }
    dispatch({ type: actionTypes.FETCH_MEMBERS_SUCCESS });
  } catch (err) {
    dispatch({ type: actionTypes.FETCH_MEMBERS_FAIL, payload: err.toString() });
  }
};

export const membersActions = {
  fetchMembers,
  updateMember,
  nedbQueryMembers,
  nedbGetMember,
};
