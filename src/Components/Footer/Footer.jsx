import React from 'react';
import './Footer.scss';
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'



const Footer = () => {
  return (
    <div className='app__footer'>
      <div className="app__statement">
        <li>Privacy</li>
        <li>Cookies</li>
      </div>
      <div className="app__rights">
        <p>all right reserved. tewizy 2022</p>
      </div>
      <div className="app__social">
        <li><BsFacebook/></li>
        <li><BsInstagram/></li>
        <li><BsTwitter/></li>
      </div>
    </div>
  )
}

export default Footer
