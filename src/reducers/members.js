import { handleActions } from 'redux-actions';
import actionTypes from '../actionTypes';

const initialState = {
  result: null,
  error: null,
  loading: false,
};

const fetchMembersStart = state => ({
  ...state,
  loading: true,
  error: null,
  result: null,
});

const fetchMembersSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  error: null,
  result: payload,
});

const fetchMembersFail = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload,
  result: null,
});

export const members = handleActions({
  [actionTypes.FETCH_MEMBERS_START]: fetchMembersStart,
  [actionTypes.FETCH_MEMBERS_SUCCESS]: fetchMembersSuccess,
  [actionTypes.FETCH_MEMBERS_FAIL]: fetchMembersFail,
}, initialState);
