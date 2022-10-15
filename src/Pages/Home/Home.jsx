import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import NavBar from '../../Components/NavBar/NavBar';
import NewRelease from '../../Components/NewRelease/NewRelease';
import About from '../About/About';
import Contact from '../Contact/Contact';
import './Home.scss';

const Home = () => {
  return (
    <div>
      <NavBar/>
      {/* <About/> */}
      <Contact/>
      {/* <Header/> */}
      {/* <NewRelease/> */}
      <Footer/>
    </div>
  )
}

export default Home
