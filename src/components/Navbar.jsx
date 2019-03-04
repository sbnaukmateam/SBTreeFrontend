import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavAuth = () => (
  <div className="d-flex">
    <Link to="/profile" className="mr-2 d-flex align-items-center">
      <img src="images/profile-icon.png" className="profile-icon" />
    </Link>
    <div className="auth-nav" />
    <button type="button">ВИХІД</button>
  </div>
);
const NavNoAuth = () => (
  <div>
    <button type="button">ВХІД</button>
    <Link to="/">РЕЄСТРАЦІЯ</Link>
  </div>
);
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
      name, style, transparent,
    } = this.props;
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
            {name ? <NavAuth /> : <NavNoAuth />}
          </div>
        </div>
      </div>
    );
  }
}
Navbar.contextTypes = { router: PropTypes.object };
Navbar.propTypes = {
  name: PropTypes.string,
  style: PropTypes.object.isRequired,
  transparent: PropTypes.bool,
};
Navbar.defaultProps = {
  name: 'Vasia Pupkin', // TODO set null after creating auth module
  transparent: null,
};
// TODO: restore logic after creating auth module
/*
const mapStateToProps = (state, ownProps) => ({
  name: selectorProfileName(state, ownProps.id),
});
*/

const NavbarWrapped = Navbar; // connect(mapStateToProps)(Navbar);

export { NavbarWrapped as Navbar };
