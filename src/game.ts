import { ChessPieceType } from "./types";

export const initializeBoard = () => {
  const newBoard = new Array(8);

  for (let i = 0; i < 8; i++) {
    newBoard[i] = new Array(8);
  }
  //set up white pieces
  newBoard[0][0] = { type: ChessPieceType.Rook, color: "white" };
  newBoard[0][1] = { type: ChessPieceType.Knight, color: "white" };
  newBoard[0][2] = { type: ChessPieceType.Bishop, color: "white" };
  newBoard[0][3] = { type: ChessPieceType.Queen, color: "white" };
  newBoard[0][4] = { type: ChessPieceType.King, color: "white" };
  newBoard[0][5] = { type: ChessPieceType.Bishop, color: "white" };
  newBoard[0][6] = { type: ChessPieceType.Knight, color: "white" };
  newBoard[0][7] = { type: ChessPieceType.Rook, color: "white" };

  for (let i = 0; i < 8; i++) {
    newBoard[1][i] = { type: ChessPieceType.Pawn, color: "white" };
  }

  // set up black pieces
  newBoard[7][0] = { type: ChessPieceType.Rook, color: "black" };
  newBoard[7][1] = { type: ChessPieceType.Knight, color: "black" };
  newBoard[7][2] = { type: ChessPieceType.Bishop, color: "black" };
  newBoard[7][3] = { type: ChessPieceType.Queen, color: "black" };
  newBoard[7][4] = { type: ChessPieceType.King, color: "black" };
  newBoard[7][5] = { type: ChessPieceType.Bishop, color: "black" };
  newBoard[7][6] = { type: ChessPieceType.Knight, color: "black" };
  newBoard[7][7] = { type: ChessPieceType.Rook, color: "black" };
  for (let i = 0; i < 8; i++) {
    newBoard[6][i] = { type: ChessPieceType.Pawn, color: "black" };
  }
  return newBoard
};
