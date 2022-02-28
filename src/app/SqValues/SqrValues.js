import "./SqrValues.css";

const SqrValues = (board) => {
  const rndInt = Math.floor(Math.random() * 9) + 1;
  let unvalued = board.filter((sq) => !sq.value);
  console.log(unvalued);
  let rndBoard = Math.floor(Math.random() * unvalued.length) + 1;
  rndBoard = unvalued.find((sq, i) => i === rndBoard - 1).ID;
  console.log(rndBoard);

  let sq = board.find((sq) => sq.ID === rndBoard);
  // console.log(sq, rndBoard, !board[rndBoard - 1].value, ifNumInSec(board, rndInt, sq), validTimesNum(board, rndInt));

  // if (validTimesNum(board, rndInt) || !board[rndBoard - 1].value || ifNumInSec(board, rndInt, sq)) {
  if (validTimesNum(board, rndInt) && !board[rndBoard - 1].value && ifNumInSec(board, rndInt, sq)) {
    board[rndBoard - 1].value = rndInt;
    SqrValues(board);
  }

  // }
  // else if (!board[rndBoard - 1].value || validTimesNum(board, rndInt) || ifNumInSec(board, rndInt, sq)) {
  //   SqrValues(board);
  // }
  else {
    return;
  }
};

// const randomNum = (board) => {
//   let unvalued = board.filter((sq) => !sq.value);
//   let rndBoard = Math.floor(Math.random() * unvalued.length) + 1;
//   rndBoard = unvalued.find((sq, i) => i === rndBoard - 1).ID;
//   console.log(rndBoard);

//   console.log(unvalued);
// };

const validTimesNum = (board, num) => {
  // console.log(
  //   board.filter((sq) => sq.value),
  //   board.filter((sq) => sq.value && sq.value === num)
  // );
  let timesN = board.filter((sq) => sq.value && sq.value === num);
  // console.log(timesN.length);
  return timesN.length >= 0 && timesN.length < 10 ? true : false;
};

const ifNumInSec = (board, num, sq) => {
  const row = board.filter((square) => sq.Row === square.Row);
  const col = board.filter((square) => sq.Col === square.Col);
  const cube = board.filter((square) => sq.Cube === square.Cube);
  // const iterations = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  //   for (let i = 0; i < iterations.length; i++) {
  //     for (let j = 0; j < iterations.length; j++) {
  //       if (iterations[i] !== num && iterations[i] !== row[j] && iterations[i] !== col[j] && iterations[i] !== cube[j]) board[sq.ID - 1].value = num;
  //     }
  //   }

  //   let possibilitiesSq = board.map((square) => {
  //   for (let i = 0; i < 9; i++) {
  //   iterations[i] !== square.value && iterations[i] !== row[i]
  //   }
  // [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => {
  //   if (n !== square.value && row ) square.possibilities = [].push(n);
  // });
  //   });
  // console.log(row.filter((square) => square.value === num));

  return row.filter((square) => square.value === num).length === 0 && col.filter((square) => square.value === num).length === 0 && cube.filter((square) => square.value === num).length === 0 ? true : false;
};

export default SqrValues;
