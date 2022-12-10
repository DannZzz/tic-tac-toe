export type StateProps = {
  step: MainSymbol;
  setStep: (step: MainSymbol) => void;
  board?: BoardTemplate;
  setBoard?: (board: BoardTemplate) => void;
};

export type MainSymbol = "x" | "o";

export type Symbol = MainSymbol | null;

export type BoardTemplate = [
  [Symbol?, Symbol?, Symbol?]?,
  [Symbol?, Symbol?, Symbol?]?,
  [Symbol?, Symbol?, Symbol?]?
];

export class TicTacToe {
  board: BoardTemplate;
  private static readonly row = 3;
  private static readonly column = 3;

  currentStep: MainSymbol = "x";

  static createBoard() {
    const arr: BoardTemplate = [];
    for (let x = 0; x < this.row; x++) {
      const row: BoardTemplate[number] = [];
      for (let y = 0; y < this.column; y++) {
        row.push(null);
      }
      arr.push(row);
    }
    return arr;
  }

  static check(board: BoardTemplate): "tie" | MainSymbol {
    const b = board;

    const emptyBlocks = getEmptyBlocks(b);

    return (
      (b[0][0] === b[0][1] && b[0][0] === b[0][2] && b[0][0]) ||
      (b[1][0] === b[1][1] && b[1][0] === b[1][2] && b[1][0]) ||
      (b[2][0] === b[2][1] && b[2][0] === b[2][2] && b[2][0]) ||
      (b[0][0] === b[1][0] && b[0][0] === b[2][0] && b[0][0]) ||
      (b[0][1] === b[1][1] && b[0][1] === b[2][1] && b[0][1]) ||
      (b[0][2] === b[1][2] && b[0][2] === b[2][2] && b[0][2]) ||
      (b[0][0] === b[1][1] && b[0][0] === b[2][2] && b[0][0]) ||
      (b[2][0] === b[1][1] && b[2][0] === b[0][2] && b[2][0]) ||
      (emptyBlocks.length === 0 ? "tie" : null)
    );
  }

  static step(board: BoardTemplate, x: number, y: number, step: MainSymbol) {
    const arr = [...board];
    arr[x][y] = step;
    return arr as BoardTemplate;
  }

  static toggleStep(step: MainSymbol) {
    if (step === "o") {
      return "x";
    } else {
      return "o";
    }
  }
}

function getEmptyBlocks(board: BoardTemplate) {
  const lol: { row: number; column: number }[] = [];
  board.forEach((row, ir) => {
    row.forEach((column, ic) => {
      if (!column) lol.push({ row: ir, column: ic });
    });
  });
  return lol;
}
