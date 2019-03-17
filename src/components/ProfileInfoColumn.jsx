/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';

const emptyFormatter = item => item;

// TODO add proptypes
class ProfileInfoColumn extends PureComponent {
  render() {
    const {
      title, items, formatter, makeAnchors, onRemove,
    } = this.props;
    const format = formatter || emptyFormatter;
    return (
      <div className="edit-info">
        <div>
          <h3>{title}</h3>
          <div>
            {/* TODO handle item type */}
            {items.map(({ item: rawItem }, index) => {
              const item = format(rawItem);
              return (
                <div key={item} className="edit-info-point" title={item}>
                  <div>
                    <img src="/images/point.png" alt="" />
                    {makeAnchors ? <a href={item}>{item}</a> : item }
                  </div>
                  <button type="button" className="point-btn" onClick={() => onRemove(index)}>
                    <img src="/images/del-point.png" alt="" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <button type="button" className="point-btn add-btn">
          <img src="/images/add-point-btn.png" alt="" />
        </button>
      </div>
    );
  }
}

export { ProfileInfoColumn };
