import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Cart extends PureComponent {
  render() {
    const {
      img, name, comment, faculty, year,
    } = this.props;
    const linkIcons = ['tg', 'fb', 'tel', 'mail'];
    return (
      <div className="col-md-6 col-sm-12 accounts-admin_list_cart p-3">
        <div className="accounts-admin_list_cart_icon">
          <img
            className="accounts-admin_list_cart_person-img rounded-circle position-relative "
            src={img} />
          <img className="accounts-admin_list_cart_small-icon rounded-circle position-absolute "
            src="/images/l-ico.png" />
        </div>
        <div className="text-center accounts-admin_list_cart_text">
          <h6 className="border-bottom-blue pb-2 ml-3 text-mid-blue font-weight-mid">{name}</h6>
          <div className="border-bottom-blue pb-2 ml-3">
            <p className="text-mid-blue mt-1 mb-1 accounts-admin_list_cart_plus-info">
              {comment}
            </p>
            <div className="row d-flex justify-content-center">
              <p className="text-mid-blue mb-0 accounts-admin_list_cart_plus-info">
                {faculty}
                {', '}
                {year}
              </p>
            </div>
            <div>
              {linkIcons.map(x => <img key={x} src={`/images/${x}-icon.png`} className="m-1 mb-0 fab" />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  faculty: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export { Cart };
