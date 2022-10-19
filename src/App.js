
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/NavBar/NavBar';

import {Route, Routes} from 'react-router-dom';
// import NewRelease from './Components/NewRelease/NewRelease';
import Photos from './Pages/Photos/Photos';


function App({location}) {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route >
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path='*' element={<Home/>} />
          </Route>
        </Routes>
        
        <Footer/>
    </div>
  );
}

export default App;
