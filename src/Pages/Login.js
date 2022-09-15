import React, { useState } from "react";

const Login = () => {
  const [input, setInput] = useState("");
  const handleSumit = (e) => {
    e.preventDefault();
    localStorage.setItem("portfolio", `${input}`);
    setInput("");
  };
  return (
    <div
      className="flex items-center justify-center"
      style={{ minHeight: "80vh" }}
    >
      <form onSubmit={handleSumit}>
        <input
          value={input}
          name="input"
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent border-2 border-gray-300 py-2 px-4 w-72 text-gray-300 rounded-md"
          placeholder="authentic"
          type="text"
        />
      </form>
    </div>
  );
};

export default Login;
