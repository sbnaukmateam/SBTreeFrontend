import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends PureComponent {
  render() {
    const {
      img, name, comment, faculty, year, id,
    } = this.props;
    const linkIcons = ['tg', 'fb', 'tel', 'mail'];
    const link = `/profiles/${id}`;
    return (
      <div className="card-item-wrapper">
        <div className="card-container">
          <Link to={link} className="card-main-icon-link">
            <div className="card-profile-icons-box">
              <img className="card-leaf" src="static/images/l-ico.png" />
              <img className="card-members-photo" src={img || '/images/profile-default-02.png'} />
            </div>
          </Link>
          <div className="card-member-info">
            <Link to={link}>
              <p>{name}</p>
            </Link>
            <hr />
            <p>{comment}</p>
            <p>
              {faculty}
              {', '}
              {year}
            </p>
            <hr />
            <div className="card-links">
              {linkIcons.map(x => <img key={x} src={`/images/${x}-icon.png`} />)}
            </div>
          </div>
        </div>
      </div>

    );
  }
}

Card.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string.isRequired,
  comment: PropTypes.string,
  faculty: PropTypes.string,
  year: PropTypes.any,
  id: PropTypes.string.isRequired,
};
Card.defaultProps = {
  faculty: '',
  img: '',
  comment: '',
  year: '',
};

export { Card };
