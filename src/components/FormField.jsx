import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const FormField = ({
  input, label, type, meta: { touched, error, warning },
}) => {
  const inputClasses = classnames({
    input: true,
    error: error && touched,
    warning: warning && touched,
  });
  return (
    <React.Fragment>
      <input className={inputClasses} {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </React.Fragment>
  );
};
FormField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object.isRequired,

};
FormField.defaultProps = {
  input: null,
  label: null,
  type: null,
};
export { FormField };
