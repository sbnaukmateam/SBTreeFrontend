import actionTypes from '../actionTypes';

const openLoginModal = () => (dispatch) => {
  dispatch({ type: actionTypes.MODAL_LOGIN_START });
  try {
    const result = 'login';
    dispatch({ type: actionTypes.MODAL_LOGIN_SUCCESS, payload: result });
  } catch (err) {
    dispatch({ type: actionTypes.MODAL_LOGIN_FAIL, payload: err.toString() });
  }
};

const openSignUpModal = () => (dispatch) => {
  dispatch({ type: actionTypes.MODAL_SIGNUP_START });
  try {
    const result = 'signUp';
    dispatch({ type: actionTypes.MODAL_SIGNUP_SUCCESS, payload: result });
  } catch (err) {
    dispatch({ type: actionTypes.MODAL_SIGNUP_FAIL, payload: err.toString() });
  }
};
const closeModal = () => (dispatch) => {
  dispatch({ type: actionTypes.MODAL_CLOSE_START });
  try {
    const result = '';
    dispatch({ type: actionTypes.MODAL_CLOSE_SUCCESS, payload: result });
  } catch (err) {
    dispatch({ type: actionTypes.MODAL_CLOSE_FAIL, payload: err.toString() });
  }
};
export const modalActions = { openLoginModal, openSignUpModal, closeModal };
