import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import PropTypes from 'prop-types';
import { DatePickerField } from './DatePickerField';
import { membersActions, modalActions } from '../actions';
import { validate } from '../util';
import { modalWrapper } from '../hoc';
import { FormField } from './FormField';

const DATE_FORMAT = 'YYYY-MM-DD';

const normalizeDate = dateString => moment.utc(dateString, DATE_FORMAT).startOf('day').toDate();

const { email, required } = validate;

class ModalAddMember extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      actions: { members },
      name,
      surname,
      username,
      birthday,
    } = this.props;
    members.addMember({
      name, surname, username, birthday: normalizeDate(birthday),
    });
  }

  render() {
    const { submitting, pristine, invalid } = this.props;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <span className="form-title">Додати користувача</span>
        <Field component={FormField} className="input" label="Ім'я" autoComplete="off" type="text" name="name" validate={[required]} />
        <Field component={FormField} className="input" label="Прізвище" autoComplete="off" type="text" name="surname" validate={[required]} />
        <Field component={FormField} className="input" label="Пошта" autoComplete="off" type="email" name="username" validate={[email]} />
        <Field component={DatePickerField} className="input datepicker" label="Дата народження" name="birthday" placeholder="Дата народження" />
        <button className="form-btn" type="submit" disabled={submitting || pristine || invalid}>СТВОРИТИ</button>
      </form>
    );
  }
}
ModalAddMember.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  username: PropTypes.string,
  birthday: PropTypes.object,
  actions: PropTypes.object.isRequired,
  submitting: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
};
ModalAddMember.defaultProps = {
  name: null,
  surname: null,
  username: null,
  birthday: null,
};
const selector = formValueSelector('AddMemberForm');

const mapStateToProps = state => ({
  name: selector(state, 'name'),
  surname: selector(state, 'surname'),
  username: selector(state, 'username'),
  birthday: selector(state, 'birthday'),
});

const mapDispatchToProps = dispatch => ({
  actions: {
    members: bindActionCreators(membersActions, dispatch),
    modal: bindActionCreators(modalActions, dispatch),
  },
});

const WrappedModalAddMember = modalWrapper('addMember')(connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'AddMemberForm' })(ModalAddMember)));

export { WrappedModalAddMember as ModalAddMember };
