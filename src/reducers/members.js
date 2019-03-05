import { handleActions } from 'redux-actions';
import actionTypes from '../actionTypes';

const initialState = {
  map: null,
  filtered: null,
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
  map: payload,
  loading: false,
  error: null,
  initial: false,
});

const fetchMembersFail = (state, { payload }) => ({
  ...state,
  map: null,
  loading: false,
  error: payload,
  initial: false,
});

const queryMembersStart = state => ({
  ...state,
  filtered: null,
  loading: true,
  error: null,
  initial: false,
});

const queryMembersSuccess = (state, { payload }) => ({
  ...state,
  filtered: payload,
  loading: false,
  error: null,
  initial: false,
});

const queryMembersFail = (state, { payload }) => ({
  ...state,
  filtered: null,
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
}, initialState);
