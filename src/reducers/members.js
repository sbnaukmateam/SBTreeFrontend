import { handleActions } from 'redux-actions';
import actionTypes from '../actionTypes';

const initialState = {
  list: null,
  id: null,
  profile: null,
  patron: null,
  error: null,
  loading: false,
  initial: true,
};

const fetchMembersStart = state => ({
  ...state,
  loading: true,
  error: null,
  initial: false,
});

const fetchMembersSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  error: null,
  initial: false,
  list: payload,
});

const fetchMembersFail = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload,
  initial: false,
});

const queryMembersStart = state => ({
  ...state,
  loading: true,
  error: null,
  initial: false,
});

const queryMembersSuccess = (state, { payload }) => ({
  ...state,
  list: payload,
  loading: false,
  error: null,
  initial: false,
});

const queryMembersFail = (state, { payload }) => ({
  ...state,
  list: null,
  loading: false,
  error: payload,
  initial: false,
});

const getMemberStart = (state, { payload: id }) => ({
  ...state,
  item: null,
  loading: true,
  error: null,
  initial: false,
  id,
});

const getMemberSuccess = (state, { payload: { profile, patron } }) => ({
  ...state,
  profile,
  patron,
  loading: false,
  error: null,
  initial: false,
});

const getMemberFail = (state, { payload }) => ({
  ...state,
  item: null,
  loading: false,
  error: payload,
  initial: false,
});


export const members = handleActions({
  [actionTypes.FETCH_MEMBERS_START]: fetchMembersStart,
  [actionTypes.FETCH_MEMBERS_SUCCESS]: fetchMembersSuccess,
  [actionTypes.FETCH_MEMBERS_FAIL]: fetchMembersFail,
  [actionTypes.NEDB_QUERY_MEMBERS_START]: queryMembersStart,
  [actionTypes.NEDB_QUERY_MEMBERS_SUCCESS]: queryMembersSuccess,
  [actionTypes.NEDB_QUERY_MEMBERS_FAIL]: queryMembersFail,
  [actionTypes.NEDB_GET_MEMBER_START]: getMemberStart,
  [actionTypes.NEDB_GET_MEMBER_SUCCESS]: getMemberSuccess,
  [actionTypes.NEDB_GET_MEMBER_FAIL]: getMemberFail,
}, initialState);
