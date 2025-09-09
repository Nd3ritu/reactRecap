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

// Passing an initializer function to usestate avoids the cost of creating the initial state on every render 
// initializer function should be pure and take no arguments and should return a value of the initial state

//Passing the initial state directly to useState would cause the createInitialTodos function to be invoked on every render, which is inefficient. 