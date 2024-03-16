import "./Game.css";
import Player from "./gamecomponents/Player";
import playerSymbol from "./gamecomponents/GameBoard";
import GameBoard from "./gamecomponents/GameBoard";
import { useState } from "react";

function Tictactoe() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleActivePlayerChange() {
    setActivePlayer((currentActive) => (currentActive === "X" ? "O" : "X"));
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
          activePlayer={activePlayer}
        />
      </div>
    </main>
  );
}

export default Tictactoe;
