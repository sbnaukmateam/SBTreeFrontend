import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Button } from './Button';

const validate = (values) => {
  const errors = {};
  const { newPassword, newPasswordConfirm } = values;
  if (newPassword !== newPasswordConfirm) {
    errors.newPasswordConfirm = 'Passwords does not match';
  }
  return errors;
};

class PasswordChangeForm extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="pass-change-box">
          <h3>ЗМІНИТИ ПАРОЛЬ</h3>
          <div>
            <Field component="input" type="password" name="currentPassword" placeholder="поточний пароль" />
            <Field component="input" type="password" name="newPassword" placeholder="новий пароль" />
            <Field component="input" type="password" name="newPasswordConfirm" placeholder="підтвердження пароля" />
          </div>
          <Button>ЗБЕРЕГТИ</Button>
        </div>
      </form>
    );
  }
}

const selector = formValueSelector('PasswordChangeForm');

const mapStateToProps = state => ({
  oldPassword: selector(state, 'currentPassword'),
  password: selector(state, 'newPassword'),
});

const WrappedPasswordChangeForm = connect(mapStateToProps)(reduxForm({
  form: 'PasswordChangeForm',
  validate,
})(PasswordChangeForm));

export { WrappedPasswordChangeForm as PasswordChangeForm };
