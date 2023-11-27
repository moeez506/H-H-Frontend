/* eslint-disable prettier/prettier */
import React from 'react'
import logo from "../assets/logo-2.png"
import Button from '../components/Button'
// import canada from "../assets/image 6.png"

const PopUp = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='h-[500px] w-[650px] bg-white shadow-md shadow-black'>
            <img src={logo} alt="no image found" className='w-[30%]'/>
            <div className='flex'>
            <div>
                <p className='text-4xl font-medium'>Immigration And Citizenship</p>
                <br />
                {/* <Button text="ENGLISH"  /> */}
            </div>
            <div>
                <p className='text-4xl font-medium'>Immigration et citoyenneté</p>
                <br />
                {/* <Button text="FRANÇAISE" /> */}
            </div>

            </div>
            <div className='flex'>
              <p className='text-4xl font-medium'>Terms and conditions </p>
              {/* <img src={canada} alt="no image found" /> */}
            </div>
            
        </div>
    </div>
  )
}

export default PopUp