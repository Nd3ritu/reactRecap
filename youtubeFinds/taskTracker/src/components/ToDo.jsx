import EditTask from "./EditTask"
import { useEffect, useState } from "react"

export default function ToDo({task, index, taskList, setTasklist}) {
    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(false)

    useEffect(() => {
        let interval;
        if (running) {
            interval =setInterval(() => {
                setTime((prevTime ) => prevTime + 10)
            }, 10)
        } else if (!running) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [running])

    function formatTime(ms){
        const hours = String(Math.floor((ms/ 3600000) % 24)).padStart(2, '0')
        const minutes = String(Math.floor((ms/60000) % 60)).padStart(2, '0')
        const seconds = String(Math.floor((ms/1000) % 60)).padStart(2, '0')

        return `${hours}:${minutes}:${seconds}`

    }

    function handleDelete(itemID){
        let removeItem = taskList.indexOf(task)
        taskList.splice(removeItem,1)
        setTasklist((currentList => currentList.filter(todo => todo.id !== itemID)))

    }
    return (
        <>
        <div className="flex flex-col items-start justify-start border bg-white border-gray-300 py-4 px-6 ml-4 my-10 mr-4 p-4 rounded mb-4 w-3/4 max-w-lg">
            <div className="w-full flex flex-row justify-between ">
                <p className="font-semibold text-xl">{task.projectName}</p>
                <EditTask task={task} index={index} taskList={taskList} setTasklist={setTasklist} />
            </div>

            <p className="text-lg py-2 ">{task.taskDescription}</p>
            <div className="flex flex-col items-center justify-center w-full my-4 ">
                <div>
                    <span>
                        {formatTime(time)}
                    </span>


                </div>

                <div className="flex flex-row gap-4 my-2  ">
                    {running ? (
                        <button className="border p-1 rounded-lg " onClick={() => setRunning(false)}>Stop</button>
                    ):(
                        <button className="border p-1 rounded-lg " onClick={() => setRunning(true)}>Start</button>
                    )}

                    <button className="border p-1 rounded-lg " onClick={() => setTime(0)}>Reset</button>

                </div>
            </div>

            <div className="w-full flex justify-center">
                <button className="bg-red-500 text-white text-sm uppercase font-semibold py-1.5 px-4 rounded-lg " onClick={handleDelete} >Delete</button>
            </div>



        </div>
         
        </>
    )
}