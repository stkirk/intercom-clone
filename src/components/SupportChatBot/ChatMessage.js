import React from "react";
import EmailForm from "./EmailForm";
import UserResponse from "./UserResponse";

const ChatMessage = ({
  message,
  userSelectionHandler,
  customerData,
  submitHandler,
}) => {
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
      {message.inputEmail && (
        <EmailForm
          userSelectionHandler={userSelectionHandler}
          customerData={customerData}
          submitHandler={submitHandler}
        />
      )}
    </div>
  );
};

export default ChatMessage;
