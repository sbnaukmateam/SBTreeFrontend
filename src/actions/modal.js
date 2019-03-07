import actionTypes from '../actionTypes';

const openLoginModal = () => (dispatch) => {
  const result = 'login';
  dispatch({ type: actionTypes.MODAL_LOGIN, payload: result });
};

const openSignUpModal = () => (dispatch) => {
  const result = 'signup';
  dispatch({ type: actionTypes.MODAL_SIGNUP, payload: result });
};
const closeModal = () => (dispatch) => {
  const result = '';
  dispatch({ type: actionTypes.MODAL_CLOSE, payload: result });
};
export const modalActions = { openLoginModal, openSignUpModal, closeModal };
