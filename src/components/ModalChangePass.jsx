import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import PropTypes from 'prop-types';
import { modalWrapper } from '../hoc';
import { authActions } from '../actions';
import { validate } from '../util';
import { FormField } from './FormField';

const {
  oneNumber, oneUpperChar, passwordConfirmation, minLength, required,
} = validate;
const minLength6 = minLength(6);

class ModalChangePass extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { actions: { auth }, password } = this.props;
    auth.changePassword({ password });
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <span className="form-title">SB</span>
        <Field component={FormField} className="input" placeholder="password" type="password" name="password" validate={[minLength6, oneNumber, oneUpperChar]} />
        <Field component={FormField} className="input" placeholder="password" type="password" name="passwordConfirm" validate={[required]} />
        <button className="form-btn" type="submit">ЗМІНИТИ</button>
      </form>
    );
  }
}
ModalChangePass.propTypes = {
  password: PropTypes.string,
  actions: PropTypes.object.isRequired,
};
ModalChangePass.defaultProps = {
  password: null,
};
const selector = formValueSelector('ChangePassForm');

const mapStateToProps = state => ({
  password: selector(state, 'password'),
});

const mapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(authActions, dispatch),
  },
});

const WrappedModalChangePass = modalWrapper('changePass')(connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'ChangePassForm', validate: passwordConfirmation })(ModalChangePass)));

export { WrappedModalChangePass as ModalChangePass };
