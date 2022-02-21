import React, { useState, useEffect } from "react";
import "./Board.css";
import SqrValues from "../SqValues/SqrValues";

const Board = () => {
  const [square, setSquare] = useState([]);
  const [iptVal, setIptVal] = useState({});
  //   const [iptID, setIptID] = useState(0);

  const createBoard = (arr) => {
    for (let i = 0; i < 81; i++) {
      if (arr.length <= 80) {
        arr.push({ ID: i + 1 });
      }
    }

    createRowNCol(arr);
    if (arr.length > 0 && arr.length < 81) {
      setSquare(arr);
    }
  };

  const createRowNCol = (arr) => {
    arr.map((square, i) => {
      let sqRw = Math.floor(square.ID / 9);
      let sqCl = Math.floor(square.ID % 9);
      square.Row = square.ID % 9 === 0 ? sqRw : sqRw + 1;
      square.Col = sqCl === 0 ? 9 : sqCl;
      square.Cube = setCube(square.Row, square.Col);
    });
  };

  const setCube = (row, col) => {
    let colOvrThr = col / 3;
    let rowOverThr = row / 3;
    let possibleColC = [];
    let possibleRowC = [];

    if (colOvrThr > 0 && colOvrThr <= 1) possibleColC = [1, 4, 7];
    if (colOvrThr > 1 && colOvrThr <= 2) possibleColC = [2, 5, 8];
    if (colOvrThr > 2 && colOvrThr <= 3) possibleColC = [3, 6, 9];

    if (rowOverThr > 0 && rowOverThr <= 1) possibleRowC = [1, 2, 3];
    if (rowOverThr > 1 && rowOverThr <= 2) possibleRowC = [4, 5, 6];
    if (rowOverThr > 2 && rowOverThr <= 3) possibleRowC = [7, 8, 9];

    let Cube = possibleColC.find((possibleCLCube) => {
      return possibleRowC.includes(possibleCLCube);
    });
    return Cube;
  };

  createBoard(square);

  let drawBoard = (arr, row) => {
    let rowArr = arr.filter((sq) => (sq.Row === row ? true : false));
    // console.log(rowArr);
    return (
      <tr id={row} key={row} className={row === 1 || row === 4 || row === 7 ? "top" : row === 9 ? "bottom" : ""}>
        {rowArr.map((squ) => {
          return (
            <td key={squ.ID} className={squ.Col === 1 || squ.Col === 4 || squ.Col === 7 ? "left" : squ.Col === 9 ? "right" : ""}>
              {/* {squ.ID} */}
              <input
                className="sqIpt"
                type="number"
                key={squ.ID.toString() + "a"}
                onChange={(e) => {
                  if (Number(e.target.value) > 0 && Number(e.target.value) < 10) {
                    setIptVal({ userIpt: Number(e.target.value), squareID: squ.ID });
                    SqrValues(square, Number(e.target.value), squ.ID);
                    console.log(iptVal);

                    // console.log(Number(e.target.value), iptVal, "goddd ");
                  }
                }}
              />
            </td>
          );
        })}
      </tr>
    );
  };

  return (
    <div>
      <table>
        <tbody>{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => drawBoard(square, num))}</tbody>
      </table>
    </div>
  );
};

export default Board;
