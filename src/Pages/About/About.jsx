import React from 'react';
import "./About.scss";
import { Images } from '../../Constant';

const About = () => {
  return (
    <div className='app__about'>
      <div className="app__about-me">
        <h1 className='app__me'>About me</h1>
      </div>
      <h1 className='don'>Don</h1>
      

      <div className="app__about-content-main">
        <div className="app__about-content">
          <img src={Images.Header_BG} alt="about_image" />
        </div>
        <div className="app__about-text">
          <h3 className='app__about-title'>I am tewizy</h3>
          <p className='app__about-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam atque autem culpa magni, quas officia nobis rerum maxime minima unde dicta, sunt assumenda voluptatum qui, sequi veritatis quibusdam repellendus vitae cupiditate. Neque quo rem laudantium, fugiat dicta debitis facilis unde voluptatum facere alias praesentium nostrum ratione numquam explicabo officiis id hic? Expedita facilis nesciunt quaerat eius laudantium perferendis sint eveniet?</p>
          <button type='button' className='bookme-btn'>Book Me</button>
        </div>
      </div>

      
      
      
    </div>
  )
}

export default About
