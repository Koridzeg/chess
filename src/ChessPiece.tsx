import React from 'react'
import { ChessPieceType, RowIndex } from './types'

type ChessPieceProps = {
    type: ChessPieceType,
    color: string,
}

const ChessPiece: React.FC<ChessPieceProps> = ({ type, color }) => {
    const PieceTypeToUrlMap = {
        [ChessPieceType.Rook]: `./assets/rook-${color}.png`,
        [ChessPieceType.Knight]: `./assets/knight-${color}.png`,
        [ChessPieceType.Bishop]: `./assets/bishop-${color}.png`,
        [ChessPieceType.Queen]: `./assets/queen-${color}.png`,
        [ChessPieceType.King]: `./assets/king-${color}.png`,
        [ChessPieceType.Pawn]: `./assets/pawn-${color}.png`,
    }
    return (
        <div className="chess-piece">
            <img src={PieceTypeToUrlMap[type]} alt='chesspiece' />
        </div>

    )
}

export default ChessPiece