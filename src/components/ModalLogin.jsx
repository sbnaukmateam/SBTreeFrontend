import React, { PureComponent } from 'react';
import { ModalWrapper } from './ModalWrapper';

class ModalLogin extends PureComponent {
  render() {
    // TODO remove <p> tag
    return (
      <ModalWrapper>
        <p style={{ color: 'green' }}> LOGIN MODAL </p>
      </ModalWrapper>
    );
  }
}

export { ModalLogin };
