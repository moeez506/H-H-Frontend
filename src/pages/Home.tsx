/* eslint-disable prettier/prettier */
import React from 'react'
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';

import Body from '../components/home/Body';
import Hero from '../components/home/Hero';
import Navbar from '../components/navbar/Navbar';


const Home = () => {
  return (
    // <div>home</div>
    <>
      {/* <Header /> */}
      <Navbar />
      <Hero />
      <Body />
      <Contact />
      <Footer />

    </>

  )
}

export default Home;