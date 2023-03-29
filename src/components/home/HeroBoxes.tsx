/* eslint-disable prettier/prettier */
import React from 'react'
// import {img} from '../../assets/img.jpg';
// import members from '../../assets/icons/1.png'

interface HeroProp {
  path: string,
  name: string,
  number: string
}
const Heroboxes = ({ number, name, path }: HeroProp) => {
  return (
    <div className='border-4 rounded-2xl text-orange border-orange h-[507px] w-[440px] bg-white flex justify-center flex-col items-center mx-10 mobile:m-8 tabletOnly:m-5 hover:bg-gradient-to-b from-yellow to-orange  hover:text-white'>
      <img src={path} className="hover:hidden"/>
      <h1 className=' text-[65px] font-bold text-center'>{number}</h1>
      <p className='text-center font-semibold	 text-2xl'>{name}</p>
    </div>
  )
}

export default Heroboxes