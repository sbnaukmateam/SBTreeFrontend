import { push } from 'connected-react-router';
import actionTypes from '../actionTypes';
import { api } from '../util';
import { db } from '../nedb';
import { selectorMembersId } from '../selectors';


const nedbQueryMembers = query => async (dispatch) => {
  dispatch({ type: actionTypes.NEDB_QUERY_MEMBERS_START });
  try {
    const result = await db.members.findAsync(query);
    dispatch({ type: actionTypes.NEDB_QUERY_MEMBERS_SUCCESS, payload: result });
  } catch (err) {
    dispatch({ type: actionTypes.NEDB_QUERY_MEMBERS_FAIL, payload: err.toString() });
  }
};

const nedbGetMember = id => async (dispatch) => {
  dispatch({ type: actionTypes.NEDB_GET_MEMBER_START, payload: id });
  try {
    const profile = await db.members.findOneAsync({ id });
    if (!profile) {
      throw new Error('Profile not found!');
    }
    const patron = await db.members.findOneAsync({ id: profile.patronId });
    const result = { profile, patron };
    dispatch({ type: actionTypes.NEDB_GET_MEMBER_SUCCESS, payload: result });
  } catch (err) {
    dispatch({ type: actionTypes.NEDB_GET_MEMBER_FAIL, payload: err.toString() });
  }
};

const updateMember = (id, update) => async (dispatch, getState) => {
  dispatch({ type: actionTypes.NEDB_UPDATE_MEMBER_START });
  try {
    const profile = await api.changeInfoMock(id, update);
    await db.members.updateAsync({ id }, profile);
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
    const result = await api.fetchMembers();
    await db.members.remove({}, { multi: true });
    await db.members.insertAsync(result);
    const id = selectorMembersId(getState());
    if (id) {
      dispatch(nedbGetMember(id));
    }
    dispatch({ type: actionTypes.FETCH_MEMBERS_SUCCESS, payload: result });
  } catch (err) {
    dispatch({ type: actionTypes.FETCH_MEMBERS_FAIL, payload: err.toString() });
  }
};

const addMember = data => async (dispatch) => {
  dispatch({ type: actionTypes.ADD_MEMBER_START });
  try {
    const {
      name, surname, username, birthday,
    } = data;
    const result = await api.addMember(name, surname, username, birthday);
    await db.members.insertAsync(result);
    dispatch(push(`/profiles/${result.id}`));
    dispatch({ type: actionTypes.MODAL_CLOSE });
    dispatch({ type: actionTypes.ADD_MEMBER_SUCCESS, payload: result });
  } catch (err) {
    dispatch({ type: actionTypes.ADD_MEMBER_FAIL, payload: err.toString() });
  }
};

export const membersActions = {
  fetchMembers,
  updateMember,
  nedbQueryMembers,
  nedbGetMember,
  addMember,
};
