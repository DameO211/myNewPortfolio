import React from 'react';
import "./index.css";

import Home from "./pages/Home"
import About from "./pages/About"

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';


export default function App() {
  return (



      <div className="App">

          <Navbar />

          <HeroSection/>

      </div>


  );
}


// https://redstapler.co/minimal-css-text-sliding-animation/