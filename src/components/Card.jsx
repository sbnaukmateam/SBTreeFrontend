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
      <div className="cart-item-wrapper">
        <div className="card-container">
          <Link to={link}>
            <div className="card-flex-element card-profile-icons-box">
              <img className="card-leaf" src="static/images/l-ico.png" />
              <img className="card-members-photo" src={img || '/images/profile-default-02.png'} />
            </div>
          </Link>
          <div className="card-flex-element card-member-info">
            <div className="card-container2">
              <Link to={link}>
                <div className="card-flex-element2">
                  <p>{name}</p>
                </div>
              </Link>
              <hr />
              <div className="card-flex-element2">
                <p>{comment}</p>
              </div>
              <div className="card-flex-element2 card-fac">
                <p>
                  {faculty}
                  {', '}
                  {year}
                </p>
              </div>
              <div className="card-flex-element2">
                <div className="hr">
                  <hr />
                </div>
              </div>
              <div className="card-flex-element2 card-links">
                <span>
                  {linkIcons.map(x => <img key={x} src={`/images/${x}-icon.png`} className="m-1 mb-0 fab" />)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  faculty: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export { Card };
