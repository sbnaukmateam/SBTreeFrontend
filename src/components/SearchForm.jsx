import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import debounce from 'debounce';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { membersActions } from '../actions';
import { createQuery } from '../util/search';
import { DatePickerField } from './DatePickerField';
import {
  SB_STATUS, FACULTIES, PROGRAMS, POSSIBLE_YEARS,
} from '../constants';

const onFormChange = function onFormChange(values, dispatch) {
  dispatch(membersActions.nedbQueryMembers(createQuery(values)));
};

const debouncedOnFormChange = debounce(onFormChange, 200);

class SearchForm extends PureComponent {
  render() {
    const { role, faculty: selectedFaculty } = this.props;
    const { admin } = role || {};
    const { specialities = [] } = FACULTIES.find(({ value }) => value === selectedFaculty) || {};
    return (
      <form className="contacts-search-form">
        <div className="contacts-search-wrapper">
          <div className="contacts-search-wrapper_search-line-box border-top-blue ">
            <div className=" accounts-admin_control_search-icon-box">
              <img src="/images/magnifier.png" className="magnifier-ico" />
            </div>
            <div className="search-input-box">
              <Field component="input" type="text" name="quicksearch"
                className="accounts-admin_control_search-input"
                placeholder="Пошук" />
            </div>
          </div>
          <div className="contacts-search-wrapper_classes border-top-blue">
            {/* <button className="contacts-search-wrapper_classes_btn"
              type="button">
                            НІЧИМ НЕ ЗАЙНЯТІ
            </button> */}
            <button className="contacts-search-wrapper_classes_btn"
              type="button">
                            НЕОПАТРОНЕНІ
            </button>
            <button className="contacts-search-wrapper_classes_btn"
              type="button">
                            МОЇ МАЛЮКИ
            </button>
            <button className="contacts-search-wrapper_classes_btn"
              type="button">
                            ПОШАНОВАНІ
            </button>
            {/* <button className="contacts-search-wrapper_classes_btn"
              type="button">
                            УПРАВА
            </button> */}
            {admin && (
            <button className="contacts-search-wrapper_classes_btn"
              type="button">
                                ЗАПИТИ НА ПІДТВЕРДЖЕННЯ
            </button>
            )}
          </div>
          <div className="contacts-search-wrapper_filters">
            <h4 className="text-mid-blue">ФІЛЬТРИ</h4>
            <Field component="select" name="status"
              className="text-mid-blue contact-search_select">
              <option default value="">Статус в СБ</option>
              {SB_STATUS.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
            </Field>

            <select
              className="text-mid-blue contact-search_select">
              <option>Патрон</option>
            </select>
            <div className="contacts-search-wrapper_filters_two-in-row-box">
              <Field component="select" name="avatar"
                className="text-mid-blue contact-search_select small">
                <option default value="">Фото</option>
                <option default value="true">Є фото</option>
                <option default value="false">Нема фото</option>
              </Field>
              <Field component={DatePickerField} name="birthday"

                className="text-mid-blue datepicker contact-search_select"
                placeholder="Дата народження" />
            </div>

            <h5 className="text-mid-blue">ОСВІТА В НАУКМА</h5>
            <div className="contacts-search-wrapper_filters_two-in-row-box">
              <Field component="select" name="faculty"
                className="text-mid-blue contact-search_select small">
                <option default value="">Факультет</option>
                {FACULTIES.map(({ name, value }) => <option key={value} value={value}>{name}</option>)}
              </Field>

              <Field component="select" name="speciality"
                className="text-mid-blue contact-search_select small">
                <option default value="">Спеціальність</option>
                {specialities.map(({ name, value }) => <option key={value} value={value}>{name}</option>)}
              </Field>
            </div>
            <div className="contacts-search-wrapper_filters_two-in-row-box">
              <Field component="select" name="program"
                className="text-mid-blue contact-search_select small">
                <option default value="">Програма</option>
                {PROGRAMS.map(({ name, value }) => <option key={value} value={value}>{name}</option>)}
              </Field>
              <Field component="select" name="entranceYear"
                className="text-mid-blue contact-search_select small">
                <option default value="">Рік вступу</option>
                {POSSIBLE_YEARS.map(value => <option key={value} value={value}>{value}</option>)}
              </Field>
            </div>
            <h5 className="text-mid-blue my-mt-1">КОНТАКТИ</h5>
            <Field component="input" name="email"
              className="text-mid-blue contact-search_select"
              placeholder="E-mail" />
            <Field component="input" name="phone"
              className="text-mid-blue contact-search_select"
              placeholder="Телефон" />
            <Field component="input" name="profile"
              className="text-mid-blue contact-search_select"
              placeholder="Профіль" />

            {/* TODO: uncomment once it will be ready */}
            {/* <h5 className="text-mid-blue my-mt-1">ДІЯЛЬНІСТЬ В СБ</h5>
            <div className="contacts-search-wrapper_filters_two-in-row-box">
              <select
                className="text-mid-blue contact-search_select small">
                <option>01.01.1995</option>
              </select>
              <select
                className="text-mid-blue contact-search_select small">
                <option>Фото є</option>
              </select>
            </div>
            <select
              className="text-mid-blue contact-search_select">
              <option>Статус в СБ</option>
            </select>
            <select
              className="text-mid-blue contact-search_select">
              <option>Статус в СБ</option>
            </select> */}
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
