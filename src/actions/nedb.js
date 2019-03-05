import actionTypes from '../actionTypes';
import { ensureIndexes, db } from '../nedb';

const nedbInit = () => async (dispatch) => {
  dispatch({ type: actionTypes.NEDB_INIT_START });
  try {
    await ensureIndexes();
    dispatch({ type: actionTypes.NEDB_INIT_SUCCESS });
  } catch (err) {
    dispatch({ type: actionTypes.NEDB_INIT_FAIL, payload: err.toString() });
  }
};

const nedbQueryMembers = (query, projection) => async (dispatch) => {
  dispatch({ type: actionTypes.NEDB_QUERY_MEMBERS_START });
  try {
    const result = await db.members.find(query, projection);
    dispatch({ type: actionTypes.NEDB_QUERY_MEMBERS_SUCCESS, result });
  } catch (err) {
    dispatch({ type: actionTypes.NEDB_QUERY_MEMBERS_FAIL, payload: err.toString() });
  }
};

const nedbGetMember = (id, projection) => async (dispatch) => {
  dispatch({ type: actionTypes.NEDB_QUERY_MEMBERS_START });
  try {
    const result = await db.members.findOne({ id }, projection);
    dispatch({ type: actionTypes.NEDB_QUERY_MEMBERS_SUCCESS, result });
  } catch (err) {
    dispatch({ type: actionTypes.NEDB_QUERY_MEMBERS_FAIL, payload: err.toString() });
  }
};

const nedbUpdateMember = (id, update) => async (dispatch) => {
  dispatch({ type: actionTypes.NEDB_QUERY_MEMBERS_START });
  try {
    const result = await db.members.update({ id }, { $set: update });
    dispatch({ type: actionTypes.NEDB_QUERY_MEMBERS_SUCCESS, result });
  } catch (err) {
    dispatch({ type: actionTypes.NEDB_QUERY_MEMBERS_FAIL, payload: err.toString() });
  }
};

export const nedbActions = {
  nedbInit,
  nedbQueryMembers,
  nedbGetMember,
  nedbUpdateMember,
};
