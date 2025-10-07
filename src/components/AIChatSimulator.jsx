"use client"; // Required for client-side interactivity in Next.js

import { useState, useRef, useEffect } from "react";

export default function AIChatSimulator() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatBoxRef = useRef(null);

  const responses = [
    "Hello there! 😎",
    "I’m just a tiny AI, but I try my best! 🤖",
    "Do you want to hear a joke? 😂",
    "I can’t dance, but I can chat! 💃",
    "Why did the programmer go broke? Because he used up all his cache! 💾",
    "Beep boop! 🤖💡",
    "Sometimes I dream of electric sheep... 🐑⚡",
    "I know everything… about memes! 😏",
    "Whoa! That’s interesting! 😲",
    "You’re awesome! 🌟"
  ];

  const gifs = [
    "https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif",
    "https://media.giphy.com/media/l41YtZOb9EUABnuqA/giphy.gif",
    "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif",
    "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
    "https://media.giphy.com/media/xUPGcmuT1z4uVq7zDi/giphy.gif"
  ];

  const sendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: input, sender: "user" }]);
    const userText = input;
    setInput("");

    // AI response after delay
    setTimeout(() => {
      const randomText = responses[Math.floor(Math.random() * responses.length)];
      const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
      setMessages(prev => [...prev, { text: randomText, gif: randomGif, sender: "ai" }]);
    }, 500);
  };

  // Scroll to bottom on new message
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Quick AI Chat Simulator 🤖</h2>
      <div
        ref={chatBoxRef}
        className="w-full h-96 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-y-auto flex flex-col space-y-2"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`px-4 py-2 rounded-lg max-w-[80%] break-words ${
              msg.sender === "user" ? "self-end bg-red-500 text-white" : "self-start bg-gray-700 text-white"
            }`}
          >
            <span>{msg.text}</span>
            {msg.gif && <img src={msg.gif} alt="funny gif" className="mt-2 max-w-xs rounded-lg" />}
          </div>
        ))}
      </div>
      <div className="flex w-full max-w-md mt-4">
        <input
          type="text"
          className="flex-1 p-2 rounded-l-md border-none outline-none"
          placeholder="Type something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-red-500 text-white px-4 rounded-r-md hover:bg-red-600 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
