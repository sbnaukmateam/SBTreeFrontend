import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NavNoAuth extends PureComponent {
  render() {
    const { login, signUp } = this.props;
    return (
      <div className="nav-no-auth">
        <button type="button" className="sign-in-btn" onClick={() => login()}>ВХІД</button>
        <button type="button" className="sign-up-btn" onClick={() => signUp()}>РЕЄСТРАЦІЯ</button>
      </div>
    );
  }
}
NavNoAuth.propTypes = {
  login: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
};

export { NavNoAuth };
