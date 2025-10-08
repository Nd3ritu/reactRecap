import { useState } from 'react'
import Input from './components/Input'
import { Board } from './components/Board'

function App() {
  const [taskList , setTaskList] = useState([])
 

  return (
    <>
    <div className='flex flex-col items-center justify-center  gap-4 py-8'>

      <h1 className='text-3xl text-red-600'>To-Do </h1>
      <Input  taskList={taskList} setTaskList={setTaskList}/>

    </div>

    <div className='grid grid-cols-6 gap-4 px-8 '>
        {taskList.map((task, index) => (
          <Board 
          key={index}
          task={task}
          index={index}
          taskList={taskList}
          setTaskList={setTaskList}
          
          />
        ))}
    </div>

    
      
    </>
  )
}

export default App
