/* eslint-disable */
import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { ModalWrapper } from './ModalWrapper';
import { authActions } from '../actions';

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
    // TODO remove <p> tag
    return (
      <ModalWrapper modalKey="login">
        <div className="wrap-login">
          <form className="login-form" onSubmit={this.handleSubmit}>
            <span className="login-form-title">SB</span>
            <span className="login-form-title" />
            <div className="wrap-input">
              <Field component="input" className="input" placeholder="Логін" autoComplete="off" type="text" name="username" />
            </div>
            <div className="wrap-input">
              <Field component="input" className="input" placeholder="Пароль" type="password" name="password" />
            </div>
            <div className="container-login-form-btn">
              <div className="wrap-login-form-btn">
                <div className="login-form-bgbtn" />
                <button className="login-form-btn" type="submit">Увійти</button>
              </div>
            </div>
            <div className="reg-reset">
              <div className="reset-pass">
                <a href="#" className="rp">Забули пароль?</a>
              </div>
              <a className="none-acc" href="#">Реєстрація</a>
            </div>
          </form>
        </div>
      </ModalWrapper>
    );
  }
}

const selector = formValueSelector('LoginForm');

const mapStateToProps = state => ({
  username: selector(state, 'username'),
  password: selector(state, 'password'),
});

const mapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(authActions, dispatch),
  },
});

const WrappedModalLogin = connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'LoginForm' })(ModalLogin));

export { WrappedModalLogin as ModalLogin };
