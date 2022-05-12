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

  const userSelectionHandler = (event, nextMessage) => {
    // update customer data
    setCustomerData({
      ...customerData,
      [event.target.name]: event.target.value,
    });
    // add next message to chatMessages array if it exists, nextMessage is a string representing a key in messageData
    // if it doesn't exist, this will just handle the email input onChange
    if (nextMessage) {
      setChatMessages([...chatMessages, messageData[nextMessage]]);
    }
  };

  return (
    <div>
      {chatMessages.map((message) => (
        <ChatMessage
          key={message.messageId}
          message={message}
          userSelectionHandler={userSelectionHandler}
          customerData={customerData}
        />
      ))}
    </div>
  );
};

export default ChatMessageEngine;
