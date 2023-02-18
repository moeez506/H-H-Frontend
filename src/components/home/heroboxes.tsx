/* eslint-disable prettier/prettier */
import React from 'react'
// import {img} from '../../assets/img.jpg';
import members from '../../assets/icons/1.png'

// interface HeroProp {
//   path: string,
//   name: string,
//   number: number
// }
const Heroboxes = () => {
  return (
    <div className='border-4 rounded-2xl text-orange border-orange h-[507px] w-[440px] bg-white flex justify-center flex-col items-center mx-24 mobile:m-8 tabletOnly:m-5 hover:bg-gradient-to-b from-yellow to-orange  hover:text-white'>
        <img src={members} />
        <h1 className=' text-[65px] text-center'>XAF 3,000</h1>
        <p className='text-center text-2xl'>COEFICIENT OF MEMBERS PARTICIPATION</p>
    </div>
  )
}

export default Heroboxes