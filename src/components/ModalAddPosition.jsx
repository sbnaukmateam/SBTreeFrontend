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

const { required, isYear } = validate;

class ModalAddPosition extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      actions: { members }, name, year, profile: { id },
    } = this.props;
    members.updateMember(id, {
      position: { year, name },
    });
  }

  render() {
    const { submitting, pristine, invalid } = this.props;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <span className="form-title">Додати посаду</span>
        <Field component={FormField} className="input" label="Рік" autoComplete="off" type="text" name="year" validate={[required, isYear]} />
        <Field component={FormField} className="input" label="Назва" autoComplete="off" type="text" name="name" validate={[required]} />
        <button className="form-btn" type="submit" disabled={submitting || pristine || invalid}>ДОДАТИ</button>
      </form>
    );
  }
}
ModalAddPosition.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  actions: PropTypes.object.isRequired,
  submitting: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  profile: PropTypes.object.isRequired,
};
ModalAddPosition.defaultProps = {
  name: null,
  year: null,
};
const selector = formValueSelector('AddContactForm');

const mapStateToProps = state => ({
  name: selector(state, 'name'),
  year: selector(state, 'year'),
  profile: selectorMembersProfile(state),
});

const mapDispatchToProps = dispatch => ({
  actions: {
    members: bindActionCreators(membersActions, dispatch),
    modal: bindActionCreators(modalActions, dispatch),
  },
});

const WrappedModalAddPosition = modalWrapper('addPosition')(connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'AddContactForm' })(ModalAddPosition)));

export { WrappedModalAddPosition as ModalAddPosition };
