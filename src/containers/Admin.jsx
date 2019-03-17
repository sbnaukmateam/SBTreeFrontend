import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import { Cart, SearchForm } from '../components';
import {
  selectorMembers, selectorRole,
} from '../selectors';
import { Layout } from '.';
import { privateRoute } from '../hoc';


class AdminSearch extends PureComponent {
  render() {
    const { contacts, quicksearch, role } = this.props;
    const searchStr = quicksearch.toLowerCase();
    const filteredContacts = (contacts || [])
      .filter(({ name, surname, nickName }) => [name, surname, nickName]
        .filter(item => !!item)
        .map(item => item.toLowerCase())
        .some(item => item.indexOf(searchStr) !== -1));
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
                      filteredContacts.map(x => (
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
  quicksearch: PropTypes.string,
  role: PropTypes.object.isRequired,
};
AdminSearch.defaultProps = {
  contacts: null,
  quicksearch: '',
};

const selector = formValueSelector('ContactSearchForm');

const mapStateToProps = state => ({
  contacts: selectorMembers(state),
  quicksearch: selector(state, 'quicksearch'),
  role: selectorRole(state),
});


const WrappedAdminSearch = privateRoute(connect(mapStateToProps)(AdminSearch));

export { WrappedAdminSearch as Admin };
