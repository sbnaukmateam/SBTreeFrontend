import { handleActions } from 'redux-actions';
import actionTypes from '../actionTypes';

const initialState = {
  message: null,
  error: null,
};
const handleStartReset = state => ({
  ...state,
  message: 'loading',
  error: null,
});
const forgotPasswordSuccess = state => ({
  ...state,
  reset: {
    ...state.reset,
    message: 'sentMail',
    error: null,
  },
});
const changePasswordSuccess = state => ({
  ...state,
  reset: {
    ...state.reset,
    message: 'passChanged',
    error: null,
  },
});

const handleFailureReset = (state, { payload }) => ({
  ...state,
  reset: {
    ...state.reset,
    error: payload,
    message: '',
  },
});

export const reset = handleActions({
  [actionTypes.FORGOT_PASSWORD_START]: handleStartReset,
  [actionTypes.FORGOT_PASSWORD_SUCCESS]: forgotPasswordSuccess,
  [actionTypes.FORGOT_PASSWORD_FAIL]: handleFailureReset,
  [actionTypes.CHANGE_PASSWORD_START]: handleStartReset,
  [actionTypes.CHANGE_PASSWORD_SUCCESS]: changePasswordSuccess,
  [actionTypes.CHANGE_PASSWORD_FAIL]: handleFailureReset,
}, initialState);
