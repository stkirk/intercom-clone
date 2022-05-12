import React from "react";

const ChatMessage = ({ message }) => {
  const handleSelection = (e) => {
    console.log(e.target.name, e.target.value);
  };
  return (
    <div>
      <p className="botMessage">{message.text}</p>
      {message.responseOptions.map((option) => (
        <button
          key={option.text}
          className="userResponse"
          name={option.name}
          value={option.value}
          onClick={handleSelection}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default ChatMessage;
