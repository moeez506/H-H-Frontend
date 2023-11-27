/* eslint-disable prettier/prettier */
import React from 'react'
import Button from './Button'

const Contact = () => {
  return (
    <div className="bg-rectangle2 bg-cover h-[540px] mt-8 bg-no-repeat flex items-center flex-col">
      <h1 className="text-orange font-semibold text-3xl text-center mt-6">
        How You Can Get Involved
      </h1>
      <p className="text-center text-3xl text-text-grey">
        Call 1.800.555.6789 to Donate Or Contact Us to get Involved
      </p>
      <Button text='Contact Us' route='/contact'/>
    </div>
  )
}

export default Contact