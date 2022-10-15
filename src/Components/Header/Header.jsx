import React from 'react'
import './Header.scss';
import YouTube from 'react-youtube';

const Header = () => {
  return (
    <div className='header'>
      <div className="inner-container"></div>
      <div className="title-area">
        
        <div className="title-text">
          <div className="name-text">
            <h2 className='title-name'>Don</h2>
            <h1 className='name'>TEWIZY</h1>
          </div>
          <div className="ocupation">
            <h2 className='da'>da PlantainBoi</h2>
            <hr />
          </div>
        </div>
        <div className="latest">          
          <h3 className='lastest-titile'>Latest</h3>
          <div className="latestVideo">
            <YouTube videoId="zMyq7OaC2o4"/>   
          </div>
             
        </div>
      </div>

    </div>
  )
}

export default Header
