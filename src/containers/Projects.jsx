import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectorProjectsList } from '../selectors';
import { Project } from '../components';
import { Layout } from '.';

class Projects extends PureComponent {
  render() {
    const { projects } = this.props;
    return (
      <Layout>
        { projects && projects.map(x => <div key={x.id}><Project {...x} /></div>)}
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </div>
      </Layout>
    );
  }
}
Projects.propTypes = {
  projects: PropTypes.array,
};
Projects.defaultProps = {
  projects: null,
};
const mapStateToProps = state => ({
  projects: selectorProjectsList(state),
});


const ProjectsWrapped = connect(mapStateToProps)(Projects);

export { ProjectsWrapped as Projects };
