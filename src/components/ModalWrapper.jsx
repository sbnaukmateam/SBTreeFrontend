import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ModalWrapper extends PureComponent {
  // TODO remove mock styling
  render() {
    const { children } = this.props;
    return (
      <div style={{
        width: '500px', height: '500px', position: 'fixed', left: '400px', top: '400px', backgroundColor: 'red',
      }}>
        { children }
      </div>
    );
  }
}
ModalWrapper.propTypes = {
  children: PropTypes.object.isRequired,
};

const ModalWrapperWrapped = connect()(ModalWrapper);

export { ModalWrapperWrapped as ModalWrapper };
