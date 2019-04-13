import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Layout } from '.';

class About extends PureComponent {
  render() {
    return (
      <Layout>
        <div className="about-main-wrapper">
          <section className="first-section">
            <div className="first-section-element heading-wrapper">
              <h1 className="main-heading">
СПУДЕЙСЬКЕ
                <br />
БРАТСТВО
              </h1>
              <p className="about-sb">
Спудейське братство ініціює, проводить, допомагає організовувати цікаві для
                                    громади заходи, передусім – для студентства.
                                    Спудейське братство поширює українські народні звичаї, стимулює студентство та
                                    академічну спільноту до відродження традиційних свят. Наприклад, за два тижні до
                                    Великодня братчики традиційно проводять майстер-класи із писанкарства; на свято
                                    Масляної влаштовують фестиваль зі смачними млинцями та спаленням опудала
                                    зими. Також варто згадати братський Вертеп, що широко відомий і поза межами
                                    Могилянки: кожного року студенти пишуть новий сценарій-інтерпретацію на
                                    відомий біблійний мотив та ходять з таким осучасненим вертепом до адміністрації
                                    університету, випускників, політиків, та, власне, до всіх, хто запрошує. А у грудні
                                    відбуваються традиційні «Андріївські вечорниці у Смолоскипі» з веселими забавами
                                    та смачними варениками.
              </p>
            </div>
            <div className="logo-wrapper">
              <img src="/images/logo-big.png" width="200px;" />
              <button type="button" href="#" id="join-button">
ПРИЄДНАТИСЬ &nbsp;
                <i className="fas fa-angle-double-right" />
              </button>
            </div>
          </section>

          <section>
            <div className="second-section">
              <div className="second-section-element about-sb-2-wrapping">
                <p className="about-sb-sec2">
Також СБ кілька разів на рік проводить свої
                                    «Посиденьки з гітарою» та «Літтусівку».
                                    «Посиденьки» – це можливість для музикантів та
                                    усіх поціновувачів української музики зібратись і
                                    поспівати разом, можливо, навіть презентувати
                                    власні музичні доробки у сімейній атмосфері Під
                                    Wall-у. «Літтусівка» - це платформа для молодих
                                    поетів та фанатів сучасної поезії, де вони можуть
                                    поділитися своїми авторськими поривами та
                                    почути відгуки на власну творчість.
                                    Існує ще кілька братських акцій, що за ці роки
                                    стали візитівкою Академії – «Чистий Сковорода»
                                    на День академії, «Квітковий бал» та
                                    «Сковорода-випускник».
                                    Долучитися до Спудейського братства НаУКМА
                                    може кожен могилянець: від студента до
                                    Президента. Приєднуйтесь до нас – ми завжди
                                    готові до співпраці!которые ваши руки мощные
                                    творческие инструменты, обеспечивают
                                    абсолютный которые контроль над текстом. их
                                    которые ваши руки мощные творческие
                                    инструменты, обеспечивают абсолютный
                                    которые контроль над текстом. их помощью вы
                                    можете применять к любым элементам тени,
                                    эффекты с использованием которые
                                    прозрачности. Они позволят вам создавать
                                    элегантные таблицы. И не бойтесь
                </p>
              </div>
              <div className="train-logo-wrapper">
                <img src="/images/train.jpg" className="paravoz" />

                <button type="button" href="#" id="read-more">
ЧИТАТИ ДАЛІ &nbsp;
                  <i className="fas fa-angle-double-right" />
                </button>
              </div>
            </div>
          </section>

          <section>
            <h1 id="org-structure">СТРУКТУРА ОРГАНІЗАЦІЇ</h1>
            <div className="third-section flex-container3">

              <div className="child">
                <img className="circle-ava"
                  src="/images/profile-default-02.png" />
                <h2 className="circle-heading">ПИСАР</h2>
                <p className="under-heading">
Спудейське братство ініціює,
                                    проводить, допомагає організовувати
                                    цікаві для громади заходи, передусім
                                    – для студентства.
                  <br />
                                    . . . &nbsp;
                  <i className="fas fa-angle-double-right" />
                </p>
              </div>
              <div className="child">
                <img className="circle-ava" src="/images/profile-default-02.png" />
                <h2 className="circle-heading">ГОЛОВА</h2>
                <p className="under-heading">
Спудейське братство ініціює,
                                    проводить, допомагає організовувати
                                    цікаві для громади заходи, передусім
                                    – для студентства.
                  <br />
                                    . . . &nbsp;
                  <i className="fas fa-angle-double-right" />
                </p>
              </div>
              <div className="child">
                <img className="circle-ava" src="/images/profile-default-02.png" />
                <h2 className="circle-heading">СКАРБНИК</h2>
                <p className="under-heading">
Спудейське братство ініціює,
                                    проводить, допомагає організовувати
                                    цікаві для громади заходи, передусім
                                    – для студентства.
                  <br />
                                    . . . &nbsp;
                  <i className="fas fa-angle-double-right" />
                </p>
              </div>
              <div className="child">
                <img className="circle-ava" src="/images/profile-default-02.png" />
                <h2 className="circle-heading">РАДНИК</h2>
                <p className="under-heading">
Спудейське братство ініціює,
                                    проводить, допомагає організовувати
                                    цікаві для громади заходи, передусім
                                    – для студентства.
                  <br />
                                    . . . &nbsp;
                  <i className="fas fa-angle-double-right" />
                </p>
              </div>
              <div className="child">
                <img className="circle-ava" src="/images/profile-default-02.png" />
                <h2 className="circle-heading">РАДНИК</h2>
                <p className="under-heading">
Спудейське братство ініціює,
                                    проводить, допомагає організовувати
                                    цікаві для громади заходи, передусім
                                    – для студентства.
                  <br />
                                    . . . &nbsp;
                  <i className="fas fa-angle-double-right" />
                </p>
              </div>
            </div>
          </section>

          <section className="history-section">
            <h1 id="org-history">ІСТОРІЯ ЗАСНУВАННЯ</h1>
            <p className="org-history-desc">
Спудейське братство ініціює, проводить, допомагає організовувати цікаві для
                            громади заходи, передусім – для студентства.
                            Спудейське братство поширює українські народні звичаї, стимулює студентство та
                            академічну спільноту до відродження традиційних свят. Наприклад, за два тижні до
                            Великодня братчики традиційно проводять майстер-класи із писанкарства; на свято
                            Масляної влаштовують фестиваль зі смачними млинцями та спаленням опудала
                            зими. Також варто згадати братський Вертеп, що широко відомий і поза межами
                            Могилянки: кожного року студенти пишуть новий сценарій-інтерпретацію на
                            відомий біблійний мотив та ходять з таким осучасненим вертепом до адміністрації
                            університету, випускників, політиків, та, власне, до всіх, хто запрошує. А у грудні
                            відбуваються традиційні «Андріївські вечорниці у Смолоскипі» з веселими забавами
                            та смачними варениками.
            </p>
            <button type="button" href="#" id="read-more2">
ЧИТАТИ ДАЛІ &nbsp;
              <i className="fas fa-angle-double-right" />
            </button>
          </section>

          <section>
            <h1 id="where-to-find">ДЕ НАС ЗНАЙТИ?</h1>
            <div className="flex-container4">
              <div className="flex-element">
                <img src="/images/mapMock.png" id="map" />
              </div>
              <div className="flex-element">
                <p className="address">
Національний університет
                  <br />
                                    «Києво-Могилянська академія»
                  <br />
                                    ГО Спудейське Братсво НаУКМА
                  <br />
                                    вул. Волоська 8/5, 4 корпус,
                  <br />
                                    кумната 107
                  <br />

                </p>
                <div className="find-icons">
                  <img src="/images/fb-blue.png" id="facebook" />
                  <img src="/images/inst-blue.png"
                    id="instagram" />
                  <img src="/images/mail-blue.png" id="email" />
                  <img src="/images/web-blue.png"
                    id="web" />
                </div>
              </div>
            </div>
          </section>
          <br />
        </div>
      </Layout>
    );
  }
}

const AboutWrapped = connect()(About);

export { AboutWrapped as About };
