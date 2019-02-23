import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AdminNav} from './Admin-nav.jsx';
import './css/admin.css'


class AdminSearch extends PureComponent {
    render() {
        return (
            <div>
                <section className="accounts-admin">
                    <div className="container-fluid">
                        <div className="row d-flex justify-content-center ">
                            <div className="col-12 col-xxl-10">
                                <div className="row">
                                    <div className="col-3 accounts-admin_control pb-3">
                                        <div className="row d-flex justify-content-center text-center">
                                            <div className="col-10 border-top-blue ">
                                                <div className="row mt-3 mb-2">
                                                    <div className="col-2 accounts-admin_control_search-icon-box">
                                                        <i className="fa fa-search"></i>
                                                    </div>
                                                    <div className="col-9">
                                                        <input type="text"
                                                               className="form-control  accounts-admin_control_search-input"
                                                               placeholder="Пошук"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-10 border-top-blue pt-2 pb-2 mb-2">
                                                <button
                                                    className="btn btn-block font-weight-bold accounts-admin_control_classes-btn">НІЧИМ
                                                    НЕ ЗАЙНЯТІ
                                                </button>
                                                <button
                                                    className="btn btn-block font-weight-bold accounts-admin_control_classes-btn">
                                                    НЕОПАТРОНЕНІ
                                                </button>
                                                <button
                                                    className="btn btn-block font-weight-bold accounts-admin_control_classes-btn">МОЇ
                                                    МАЛЮКИ
                                                </button>
                                                <button
                                                    className="btn btn-block font-weight-bold accounts-admin_control_classes-btn">
                                                    ПОШАНОВАНІ
                                                </button>
                                                <button
                                                    className="btn btn-block font-weight-bold accounts-admin_control_classes-btn">
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


                                            {[["Джон Сміт", "Сємкі є?", "ФІ", "2020", "./images/litso.jpg"], ["Джон Сміт", "Сємкі є?", "ФІ", "2020", "./images/litso.jpg"],
                                                ["Джон Сміт", "Сємкі є?", "ФІ", "2020", "./images/litso.jpg"], ["Джон Сміт", "Сємкі є?", "ФІ", "2020", "./images/litso.jpg"],
                                                ["Джон Сміт", "Сємкі є?", "ФІ", "2020", "./images/litso.jpg"],].map((x, i) => {
                                                return <Cart name={x[0]} comment={x[1]} faculty={x[2]} year={x[3]}
                                                             img={x[4]}/>
                                            })

                                            }


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="admin-footer pt-4 pb-4 text-center">
                    <div>© SBTeam, 2019</div>
                </section>
            </div>

        )
    }
}

class Cart extends PureComponent {
    render() {
        return (
            <div className="col-md-6 col-lg-4 col-sm-12 accounts-admin_list_cart p-3">
                <div className="accounts-admin_list_cart_icon">
                    <img
                        className="accounts-admin_list_cart_person-img rounded-circle position-relative "
                        src={this.props.img}/>
                    <img
                        className="accounts-admin_list_cart_small-icon rounded-circle position-absolute "
                        src="./images/l-ico.png"/>
                </div>
                <div className="text-center accounts-admin_list_cart_text">
                    <h6 className="border-bottom-blue pb-2 ml-3 text-mid-blue font-weight-mid">{this.props.name}</h6>
                    <div className="border-bottom-blue pb-2 ml-3">
                        <p className="text-mid-blue mt-1 mb-1 accounts-admin_list_cart_plus-info">
                            {this.props.comment}</p>
                        <div className="row d-flex justify-content-center">
                            <p className="text-mid-blue mb-0 accounts-admin_list_cart_plus-info">
                                {this.props.faculty}, {this.props.year}</p>
                        </div>


                        <div>
                            <i className="fab m-1 mt-2 mb-0 fa-telegram-plane "></i>


                            <i className="fab m-1 mt-2 mb-0 fa-facebook-f "></i>


                            <i className="fas m-1 mt-2 mb-0 fa-phone "></i>


                            <i className="fas m-1 mt-2 mb-0 fa-envelope "></i>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

class Admin extends PureComponent {
    render() {
        return (
            <div>
                <AdminNav/>
                <AdminSearch/>
            </div>
        );
    }
}


// const mapDispatchToProps = dispatch => ({
//   actions: {
//     // routs: bindActionCreators(routsActions, dispatch),
//   },
// });

// const NavbarWrapped = connect(null, mapDispatchToProps)(Navbar);

export {Admin};
