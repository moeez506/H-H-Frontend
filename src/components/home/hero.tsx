/* eslint-disable prettier/prettier */
import React from 'react'
import Heroboxes from './heroboxes'
import members from '../../assets/icons/1.png'
import group from '../../assets/icons/3.png'
import xafmembers from '../../assets/icons/2.png'

const Hero = () => {
  const Data1 = {
    path: group,
    name: 'ASSOCIATIONS/GROUPS',
    number: '05',
  }
  const Data2 = {
    path: members,
    name: 'ACTIVE MEMBERS',
    number: '90',
  }
  const Data3 = {
    path: xafmembers,
    name: 'COEFFICIENT OF MEMBERS',
    number: 'XAF 3000',
  }
  return (
    <div className='bg-hero-pattern bg-no-repeat bg-cover h-full flex pt-20 pb-16 mobile:flex-wrap tabletOnly:bg-hero-pattern-responsive tabletOnly:flex-col tabletOnly:items-center'>
      <Heroboxes path={Data1.path} name={Data1.name} number={Data1.number} />
      <Heroboxes path={Data2.path} name={Data2.name} number={Data2.number} />
      <Heroboxes path={Data3.path} name={Data3.name} number={Data3.number} />
    </div>
  )
}

export default Hero