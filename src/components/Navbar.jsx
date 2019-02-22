import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { routsActions } from '../actions';

class Navbar extends PureComponent {
  render() {
    const rawDisplay = {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around',
      marginBottom: '100px',
    };
    return (
      <div style={rawDisplay}>
        <Link to="/about">
              ABOUT
        </Link>
        <Link to="/">
              MAIN
        </Link>
        <Link to="/projects">
              PROJECTS
        </Link>
        <Link to="/profile">
          PROFILE
        </Link>
      </div>
    );
  }
}
Navbar.contextTypes = { router: PropTypes.object };

// const mapDispatchToProps = dispatch => ({
//   actions: {
//     // routs: bindActionCreators(routsActions, dispatch),
//   },
// });

// const NavbarWrapped = connect(null, mapDispatchToProps)(Navbar);

export { Navbar };
