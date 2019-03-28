/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reset } from 'redux-form';
import { SearchForm, Card } from '../components';
import {
  selectorMembersList, selectorRole,
} from '../selectors';
import { Layout } from '.';
import { privateRoute } from '../hoc';
import { AddMemberButton } from '../components/AddMemberButton';

class AdminSearch extends PureComponent {
  constructor(props) {
    super(props);
    this.resetSearch = this.resetSearch.bind(this);
  }

  resetSearch() {
    const { actions: { resetForm } } = this.props;
    resetForm('ContactSearchForm');
  }

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
                  contacts && !!contacts.length && contacts.map(({
                    id, name, surname, nickName, degrees, avatar,
                  }) => (
                    <Card
                      key={id}
                      name={`${name || ''} ${surname || ''}`}
                      comment={nickName}
                      faculty={degrees && degrees[0] && degrees[0].faculty}
                      year={+(degrees && degrees[0] && degrees[0].year) || ''}
                      img={avatar}
                      id={id} />
                  ))
                }
              </div>
              {/* TODO show button only if we have more */}
              {(contacts && contacts.length) && (
                <button className="btn show-more-btn" type="button">
                  ПОКАЗАТИ ЩЕ...
                </button>
              )}
              {(!contacts || !contacts.length) && (
                <h3>
                  <span>За вашими параметрами пошуку нікого не знайдено.</span>
                  &nbsp;
                  <span onClick={this.resetSearch}><strong>Скинути пошук</strong></span>
                </h3>
              )}
            </div>
          </div>
          <AddMemberButton />
        </section>
      </Layout>
    );
  }
}

AdminSearch.propTypes = {
  role: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  contacts: PropTypes.array,
};
AdminSearch.defaultProps = {
  contacts: [],
};

const mapDispatchToProps = dispatch => ({
  actions: {
    resetForm: bindActionCreators(reset, dispatch),
  },
});

const mapStateToProps = state => ({
  contacts: selectorMembersList(state),
  role: selectorRole(state),
});

const WrappedAdminSearch = privateRoute(connect(mapStateToProps, mapDispatchToProps)(AdminSearch));

export { WrappedAdminSearch as Admin };
