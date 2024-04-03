import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home  from './Components/Home';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Testimonial from './Components/Testimonial';
import SocialMediaIcons from './Components/SocialMediaIcons';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path='/testimonial' element={<Testimonial/>} />
        {/* <Route path='/socialMediaIcon' element={<SocialMediaIcons/>} /> */}
        <Route path='/socialMediaIcon' Component={<SocialMediaIcons/>} />

        
      </Routes>

    </Router>
  );
};


export default App;
