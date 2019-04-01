import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { authActions } from '../actions';

class NavAuth extends PureComponent {
  render() {
    const { actions: { auth } } = this.props;
    return (
      <div className="auth-box">
        <Link to="/profile" className="profile-icon-link">
          <img src="/images/profile-icon.png" className="profile-icon" />
        </Link>
        <div className="nav-separator" />
        <button type="button" className="sign-out-btn" onClick={() => auth.logout()}>ВИХІД</button>
      </div>
    );
  }
}
NavAuth.propTypes = {
  actions: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(authActions, dispatch),
  },
});
const NavAuthWrapped = connect(null, mapDispatchToProps)(NavAuth);

export { NavAuthWrapped as NavAuth };
