import React, { useEffect, useState, useRef } from "react";
import startChatWithBot from "../../../services/AssistanceServ";
import gsap from "gsap";
import "./DiscussionModal.css";

export default function DiscussionModal({ dishes }) {
  const [messages, setMessages] = useState([]);

  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatBodyRef = useRef(null);
  const hasStartedChat = useRef(false);

  useEffect(() => {
    if (!hasStartedChat.current) {
    async function startChat() {
      let botmessagecontent = await startChatWithBot({ messages: [] });
      setMessages([
        {
          id: Date.now(),
          role: "bot",
          content: botmessagecontent,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          avatar: "https://via.placeholder.com/40?text=B",
        },
      ]);
    }
    startChat();
       hasStartedChat.current = true;
    }
  }, []);


useEffect(() => {
  if (chatBodyRef.current) {
    gsap.to(chatBodyRef.current, {
      scrollTop: chatBodyRef.current.scrollHeight,
      duration: 1,
      ease: "power2.out",
    });
  }
}, [messages]);

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      avatar: "https://via.placeholder.com/40?text=U",
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setNewMessage("");
    setIsLoading(true);
    let msg = JSON.parse(JSON.stringify(messages));
    msg.push(userMessage);

    let messagesBody = {
      messages: msg.map((message) => {
        return {
          role: message.role,
          content: message.content,
        };
      }),
    };

    let botmessagecontent = await startChatWithBot(messagesBody);

    let botMessage = {
      id: Date.now(),
      role: "bot",
      content: botmessagecontent,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      avatar: "https://via.placeholder.com/40?text=B",
    };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
    setIsLoading(false);
  };

  return (
    <div className="discussion-modal">
      <div className="chat-header">
        <h4>Chat Support</h4>
      </div>
      <div className="chat-body" ref={chatBodyRef}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`chat-message-container ${
              msg.role === "bot"
                ? "bot-message-container"
                : "user-message-container"
            }`}
          >
            {msg.role === "bot" && (
              <img src={msg.avatar} alt="Bot" className="avatar" />
            )}
            <div
              className={`message-wrapper ${
                msg.role === "bot" ? "align-left" : "align-right"
              }`}
            >
              <div
                className={`chat-message ${
                  msg.role === "bot" ? "bot-message" : "user-message"
                }`}
              >
                <p>{msg.content}</p>
              </div>
              <span className="timestamp">{msg.timestamp}</span>
            </div>
            {msg.role === "user" && (
              <img src={msg.avatar} alt="User" className="avatar" />
            )}
          </div>
        ))}
        {isLoading && (
          <div className="loading-message">
            <p>Typing...</p>
          </div>
        )}
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
