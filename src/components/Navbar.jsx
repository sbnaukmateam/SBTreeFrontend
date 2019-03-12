/* eslint-disable no-console */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { selectorLoggedIn } from '../selectors';
import { modalActions } from '../actions';
import { NavNoAuth, NavAuth } from '.';

class Navbar extends PureComponent {
  constructor() {
    super();
    this.state = {
      scroll: false,
    };
    this.updateScroll = this.updateScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.updateScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateScroll);
  }

  updateScroll() {
    this.setState({
      scroll: window.pageYOffset > window.innerWidth / 2,
    });
  }

  render() {
    const {
      loggedIn, style, transparent, actions: { modal },
    } = this.props;
    console.log(this.props);
    const { scroll } = this.state;
    const navStyle = `navbar${transparent && !scroll ? ' transparent' : ''}`;
    return (
      <div className={navStyle} style={style}>
        <div className="col-12 col-xxl-10 navbar_box">
          <div className="col-3">
            <img src="/images/logo.png" className="admin-menu_logo-img mr-2" />
            <Link to="/">
              <b>СПУДЕЙСЬКЕ БРАТСТВО</b>
            </Link>
          </div>
          <div className="col-6 d-flex justify-content-around">
            <Link to="/about">
              ПРО НАС
            </Link>
            <Link to="/projects">
              ПРОЕКТИ
            </Link>
            <Link to="/contacts">
              КОНТАКТИ
            </Link>
            <Link to="/">
              ДЕРЕВО
            </Link>
          </div>
          <div className="col-3 d-flex justify-content-center">
            {loggedIn ? <NavAuth /> : <NavNoAuth login={modal.openLoginModal} signUp={modal.openSignUpModal} />}
          </div>
        </div>
      </div>
    );
  }
}

Navbar.contextTypes = { router: PropTypes.object };
Navbar.propTypes = {
  loggedIn: PropTypes.bool,
  style: PropTypes.object.isRequired,
  transparent: PropTypes.bool,
  actions: PropTypes.object.isRequired,
};
Navbar.defaultProps = {
  loggedIn: false,
  transparent: null,
};
const mapStateToProps = state => ({
  loggedIn: selectorLoggedIn(state),
});
const mapDispatchToProps = dispatch => ({
  actions: {
    modal: bindActionCreators(modalActions, dispatch),
  },
});

const NavbarWrapped = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export { NavbarWrapped as Navbar };
