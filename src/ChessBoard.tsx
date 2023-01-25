import React from 'react';
import './App.css';
import ChessPiece from './ChessPiece';
import { Square } from './types';

type ChessBoardState = {
    state: Square[][],
    setState: (newState: Square[][]) => void;
    handleSquareClick: (i: number, j: number) => void;
}

const ChessBoard: React.FC<ChessBoardState> = ({ state, setState, handleSquareClick }) => {

    return (
        <div className='chessboard-wrapper'>
            <div className="chess-board">
                {state.map((row, i) => (
                    <div className="chess-row" key={i}>
                        {row.map((square, j) => {
                            const isBrown = (i + j) % 2 !== 0;
                            const squareColor = isBrown ? 'brown' : 'white';
                            return <div className={`chess-square ${squareColor}`} key={j} onClick={() => handleSquareClick(i, j)} >
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