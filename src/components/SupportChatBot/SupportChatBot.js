import React, { useState } from "react";
import ChatMessageEngine from "./ChatMessageEngine";
import ChatToggleIcon from "./ChatToggleIcon";

const SupportChatBot = () => {
  const [displayChat, setDisplayChat] = useState(false);
  return (
    <div className="chatContainer">
      {displayChat && (
        <div className="chatWindow">
          <ChatMessageEngine />
        </div>
      )}
      <ChatToggleIcon
        displayChat={displayChat}
        setDisplayChat={setDisplayChat}
      />
    </div>
  );
};

export default SupportChatBot;
