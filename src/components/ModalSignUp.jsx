import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import PropTypes from 'prop-types';
import { ModalWrapper } from './ModalWrapper';
import { authActions } from '../actions';
import { validate } from '../util';
import { FormField } from '.';

class ModalSignUp extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      actions: { auth, modal }, username, password, name, surname,
    } = this.props;
    auth.signUp({
      password, username, name, surname,
    });
    modal.closeModal();
  }

  render() {
    // TODO
    const {
      required, email, /* passwordsMatch, oneNumber, oneUpperChar, minLength, */
    } = validate;
    const {
      /* password , */ submitting, invalid, pristine,
    } = this.props;
    return (
      <ModalWrapper modalKey="signup">
        <form className="form" onSubmit={this.handleSubmit}>
          <span className="form-title">SB</span>
          <Field component={FormField} className="input" label="Ім'я" autoComplete="off" type="text" name="firstname" validate={[required]} />
          <Field component={FormField} className="input" label="Прізвище" type="text" name="surname" validate={[required]} />
          <Field component={FormField} className="input" label="Email" type="email" name="email" validate={[required, email]} />
          <Field component={FormField} className="input" label="Пароль" type="password" name="password" /* validate={[minLength(6), oneNumber, oneUpperChar]} */ />
          <Field component={FormField} className="input" label="Повторіть пароль" type="password" name="password-valid" /* validate={passwordsMatch(password)} */ />
          <button className="form-btn" type="submit" disabled={submitting || pristine || invalid}>РЕЄСТРАЦІЯ</button>
        </form>
      </ModalWrapper>
    );
  }
}
ModalSignUp.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  name: PropTypes.string,
  surname: PropTypes.string,
  actions: PropTypes.object.isRequired,
  submitting: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
};
ModalSignUp.defaultProps = {
  username: null,
  password: null,
  name: null,
  surname: null,
};
const selector = formValueSelector('SignUpForm');

const mapStateToProps = state => ({
  username: selector(state, 'email'),
  password: selector(state, 'password'),
  name: selector(state, 'firstname'),
  surname: selector(state, 'surname'),
});

const mapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(authActions, dispatch),
  },
});

const WrappedModalLogin = connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'SignUpForm' })(ModalSignUp));

export { WrappedModalLogin as ModalSignUp };
