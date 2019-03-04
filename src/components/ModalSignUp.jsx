import React, { PureComponent } from 'react';
import { ModalWrapper } from './ModalWrapper';

class ModalSignup extends PureComponent {
  render() {
    // TODO remove <p> tag
    return (
      <ModalWrapper>
        <p style={{ color: 'yellow' }}> SIGN UP MODAL </p>
      </ModalWrapper>
    );
  }
}

export { ModalSignup };
