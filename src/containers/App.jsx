import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  ModalSignUp, ModalLogin, ModalForgotPass, ModalChangePass,
} from '../components';
import {
  authActions, modalActions, resetActions, membersActions, projectsActions,
} from '../actions';
import { selectorRouterSearch } from '../selectors';
import { parseParams } from '../util';
import { ModalAddMember } from '../components/ModalAddMember';

class App extends PureComponent {
  componentWillMount() {
    const { actions: { auth, members, projects } } = this.props;
    auth.verifyUser();
    members.fetchMembers();
    projects.fetchProjects();
  }

  componentDidMount() {
    const { actions: { modal, reset }, search } = this.props;
    const { resetToken } = parseParams(search);
    if (resetToken) {
      modal.openChangePassModal();
      reset.setResetToken(resetToken);
    }
  }

  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        {children}
        <ModalLogin />
        <ModalSignUp />
        <ModalForgotPass />
        <ModalChangePass />
        <ModalAddMember />
      </React.Fragment>
    );
  }
}


App.propTypes = {
  children: PropTypes.any,
  actions: PropTypes.object.isRequired,
  search: PropTypes.string.isRequired,
};

App.defaultProps = {
  children: null,
};
const mapStateToProps = state => ({
  search: selectorRouterSearch(state),
});
const mapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(authActions, dispatch),
    modal: bindActionCreators(modalActions, dispatch),
    reset: bindActionCreators(resetActions, dispatch),
    members: bindActionCreators(membersActions, dispatch),
    projects: bindActionCreators(projectsActions, dispatch),
  },
});

const AppWrapper = connect(mapStateToProps, mapDispatchToProps)(App);

export { AppWrapper as App };
