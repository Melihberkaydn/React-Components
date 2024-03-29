import { useState } from "react";
import Button from "../../pages/buttons/components/Button";
import "./EditableFields.css";

function EditableField() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Melih");

  function HandleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function HandleNameChange(event) {
    setName(event.target.value);
  }

  let nameComponent = <span>{name}</span>;

  if (isEditing) {
    nameComponent = (
      <input
        type="text"
        onChange={HandleNameChange}
        required
        value={name}
      ></input>
    );
  }

  return (
    <div id="buttons">
      <ol>
        <li className="field">
          <span className="name">{nameComponent}</span>
          <Button onClick={HandleEditClick}>
            {isEditing ? "Save" : "Edit"}
          </Button>
        </li>
      </ol>
    </div>
  );
}

export default EditableField;
