import React, { FC } from "react";
import { StateProps, Symbol, TicTacToe } from "../../modules/game";
import "./BoardBox.scss";

const BoardBox: FC<{ symbol: Symbol; x: number; y: number } & StateProps> = ({
  symbol,
  setBoard,
  x,
  setStep,
  y,
  step,
  board,
}) => {
  function onClick() {
    if (!symbol) {
      const b = TicTacToe.step(board, x, y, step);
      setStep(TicTacToe.toggleStep(step));
      setBoard(b);
    }
  }

  return (
    <div onClick={onClick} className="box">
      {symbol}
    </div>
  );
};

export default BoardBox;
