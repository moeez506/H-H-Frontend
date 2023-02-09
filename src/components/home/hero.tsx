/* eslint-disable prettier/prettier */
import React from 'react'
import Heroboxes from './heroboxes'

const Hero = () => {
  return (
    <div className='bg-hero-pattern bg-no-repeat bg-cover h-[700px] flex px-28 pt-20'>
        <Heroboxes />
        <Heroboxes />
        <Heroboxes />
    </div>
  )
}

export default Hero