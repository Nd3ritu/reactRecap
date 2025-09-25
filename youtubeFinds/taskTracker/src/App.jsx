import Addtask from "./components/Addtask"  

function App() {
 

  return (
    <>
    <div>
      <h1 className="text-3xl p-4 ">Task Tracker</h1>
      <div className="flex  flex-row items-center">
        <p className="pl-2 pr-2">Click </p>
      < Addtask />
      <p className="pl-2">to add a new task</p>
      </div>
    </div>
      
    </>
  )
}

export default App
