import React from 'react'

export const Board = ({task}) => {
  return (
    <div className='flex flex-col items-center justify-center border-2 border-purple-600 p-2 rounded-lg pt-3 pb-4 gap-4'>
        <p>{task}</p>
        <button className='bg-red-500 text-black rounded-lg py-1 px-2'> Delete</button>
    </div>
  )
}
