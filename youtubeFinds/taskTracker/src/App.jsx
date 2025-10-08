import Addtask from "./components/Addtask"  
import { useState } from "react"
import ToDo from "./components/ToDo"

function App() {
  const [taskList, setTasklist] = useState([])
  console.log(taskList)

 

  return (
    <>
    
      <div className="flex flex-col items-center justify-center bg-gray-400 min-h-screen">
        <h1 className="text-3xl p-4 ">Task Tracker</h1>
      <div className="flex  flex-row items-center">
        <p className="pl-2 pr-2">Click </p>
      < Addtask taskList={taskList} setTasklist={setTasklist}/>
      <p className="pl-2">to add a new task</p>
      </div>

      {taskList.map((task,i) =>
        <>
        <ToDo key={i} task={task} index={i} taskList={taskList} setTasklist={setTasklist}/>
        </>
      )}
  
      </div>
      
    </>
  )
}

export default App
