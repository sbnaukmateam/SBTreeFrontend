import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import PropTypes from 'prop-types';
import { ModalWrapper } from './ModalWrapper';
import { authActions, modalActions } from '../actions';
import { validate } from '../util';
import { FormField } from '.';

class ModalLogin extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { actions: { auth }, username, password } = this.props;
    auth.signIn({ password, username });
  }

  render() {
    const {
      actions: { modal }, submitting, pristine, invalid,
    } = this.props;
    const { email, required } = validate;
    return (
      <ModalWrapper modalKey="login">
        <form className="form" onSubmit={this.handleSubmit}>
          <span className="form-title">SB</span>
          <Field component={FormField} className="input" label="Пошта" autoComplete="off" type="email" name="username" validate={[email, required]} />
          <Field component={FormField} className="input" label="Пароль" type="password" name="password" validate={[required]} />
          <button className="form-btn" type="submit" disabled={submitting || pristine || invalid}>УВІЙТИ</button>
          <div className="reg-reset">
            <button type="button" className="forgot-pass-link" onClick={() => modal.openForgotPassModal()}>Забули пароль?</button>
            <button type="button" className="signup-link" onClick={() => modal.openSignUpModal()}>Реєстрація</button>
          </div>
        </form>
      </ModalWrapper>
    );
  }
}
ModalLogin.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  actions: PropTypes.object.isRequired,
  submitting: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
};
ModalLogin.defaultProps = {
  username: null,
  password: null,
};
const selector = formValueSelector('LoginForm');

const mapStateToProps = state => ({
  username: selector(state, 'username'),
  password: selector(state, 'password'),
});

const mapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(authActions, dispatch),
    modal: bindActionCreators(modalActions, dispatch),
  },
});

const WrappedModalLogin = connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'LoginForm' })(ModalLogin));

export { WrappedModalLogin as ModalLogin };
