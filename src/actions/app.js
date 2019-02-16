import actionTypes from '../actionTypes';

export { goBack, go, push, replace } from 'modules/history';

export const pingRequest = () => async (dispatch) => {
  dispatch({ type: ActionTypes.FETCH_SOMETHING });
        try{
            const data = await fetchSomethingApi();
            dispatch({
                type: actionTypes.FETCH_SOMETHING_SUCCESS,
                payload: data
            })
        }catch(err){
            dispatch({
                type: actionTypes.FETCH_SOMETHING_FAILURE,
                payload: err,
                error: true
            })
        }
};
