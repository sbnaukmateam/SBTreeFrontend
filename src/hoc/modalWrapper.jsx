/* eslint-disable linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style,linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { selectorModalResult } from '../selectors';
import { ModalContainer } from '../components';

const basicModalWrapper = modalKey => (WrappedComponent) => {
  const ModalWrapper = (props) => {
    const { hocOpenModal, ...rest } = props;
    if (hocOpenModal !== modalKey) {
      return (<div />);
    }
    return (
      <div>
        <div className="modal-wrapper-box" />
        <ModalContainer>
          <WrappedComponent {...rest} />
        </ModalContainer>
      </div>
    );
  };
  ModalWrapper.propTypes = {
    hocOpenModal: PropTypes.string,
  };
  ModalWrapper.defaultProps = {
    hocOpenModal: null,
  };
  return ModalWrapper;
};

const mapStateToProps = state => ({
  hocOpenModal: selectorModalResult(state),
});

export const modalWrapper = modalKey => compose(
  connect(mapStateToProps),
  basicModalWrapper(modalKey),
);
