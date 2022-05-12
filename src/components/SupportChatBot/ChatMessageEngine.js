import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import { messageData } from "../../data/supportChatMessageData";

const ChatMessageEngine = () => {
  // customer data to send to back end for referral
  const intialCustomerData = {
    email: "",
    justBrowsing: false,
    existingCustomer: false,
    referTo: "",
    customerRole: "",
    companySize: "",
  };
  // customer data state
  const [customerData, setCustomerData] = useState(intialCustomerData);

  // chat message flow data controls
  const initialMessage = messageData.initialMessage;
  const [chatMessages, setChatMessages] = useState([initialMessage]);

  const userSelectionHandler = (event) => {
    console.log(event.target.name, event.target.value);
  };

  return (
    <div>
      {chatMessages.map((message) => (
        <ChatMessage
          key={message.messageId}
          message={message}
          userSelectionHandler={userSelectionHandler}
        />
      ))}
    </div>
  );
};

export default ChatMessageEngine;
