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

    function handleTitleChange(e){
        setUser({
            ...user,
            artwork:{
                ...user.artwork,
                title: e.target.value
            }
        })
    }

    function handleCityChange(e){
        setUser({
            ...user,
            artwork:{
                ...user.artwork,
                city:e.target.value
            }
        })

    }

    function handleImageChange(e){
        setUser({
            ...user,
            artwork:{
                ...user.artwork,
                image:e.target.value
            }
        })

    }

    return (
        <>
           <div className="container">
            <label className="label">Name: 
            <input value={user.name} onChange={handleNameChange}/>
           </label>
           <label className="label">Title:
            <input value={user.artwork.title} onChange={handleTitleChange}/>
           </label>
           <label className="label">City:
            <input value={user.artwork.city } onChange={handleCityChange}/>
           </label>
           <label className="label">Image:
            <input value={user.artwork.image} onChange={handleImageChange}/>
           </label>

           <p>My name is {user.name} and i Live in {user.artwork.city} and my job title is {user.artwork.title}</p>


           </div>
        
        </>
    )
}