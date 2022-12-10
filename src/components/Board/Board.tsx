import React, { FC } from "react";
import { StateProps, TicTacToe } from "../../modules/game";
import BoardBox from "../BoardBox/BoardBox";
import "./Board.scss";

const Board: FC<StateProps> = ({ step, board, setBoard, setStep }) => {
  return (
    <div className="board-board">
      {board.map((row, rowIndex) => {
        return row.map((symbol, columnIndex) => {
          return (
            <BoardBox
              setStep={setStep}
              x={rowIndex}
              y={columnIndex}
              step={step}
              board={board}
              setBoard={setBoard}
              symbol={symbol}
              key={`${rowIndex}-${columnIndex}`}
            />
          );
        });
      })}
    </div>
  );
};

export default Board;
