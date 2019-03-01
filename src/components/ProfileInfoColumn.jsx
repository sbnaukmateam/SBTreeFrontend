/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';

// TODO add proptypes
class ProfileInfoColumn extends PureComponent {
  render() {
    const { title, items } = this.props;
    return (
      <div className="edit-info">
        <div>
          <h3>{title}</h3>
          <div>
            {/* TODO handle item type */}
            {items.map(({ item, href }) => (
              <div key={item} className="edit-info-point" title={item}>
                <div>
                  <img src="images/point.png" alt="" />
                  {href ? <a href={href}>{item}</a> : item }
                </div>
                <button type="button" className="point-btn">
                  <img src="images/del-point.png" alt="" />
                </button>
              </div>
            ))}
          </div>
        </div>
        <button type="button" className="point-btn add-btn">
          <img src="images/add-point-btn.png" alt="" />
        </button>
      </div>
    );
  }
}

export { ProfileInfoColumn };
