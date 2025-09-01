import { useState } from "react";

function Square({value, onSquareClick}) {
  return (
    <button className="square" onClick={onSquareClick}> 
      {value}
    </button>
  )

}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null)) // created an array with nine elements and sets each of them to null

  function handleClick(i){
    const nextSquares = squares.slice(); //slice () creates a portion of the original array

    // determining which player's turn it is
    if (xIsNext){ 
      nextSquares[i] = "X";
    } else{
      nextSquares[i] = "O";
    }
    setSquares(nextSquares); //responsible for updating the state of the component that has changed as this trigges a re-render of the components that use the squares state (Board) as well as its child components (Square)

    setXIsNext(!xIsNext);   
  }

    return (
        <>
          <div className="board-row">
            <Square  value={squares[0]} onSquareClick={() => handleClick(0)}/>
            <Square  value={squares[1]} onSquareClick={ () =>handleClick(1)}/>
            <Square value={squares[2]} onSquareClick={ () =>handleClick(2)}/>

          </div>
          <div className="board-row">
            <Square value={squares[3]} onSquareClick={ () =>handleClick(3)}/>
            <Square value={squares[4]} onSquareClick={ () =>handleClick(4)}/>
            <Square value={squares[5]} onSquareClick={ () =>handleClick(5)}/>

          </div>
          <div className="board-row">
            <Square value={squares[6]} onSquareClick={ () =>handleClick(6)}/>
            <Square value={squares[7]} onSquareClick={ () =>handleClick(7)}/>
            <Square value={squares[8]} onSquareClick={ () =>handleClick(8)}/>          
          </div>       
        </>
    )
}