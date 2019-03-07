import React, { PureComponent } from 'react';
import { ModalWrapper } from '.';

class ModalLogin extends PureComponent {
  render() {
    // TODO remove <p> tag
    return (
      <ModalWrapper modalKey="login">
        <p style={{ color: 'green' }}> LOGIN MODAL </p>
      </ModalWrapper>
    );
  }
}

export { ModalLogin };
