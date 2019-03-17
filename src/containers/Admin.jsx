import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, SearchForm } from '../components';
import {
  selectorMembersList, selectorRole,
} from '../selectors';
import { Layout } from '.';
import { privateRoute } from '../hoc';


class AdminSearch extends PureComponent {
  render() {
    const { contacts, role } = this.props;
    return (
      <Layout>
        <section className="accounts-admin">
          <div className="row justify-content-center m-0">
            <div className="col-12 col-lg-10">
              <div className="row">
                <div className="col-3 accounts-admin_control pb-3">
                  <SearchForm role={role} />
                </div>
                <div className="col-9 accounts-admin_list">
                  <div className="row d-flex justify-content-center accounts-admin_list_row">
                    {
                      contacts && contacts.map(x => (
                        <Card
                          key={x.id}
                          name={`${x.name} ${x.surname}`}
                          comment={x.nickName}
                          faculty={x.degrees[0].faculty}
                          year={+x.degrees[0].year}
                          img={x.avatar}
                          id={x.id} />
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
  role: PropTypes.object.isRequired,
};
AdminSearch.defaultProps = {
  contacts: null,
};

const mapStateToProps = state => ({
  contacts: selectorMembersList(state),
  role: selectorRole(state),
});


const WrappedAdminSearch = privateRoute(connect(mapStateToProps)(AdminSearch));

export { WrappedAdminSearch as Admin };
