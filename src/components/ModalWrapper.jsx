import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectorModalResult } from '../selectors';
import { ModalContainer } from '.';

class ModalWrapper extends PureComponent {
  render() {
    const { openModal, modalKey, children } = this.props;
    if (openModal !== modalKey) return (<div />);
    return (
      <div>
        <div className="modal-wrapper-box" />
        <ModalContainer>
          {children}
        </ModalContainer>
      </div>
    );
  }
}
ModalWrapper.propTypes = {
  openModal: PropTypes.string,
  modalKey: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
ModalWrapper.defaultProps = {
  openModal: null,
};
const mapStateToProps = state => ({
  openModal: selectorModalResult(state),
});

const ModalWrapperWrapped = connect(mapStateToProps)(ModalWrapper);

export { ModalWrapperWrapped as ModalWrapper };
