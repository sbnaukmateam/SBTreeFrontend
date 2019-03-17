import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

const DATE_FORMAT = 'YYYY-MM-DD';

const formatDate = (value) => {
  if (!value) {
    return null;
  }
  const momentValue = moment(value);
  if (!momentValue.isValid()) {
    return null;
  }
  return momentValue.format(DATE_FORMAT);
};

const parseDate = (value) => {
  if (!value) {
    return null;
  }
  const momentValue = moment(value, DATE_FORMAT);
  if (!momentValue.isValid()) {
    return null;
  }
  return momentValue.toDate();
};

class DatePickerField extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const { input: { value } } = this.props;
    const { input: { value: newValue } } = nextProps;
    return formatDate(value) !== formatDate(newValue);
  }

  handleChange(date) {
    const { input } = this.props;
    input.onChange(formatDate(date));
  }

  render() {
    const {
      input,
      placeholder,
      meta: { touched, error },
      className,
    } = this.props;

    return (
      <div>
        <DatePicker
          {...input}
          className={className}
          placeholder={placeholder}
          dateFormat={DATE_FORMAT}
          selected={parseDate(input.value)}
          onChange={this.handleChange}
          isClearable
          showMonthDropdown
          showYearDropdown
        />
        {touched && error && <span>{error}</span>}
      </div>
    );
  }
}

DatePickerField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.bool,
  }),
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

DatePickerField.defaultProps = {
  placeholder: '',
  meta: null,
  className: null,
};

export { DatePickerField };
