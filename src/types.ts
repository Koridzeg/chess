export enum ChessPieceType {
  Rook = 1,
  Knight = 2,
  Bishop = 3,
  Queen = 4,
  King = 5,
  Pawn = 6,
}


export enum Color {
  WHITE = "white",
  BLACK = "black",
}

export type Square = {
  type: ChessPieceType;
  color: string;
} | null;

export type SquareCoordinate = [number,number]
