import { handleActions } from 'redux-actions';
import actionTypes from '../actionTypes';

const initialState = {
  result: null,
  error: null,
  loading: false,
  initial: true,
};

const pingRequestStart = state => ({
  ...state,
  loading: true,
  error: null,
  result: null,
  initial: false,
});

const pingRequestSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  error: null,
  result: payload,
  initial: false,
});

const pingRequestFail = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload,
  result: null,
  initial: false,
});

const pingReset = () => ({ ...initialState });

export const ping = handleActions({
  [actionTypes.PING_REQUEST_START]: pingRequestStart,
  [actionTypes.PING_REQUEST_SUCCESS]: pingRequestSuccess,
  [actionTypes.PING_REQUEST_FAIL]: pingRequestFail,
  [actionTypes.PING_RESET]: pingReset,
}, initialState);
