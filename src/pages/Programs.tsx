/* eslint-disable prettier/prettier */
import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/navbar/Navbar'

import ProgramBody from '../components/ProgramBody'

const Programs = () => {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <ProgramBody />
      <Contact />
      <Footer />

    </>
  )
}

export default Programs