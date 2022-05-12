import React, { useState } from "react";
import axios from "axios";
import ChatMessage from "./ChatMessage";
import { messageData } from "../../data/supportChatMessageData";

const ChatMessageEngine = () => {
  // customer data to send to back end for referral
  const initialCustomerData = {
    email: "",
    justBrowsing: false,
    existingCustomer: false,
    referTo: "",
    customerRole: null,
    companySize: null,
  };
  // customer data state
  const [customerData, setCustomerData] = useState(initialCustomerData);

  // chat message flow data controls
  const initialMessage = messageData.initialMessage;
  const [chatMessages, setChatMessages] = useState([initialMessage]);

  const userSelectionHandler = (e, nextMessage) => {
    // update customer data
    setCustomerData({
      ...customerData,
      [e.target.name]: e.target.value,
    });
    // add next message to chatMessages array if it exists, nextMessage is a string representing a key in messageData
    // if it doesn't exist, this will just handle the email input onChange
    if (nextMessage) {
      setChatMessages([...chatMessages, messageData[nextMessage]]);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // mock API call
    axios.post("https://reqres.in/api/users", customerData).then((res) => {
      console.log("request successful!", res.data);
      setCustomerData(initialCustomerData);
      setChatMessages([initialMessage]);
    });
  };

  return (
    <div>
      {chatMessages.map((message) => (
        <ChatMessage
          key={message.messageId}
          message={message}
          userSelectionHandler={userSelectionHandler}
          customerData={customerData}
          submitHandler={submitHandler}
        />
      ))}
    </div>
  );
};

export default ChatMessageEngine;
