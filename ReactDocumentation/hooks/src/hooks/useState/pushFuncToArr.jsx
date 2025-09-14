import { useState } from "react";

let nextId = 0;

export default function PushFuncToArr() {
    const [name, setName] = useState("");
    const [artists, setArtists] = useState([]);

    return (
        <>
           <h1>Best pop artists</h1>


           <input value={name} onChange={(e) => setName(e.target.value)}/>


           <button >
            Add artists
           </button>

           <ul>

           </ul>


        </>
    )

}