import EditTask from "./EditTask"

export default function ToDo({task, index, taskList, setTasklist}) {

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

            <div className="w-full flex justify-center">
                <button className="bg-red-500 text-white text-sm uppercase font-semibold py-1.5 px-4 rounded-lg " onClick={handleDelete} >Delete</button>
            </div>



        </div>
         
        </>
    )
}