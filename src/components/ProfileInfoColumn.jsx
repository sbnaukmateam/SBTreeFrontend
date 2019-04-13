import React, { PureComponent } from 'react';
import Url from 'url-parse';
import PropTypes from 'prop-types';

const emptyFormatter = item => item;
const analyzeContact = (link) => {
  if (link.includes('@')) return 'fas fa-envelope';
  if (!link.includes('.')) return 'fas fa-phone';
  const hostname = new Url(link).hostname.split('.');
  const host = hostname[hostname.length - 2];
  switch (host) {
    case 'facebook':
      return 'fab fa-facebook';
    case 'instagram':
      return 'fab fa-instagram';
    case 'telegram':
      return 'fab fa-telegram';
    default:
      return 'fas fa-link';
  }
};
const wrapDegree = degree => (
  <div>
    <p title={`${degree.faculty} - ${degree.year}`}>
      {degree.faculty}
    &nbsp;
    -
    &nbsp;
      {degree.year}
    </p>
    <p title={`(${degree.speciality} - ${degree.program})`}>
    (
      {degree.speciality}
    -
      {degree.program}
    )
    </p>
  </div>
);

const wrapContact = contact => (
  <a href={contact}>{contact}</a>
);

const wrapPosition = pos => (
  <p>{pos}</p>
);
class ProfileInfoColumn extends PureComponent {
  render() {
    const {
      title, items, formatter, onRemove, onAdd, type,
    } = this.props;
    const format = formatter || emptyFormatter;
    let wrapper;
    let icon;
    switch (type) {
      case 'positions':
        icon = 'fas fa-address-card';
        wrapper = wrapPosition;
        break;
      case 'degrees':
        wrapper = wrapDegree;
        icon = 'fas fa-graduation-cap';
        break;
      case 'contacts':
        wrapper = wrapContact;
        break;
      default:
    }

    return (
      <div className="edit-info">
        <div>
          <h3>{title}</h3>
          <div>
            {items.map(({ item: rawItem }, index) => {
              const item = format(rawItem);
              const isString = typeof item === 'string';
              const wrappedItem = wrapper(item);
              let awIcon = icon;
              if (!awIcon) awIcon = analyzeContact(item);

              return (
                <div key={isString ? item : item.year} className="edit-info-point" title={isString ? item : undefined}>
                  <div>
                    <i className={`${awIcon} fa-2x`} />
                    {wrappedItem}
                  </div>
                  <button type="button" className="point-btn" onClick={() => onRemove(index)}>
                    <img src="/images/del-point.png" alt="" />
                  </button>

                </div>
              );
            })}
          </div>
        </div>
        <button type="button" className="point-btn add-btn" onClick={() => onAdd()}>
          <img src="/images/add-point-btn.png" alt="" />
        </button>
      </div>
    );
  }
}
ProfileInfoColumn.propTypes = ({
  title: PropTypes.string.isRequired,
  items: PropTypes.array,
  formatter: PropTypes.func,
  onRemove: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
});
ProfileInfoColumn.defaultProps = ({
  items: [],
  formatter: null,
});
export { ProfileInfoColumn };
