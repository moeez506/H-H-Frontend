/* eslint-disable prettier/prettier */
import React from 'react'
import { useNavigate } from 'react-router-dom';

interface buttonProp {
  text: string,
  route: string
}
const Button = ({text, route}:buttonProp) => {
  const navigate = useNavigate();
  const navigateto = () =>{
    navigate(route)
  }
  return (
    <button className="border-4 rounded-3xl text-white border-white bg-gradient-to-r from-orange to-yellow px-8 py-2 text-xl font-medium" onClick={navigateto}>
    {text}
  </button>
  )
}

export default Button