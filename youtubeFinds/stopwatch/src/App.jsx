import { useEffect, useState } from 'react'


function App() {
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    let interval ;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [running])

  return (
    <>
    <div className='grid place-items-center h-screen bg-gray-800 text-white text-center space-y-5'>
      <h1 className='text-8xl font-mono  text-blue-500 '>Counter Up Timer</h1>
    <div className='text-6xl font-mono space-x-2'>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span> 
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
      <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
    
    </div>
    <div className='space-x-50 text-2xl'>
      <button onClick={() => setRunning(true)} className='bg-blue-500 p-4 rounded-md '>Start</button>
      <button onClick={() => setRunning(false)} className='bg-red-500 p-4 rounded-md'>Stop</button>
      <button onClick={() => setTime(0)} className='bg-black p-4 rounded-md'>Reset</button>
    </div>

    </div>
    
      
    </>
  )
}

export default App
