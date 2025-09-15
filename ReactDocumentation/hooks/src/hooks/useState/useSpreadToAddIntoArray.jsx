import { useState } from "react";


    let nextId = 0;

export default function UseSpreadToAddIntoArray() {
    const [name, setName] = useState('')
    const [sculptors, setSculptors] = useState([])


    console.log(sculptors)

    return(
        <>
        <h1>Inspiring sculptors</h1>
        <input value={name} onChange={(e) => setName(e.target.value)}/>
        <button onClick={() =>{
            setSculptors([
                ...sculptors, 
                {id: nextId++, 
                name:name}])
        

        }}>
            Add sculptor
        </button>
        <ul>
            {sculptors.map(s => (
                <li key={s.id}>{s.name}</li>
            ))}

        </ul>
        
        </>
    )
    
}