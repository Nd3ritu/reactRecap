import React from 'react'

export default function Feed({title, creator,link,pubDate, categories, guid }){
  return(
    <>
     <div className='p-4 m-4 max-w-sm border border-gray-200 mb-30 gap-4  rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
      <h1 className='text-white'>{title}</h1>
      <h3 className='text-sm hover:text-blue-600 text-gray-500'>{link}</h3>
      <h5 className='text-green-400'>{creator}</h5>
      <h5 className='text-green-200'>{pubDate}</h5>
      <h5 className='text-purple-300'>{categories}</h5>
      <h5 className='text-blue-400'>{guid}</h5>

     </div>
    </>
  )
}