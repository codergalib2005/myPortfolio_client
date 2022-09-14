import React from "react";

const Message = ({ message, color, deep }) => {
  return (
    <p
      className={`text-${color}-${deep} text-xl md:text-3xl text-center  scale-100 hover:scale-105 transform transition-all duration-400`}
    >
      {message}
    </p>
  );
};

export default Message;
