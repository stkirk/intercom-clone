import React from "react";

const ChatMessage = () => {
  const handleSelection = (e) => {
    console.log(e.target.name, e.target.value);
  };
  return (
    <div>
      <p>bot message</p>
      <button
        className="userResponsebtn"
        name="response 1"
        value="1"
        onClick={(e) => handleSelection(e)}
      >
        user response 1
      </button>
      <button
        className="userResponsebtn"
        name="response 2"
        value="2"
        onClick={(e) => handleSelection(e)}
      >
        user response 2
      </button>
      <button
        className="userResponsebtn"
        name="response 3"
        value="3"
        onClick={(e) => handleSelection(e)}
      >
        user response 3
      </button>
    </div>
  );
};

export default ChatMessage;
