import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import image1 from "../../assets/food_1.png"
import './Header.css'

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
  >
    <div className='header'>
      <div className='header-contents'>
      <h2>Have you ever tried our food?</h2>
      <p>Our menu, crafted with natural and fresh vegetables and meats, changes daily and is presented for our customers enjoyment.</p>
    <div data-src={image1} />
    <div data-src={image1} />
    </div>
    </div>
  </AutoplaySlider>
);

export default Slider;


