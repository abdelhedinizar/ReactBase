import React, { useState } from "react";
import "./DiscussionModal.css";

export default function DiscussionModal() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hello! How can I assist you today?",
      timestamp: "10:15 AM",
      avatar: "https://via.placeholder.com/40?text=B", // Bot avatar
    },
    {
      id: 2,
      sender: "user",
      text: "What are the specials on the menu?",
      timestamp: "10:16 AM",
      avatar: "https://via.placeholder.com/40?text=U", // User avatar
    },
    {
      id: 3,
      sender: "bot",
      text: "We have great deals on pizzas and burgers!",
      timestamp: "10:17 AM",
      avatar: "https://via.placeholder.com/40?text=B",
    },
    {
      id: 1,
      sender: "bot",
      text: "Hello! How can I assist you today?",
      timestamp: "10:15 AM",
      avatar: "https://via.placeholder.com/40?text=B", // Bot avatar
    },
    {
      id: 2,
      sender: "user",
      text: "What are the specials on the menu?",
      timestamp: "10:16 AM",
      avatar: "https://via.placeholder.com/40?text=U", // User avatar
    },
    {
      id: 3,
      sender: "bot",
      text: "We have great deals on pizzas and burgers!",
      timestamp: "10:17 AM",
      avatar: "https://via.placeholder.com/40?text=B",
    }
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: Date.now(),
          sender: "user",
          text: newMessage,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          avatar: "https://via.placeholder.com/40?text=U",
        },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="discussion-modal">
      <div className="chat-header">
        <h4>Chat Support</h4>
      </div>
      <div className="chat-body">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`chat-message-container ${
              msg.sender === "bot" ? "bot-message-container" : "user-message-container"
            }`}
          >
            {msg.sender === "bot" && <img src={msg.avatar} alt="Bot" className="avatar" />}
            <div className={`message-wrapper ${msg.sender === "bot" ? "align-left" : "align-right"}`}>
              <div
                className={`chat-message ${
                  msg.sender === "bot" ? "bot-message" : "user-message"
                }`}
              >
                <p>{msg.text}</p>
              </div>
              <span className="timestamp">{msg.timestamp}</span>
            </div>
            {msg.sender === "user" && <img src={msg.avatar} alt="User" className="avatar" />}
          </div>
        ))}
      </div>
      <div className="chat-footer">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}
