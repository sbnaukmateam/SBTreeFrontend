import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import PropTypes from 'prop-types';
import { modalWrapper } from '../hoc';
import { authActions } from '../actions';

class ModalForgotPass extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { actions: { auth }, username } = this.props;
    auth.forgotPassword({ username });
    auth.setAuth(username);
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <span className="form-title">SB</span>
        <Field component="input" className="input" placeholder="Email" type="email" name="email" />
        <button className="form-btn" type="submit">ВІДПРАВИТИ</button>
      </form>
    );
  }
}
ModalForgotPass.propTypes = {
  username: PropTypes.string,
  actions: PropTypes.object.isRequired,
};
ModalForgotPass.defaultProps = {
  username: null,
};
const selector = formValueSelector('ResetPassForm');

const mapStateToProps = state => ({
  username: selector(state, 'email'),
});

const mapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(authActions, dispatch),
  },
});

const WrappedModalLogin = modalWrapper('forgotPass')(connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'ResetPassForm' })(ModalForgotPass)));

export { WrappedModalLogin as ModalForgotPass };
