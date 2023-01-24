import React, { useState } from 'react';
import './App.css';
import ChessPiece from './ChessPiece';
import { initializeBoard } from './game';
import { ChessPieceType } from './types';



const ChessBoard: React.FC = () => {
    const [board, ] = useState(initializeBoard());
    return (
        <div className='chessboard-wrapper'>
            <div className="chess-board">
                {board.map((row, i) => (
                    <div className="chess-row" key={i}>
                        {row.map((square, j) => {
                            const isBlack = (i + j) % 2 !== 0;
                            const squareColor = isBlack ? 'brown' : 'white';
                            return <div className={`chess-square ${squareColor}`} key={j} >
                             {square && <ChessPiece type={square.type} color={square.color} />}
                            </div>
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChessBoard;