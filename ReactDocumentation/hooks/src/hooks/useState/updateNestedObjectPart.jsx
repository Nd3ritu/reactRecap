import { useState } from "react";

export default function UpdateNestedObjectPart() {
    const [user, setUser] = useState({
        name: '',
        artwork:{
            title:'',
            city:'',
            image:''
        }
    })


    function handleNameChange(e){
        console.log(e.target.value)
        setUser({
            ...user,
            name: e.target.value
        })
    }

    return (
        <>
           <div className="container">
            <label className="name">Name: 
            <input value={user.name} onChange={handleNameChange}/>
           </label>
           <label>Title</label>
           <label>City</label>
           <label>Image</label>
           </div>
        
        </>
    )
}