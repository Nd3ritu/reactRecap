import React from 'react'
import  { TypeAnimation } from 'react-type-animation'

const GoodMorning = () => {
  return (
    <TypeAnimation speed={1}  cursor={true} sequence={['Good Evening Nderitu...', 1000]} wrapper="p" repeat={Infinity} className='text-green-400 italic ' />
  )
}

export default GoodMorning