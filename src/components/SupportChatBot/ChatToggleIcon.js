import React from "react";

const ChatToggleIcon = ({ setDisplayChat, displayChat }) => {
  return (
    <div onClick={() => setDisplayChat(!displayChat)} className="chatIcon">
      {displayChat ? "Close Chat" : "Got Questions?"}
    </div>
  );
};

export default ChatToggleIcon;
