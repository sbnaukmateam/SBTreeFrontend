import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectorModalResult } from '../selectors';
import { ModalContainer } from '.';

class ModalWrapper extends PureComponent {
  render() {
    const { openModal } = this.props;
    if (!openModal) return (<div />);
    return (
      <div>
        <div className="modal-wrapper-box" />
        <ModalContainer modalKey={openModal} />
      </div>
    );
  }
}
ModalWrapper.propTypes = {
  openModal: PropTypes.string,
};
ModalWrapper.defaultProps = {
  openModal: null,
};
const mapStateToProps = state => ({
  openModal: selectorModalResult(state),
});

const ModalWrapperWrapped = connect(mapStateToProps)(ModalWrapper);

export { ModalWrapperWrapped as ModalWrapper };
