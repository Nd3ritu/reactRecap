//Making use of a spread operator to update a part of an object in state
import { useState } from "react";

export default function UseSpreadOperatorUpdateObjectPart(){
    const [person, setPerson] = useState({
        firstName: '',
        LastName:'',
        email: ''

    })



    return (
        <>
        <div>
            <label> FirstName: 
                <input value={person.firstName} onChange={(e) => setPerson({...person, firstName: e.target.value})}/>
            </label>

            <label>
                LastName:
                <input value={person.LastName} onChange={(e) => setPerson({...person, LastName: e.target.value})}/>
            </label>

            <label>
                Email: 
                <input value={person.email} onChange={(e) => setPerson({...person, email: e.target.value})} />
            </label>

            <p> My name is  {person.firstName} {person.LastName} and this is my Email {person.email}</p>
        </div>
        </>
    )
}