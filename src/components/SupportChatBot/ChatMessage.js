import React, { useState } from "react";
import EmailForm from "./EmailForm";
import UserResponse from "./UserResponse";

const ChatMessage = ({
  message,
  userSelectionHandler,
  customerData,
  submitHandler,
}) => {
  const [disableResponses, setDisableResponses] = useState(false);

  return (
    <div>
      <p className="botMessage">{message.text}</p>
      <div className="responseContainer">
        {message.responseOptions &&
          message.responseOptions.map((option) => (
            <UserResponse
              key={option.text}
              option={option}
              userSelectionHandler={userSelectionHandler}
              disableResponses={disableResponses}
              setDisableResponses={setDisableResponses}
            />
          ))}
      </div>
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
