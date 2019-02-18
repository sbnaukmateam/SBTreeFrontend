import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Footer } from '../components';

const Layout = ({ children }) => (
  <div className="container">
    <Navbar />
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.any,
};

Layout.defaultProps = {
  children: null,
};
export { Layout };
