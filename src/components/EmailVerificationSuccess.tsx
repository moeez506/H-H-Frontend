/* eslint-disable prettier/prettier */
import React from 'react'
import verified from '../assets/verified.jpg'
import Button from './Button'

const EmailVerificationSuccess = () => {
  return (
    <div className='flex justify-center items-center mt-12'>
        <div className='h-[350px] w-[450px] bg-white shadow-md shadow-black text-center flex justify-center items-center flex-col '>
            <img src={verified} alt="no image found" className='w-[30%]'/>
            <div className='flex'>
            <div>
                <p className='text-4xl font-medium text-orange'>Successfuly Verified</p>
                <br />
                <p className='text-xl'>Login to Holding Hands Community Network</p>
                <br></br>
                <div className='flex justify-center items-center'>
                <Button text="LogIn" route='/login' />
                </div>
                
            </div>

            </div>
        </div>
    </div>
  )
}

export default EmailVerificationSuccess