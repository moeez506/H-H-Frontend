/* eslint-disable prettier/prettier */
import React from 'react'
import Heroboxes from './heroboxes'

const Hero = () => {
  return (
    <div className='bg-hero-pattern bg-no-repeat bg-cover h-full flex pt-20 pb-16 mobile:flex-wrap mobile:bg-hero-pattern-responsive tabletOnly:bg-hero-pattern-responsive tabletOnly:flex-col tabletOnly:items-center'>
        <Heroboxes />
        <Heroboxes />
        <Heroboxes />
    </div>
  )
}

export default Hero