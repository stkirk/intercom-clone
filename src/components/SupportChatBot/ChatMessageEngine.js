import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import { messageData } from "../../data/supportChatMessageData";

const ChatMessageEngine = () => {
  const initialMessage = messageData.initialMessage;
  // chat message flow data controlled here
  const [chatMessages, setChatMessages] = useState([initialMessage]);
  return (
    <div>
      {chatMessages.map((message) => (
        <ChatMessage key={message.messageId} message={message} />
      ))}
    </div>
  );
};

export default ChatMessageEngine;
