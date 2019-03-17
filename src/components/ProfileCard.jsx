/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';

class ProfileCard extends PureComponent {
  render() {
    // TODO format birthday with moment/luxon
    // TODO add projects
    // TODO add different icons to interests
    // TODO add props validation
    const {
      avatar, name, surname, nickName,
      birthday, patron, interests,
    } = this.props;
    const interestsShort = interests.slice(0, 3);
    const { name: patronName, surname: patronSurname } = patron || {};
    return (
      <div className="profile-card">
        <div>
          <img src={avatar} className="profile-ava" />
          <img src="/images/r-ico.png" className="profile-ico-r" />
          <img src="/images/l-ico.png" className="profile-ico-l" />
        </div>
        <div className="d-flex flex-column justify-content-between">
          <div>
            <p className="card-name">
              {name}
              &nbsp;
              {surname}
            </p>
            <p className="card-nickname">
              {nickName}
            </p>
          </div>
          <div className="card-info-box">
            <div className="card-info">
              <p>Дата народження:</p>
              <p>{birthday}</p>
            </div>
            <div className="card-info">
              <p>Патрон:</p>
              <p>
                {patronName}
                &nbsp;
                {patronSurname}
              </p>
            </div>
            <div className="card-info">
              <p>Проекти:</p>
              <div>
                <img src="/images/point.png" alt="" />
                <img src="/images/point.png" alt="" />
                <img src="/images/point.png" alt="" />
                <img src="/images/add-point.png" alt="" />
              </div>
            </div>
            <div className="card-info">
              <p>Інтереси:</p>
              <div>
                {interestsShort.map(item => <img key={item} src="/images/point.png" alt="" />)}
                <img src="/images/add-point.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { ProfileCard };
