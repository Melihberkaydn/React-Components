import "./Game.css";
import Player from "./gamecomponents/Player";

function Tictactoe() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
      </div>
    </main>
  );
}

export default Tictactoe;
