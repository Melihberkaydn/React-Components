import "./Game.css";
import Player from "./gamecomponents/Player";
import GameBoard from "./gamecomponents/GameBoard";
import { useState } from "react";
import Log from "./gamecomponents/Log";
import GameOver from "./gamecomponents/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(turns) {
  let currentPlayer = "X";

  if (turns.length > 0 && turns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function checkWinner(board) {
  for (let i = 0; i < 3; i++) {
    // check rows
    if (
      board[i][0] === board[i][1] &&
      board[i][0] === board[i][2] &&
      board[i][1] === board[i][2]
    ) {
      return board[i][0];
    }
    // check columns
    if (
      board[0][i] === board[1][i] &&
      board[0][i] === board[2][i] &&
      board[1][i] === board[2][i]
    ) {
      return board[0][i];
    }
  }

  if (
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2] &&
    board[0][0] === board[2][2]
  ) {
    return board[0][0];
  } else if (
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0] &&
    board[0][2] === board[2][0]
  ) {
    return board[0][2];
  } else return null;
}

function Tictactoe() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  const [playerNames, setPlayerNames] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map((array) => [...array])];
  let winner;
  const hasDraw = gameTurns.length === 9 && !winner;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  if (checkWinner(gameBoard) !== null) {
    winner = checkWinner(gameBoard);
  }

  function handleActivePlayerChange(rowIndex, colIndex) {
    // setActivePlayer((currentActive) => (currentActive === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleNameChange(symbol, newName) {
    setPlayerNames((prevNames) => {
      return {
        ...prevNames,
        [symbol]: newName,
      };
    });
  }

  function handleRematch() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
            onNameChange={handleNameChange}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
            onNameChange={handleNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={playerNames[winner]} onRestart={handleRematch} />
        )}
        <GameBoard
          onSquareSelect={handleActivePlayerChange}
          gameBoard={gameBoard}
        />
      </div>
      <Log logs={gameTurns}></Log>
    </main>
  );
}

export default Tictactoe;
