
import React from 'react'

export default function Feed({title, creator,link,pubDate, categories, guid }){
  
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
     <div className='p-4 m-4 max-w-sm border border-gray-200 mb-30   rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition duration-300 ease-in-out ml-10'>
      <h1 className='mb-6 text-xl text-white italic'>{title}</h1>
      <h5 className='text-blue-400 mb-9'>{guid}</h5>
      <a href={link} className='mb-9 text-sm hover:text-blue-600 text-gray-500'>{link}</a>
      
      <h5 className='mb-9 text-black border  rounded-lg p-1 bg-purple-300 max-w-fit justify-center ml-25 '>{categories}</h5>
      
      <div className=' mb-4 flex justify-between flex-row'>
      <h5 className='mb-2 text-green-400'>{creator}</h5>
      <h5 className='mb-2 text-green-200'>{date}</h5>

      </div>
      
      
     </div>
    </>
  )
}