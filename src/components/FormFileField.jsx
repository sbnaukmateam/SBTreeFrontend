import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

class FormFileField extends PureComponent {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { input: { onChange } } = this.props;
    if (e.target.files[0]) onChange(e.target.files[0]);
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="file"
            accept=".jpg, .png, .jpeg"
            onChange={this.onChange}
            {...this.props}
          />
        </div>
      </div>
    );
  }
}
FormFileField.propTypes = {
  input: PropTypes.object.isRequired,
};
export { FormFileField };
