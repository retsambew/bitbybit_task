import React, { Component } from "react";
import Slider from "react-slick";
import './MySlider.css';

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      arrows: false,
      infinite: true,
      slidesToShow: 2.8,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      useCSS:true,
      className:'slide-main',
    };
    return (
      <div className='slide-main'>
        <Slider {...settings}>
          <div className='slide-div'>
            <div className='col-a'>
              <h1 className='slide-head'>Lorem Ipsum</h1>
              <p className='slide-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend convallis leo, sed elementum lorem mollis in. Mauris eleifend convallis leo, sed elementum lorem mollis in. </p>
            </div>
          </div>
          <div className='slide-div'>
            <div className='col-b'>
              <h1 className='slide-head'>Lorem Ipsum</h1>
              <p className='slide-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend convallis leo, sed elementum lorem mollis in. Mauris eleifend convallis leo, sed elementum lorem mollis in. </p>
            </div>
          </div>
          <div className='slide-div'>
            <div className='col-c'>
              <h1 className='slide-head'>Lorem Ipsum</h1>
              <p className='slide-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend convallis leo, sed elementum lorem mollis in. Mauris eleifend convallis leo, sed elementum lorem mollis in. </p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}