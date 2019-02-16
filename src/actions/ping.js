import actionTypes from '../actionTypes';
import { api } from '../util';

const pingRequest = () => async (dispatch) => {
  dispatch({ type: actionTypes.PING_REQUEST_START });
  try {
    const result = await api.ping();
    dispatch({ type: actionTypes.PING_REQUEST_SUCCESS, payload: result });
  } catch (err) {
    dispatch({ type: actionTypes.PING_REQUEST_FAIL, payload: err.toString() });
  }
};

const pingReset = () => ({
  type: actionTypes.PING_RESET,
});

export const pingActions = { pingRequest, pingReset };
