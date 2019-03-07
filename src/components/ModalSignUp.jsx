import React, { PureComponent } from 'react';
import { ModalWrapper } from '.';

class ModalSignUp extends PureComponent {
  render() {
    // TODO remove <p> tag
    return (
      <ModalWrapper modalKey="signup">
        <p style={{ color: 'blue' }}> SIGN UP MODAL </p>
      </ModalWrapper>
    );
  }
}

export { ModalSignUp };
