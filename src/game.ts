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

const row = (coord: SquareCoordinate) => {
  return coord[1];
};

const col = (coord: SquareCoordinate) => {
  return coord[0];
};

const getPiece = (boardState: Square[][], coord: SquareCoordinate) => {
  const r = row(coord);
  const c = col(coord);
  return boardState[c][r];
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
  newBoardState[col(to)][row(to)] = piece;
  // TODO find alternative solution to not use nulls
  newBoardState[col(from)][row(from)] = null;
  setState(newBoardState);
  console.log(from);
  console.log(to);
};

const validateMove = (
  state: Square[][],
  from: SquareCoordinate,
  to: SquareCoordinate
): boolean => {
  const piece = state[col(from)][row(from)];

  if (!piece) {
    console.log("sa");
    return false;
  }

  if (col(from) === col(to) && row(from) === row(to)) {
    console.log("sad");
    return false;
  }

  if (
    state[col(to)][row(to)] &&
    state[col(to)][row(to)]?.color === piece.color
  ) {
    console.log("sadasd");
    return false;
  }

  switch (piece.type) {
    case ChessPieceType.Pawn:
      if (piece.color === Color.WHITE) {
        if (col(from) === 1 && col(to) === 3 && row(from) === row(to)) {
          return true;
        }
        if (col(from) - col(to) === -1 && row(from) === row(to)) {
          return true;
        }
        //TODO this should only be allowed if there is black piece on to[i] square
        if (col(from) - col(to) === -1 && Math.abs(row(from) - row(to)) === 1) {
          return true;
        }
      } else if (piece.color === Color.BLACK) {
        if (col(from) === 6 && col(to) === 4 && row(from) === row(to)) {
          return true;
        }

        if (col(from) - col(to) === 1 && row(from) === row(to)) {
          return true;
        }
        //TODO same rule as above
        if (col(from) - col(to) === 1 && Math.abs(row(from) - row(to)) === 1) {
          return true;
        }
      }

      break;
    case ChessPieceType.Rook:
      if (row(from) === row(to) || col(from) === col(to)) {
        return true;
      }
      break;
    case ChessPieceType.Knight:
      if (
        (Math.abs(col(from) - col(to)) === 2 &&
          Math.abs(row(from) - row(to)) === 1) ||
        (Math.abs(col(from) - col(to)) === 1 &&
          Math.abs(row(from) - row(to)) === 2)
      ) {
        return true;
      }
      break;
    case ChessPieceType.Bishop:
      if (Math.abs(col(from) - col(to)) === Math.abs(row(from) - row(to))) {
        return true;
      }
      break;
    case ChessPieceType.Queen:
      if (
        Math.abs(col(from) - col(to)) === Math.abs(row(from) - row(to)) ||
        col(from) === col(to) ||
        row(from) === row(to)
      ) {
        return true;
      }
      break;
    case ChessPieceType.King:
      if (
        Math.abs(col(from) - col(to)) <= 1 &&
        Math.abs(row(from) - row(to)) <= 1
      ) {
        return true;
      }
      break;
  }

  return false;
};
