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

class ModalAddDegree extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      actions: { members },
      year,
      faculty,
      program,
      speciality,
      profile,
    } = this.props;
    const { id, degrees: prevDegrees } = profile || {};
    const degrees = prevDegrees || [];
    members.updateMember(id, {
      degrees: [...degrees, {
        year,
        faculty,
        program,
        speciality,
      }],
    });
  }

  render() {
    const { submitting, pristine, invalid } = this.props;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <span className="form-title">Додати навчання</span>
        <Field component={FormField} className="input" label="Рік вступу" autoComplete="off" type="text" name="year" validate={[required, isYear]} />
        <Field component={FormField} className="input" label="Факультет" autoComplete="off" type="text" name="faculty" validate={[required]} />
        <Field component={FormField} className="input" label="Спеціальність" autoComplete="off" type="text" name="speciality" validate={[required]} />
        <Field component={FormField} className="input" label="Програма" autoComplete="off" type="text" name="program" validate={[required]} />
        <button className="form-btn" type="submit" disabled={submitting || pristine || invalid}>ДОДАТИ</button>
      </form>
    );
  }
}
ModalAddDegree.propTypes = {
  year: PropTypes.string,
  faculty: PropTypes.string,
  speciality: PropTypes.string,
  program: PropTypes.string,
  actions: PropTypes.object.isRequired,
  submitting: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
  profile: PropTypes.object.isRequired,
};
ModalAddDegree.defaultProps = {
  year: null,
  faculty: null,
  speciality: null,
  program: null,
};
const selector = formValueSelector('AddDegreeForm');

const mapStateToProps = state => ({
  year: selector(state, 'year'),
  faculty: selector(state, 'faculty'),
  speciality: selector(state, 'speciality'),
  program: selector(state, 'program'),
  profile: selectorMembersProfile(state),
});

const mapDispatchToProps = dispatch => ({
  actions: {
    members: bindActionCreators(membersActions, dispatch),
    modal: bindActionCreators(modalActions, dispatch),
  },
});

const WrappedModalAddDegree = modalWrapper('addDegree')(connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'AddDegreeForm' })(ModalAddDegree)));

export { WrappedModalAddDegree as ModalAddDegree };
