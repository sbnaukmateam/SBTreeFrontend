import actionTypes from '../actionTypes';


const openLoginModal = () => ({
  type: actionTypes.MODAL_OPEN,
  payload: 'login',
});
const openSignUpModal = () => ({
  type: actionTypes.MODAL_OPEN,
  payload: 'signup',
});
const openForgotPassModal = () => ({
  type: actionTypes.MODAL_OPEN,
  payload: 'forgotPass',
});
const openChangePassModal = () => ({
  type: actionTypes.MODAL_OPEN,
  payload: 'changePass',
});
const closeModal = () => ({
  type: actionTypes.MODAL_CLOSE,
  payload: '',
});
export const modalActions = {
  openLoginModal, openSignUpModal, closeModal, openForgotPassModal, openChangePassModal,
};
