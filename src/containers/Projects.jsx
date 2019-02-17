/* eslint-disable no-console */
import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { projectsActions } from '../actions';
import { selectorProjects } from '../selectors';
import { Project } from '../components';

class Projects extends PureComponent {
  componentDidMount() {
    const { actions: { projects } } = this.props;
    projects.fetchProjects();
  }

  render() {
    const { projects } = this.props;
    return (
      <div>
        { projects && projects.map(x => <div key={x.id}><Project {...x} /></div>)
        }
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
      </div>
    );
  }
}
Projects.propTypes = {
  actions: PropTypes.object.isRequired,
  projects: PropTypes.array,
};
Projects.defaultProps = {
  projects: null,
};
const mapStateToProps = state => ({
  projects: selectorProjects(state),
});


const mapDispatchToProps = dispatch => ({
  actions: {
    projects: bindActionCreators(projectsActions, dispatch),
  },
});

const ProjectsWrapped = connect(mapStateToProps, mapDispatchToProps)(Projects);

export { ProjectsWrapped as Projects };
