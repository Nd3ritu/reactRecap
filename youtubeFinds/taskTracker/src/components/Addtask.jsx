import { useState } from "react"

export default function Addtask() {
    const [addmodal, setAddmodal] = useState(false)
    const [projectName,setProjectName] = useState("")
    const [taskDescription,setTaskDescription] = useState("")

    function handleInput(e){
        const {name,value} = e.target
        if(name === "projectName"){
            setProjectName(value)
        }else if(name === "taskDescription"){
            setTaskDescription(value)
        }

    }



    return (
        <>
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded "
            type="button"
            onClick={() => setAddmodal(true)} 
         >
            +New
         </button>
         {addmodal ? (
            <>
               <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="bg-white rounded-lg shadow-md  w-1/3 flex flex-col relative ">
                    <div className="text-2xl flex flex-row justify-between  p-5  bg-white border-b border-gray-200 rounded-t-lg">
                    <h3 className="bg-white">Add New Task</h3>
                <button 
                    className="px-1 text-gray-400 float-right leading-none block font-semibold"
                    onClick={() => setAddmodal(false)}
                >
                    x
                    
                </button>
                </div>
                <div>
                    

                </div>
                <form className="p-6">
                    <div>
                        <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="project-name"
                    >
                        Project Name
                    </label>
                    <input 
                         id="project-name"
                         type="text"
                         placeholder="Project Name"
                         name="projectName"
                         value={projectName}
                         onChange={handleInput}
                         className="bg-gray-200 text-gray-700 border border-gray-100  rounded py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white focus:border-gray-300 w-full"
                         required
                    />

                    </div>
                    <div>
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Task description
                        </label>
                        <textarea
                            className="bg-gray-200 text-gray-700 border border-gray-100  rounded py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white focus:border-gray-300 w-full"
                            placeholder="Task description"
                            required
                            name="taskDescription"
                            id="task-description"
                            value={taskDescription}
                            onChange={handleInput}
                        />
                    </div>
                    
                </form>
                <div className="flex justify-end">
                    <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5"
                    onClick={() => setAddmodal(false)}
                    >
                    Add Task
                </button>

                </div>

                
                
                </div>

                
                
               </div>
            </>
         ):null}


        
        </>
    )
}