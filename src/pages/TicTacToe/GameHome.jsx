import "./Game.css";
import Player from "./gamecomponents/Player";
import playerSymbol from "./gamecomponents/GameBoard";
import GameBoard from "./gamecomponents/GameBoard";

function Tictactoe() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default Tictactoe;
