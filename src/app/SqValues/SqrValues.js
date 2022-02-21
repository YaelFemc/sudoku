import "./SqrValues.css";

const SqrValues = (board, userIpt, squareID) => {
  let sq = board.find((sq) => sq.ID === squareID);
  //   console.log(squareIpt, sq.Row);
  const limitedNum = 9;
  const numInB = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const row = board.filter((square) => sq.Row === square.Row);
  const col = board.filter((square) => sq.Col === square.Col);
  const cube = board.filter((square) => sq.Cube === square.Cube);
  console.log(userIpt, squareID, "row", row, "col", col, "cube", cube);
};

export default SqrValues;
