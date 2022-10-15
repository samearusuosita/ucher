import React, {useState} from 'react';
import "./NavBar.scss";
import { Images } from '../../Constant/index';
import {HiMenuAlt4, HiMenu} from 'react-icons/hi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import {motion} from 'framer-motion';

import {BsTwitter, BsInstagram} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";
// import { Link, NavLink } from 'react-router-dom';

import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className='app__navbar' id="navbar">
        <div className="app__navbar-logo">
          <img src={Images.logo} alt="logo" id="logo"/>
        </div>
        <ul className='app__navbar-links' id='app__navbar-links'>
          <li>Home</li>
          <li>About</li>
          <li>YouTube</li>
          <li>Contact</li>
         
        </ul>

        <div className="app__navbar-menu">
          <HiMenu onClick={() => setToggle(true)}/>
          
          {toggle && (
            <motion.div 
            whileInView={{y: [300, 0]}}
            transition={{duration: 0.60, ease: 'easeInOut' }}
            >
          <MdOutlineRestaurantMenu onClick={() => setToggle(false)}/>
          <ul className='app__navbar-links' onClick={() => setToggle(false)}>
          <li>Home</li>
          <li>About</li>
          <li>YouTube</li>
          <li>Contact</li>
          </ul>
          <ul className="social-icons-nav">
                  <li><a href="https://facebook.com/tewizy" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a></li>
                  <li><a href="https://instagram.com/tewizy" target="_blank" rel="noopener noreferrer"><BsInstagram/></a></li>
                  <li><a href="https://twitter.com/tewizy"target="_blank" rel="noopener noreferrer"><BsTwitter/></a></li>
                </ul>
          </motion.div>
          )}

      </div>

      </div>

    </>
    
  )
}

export default Navbar
