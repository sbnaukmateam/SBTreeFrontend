import { handleActions } from 'redux-actions';
import actionTypes from '../actionTypes';

const initialState = {
  result: null,
  error: null,
  loading: false,
};

const fetchProjectsStart = state => ({
  ...state,
  loading: true,
  error: null,
  result: null,
});

const fetchProjectsSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  error: null,
  result: payload,
});

const fetchProjectsFail = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload,
  result: null,
});

export const projects = handleActions({
  [actionTypes.FETCH_PROJECTS_START]: fetchProjectsStart,
  [actionTypes.FETCH_PROJECTS_SUCCESS]: fetchProjectsSuccess,
  [actionTypes.FETCH_PROJECTS_FAIL]: fetchProjectsFail,
}, initialState);
