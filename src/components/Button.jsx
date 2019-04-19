import React from 'react';
import PropTypes from 'prop-types';

// TODO rename edit-btn class
const Button = ({ children, onClick }) => (
  <button type="button" className="edit-btn" onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: null,
  onClick: null,
};

export { Button };
