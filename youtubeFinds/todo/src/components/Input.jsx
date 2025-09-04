import { useState } from "react"


const Input = ({taskList, setTaskList}) => {

    const handleAddTask = (e) => {
        e.preventDefault()
        setTaskList([...taskList, input])
        setInput("")

    }


    const [input, setInput] = useState("")
    return (
        <form className="flex flex-row gap-2">
            <input
            type="text"
            className="border-2 border-purple-600 text-center "
            placeholder="Add a new task"
            value={input}
            onChange={(e) => setInput(e.target.value)} 
            
            />

            <button onClick={handleAddTask} className="bg-purple-600 p-2 text-white"> Add</button>
        </form>
    )
}

export default Input