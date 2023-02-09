/* eslint-disable prettier/prettier */

import React from 'react'

const Footer = () => {
  return (
    <div className='bg-footer h-[400px] grid grid-cols-3'>
      <div className='text-white'>logo</div>
      <div className='text-white'>
      <h1 className='text-white font-semibold text-3xl mt-12'>CONTACT INFO</h1>
      <p className='mt-8 text-sm'>Head Office Canada: Manahan Road,<br></br> Scarborough Ontario, M1E 3X8</p>
      <p className='mt-4 text-sm'>Branch Cameroon: Commercial Avenue, Bamenda,<br></br>North West Region, Cameroon</p>
      <p className='mt-4 text-sm'>info@holdinghandscommunitynetwork.org</p>
      <p className='mt-4 text-sm'>416-519-3621</p>
      <p className='mt-4 text-sm'>Mon to Fri: 9:00am – 5:00pm</p>
      </div>
      <div>
      <h1 className='text-white font-semibold text-3xl mt-12'>GET CONNECTED</h1>
      </div>
    </div>
  )
}

export default Footer