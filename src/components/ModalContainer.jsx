import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ModalLogin, ModalSignUp } from '.';
import { modalActions } from '../actions';

class ModalContainer extends PureComponent {
  handleClickOutside() {
    const { actions: { modal } } = this.props;
    return modal.closeModal();
  }

  // TODO remove mock styling
  render() {
    const { modalKey, actions: { modal } } = this.props;
    return (
      <div>
        <div className="modal-wrapper">
          <button type="button" className="btn-close" onClick={() => modal.closeModal()}>X</button>
          {modalKey === 'login' && <ModalLogin />}
          {modalKey === 'signup' && <ModalSignUp />}
        </div>
      </div>
    );
  }
}
ModalContainer.propTypes = {
  modalKey: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
};
const mapDispatchToProps = dispatch => ({
  actions: {
    modal: bindActionCreators(modalActions, dispatch),
  },
});
const ModalContainerWrapped = connect(null, mapDispatchToProps)(onClickOutside(ModalContainer));

export { ModalContainerWrapped as ModalContainer };
