import React, { useState } from 'react';

import './App.css';
import ChessBoard from './ChessBoard';
import { initializeBoard, makeMove } from './game';



function App() {
  const [board, setBoard] = useState(initializeBoard());
  const [selectedSquare, setSelectedSquare] = useState<[number, number] | null>(null)

  const handleSquareClick = (i: number, j: number) => {
    if (selectedSquare) {
      makeMove(board, setBoard, selectedSquare, [i, j]);
      setSelectedSquare(null)
    } else {
      setSelectedSquare([i, j])
    }
  }

  return (
    <div className="App">
      <ChessBoard state={board} setState={setBoard} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
