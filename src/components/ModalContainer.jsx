import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { modalActions } from '../actions';

class ModalContainer extends PureComponent {
  handleClickOutside() {
    const { actions: { modal } } = this.props;
    return modal.closeModal();
  }

  // TODO remove mock styling
  render() {
    const { actions: { modal }, children } = this.props;
    return (
      <div>
        <div className="modal-wrapper">
          <button type="button" className="btn-close" onClick={() => modal.closeModal()}>X</button>
          {children}
        </div>
      </div>
    );
  }
}
ModalContainer.propTypes = {
  children: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};
const mapDispatchToProps = dispatch => ({
  actions: {
    modal: bindActionCreators(modalActions, dispatch),
  },
});
const ModalContainerWrapped = connect(null, mapDispatchToProps)(onClickOutside(ModalContainer));

export { ModalContainerWrapped as ModalContainer };
