import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Navbar, Footer } from '../components';
import { membersActions } from '../actions';

class Layout extends PureComponent {
  componentWillMount() {
    const { actions: { members } } = this.props;
    members.fetchMembers();
  }

  render() {
    const { children } = this.props;
    return (
      <div className="container">
        <Navbar />
        {children}
        <Footer />
      </div>
    );
  }
}


Layout.propTypes = {
  children: PropTypes.any,
  actions: PropTypes.object.isRequired,
};

Layout.defaultProps = {
  children: null,
};

const mapDispatchToProps = dispatch => ({
  actions: {
    members: bindActionCreators(membersActions, dispatch),
  },
});
const LayoutWrapper = connect(null, mapDispatchToProps)(Layout);

export { LayoutWrapper as Layout };
