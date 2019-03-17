import actionTypes from '../actionTypes';
import { ensureIndexes } from '../nedb';

const nedbInit = () => async (dispatch) => {
  dispatch({ type: actionTypes.NEDB_INIT_START });
  try {
    await ensureIndexes();
    dispatch({ type: actionTypes.NEDB_INIT_SUCCESS });
  } catch (err) {
    dispatch({ type: actionTypes.NEDB_INIT_FAIL, payload: err.toString() });
  }
};

export const nedbActions = {
  nedbInit,
};
