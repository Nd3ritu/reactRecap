import { useState } from "react";

function createIntialTodos(){
    const initialTodos = []
    for(i = 0; i <50; i++){
        initialTodos.push({
            id:i,
            text:'Item' + ( i + 1)
        })
    }
    return initialTodos
}

