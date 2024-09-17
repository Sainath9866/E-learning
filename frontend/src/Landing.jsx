// src/App.js
import React from 'react';
import Header from './LanCom/Header';
import Features from './LanCom/Features';
import Courses from './LanCom/Courses';
import Testimonials from './LanCom/Testimonials';
import Footer from './LanCom/Footer';
import Intro from "./LanCom/Intro"
//import './App.css'; // Add some global styles if needed

function Landing() {
  return (
    <div >
      <Header />
      <br /><br /><br />
      <Intro/>
      <Features />
      <Courses />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Landing;
