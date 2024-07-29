import React from "react";

function Message({ message }) {
  return (
    <div className="flex p-2 rounded-full bg-blue-500 items-center justify-between max-w-20">
      <span>{message.sender}</span>
      <span>{message.text}</span>
      <div>
        <span>{message.timestamp}</span>
      </div>
    </div>
  );
}
