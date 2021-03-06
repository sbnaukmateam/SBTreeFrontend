import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectorLoggedIn } from '../selectors';
import { modalActions } from '../actions';
import { NavNoAuth } from './NavNoAuth';
import { NavAuth } from './NavAuth';

class Hamburger extends PureComponent {
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
    const { scroll } = this.state;
    const navStyle = `navbar${transparent && !scroll ? ' transparent' : ''}`;
    return (
      <div className={navStyle} style={style}>
        <div className="navbar_box">
          <img src="/images/logo.png" className="admin-menu_logo-img" />
          <Link to="/">
            <b>СПУДЕЙСЬКЕ БРАТСТВО</b>
          </Link>
          <Link to="/about">
                        ПРО НАС
          </Link>
          {/* TODO: Uncomment after projects will be finished */}
          {/* <Link to="/projects">
              ПРОЕКТИ
            </Link> */}
          <Link to="/contacts">
                        КОНТАКТИ
          </Link>
          {/* TODO: Uncomment after tree will be finished */}
          {/* <Link to="/">
              ДЕРЕВО
            </Link> */}
          {loggedIn ? <NavAuth /> : <NavNoAuth login={modal.openLoginModal} signUp={modal.openSignUpModal} />}
        </div>
      </div>
    );
  }
}

Hamburger.contextTypes = { router: PropTypes.object };
Hamburger.propTypes = {
  loggedIn: PropTypes.bool,
  style: PropTypes.object.isRequired,
  transparent: PropTypes.bool,
  actions: PropTypes.object.isRequired,
};
Hamburger.defaultProps = {
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

const HamburgerWrapped = connect(mapStateToProps, mapDispatchToProps)(Hamburger);

export { HamburgerWrapped as Hamburger };
