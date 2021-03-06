import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout } from './Layout';
import { MainSlider } from '../components';

class MyContainer extends PureComponent {
  render() {
    return (
      <Layout transparent>
        <section className="main-page">
          <img src="/images/main-photo.png" className="main-photo" />
          {/* <img src="/images/main-bg.png" className="main-bg" /> */}
          <div className="main-page_content">
            <div className="main-page_text">
              <h2>СПУДЕЙСЬКЕ БРАТСТВО</h2>
              <p className="main-text-about">
                  Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном
                  носителе человеческая мысль; в общем плане связная и полная последовательность символов.

                  Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и
                  репрезентативная (более частная). Имманентный подход подразумевает отношение к тексту как к автономной
                  реальности, нацеленность на выявление его внутренней структуры. Репрезентативный — рассмотрение текста
                  как особой формы представления знаний о внешней тексту действительности.

                  В лингвистике термин «текст» используется в широком значении, включая и образцы устной речи.
                  Восприятие текста изучается в рамках лингвистики текста и психолингвистики. Так, например, И. Р.
                  Гальперин определяет текст следующим образом: «это письменное сообщение, объективированное в виде
                  письменного документа, состоящее из ряда высказываний, объединённых разными типами лексической,
                  грамматической и логической связи, имеющее определённый моральный характер, прагматическую установку и
                  соответственно литературно обработанное»[1].
              </p>
            </div>
            <div className="title-box">
              <img src="/images/logo-big.png" className="logo-main" />
              <Link to="/about" className="main-about-link">
                  ЧИТАТИ ДАЛI
                {' '}
                {' >>'}
              </Link>
            </div>
          </div>
        </section>
        <div className="main-projects-sect">
          <h3>ПРОЕКТИ</h3>
          <MainSlider />
          {/* TODO: Uncomment after projects will be finished */}
          {/* <Link to="/projects" className="main-proj-link"> */}
          <Link to="/" className="main-proj-link">
            УСІ ПРОЕКТИ
            {' '}
            {' >>'}
          </Link>
        </div>
      </Layout>
    );
  }
}


const MyContainerWrapped = connect()(MyContainer);
export { MyContainerWrapped as MyContainer };
