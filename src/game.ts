import { ChessPieceType, Color, Square } from "./types";

export const initializeBoard = (): Square[][] => {
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
    Array(8).fill({ type: ChessPieceType.Pawn, color: Color.BLACK }),
    [
      { type: ChessPieceType.Rook, color: Color.BLACK },
      { type: ChessPieceType.Knight, color: Color.BLACK },
      { type: ChessPieceType.Bishop, color: Color.BLACK },
      { type: ChessPieceType.Queen, color: Color.BLACK },
      { type: ChessPieceType.King, color: Color.BLACK },
      { type: ChessPieceType.Bishop, color: Color.BLACK },
      { type: ChessPieceType.Knight, color: Color.BLACK },
      { type: ChessPieceType.Rook, color: Color.BLACK },
    ],
  ];
};

export const makeMove = (
  state: Square[][],
  setState: (newState: Square[][]) => void,
  from: [number, number],
  to: [number, number]
) => {
  const newBoardState = [...state];

  const piece = newBoardState[from[0]][from[1]];

  newBoardState[to[0]][to[1]] = piece;

  // TODO find alternative solution to not use nulls

  newBoardState[from[0]][from[1]] = null;

  setState(newBoardState);
};
