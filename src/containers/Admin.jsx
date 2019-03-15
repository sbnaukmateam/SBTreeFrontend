import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Cart } from '../components';
import {
  selectorMembers,
} from '../selectors';
import { Layout } from '.';
import { privateRoute } from '../hoc';


class AdminSearch extends PureComponent {
  render() {
    const { contacts } = this.props;
    return (
      <Layout>
        <section className="accounts-admin">
          <div className="row justify-content-center m-0">
            <div className="col-12 col-lg-10">
              <div className="row">
                <div className="col-3 accounts-admin_control pb-3">
                  <div className="row d-flex justify-content-center text-center">
                    <div className="col-10 border-top-blue ">
                      <div className="row mt-3 mb-2">
                        <div className="col-2 accounts-admin_control_search-icon-box">
                          <i className="fa fa-search" />
                        </div>
                        <div className="col-9">
                          <input type="text"
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
                </div>
                <div className="col-9 accounts-admin_list">
                  <div className="row d-flex justify-content-center accounts-admin_list_row">
                    {
                      contacts && contacts.map(x => (
                        <Cart key={x.id} name={`${x.name} ${x.surname}`} comment={x.nickName} faculty={x.degrees[0].faculty} year={+x.degrees[0].year}
                          img={x.avatar} />
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
AdminSearch.propTypes = {
  contacts: PropTypes.array,
};
AdminSearch.defaultProps = {
  contacts: null,
};
const mapStateToProps = state => ({
  contacts: selectorMembers(state),
});


const WrappedAdminSearch = privateRoute(connect(mapStateToProps)(AdminSearch));

export { WrappedAdminSearch as Admin };
