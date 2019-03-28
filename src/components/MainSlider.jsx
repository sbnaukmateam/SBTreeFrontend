import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { selectorProjectsList } from '../selectors';

class MainSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const { projects } = this.props;
    return (
      <Slider {...settings}>
        { projects && projects.map(x => (
          <div key={x.id} className="proj-slider">
            <img src={x.img} className="proj-slider-img" />
            <div className="proj-slider-btn-box">
              {/* TODO: Uncomment after projects will be finished */}
              {/* <Link to="/projects" className="proj-slider-btn"> */}
              <Link to="/" className="proj-slider-btn">
              ДЕТАЛІ
              </Link>
              {/* <Link to="/projects" className="proj-slider-btn"> */}
              <Link to="/" className="proj-slider-btn">
              ДОЛУЧИТИСЯ
              </Link>
            </div>
            <h4>{x.title}</h4>
          </div>
        ))}
      </Slider>
    );
  }
}
const mapStateToProps = state => ({
  projects: selectorProjectsList(state),
});
MainSlider.propTypes = {
  projects: PropTypes.array,
};
MainSlider.defaultProps = {
  projects: null,
};
const MainSliderWrapped = connect(mapStateToProps)(MainSlider);

export { MainSliderWrapped as MainSlider };
