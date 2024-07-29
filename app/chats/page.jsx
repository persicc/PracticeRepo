import React, { useState } from "react";

function Chats({ chatroomId }) {
  const [message, setMessage] = useState("");
  const handleSetMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form action="post">
        <input
          type="text"
          placeholder="Type message..."
          value={message}
          onChange={(e) => handleSetMessage(e)}
        />
        <button type="submit" onClick={(e) => sendMessage(e)}>
          Send
        </button>
      </form>
    </div>
  );
}

export default Chats;
