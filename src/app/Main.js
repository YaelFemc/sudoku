import React, { useState, useEffect } from "react";

const MainComp = () => {
  const rowsInCube = [];
  const colsInCube = [];
  const squaresInCube = [];
  const squaresInBoard = [];
  const cubesInBoard = [];
  const cubesLength = 9;

  const calcRowsNCols = (arr) => {
    for (let i = 0; i < cubesLength; i++) {
      arr.push({
        ID: i + 1,
        isIdOverThree: i !== 0 && (i + 1) % 3 === 0 ? true : false,
      });
    }
  };

  calcRowsNCols(rowsInCube);
  calcRowsNCols(colsInCube);
  // console.log(rowsInCube);
  // console.log(colsInCube);

  const calcCube = (singleSquare) => {
    const rowIDOverThree = singleSquare.rowID / 3;
    const colIDOverThree = singleSquare.colID / 3;
    const possibilitiesForRow = 0 < rowIDOverThree && rowIDOverThree <= 1 ? [1, 2, 3] : 1 < rowIDOverThree && rowIDOverThree <= 2 ? [4, 5, 6] : [7, 8, 9];
    const possibilitiesForCol = 0 < colIDOverThree && colIDOverThree <= 1 ? [1, 4, 7] : 1 < colIDOverThree && colIDOverThree <= 2 ? [2, 5, 8] : [3, 6, 9];

    const cubeNum = possibilitiesForRow.find((possRow) => possibilitiesForCol.includes(possRow));
    // console.log(possibilitiesForRow, possibilitiesForCol, cubeNum);
    return cubeNum;
  };
  console.log(calcCube({ rowID: 5, colID: 7 }));

  const calcSquares = () => {
    // squaresInBoard.push({});
    rowsInCube.map((row) =>
      colsInCube.map((col) =>
        squaresInBoard.push({
          rowID: row.ID,
          colID: col.ID,
          cubeID: calcCube({ rowID: row.ID, colID: col.ID }),
        })
      )
    );
    squaresInBoard.map((square, i) => (square.ID = i + 1));
  };
  calcSquares();
  // console.log(squaresInBoard);
  const divideToCubes = () => {
    for (let i = 0; i < cubesLength.length; i++) {
      if (squaresInBoard.cubeID === i + 1) {
        cubesInBoard.push([]);
      }
    }
  };

  const [Row, setRow] = useState([...rowsInCube]);
  return (
    <div>
      <table className="mainT">
        <thead></thead>
        <tbody>
          {squaresInBoard.map((square) => {
            // console.log(square);
            return square.rowID === 1 || square.rowID === 4 || square.rowID === 7 ? (
              <tr className="bTop">
                <td className="bLeft"> {square.colID}</td>
                <td></td>
                <td className="bRight"></td>
                <td className="bLeft"></td>
                <td></td>
                <td className="bRight"></td>
                <td className="bLeft"></td>
                <td></td>
                <td className="bRight"></td>
              </tr>
            ) : square.rowID === 3 || square.rowID === 6 || square.rowID === 9 ? (
              <tr className="bBottom">
                <td className="bLeft"></td>
                <td></td>
                <td className="bRight"></td>
                <td className="bLeft"></td>
                <td></td>
                <td className="bRight"></td>
                <td className="bLeft"></td>
                <td></td>
                <td className="bRight"></td>
              </tr>
            ) : (
              <tr className="bTop">
                <td className="bLeft"></td>
                <td>d</td>
                <td className="bRight"></td>
                <td className="bLeft"></td>
                <td></td>
                <td className="bRight"></td>
                <td className="bLeft"></td>
                <td></td>
                <td className="bRight"></td>
              </tr>
            );
          })}
          {/* <tr className="bTop">
            <td className="bLeft"></td>
            <td>d</td>
            <td className="bRight"></td>
            <td className="bLeft"></td>
            <td></td>
            <td className="bRight"></td>
            <td className="bLeft"></td>
            <td></td>
            <td className="bRight"></td>
          </tr>
          <tr>
            <td className="bLeft"></td>
            <td></td>
            <td className="bRight"></td>
            <td className="bLeft"></td>
            <td></td>
            <td className="bRight"></td>
            <td className="bLeft"></td>
            <td></td>
            <td className="bRight"></td>
          </tr>
          <tr className="bBottom">
            <td className="bLeft"></td>
            <td></td>
            <td className="bRight"></td>
            <td className="bLeft"></td>
            <td></td>
            <td className="bRight"></td>
            <td className="bLeft"></td>
            <td></td>
            <td className="bRight"></td>
          </tr>
          <tr className="bTop">
            <td className="bLeft"></td>
            <td></td>
            <td className="bRight"></td>
            <td className="bLeft"></td>
            <td></td>
            <td className="bRight"></td>
            <td className="bLeft"></td>
            <td></td>
            <td className="bRight"></td>
          </tr>
          <tr>
            <td className="bLeft"></td>
            <td></td>
            <td className="bRight"></td>
            <td className="bLeft"></td>
            <td></td>
            <td className="bRight"></td>
            <td className="bLeft"></td>
            <td></td>
            <td className="bRight"></td>
          </tr>
          <tr className="bBottom">
            <td className="bLeft"></td>
            <td></td>
            <td className="bRight"></td>
            <td className="bLeft"></td>
            <td></td>
            <td className="bRight"></td>
            <td className="bLeft"></td>
            <td></td>
            <td className="bRight"></td>
          </tr>
          <tr className="bTop">
            <td className="bLeft"></td>
            <td></td>
            <td className="bRight"></td>
            <td className="bLeft"></td>
            <td></td>
            <td className="bRight"></td>
            <td className="bLeft"></td>
            <td></td>
            <td className="bRight"></td>
          </tr>
          <tr>
            <td className="bLeft"></td>
            <td></td>
            <td className="bRight"></td>
            <td className="bLeft"></td>
            <td></td>
            <td className="bRight"></td>
            <td className="bLeft"></td>
            <td></td>
            <td className="bRight"></td>
          </tr>
          <tr className="bBottom">
            <td className="bLeft"></td>
            <td></td>
            <td className="bRight"></td>
            <td className="bLeft"></td>
            <td></td>
            <td className="bRight"></td>
            <td className="bLeft"></td>
            <td></td>
            <td className="bRight"></td> */}
          {/* </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default MainComp;
