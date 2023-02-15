/* eslint-disable prettier/prettier */
import React from 'react'
import Heroboxes from './heroboxes'

const Hero = () => {
  return (
    <div className='bg-hero-pattern bg-no-repeat bg-cover h-full flex px-28 pt-20 pb-16 mobile:flex-wrap tabletOnly:flex-wrap'>
        <Heroboxes />
        <Heroboxes />
        <Heroboxes />
    </div>
  )
}

export default Hero