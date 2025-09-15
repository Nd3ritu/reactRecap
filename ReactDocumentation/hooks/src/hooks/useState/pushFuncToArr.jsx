import { useState } from "react";

let nextId = 0;

export default function PushFuncToArr() {
    const [name, setName] = useState("");
    const [artists, setArtists] = useState([]);

    console.log(artists);

    return (
        <>
           <h1>Best pop artists</h1>


           <input value={name} onChange={(e) => setName(e.target.value)}/>


           <button onClick={() => {
            artists.push({
                id:nextId++,
                name:name
            })

           }}
            
           
           >
            Add artists
           </button>

           

           <ul>
            {artists.map(artist => (
                <li key={artist.id}>{artist.name}</li>
            ))}

           </ul>


        </>
    )

}