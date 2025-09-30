import Addtask from "./components/Addtask"  
import { useState } from "react"

function App() {
  const [taskList, setTasklist] = useState([])
  console.log(taskList)

 

  return (
    <>
    
      <h1 className="text-3xl p-4 ">Task Tracker</h1>
      <div className="flex  flex-row items-center">
        <p className="pl-2 pr-2">Click </p>
      < Addtask taskList={taskList} setTasklist={setTasklist}/>
      <p className="pl-2">to add a new task</p>
      </div>

      {taskList.map((task,i) =>
        <>
        <p>{task.projectName}</p>
        <p>{task.taskDescription}</p>



        </>
      )}
  
      
    </>
  )
}

export default App
