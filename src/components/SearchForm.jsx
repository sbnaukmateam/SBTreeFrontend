import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import debounce from 'debounce';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { membersActions } from '../actions';
import { createQuery } from '../util/search';
import { DatePickerField } from './DatePickerField';
import { SB_STATUS, FACULTIES } from '../constants';

const onFormChange = function onFormChange(values, dispatch) {
  dispatch(membersActions.nedbQueryMembers(createQuery(values)));
};

const debouncedOnFormChange = debounce(onFormChange, 200);

class SearchForm extends PureComponent {
  render() {
    const { role, faculty: selectedFaculty } = this.props;
    const { admin } = role || {};
    console.log(selectedFaculty);
    const { specialities = [] } = FACULTIES.find(({ value }) => value === selectedFaculty) || {};
    return (
      <form>
        <div className="row d-flex justify-content-center text-center">
          <div className="col-10 border-top-blue ">
            <div className="row mt-3 mb-2">
              <div className="col-2 accounts-admin_control_search-icon-box">
                <i className="fa fa-search" />
              </div>
              <div className="col-9">
                <Field component="input" type="text" name="quicksearch"
                  className="form-control accounts-admin_control_search-input"
                  placeholder="Пошук" />
              </div>
            </div>
          </div>
          <div className="col-10 border-top-blue pt-2 pb-2 mb-2">
            <button className="btn btn-block font-weight-bold accounts-admin_control_classes-btn" type="button">
              НІЧИМ НЕ ЗАЙНЯТІ
            </button>
            <button className="btn btn-block font-weight-bold accounts-admin_control_classes-btn" type="button">
              НЕОПАТРОНЕНІ
            </button>
            <button className="btn btn-block font-weight-bold accounts-admin_control_classes-btn" type="button">
              МОЇ МАЛЮКИ
            </button>
            <button className="btn btn-block font-weight-bold accounts-admin_control_classes-btn" type="button">
              ПОШАНОВАНІ
            </button>
            <button className="btn btn-block font-weight-bold accounts-admin_control_classes-btn" type="button">
              УПРАВА
            </button>
            {admin && (
              <button className="btn btn-block font-weight-bold accounts-admin_control_classes-btn" type="button">
                ЗАПИТИ НА ПІДТВЕРДЖЕННЯ
              </button>
            )}
          </div>

          <h4 className="col-12 text-mid-blue">ФІЛЬТРИ</h4>
          <div className="col-12">
            <Field component="select" name="status" className="text-mid-blue accounts-admin_control_filter-select form-control form-control-lg  mt-1 mb-1 p-0 bg-white">
              <option default value="">Статус в СБ</option>
              {SB_STATUS.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
            </Field>
          </div>
          <div className="col-12">
            <select
              className="text-mid-blue accounts-admin_control_filter-select form-control form-control-lg mt-1 mb-1 p-0 bg-white">
              <option>Статус в СБ</option>
            </select>
          </div>
          <div className="col-sm-12 col-md-6">
            <Field component="select" name="avatar" className="text-mid-blue accounts-admin_control_filter-select form-control form-control-lg mt-1 mb-1 p-0 bg-white">
              <option default value="">Фото</option>
              <option default value="true">Є фото</option>
              <option default value="false">Нема фото</option>
            </Field>
          </div>
          <div className="col-sm-12 col-md-6">
            <Field component={DatePickerField} name="birthday" className="text-mid-blue accounts-admin_control_filter-select form-control form-control-lg mt-1 mb-1 p-0 bg-white" placeholder="Дата народження" />
          </div>
          <h5 className="mt-3 col-12 text-mid-blue">ОСВІТА В НАУКМА</h5>
          <div className="col-sm-12 col-md-6">
            <Field component="select" name="faculty" className="text-mid-blue accounts-admin_control_filter-select form-control form-control-lg  mt-1 mb-1 p-0 bg-white">
              <option default value="">Факультет</option>
              {FACULTIES.map(({ name, value }) => <option key={value} value={value}>{name}</option>)}
            </Field>
          </div>
          <div className="col-sm-12 col-md-6">
            <Field component="select" name="speciality" className="text-mid-blue accounts-admin_control_filter-select form-control form-control-lg  mt-1 mb-1 p-0 bg-white">
              <option default value="">Спеціальність</option>
              {specialities.map(({ name, value }) => <option key={value} value={value}>{name}</option>)}
            </Field>
          </div>
          <div className="col-sm-12 col-md-6">
            <select
              className="text-mid-blue accounts-admin_control_filter-select form-control form-control-lg mt-1 mb-1 p-0 bg-white">
              <option>Фото є</option>
            </select>
          </div>
          <div className="col-sm-12 col-md-6">
            <select
              className="text-mid-blue accounts-admin_control_filter-select form-control form-control-lg  mt-1 mb-1 p-0 bg-white">
              <option>01.01.1995</option>
            </select>
          </div>

          <h5 className="text-mid-blue mt-3 col-12 text-mid-blue">КОНТАКТИ</h5>
          <div className="col-12">
            <Field component="input" name="email" className="text-mid-blue accounts-admin_control_filter-select form-control form-control-lg mt-1 mb-1 p-0 bg-white" placeholder="E-mail" />
          </div>
          <div className="col-12">
            <Field component="input" name="phone" className="text-mid-blue accounts-admin_control_filter-select form-control form-control-lg mt-1 mb-1 p-0 bg-white" placeholder="Телефон" />
          </div>
          <div className="col-12">
            <Field component="input" name="profile" className="text-mid-blue accounts-admin_control_filter-select form-control form-control-lg mt-1 mb-1 p-0 bg-white" placeholder="Профіль" />
          </div>
          <h5 className="text-mid-blue mt-3 col-12">ДІЯЛЬНІСТЬ В СБ</h5>
          <div className="col-sm-12 col-md-6">
            <select
              className="text-mid-blue accounts-admin_control_filter-select form-control form-control-lg  mt-1 mb-1 p-0 bg-white">
              <option>01.01.1995</option>
            </select>
          </div>
          <div className="col-sm-12 col-md-6">
            <select
              className="text-mid-blue accounts-admin_control_filter-select form-control form-control-lg mt-1 mb-1 p-0 bg-white">
              <option>Фото є</option>
            </select>
          </div>
          <div className="col-12">
            <select
              className="text-mid-blue accounts-admin_control_filter-select form-control form-control-lg mt-1 mb-1 p-0 bg-white">
              <option>Статус в СБ</option>
            </select>
          </div>
          <div className="col-12">
            <select
              className="text-mid-blue accounts-admin_control_filter-select form-control form-control-lg  mt-1 mb-1 p-0 bg-white">
              <option>Статус в СБ</option>
            </select>
          </div>
        </div>
      </form>
    );
  }
}

SearchForm.propTypes = {
  role: PropTypes.object,
  faculty: PropTypes.string,
};
SearchForm.defaultProps = {
  role: null,
  faculty: null,
};

const selector = formValueSelector('ContactSearchForm');

const mapStateToProps = state => ({
  faculty: selector(state, 'faculty'),
});

const WrappedSearchForm = connect(mapStateToProps)(
  reduxForm({
    form: 'ContactSearchForm',
    onChange: debouncedOnFormChange,
  })(SearchForm),
);

export { WrappedSearchForm as SearchForm };
