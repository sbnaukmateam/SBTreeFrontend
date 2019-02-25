import React from 'react';

import { Field, reduxForm } from 'redux-form';

const SearchForm = () => (
  <form>
    <div className="row d-flex justify-content-center text-center">
      <div className="col-10 border-top-blue ">
        <div className="row mt-3 mb-2">
          <div className="col-2 accounts-admin_control_search-icon-box">
            <i className="fa fa-search" />
          </div>
          <div className="col-9">
            <Field component="input" type="text" name="quicksearch"
              className="form-control  accounts-admin_control_search-input"
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
      </div>

      <h4 className="col-12 text-mid-blue">ФІЛЬТРИ</h4>
      <div className="col-12">
        <select
          className="text-mid-blue accounts-admin_control_filter-select form-control form-control-lg  mt-1 mb-1 p-0 bg-white">
          <option>Статус в СБ</option>
        </select>
      </div>
      <div className="col-12">
        <select
          className="text-mid-blue accounts-admin_control_filter-select form-control form-control-lg mt-1 mb-1 p-0 bg-white">
          <option>Статус в СБ</option>
        </select>
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
      <h5 className="mt-3 col-12 text-mid-blue">ОСВІТА В НАУКМА</h5>
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
        <select
          className="text-mid-blue accounts-admin_control_filter-select form-control form-control-lg  mt-1 mb-1 p-0 bg-white">
          <option>Статус в СБ</option>
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

const WrappedSearchForm = reduxForm({ form: 'ContactSearchForm' })(SearchForm);

export { WrappedSearchForm as SearchForm };
