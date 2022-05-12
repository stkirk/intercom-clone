import React, { useState } from "react";

const UserResponse = ({ option, userSelectionHandler }) => {
  const [selected, setSelected] = useState(false);
  const selectionHelper = (e) => {
    setSelected(true);
    userSelectionHandler(e);
  };

  return (
    <button
      key={option.text}
      className={`userResponse ${selected ? "selected" : ""}`}
      name={option.name}
      value={option.value}
      onClick={selectionHelper}
    >
      {option.text}
    </button>
  );
};

export default UserResponse;
