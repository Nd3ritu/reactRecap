import React from 'react'
import  { TypeAnimation } from 'react-type-animation'

function getGreeting(){
  const  hour = new Date().getHours();

  if (hour >= 1 && hour < 12) return "Good Morning";
  if (hour >= 12 && hour < 16) return "Good Afternoon";
  if (hour >= 16 && hour < 21) return "Good Evening";
  if (hour >= 21 || hour < 1) return "Good Night";
}


const GoodMorning = () => {
  const greeting = getGreeting();
  return (
    <TypeAnimation speed={1}  cursor={true} sequence={[`${greeting} Nderitu...`, 1000]} wrapper="p" repeat={Infinity} className='text-green-400 italic ' />
  )
}

export default GoodMorning