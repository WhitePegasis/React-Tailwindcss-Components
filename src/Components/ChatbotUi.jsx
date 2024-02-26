import React, { useState } from "react";
import Sidebar from "./Sidebar";

function ChatbotUi() {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSend = () => {
    // Update chat history with user input
    setChatHistory((prevChatHistory) => [
      ...prevChatHistory,
      { type: "user", message: userInput },
    ]);

    // For simplicity, let's assume ChatGPT generates a response
    const chatGPTResponse = "I'm a placeholder response from ChatGPT!";

    // Update chat history with ChatGPT response
    setChatHistory((prevChatHistory) => [
      ...prevChatHistory,
      { type: "bot", message: chatGPTResponse },
    ]);

    // Clear user input
    setUserInput("");
  };

  return (
    <div className="flex h-screen">
      {/* //Sidebar
      <div className="bg-gray-800 text-white w-64 p-4 space-y-4">
        <div className="text-xl font-semibold pt-40">ChatGPT</div>
        <div>
          <div className="text-gray-300 text-sm">History</div>
          <ul className="space-y-2 mt-3">
            <li>Conversation 1</li>
            <li>Conversation 2</li>
           // More conversations
          </ul>
        </div>
      </div> */}

      <Sidebar/>

      {/* Chat Container */}
      <div className="flex flex-col flex-1 overflow-hidden ml-80">
        <div className="p-4 pt-40 space-y-4 bg-gray-100 flex-1 overflow-y-auto ">
          {/* Display chat history */}
          {chatHistory.map((item, index) => (
            <div
              key={index}
              className={item.type === "user" ? "text-right" : "text-left"}
            >
              <div
                className={`inline-block ${
                  item.type === "user" ? "bg-blue-500" : "bg-gray-300"
                } text-white rounded px-4 py-2`}
              >
                {item.message}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex gap-4">
            <input
              type="text"
              className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white rounded px-4 py-2"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatbotUi;
