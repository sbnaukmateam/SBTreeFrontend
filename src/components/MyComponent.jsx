import React from 'react';
import PropTypes from 'prop-types';

export const MyComponent = ({ children }) => <h1>{children}</h1>;

MyComponent.propTypes = {
  children: PropTypes.any,
};

MyComponent.defaultProps = {
  children: null,
};
