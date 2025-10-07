"use client";

import { useState, useRef, useEffect } from "react";

export default function AIChatSimulator() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatBoxRef = useRef(null);

  // Keyword to emoji mapping
  const keywordEmojiMap = {
    happy: {
      happy: "😄",
      great: "😁",
      good: "😊",
      awesome: "🤩",
      fun: "😆",
      love: "🥰",
      yay: "😎",
      amazing: "😃",
      fantastic: "😇",
      cool: "😎",
      nice: "🙂",
      brilliant: "🤓",
      wonderful: "🥳",
      excited: "😆",
      joy: "😄",
      cheerful: "☺️",
      smile: "😊",
      laugh: "😂",
      delighted: "😄",
      pleasant: "🙂",
      sunny: "😎",
      glad: "😌",
      excellent: "🤩",
      superb: "😎"
    },
    sad: {
      sad: "😞",
      bad: "🙁",
      unhappy: "😔",
      angry: "😠",
      upset: "😟",
      mad: "😡",
      depressed: "😫",
      lonely: "😢",
      tired: "😩",
      frustrated: "😖",
      annoyed: "😤",
      worried: "😟",
      down: "😔",
      miserable: "😫",
      gloomy: "😞",
      hurt: "😢",
      pain: "😣",
      disappointed: "😞",
      regret: "😔",
      cry: "😭",
      bored: "😒"
    },
    love: {
      love: "😍",
      heart: "💖",
      crush: "🥰",
      like: "😘",
      adore: "💘",
      romantic: "💞",
      sweet: "💓",
      darling: "❤️",
      affection: "💖",
      passion: "💘",
      caring: "💞",
      fond: "💓"
    },
    angry: {
      angry: "😠",
      mad: "😡",
      furious: "🤬",
      hate: "👿",
      annoyed: "😤",
      frustrated: "😡",
      irritated: "😠",
      rage: "🤬",
      upset: "😡",
      resentment: "😤"
    },
    surprised: {
      wow: "😲",
      whoa: "😳",
      amazing: "😮",
      surprised: "😯",
      shocked: "😱",
      unbelievable: "😲",
      incredible: "😮",
      astonished: "😳",
      excited: "😲",
      OMG: "😱",
      unexpected: "😮"
    },
    neutral: {
      default: "🙂"
    }
  };

const sendMessage = () => {
  if (!input.trim()) return;

  const userText = input;
  setMessages(prev => [...prev, { text: userText, sender: "user" }]);
  setInput("");

  setTimeout(() => {
    let selectedEmoji = keywordEmojiMap.neutral.default;
    let found = false;
    const lowerUserText = userText.toLowerCase();

    for (const mood in keywordEmojiMap) {
      if (mood === "neutral") continue;
      const keywords = Object.keys(keywordEmojiMap[mood]);
      for (const word of keywords) {
        // Check first 3 letters match
        const wordPrefix = word.slice(0, 3).toLowerCase();
        if (lowerUserText.includes(wordPrefix)) {
          selectedEmoji = keywordEmojiMap[mood][word];
          found = true;
          break;
        }
      }
      if (found) break;
    }

    setMessages(prev => [
      ...prev,
      { text: `${selectedEmoji} ${userText}`, sender: "ai" }
    ]);
  }, 500);
};


  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4"> Emoji AI Chat Simulator 🤖</h2>
      <div
        ref={chatBoxRef}
        className="w-full h-96 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-y-auto flex flex-col space-y-2"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`px-4 py-2 rounded-lg max-w-[80%] break-words ${
              msg.sender === "user"
                ? "self-end bg-red-500 text-white"
                : "self-start bg-gray-700 text-white"
            }`}
          >
            <span>{msg.text}</span>
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
