// In updating the state of an object, we need to create a copy of the previous object state and then update the copy instead of mutating the previous state directly.

import { useState } from "react";

export default function MovingDot(){
    const [position, setPosition] = useState({x:0, y:0})

    return (
        <div onPointerMove={e => {
            setPosition({
                x: e.clientX,
                y: e.clientY
            })
        }}
        style={{width: '100vw', height: '100vh', position: 'relative', backgroundColor: 'lightgray'}}>
            <div  style={{
                position: 'absolute',
                width: '20px',
                height: '20px',
                borderRadius: '10px',
                backgroundColor: 'purple',
                transform: `translate(${position.x}px, ${position.y}px)`,
                left: '-10px',
                top: '-10px',
                width: '20px',
                height:'20px'
            }}/>

        </div>
    )
}