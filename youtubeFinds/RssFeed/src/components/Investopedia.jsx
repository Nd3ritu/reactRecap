import { TypeAnimation } from 'react-type-animation'
import React from 'react'

export default function Investopedia({title, creator,link,pubDate, categories, guid }){
  
  const formatted = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
  

  

  }

  const date = new Date(pubDate).toLocaleDateString('en-US',formatted)
  return(
    <>
    <a href={link} className='mb-9 text-sm hover:text-blue-600 text-gray-500'>
      <div className='p-6  max-w-sm border  mb-1   rounded-lg shadow-lg bg-black/80 border-gray-700  backdrop-blur-lg hover:scale-105 transition duration-300 ease-in-out ml-10'>
      <h1 className='mb-6 text-xl text-white italic text-center'>
        <TypeAnimation speed={2}  cursor={false} sequence={[title, 1000]} wrapper='h1' repeat={Infinity} className='text-white italic ' />
        </h1>

      
      <div className='relative'>
        <div className='absolute inset-0 blur shadow-lg bg-purple-400 rounded-lg ml-23  max-w-fit'></div>
              <h5 className='relative mb-9 text-sm border  rounded-lg p-1 bg-black text-white max-w-fit justify-center ml-25 '>{categories}</h5>

      </div>
      
      <div className=' mb-4 flex justify-between flex-row'>
      <h5 className='mb-2 text-green-400 text-center align-center justify-center ml-10  '>{date}</h5>

      </div>
      
      
     </div>

    </a>
     
    </>
  )
}