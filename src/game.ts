import { ChessPieceType, Color } from "./types";

export const initializeBoard = (): Array<Array<{type: ChessPieceType, color: Color}>> => {
    return [
        [
            { type: ChessPieceType.Rook, color: Color.WHITE },
            { type: ChessPieceType.Knight, color: Color.WHITE },
            { type: ChessPieceType.Bishop, color: Color.WHITE },
            { type: ChessPieceType.Queen, color: Color.WHITE },
            { type: ChessPieceType.King, color: Color.WHITE },
            { type: ChessPieceType.Bishop, color: Color.WHITE },
            { type: ChessPieceType.Knight, color: Color.WHITE },
            { type: ChessPieceType.Rook, color: Color.WHITE },
        ],
        Array(8).fill({ type: ChessPieceType.Pawn, color: Color.WHITE }),
        Array(8).fill(null),
        Array(8).fill(null),
        Array(8).fill(null),
        Array(8).fill(null),
        Array(8).fill({ type: ChessPieceType.Pawn, color: Color.BROWN }),
        [
            { type: ChessPieceType.Rook, color: Color.BROWN },
            { type: ChessPieceType.Knight, color: Color.BROWN },
            { type: ChessPieceType.Bishop, color: Color.BROWN },
            { type: ChessPieceType.Queen, color: Color.BROWN },
            { type: ChessPieceType.King, color: Color.BROWN },
            { type: ChessPieceType.Bishop, color: Color.BROWN },
            { type: ChessPieceType.Knight, color: Color.BROWN },
            { type: ChessPieceType.Rook, color: Color.BROWN },
        ],
    ];
};