import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Project extends PureComponent {
  render() {
    const {
      img, title, fbLink, available,
    } = this.props;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', margin: '50px' }}>
        <img src={img} style={{ width: '400px' }} />
        {title}
        <a href={fbLink}>Facebook</a>
        {available ? <div> Open</div> : <div> Close</div>}
      </div>
    );
  }
}
Project.propTypes = {
  img: PropTypes.string.isRequired,
  fbLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  available: PropTypes.bool.isRequired,
};

export { Project };
