/* eslint-disable prettier/prettier */

import React from 'react'
import whatsapp from "../assets/icons/Rectangle 11.png"
import facebook from "../assets/icons/Rectangle 12.png"
import call from "../assets/icons/Rectangle 13.png"
import message from "../assets/icons/Rectangle 34.png"
import { GrMail, GrLocation, GrPhone } from "react-icons/gr";

const Footer = () => {
  return (
    <div className='bg-footer h-full grid grid-cols-3 tabletOnly:flex flex-col px-5 mobile:flex '>
      <div className='text-white'>logo</div>
      <div className='text-white'>
      <h1 className='text-white font-semibold text-3xl mt-12'>CONTACT INFO</h1>
      <div className='flex'>
      <GrLocation className='bg-white' />
      <p className='text-sm'>Head Office Canada: Manahan Road,<br></br> Scarborough Ontario, M1E 3X8</p>
      </div>
      <div className='flex'>
      <GrLocation className='bg-white' />
      <p className='mt-4 text-sm'>Branch Cameroon: Commercial Avenue, Bamenda,<br></br>North West Region, Cameroon</p>
      </div>
      <div className='flex'>
      <GrMail />
      <p className='mt-4 text-sm'>info@holdinghandscommunitynetwork.org</p>
      </div>
      <div className='flex'>
        <GrPhone className='bg-white'/>
        <p className='mt-4 text-sm'>416-519-3621</p>
      </div>
      <div className='flex'>
        <GrPhone className='bg-white'/>
        <p className='mt-4 text-sm'>Mon to Fri: 9:00am – 5:00pm</p>
      </div>
      
      
      
      
      </div>
      <div>
      <h1 className='text-white font-semibold text-3xl mt-12'>GET CONNECTED</h1>
      <div className='flex my-5'>
        <img src={whatsapp} alt="no image found" className='pr-3'/>
        <img src={facebook} alt="no image found" className='px-3' />
        <img src={call} alt="no image found" className='px-3' />
        <img src={message} alt="no image found" className='px-3'/>
      </div>
      </div>
      <br />
      <br />
    </div>
  )
}

export default Footer