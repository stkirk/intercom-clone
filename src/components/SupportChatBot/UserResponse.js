import React, { useState } from "react";

const UserResponse = ({
  option,
  userSelectionHandler,
  disableResponses,
  setDisableResponses,
}) => {
  const [selected, setSelected] = useState(false);
  const selectionHelper = (e) => {
    setSelected(true);
    setDisableResponses(true);
    userSelectionHandler(e, option.nextMessage);
  };

  return (
    <button
      key={option.text}
      className={`userResponse ${selected ? "selected" : ""}`}
      name={option.name}
      value={option.value}
      onClick={selectionHelper}
      disabled={disableResponses}
    >
      {option.text}
    </button>
  );
};

export default UserResponse;
