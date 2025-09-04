import { useState } from 'react'
import Input from './components/Input'

function App() {
  const [taskList , setTaskList] = useState([])
 

  return (
    <>
      <h1 className='text-3xl text-red-600'>To-Do </h1>
      <Input  taskList={taskList} setTaskList={setTaskList}/>
      <div>
        {taskList.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </div>
    </>
  )
}

export default App
