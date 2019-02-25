import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../css/layout.css';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectorProfileAvatar, selectorProfileName } from '../selectors';
// import { routsActions } from '../actions';

class Navbar extends PureComponent {
  render() {
    const { name, avatar } = this.props;
    return (
      <div className="navbar">
        <div className="col-12 col-xxl-10 navbar_box">
          <img src="/images/logo.png" className="admin-menu_logo-img" />
          <Link to="/">
              Головна
          </Link>
          <Link to="/about">
            Про нас
          </Link>
          <Link to="/">
              Дерево
          </Link>
          <Link to="/projects">
              Проекти
          </Link>
          <Link to="/contacts">
              Контакти
          </Link>
          <Link to="/profile">
            {name && name}
          </Link>
          {avatar && <img src={avatar} className="admin-menu_logo-img" />}
        </div>
      </div>
    );
  }
}
Navbar.contextTypes = { router: PropTypes.object };
Navbar.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
};
Navbar.defaultProps = {
  name: null,
  avatar: null,
};
const mapStateToProps = (state, ownProps) => ({
  name: selectorProfileName(state, ownProps.id),
  avatar: selectorProfileAvatar(state, ownProps.id),
});

const NavbarWrapped = connect(mapStateToProps)(Navbar);

export { NavbarWrapped as Navbar };
