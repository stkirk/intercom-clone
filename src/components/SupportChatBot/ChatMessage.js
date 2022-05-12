import React from "react";
import UserResponse from "./UserResponse";

const ChatMessage = ({ message, userSelectionHandler }) => {
  return (
    <div>
      <p className="botMessage">{message.text}</p>
      {message.responseOptions &&
        message.responseOptions.map((option) => (
          <UserResponse
            key={option.text}
            option={option}
            userSelectionHandler={userSelectionHandler}
          />
        ))}
    </div>
  );
};

export default ChatMessage;
