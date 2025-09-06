import { useState } from 'react'


function App() {
  const [time, setTime] = useState(0)

  return (
    <>
    <h1>Counter Up Timer</h1>
    <div>
      <span>{("0" + Math.floor(time / 60)).slice(-1)}:</span>
      <span>{("0" + (time % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 60) % 60)).slice(-2)}</span>
    
    </div>
    <div>
      <button>Start</button>
      <button>Stop</button>
      <button>Reset</button>
    </div>
      
    </>
  )
}

export default App
