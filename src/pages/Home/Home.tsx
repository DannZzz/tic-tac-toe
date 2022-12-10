import React, { useEffect, useState } from "react";
import Board from "../../components/Board/Board";
import { BoardTemplate, MainSymbol, TicTacToe } from "../../modules/game";
import "./Home.scss";
import swal from "sweetalert";

const Home = () => {
  const [board, setBoard] = useState<BoardTemplate>(TicTacToe.createBoard());
  const [step, setStep] = useState<MainSymbol>("x");

  useEffect(() => {
    const checked = TicTacToe.check(board);
    if (checked) {
      swal({ title: `Result: ${checked.toUpperCase()}` }).then(() => {
        setBoard(TicTacToe.createBoard());
      });
    }
  }, [board]);

  return (
    <div className="home">
      <Board setStep={setStep} board={board} setBoard={setBoard} step={step} />
    </div>
  );
};

export default Home;
