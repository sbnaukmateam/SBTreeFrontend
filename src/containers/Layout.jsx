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
    const { children, id } = this.props;
    return (
      <div>
        <Navbar id={id} />
        {children}
        <Footer />
      </div>
    );
  }
}


Layout.propTypes = {
  children: PropTypes.any,
  actions: PropTypes.object.isRequired,
  id: PropTypes.number,
};

Layout.defaultProps = {
  children: null,
  id: null,
};

const mapDispatchToProps = dispatch => ({
  actions: {
    members: bindActionCreators(membersActions, dispatch),
  },
});

const LayoutWrapper = connect(null, mapDispatchToProps)(Layout);

export { LayoutWrapper as Layout };
