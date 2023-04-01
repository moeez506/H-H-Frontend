/* eslint-disable prettier/prettier */
import React from 'react'
import Aboutbody from '../components/about/AbountBody'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/navbar/Navbar'


const About = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Aboutbody />
      <Contact />
      <Footer />

    </>
  )
}

export default About