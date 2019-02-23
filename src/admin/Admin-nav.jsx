import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
class AdminNav extends PureComponent {
    render() {
        return (<section className="admin-menu">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center">
                        <div className="col-xxl-10 col-12 ">
                            <div className="row d-flex justify-content-between align-items-center">
                                <div className="col-1 text-center">
                                    <img src={'./images/logo.png'} className="admin-menu_logo-img"/>
                                </div>
                                <div className="col-2 text-left">
                                    <a href="#">
                                        Головна
                                    </a>
                                </div>
                                <div className="col-2 text-left">
                                    <a href="#">
                                        Дерево
                                    </a>
                                </div>
                                <div className="col-2 text-left">
                                    <a href="#">
                                        Контакти
                                    </a>
                                </div>
                                <div className="col-3 text-right admin-menu_profile">
                                    Мій профіль
                                </div>
                                <div className="col-1 admin-menu_user-icon-box text-left">
                                    <i className="fas fa-user-circle admin-menu_user-icon "></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
AdminNav.contextTypes = { router: PropTypes.object };

// const mapDispatchToProps = dispatch => ({
//   actions: {
//     // routs: bindActionCreators(routsActions, dispatch),
//   },
// });

// const NavbarWrapped = connect(null, mapDispatchToProps)(Navbar);

export { AdminNav };
