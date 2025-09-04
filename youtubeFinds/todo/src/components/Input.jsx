import { useState } from "react"


const Input = ({taskList, setTaskList}) => {

    const handleAddTask = (e) => {
        e.preventDefault()
        setTaskList([...taskList, input])
        setInput("")

    }


    const [input, setInput] = useState("")
    return (
        <form>
            <input
            type="text"
            className="border-2 border-purple-600"
            placeholder="Add a new task"
            value={input}
            onChange={(e) => setInput(e.target.value)} 
            
            />

            <button onClick={handleAddTask}> Add</button>
        </form>
    )
}

export default Input