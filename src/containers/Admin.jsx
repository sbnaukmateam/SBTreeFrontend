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
        <section className="contacts-section">
          <div className="contacts-section_content-wrapper">
            <div className="contacts-section_content-wrapper_search-control">
              <SearchForm role={role} />
            </div>
            <div className="carts-wrapper">
              <div className="carts-box">
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
              <div>kekweqweq</div>
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
