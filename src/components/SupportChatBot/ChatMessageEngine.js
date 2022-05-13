import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import ChatMessage from "./ChatMessage";
import { messageData } from "../../data/supportChatMessageData";

const ChatMessageEngine = () => {
  const [submitted, setSubmitted] = useState(false);
  // customer data state to send on submission of email
  const initialCustomerData = {
    email: "",
    justBrowsing: false,
    existingCustomer: false,
    referTo: "",
    customerRole: null,
    companySize: null,
  };
  const [customerData, setCustomerData] = useState(initialCustomerData);

  // chat message data flow controls
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
    // simulated API call
    axios.post("https://reqres.in/api/users", customerData).then((res) => {
      console.log("request successful!", res.data);
      setCustomerData(initialCustomerData);
      setChatMessages([initialMessage]);
      setSubmitted(true);
    });
  };

  // auto-scroll to bottom of chat window upon update of chatMessages
  const lastMessageRef = useRef(null);

  useEffect(() => {
    lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  return (
    <div>
      {!submitted &&
        chatMessages.map((message) => (
          <ChatMessage
            key={message.messageId}
            message={message}
            userSelectionHandler={userSelectionHandler}
            customerData={customerData}
            submitHandler={submitHandler}
          />
        ))}
      {submitted && (
        <h2 className="submitThankYou">
          Thank you for reaching out, our team will get back to you shortly!
        </h2>
      )}
      <div ref={lastMessageRef} />
    </div>
  );
};

export default ChatMessageEngine;
