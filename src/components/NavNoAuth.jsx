import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NavNoAuth extends PureComponent {
  render() {
    const { login, signUp } = this.props;
    return (
      <div>
        <button type="button" onClick={() => login()}>ВХІД</button>
        <button type="button" id="sign-up-btn" onClick={() => signUp()}>РЕЄСТРАЦІЯ</button>
      </div>
    );
  }
}
NavNoAuth.propTypes = {
  login: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
};

export { NavNoAuth };
