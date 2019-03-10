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
      <div className="d-flex">
        <Link to="/profile" className="mr-2 d-flex align-items-center">
          <img src="images/profile-icon.png" className="profile-icon" />
        </Link>
        <div className="auth-nav" />
        <button type="button" onClick={() => auth.logout()}>ВИХІД</button>
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
