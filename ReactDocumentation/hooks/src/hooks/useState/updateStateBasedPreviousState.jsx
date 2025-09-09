//Updating the previous state based on the current state is done by passing a function to the state updater function instead of a value directly.
//This function receives the previous state as an argument and returns the new state.

import { useState } from 'react';

export default function Counter() {
    const [namme, setNamme] = useState('')
    const [age,setAge] = useState(16)

    function handleClick(){
        setAge(a => a + 1 )
        setAge(a => a + 1 )
        setAge(a => a + 1 )
    }

    
    return (
        <>
         <input value={namme} onChange={(e) => setNamme(e.target.value)}/>
         <h1>{namme} is {age} years old</h1>
         <button onClick={handleClick}>Add age</button>
        </>
    )
}