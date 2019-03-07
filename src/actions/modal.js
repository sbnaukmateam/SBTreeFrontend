import actionTypes from '../actionTypes';


const openLoginModal = () => ({
  type: actionTypes.MODAL_LOGIN,
  payload: 'login',
});
const openSignUpModal = () => ({
  type: actionTypes.MODAL_SIGNUP,
  payload: 'signup',
});
const closeModal = () => ({
  type: actionTypes.MODAL_CLOSE,
  payload: '',
});
export const modalActions = { openLoginModal, openSignUpModal, closeModal };
