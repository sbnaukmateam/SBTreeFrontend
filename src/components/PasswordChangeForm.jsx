import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from './Button';

class PasswordChangeForm extends PureComponent {
  render() {
    return (
      <form>
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

const WrappedPasswordChangeForm = reduxForm({ form: 'PasswordChangeForm' })(PasswordChangeForm);

export { WrappedPasswordChangeForm as PasswordChangeForm };
