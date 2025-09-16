import { useState } from "react";

let intialPlayers = [
    {id:1, name:'Lionel Messi'},
    {id:2, name:'Cristiano Ronaldo'},
    {id:3, name:'Neymar Jr'},
    {id:4, name:'Kylian Mbappe'},
    {id:5, name:'Luka Modric'},
    {id:6, name:'Robert Lewandowski'},
    {id:7, name:'Sadio Mane'},
    {id:8, name:'Kevin De Bruyne'},
    {id:9, name:'Mohamed Salah'},
    {id:10, name:'Virgil van Dijk'}
]

export default function DeletingArray() {
    const [players, setPlayers] = useState(intialPlayers)


    return (
        <>
        <div>
            <h1>Greatest Of All Time (GOAT)</h1>
        <ul>
            {players.map(player => (
                <li key={player.id} style={{gap:'10px', marginBottom:'10px'}}>
                    {player.name}
                    <button onClick={() => 
                        setPlayers(players.filter(p => p.id !== player.id))
                    } style={{marginLeft:'10px'} }>
                        Delete</button> 
                </li>

            )
                
            )}

        </ul>
        <p>Total players: {players.length}</p>

        </div>
        
        
        </>
    )
}