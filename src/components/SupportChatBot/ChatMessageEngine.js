import React, { useState } from "react";
import ChatMessage from "./ChatMessage";

const ChatMessageEngine = () => {
  // chat message flow data controlled here
  const [chatMessages, setChatMessages] = useState([]);
  return (
    <div>
      <ChatMessage />
      <ChatMessage />
    </div>
  );
};

export default ChatMessageEngine;
