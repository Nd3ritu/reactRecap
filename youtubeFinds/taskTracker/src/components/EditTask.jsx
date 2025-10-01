import React from 'react'
import { useState } from 'react'

const EditTask = ({task, index, taskList, setTasklist}) => {
    const [editModal, setEditmodal] = useState(false)
    const [projectName,setProjectName] = useState("")
    const [taskDescription,setTaskDescription] = useState("")

    function handleInput(e){
        const {name,value} = e.target
        if(name === "projectName") setProjectName(value)
    
        
        if(name === "taskDescription")  setTaskDescription(value)
        

    }

    function handleAddTask(e){
        e.preventDefault()
        setTasklist([...taskList, {projectName, taskDescription} ])
        setAddmodal(false)
        setProjectName("")
        setTaskDescription("")

    }

  return (
    <>
       <button className="bg-green-500 text-white text-sm uppercase font-semibold py-1.5 px-4 rounded-lg ">
        Edit
       </button>
    </>
  )
}

export default EditTask