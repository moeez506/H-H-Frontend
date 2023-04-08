/* eslint-disable prettier/prettier */
import React from 'react'
import Contact from '../components/Contact'

import ContactBody from '../components/ContactBody'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/navbar/Navbar'



const ContactUS = () => {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <ContactBody />
      <Contact />
      <Footer />

    </>
  )
}

export default ContactUS