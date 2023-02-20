/* eslint-disable prettier/prettier */
import React from 'react'

interface buttonProp {
  text: string
}
const Button = ({text}:buttonProp) => {
  return (
    <button className="border-4 rounded-3xl text-white border-white bg-gradient-to-r from-orange to-yellow px-8 py-2 text-xl font-medium">
    {text}
  </button>
  )
}

export default Button