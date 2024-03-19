import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onNameChange,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function playerNameInputOnChangeHandler(event) {
    setPlayerName(event.target.value);
  }

  function handleEditClick() {
    setIsEditing((currentEditState) => !currentEditState);

    if (isEditing) {
      onNameChange(symbol, playerName);
    }
  }

  let playerComp = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerComp = (
      <input
        onChange={playerNameInputOnChangeHandler}
        type="text"
        required
        value={playerName}
      ></input>
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerComp}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
