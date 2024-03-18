import "./Game.css";
import Player from "./gamecomponents/Player";
import GameBoard from "./gamecomponents/GameBoard";
import { useState } from "react";
import Log from "./gamecomponents/Log";

function deriveActivePlayer(turns) {
  let currentPlayer = "X";

  if (turns.length > 0 && turns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function Tictactoe() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

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

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSquareSelect={handleActivePlayerChange}
          turns={gameTurns}
        />
      </div>
      <Log logs={gameTurns}></Log>
    </main>
  );
}

export default Tictactoe;
