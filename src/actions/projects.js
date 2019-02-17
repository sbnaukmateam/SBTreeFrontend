import actionTypes from '../actionTypes';
import { api } from '../util';

const fetchProjects = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_PROJECTS_START });
  try {
    const result = await api.getProjectsMock();
    dispatch({ type: actionTypes.FETCH_PROJECTS_SUCCESS, payload: result });
  } catch (err) {
    dispatch({ type: actionTypes.FETCH_PROJECTS_FAIL, payload: err.toString() });
  }
};

export const projectsActions = { fetchProjects };
