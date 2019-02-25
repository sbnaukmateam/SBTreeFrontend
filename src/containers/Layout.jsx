import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StickyContainer, Sticky } from 'react-sticky';
import { Navbar, Footer } from '../components';
import { membersActions, projectsActions } from '../actions';

class Layout extends PureComponent {
  componentWillMount() {
    const { actions: { members, projects } } = this.props;
    members.fetchMembers();
    projects.fetchProjects();
  }

  render() {
    const { children, transparent } = this.props;
    return (
      <StickyContainer>
        <Sticky>
          {({
            style,
          }) => (
            <Navbar transparent={transparent} style={style}>
              {/* ... */}
            </Navbar>
          )}
        </Sticky>
        {children}
        <Footer />
      </StickyContainer>
    );
  }
}


Layout.propTypes = {
  children: PropTypes.any,
  actions: PropTypes.object.isRequired,
  transparent: PropTypes.bool,
};

Layout.defaultProps = {
  children: null,
  transparent: null,
};

const mapDispatchToProps = dispatch => ({
  actions: {
    members: bindActionCreators(membersActions, dispatch),
    projects: bindActionCreators(projectsActions, dispatch),
  },
});
const LayoutWrapper = connect(null, mapDispatchToProps)(Layout);

export { LayoutWrapper as Layout };
