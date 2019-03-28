import actionTypes from '../actionTypes';


const openLoginModal = payload => ({
  type: actionTypes.MODAL_OPEN,
  payload: { key: 'login', data: payload },
});
const openSignUpModal = payload => ({
  type: actionTypes.MODAL_OPEN,
  payload: { key: 'signup', data: payload },
});
const openForgotPassModal = payload => ({
  type: actionTypes.MODAL_OPEN,
  payload: { key: 'forgotPass', data: payload },
});
const openChangePassModal = payload => ({
  type: actionTypes.MODAL_OPEN,
  payload: { key: 'changePass', data: payload },
});
const openAddMemberModal = payload => ({
  type: actionTypes.MODAL_OPEN,
  payload: { key: 'addMember', data: payload },
});
const closeModal = () => ({
  type: actionTypes.MODAL_CLOSE,
});

export const modalActions = {
  openLoginModal, openSignUpModal, closeModal, openForgotPassModal, openChangePassModal, openAddMemberModal,
};
