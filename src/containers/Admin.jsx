import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SearchForm } from '../components';
import {
  selectorMembersList, selectorRole,
} from '../selectors';
import { Layout } from '.';
import { privateRoute } from '../hoc';


class AdminSearch extends PureComponent {
  render() {
    const { /* contacts, */ role } = this.props;
    return (
      <Layout>
        <section className="contacts-section">
          <div className="contacts-section_content-wrapper">
            <div className="contacts-section_content-wrapper_search-control">
              <SearchForm role={role} />
            </div>
          </div>

        </section>
      </Layout>
    );
  }
}
AdminSearch.propTypes = {
  role: PropTypes.object.isRequired,
};
AdminSearch.defaultProps = {
};

const mapStateToProps = state => ({
  contacts: selectorMembersList(state),
  role: selectorRole(state),
});


const WrappedAdminSearch = privateRoute(connect(mapStateToProps)(AdminSearch));

export { WrappedAdminSearch as Admin };
