import { useRef, useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState(null);

  const playerRef = useRef();

  function handleNameClick() {
    setPlayerName(playerRef.current.value);
    playerRef.current.value = null;
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerRef} type="text" />
        <button onClick={handleNameClick}>Set Name</button>
      </p>
    </section>
  );
}
