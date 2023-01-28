import { ChessPieceType, Color, Square, SquareCoordinate } from "./types";

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

const getRow = (coord: SquareCoordinate) => {
  return coord[1];
};

const getCol = (coord: SquareCoordinate) => {
  return coord[0];
};

const getPiece = (boardState: Square[][], coord: SquareCoordinate) => {
  const row = getRow(coord);
  const col = getCol(coord);
  return boardState[col][row];
};

export const makeMove = (
  state: Square[][],
  setState: (newState: Square[][]) => void,
  from: SquareCoordinate,
  to: SquareCoordinate
) => {
  if (!validateMove(state, from, to)) {
    console.log("invalid move");
    return;
  }
  const newBoardState = [...state];
  const piece = getPiece(state, from);
  newBoardState[to[0]][to[1]] = piece;
  // TODO find alternative solution to not use nulls
  newBoardState[getCol(from)][getRow(from)] = null;
  setState(newBoardState);
  console.log(from);
  console.log(to);
};

const validateMove = (
  state: Square[][],
  from: SquareCoordinate,
  to: SquareCoordinate
): boolean => {
  const piece = state[getCol(from)][getRow(from)];

  if (!piece) {
    console.log("sa");
    return false;
  }

  if (getCol(from) === to[0] && getRow(from) === to[1]) {
    console.log("sad");
    return false;
  }

  if (state[to[0]][to[1]] && state[to[0]][to[1]]?.color === piece.color) {
    console.log("sadasd");
    return false;
  }

  switch (piece.type) {
    case ChessPieceType.Pawn:
      if (piece.color === Color.WHITE) {
        if (getCol(from) === 1 && to[0] === 3 && getRow(from) === to[1]) {
          console.log("aq");
          return true;
        }
        if (getCol(from) - to[0] === -1 && getRow(from) === to[1]) {
          console.log("aqaaqaqa");
          return true;
        }
        //TODO this should only be allowed if there is black piece on to[i] square
        if (
          getCol(from) - to[0] === -1 &&
          Math.abs(getRow(from) - to[1]) === 1
        ) {
          console.log("aqahdsadajsdhj");
          return true;
        }
      } else if (piece.color === Color.BLACK) {
        if (getCol(from) === 6 && to[0] === 4 && getRow(from) === to[1]) {
          return true;
        }

        if (getCol(from) - to[0] === 1 && getRow(from) === to[1]) {
          return true;
        }
        //TODO same rule as above
        if (
          getCol(from) - to[0] === 1 &&
          Math.abs(getRow(from) - to[1]) === 1
        ) {
          return true;
        }
      }

      break;
  }

  return false;
};
