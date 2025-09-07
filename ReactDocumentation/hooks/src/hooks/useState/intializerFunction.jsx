import { useState } from "react";

function createInitialTodos(){
    const initialTodos = []
    for(let i = 0; i <50; i++){
        initialTodos.push({
            id:i,
            text:'Item' + ( i + 1)
        })
    }
    return initialTodos
}

export default function TodoList() {
    const [todos, setTodos] = useState(createInitialTodos)
    const [text, setText] = useState('')

    return (
        <>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => {
            setTodos([...todos, {id: todos.length, text}])
            setText('')
        }}>Add</button>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
        
        </>
    )
}