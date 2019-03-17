import React from 'react';
import PropTypes from 'prop-types';

// TODO rename edit-btn class
const Button = ({ children }) => (
  <button type="button" className="edit-btn">
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.any,
};

Button.defaultProps = {
  children: null,
};

export { Button };
