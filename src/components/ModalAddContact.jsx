import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import PropTypes from 'prop-types';
import { membersActions, modalActions } from '../actions';
import { validate } from '../util';
import { modalWrapper } from '../hoc';
import { FormField } from './FormField';
import { selectorMembersProfile } from '../selectors';

const { required } = validate;

class ModalAddContact extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      actions: { members }, contact, profile: { id },
    } = this.props;
    members.updateMember(id, {
      contact,
    });
  }

  render() {
    const { submitting, pristine, invalid } = this.props;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <span className="form-title">Додати контакт</span>
        <Field component={FormField} className="input" label="Контакт" autoComplete="off" type="text" name="name" validate={[required]} />
        <button className="form-btn" type="submit" disabled={submitting || pristine || invalid}>ДОДАТИ</button>
      </form>
    );
  }
}
ModalAddContact.propTypes = {
  contact: PropTypes.string,
  actions: PropTypes.object.isRequired,
  submitting: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  profile: PropTypes.object.isRequired,
};
ModalAddContact.defaultProps = {
  contact: null,
};
const selector = formValueSelector('AddContactForm');

const mapStateToProps = state => ({
  contact: selector(state, 'contact'),
  profile: selectorMembersProfile(state),
});

const mapDispatchToProps = dispatch => ({
  actions: {
    members: bindActionCreators(membersActions, dispatch),
    modal: bindActionCreators(modalActions, dispatch),
  },
});

const WrappedModalAddContact = modalWrapper('addContact')(connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'AddContactForm' })(ModalAddContact)));

export { WrappedModalAddContact as ModalAddContact };
