/* eslint-disable prettier/prettier */
import React from 'react'
import failed from '../assets/failed.png'
import Button from './Button'

const EmailVerificationFailed = () => {
  return (
    <div className='flex justify-center items-center mt-12'>
        <div className='h-[350px] w-[450px] bg-white shadow-md shadow-black text-center flex justify-center items-center flex-col '>
            <img src={failed} alt="no image found" className='w-[30%]'/>
            <div className='flex'>
            <div>
                <p className='text-4xl font-medium'>Verification Failed</p>
                <br />
                <p className='text-xl'>Please try again</p>
                <br></br>
                <div className='flex justify-center items-center'>
                <Button text="Register" route='/register' />
                </div>
                
            </div>

            </div>
        </div>
    </div>
  )
}

export default EmailVerificationFailed