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
const CONTACT_TYPES = ['profiles', 'emails', 'phones'];

class ModalAddContact extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      actions: { members }, contact, type, profile,
    } = this.props;
    if (!CONTACT_TYPES.includes(type)) {
      return;
    }
    const { id } = profile || {};
    const contacts = [...(profile[type] || []), contact];
    members.updateMember(id, {
      [type]: contacts,
    });
  }

  render() {
    const { submitting, pristine, invalid } = this.props;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <span className="form-title">Додати контакт</span>
        <Field component="select" className="input" label="Контакт" autoComplete="off" name="type" validate={[required]}>
          <option default value="">Оберіть тип контакту</option>
          <option default value="phones">Телефон</option>
          <option default value="emails">Email</option>
          <option default value="profiles">Профайл</option>
        </Field>
        <Field component={FormField} className="input" label="Контакт" autoComplete="off" type="text" name="contact" validate={[required]} />
        <button className="form-btn" type="submit" disabled={submitting || pristine || invalid}>ДОДАТИ</button>
      </form>
    );
  }
}
ModalAddContact.propTypes = {
  type: PropTypes.string,
  contact: PropTypes.string,
  actions: PropTypes.object.isRequired,
  submitting: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  profile: PropTypes.object.isRequired,
};
ModalAddContact.defaultProps = {
  contact: null,
  type: null,
};
const selector = formValueSelector('AddContactForm');

const mapStateToProps = state => ({
  contact: selector(state, 'contact'),
  type: selector(state, 'type'),
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
