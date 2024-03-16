import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((currentEditState) => !currentEditState);
  }

  let playerComp = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerComp = <input type="text" required value={name}></input>;
  }

  return (
    <li>
      <span className="player">
        {playerComp}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
