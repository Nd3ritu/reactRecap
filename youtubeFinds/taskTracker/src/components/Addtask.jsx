import { useState } from "react"

export default function Addtask() {
    const [addmodal, setAddmodal] = useState(false)


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
                <div className="bg-white rounded-lg shadow-md  w-1/3 flex flex-col relative">
                    <div className="text-2xl flex flex-row justify-between  p-5  bg-white">
                    <h3 className="bg-white">Add New Task</h3>
                <button 
                    className="px-1 text-gray-400 float-right leading-none block font-semibold"
                    onClick={() => setAddmodal(false)}
                >
                    x
                    
                </button>
                </div>
                <form className="p-6">
                    <input 
                         id="project-name"
                         type="text"
                         placeholder="Project Name"
                    />
                </form>

                </div>
                
               </div>
            </>
         ):null}


        
        </>
    )
}