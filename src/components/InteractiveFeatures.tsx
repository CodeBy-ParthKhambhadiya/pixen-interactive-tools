"use client";

import { useState } from "react";

export default function InteractiveFeatures() {
  // State examples for tools
  const [pixelText, setPixelText] = useState("Hello Pixen!");
  const [copied, setCopied] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Pixen Interactive Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Pixel Playground */}
        <div className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow">
          <h3 className="text-xl font-semibold mb-2">🎨 Pixel Playground</h3>
          <input
            type="text"
            value={pixelText}
            onChange={(e) => setPixelText(e.target.value)}
            className="w-full px-3 py-2 border rounded mb-2 text-sm dark:bg-gray-800 dark:border-gray-700"
            placeholder="Type text..."
          />
          <div className="mt-2 text-center font-mono text-lg">{pixelText}</div>
        </div>

        {/* Copy & Reuse Tool */}
        <div className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow">
          <h3 className="text-xl font-semibold mb-2">📋 Copy & Reuse</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Click to copy example text
          </p>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
            onClick={async () => {
              await navigator.clipboard.writeText("Pixen Tool Example Text");
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }}
          >
            {copied ? "Copied!" : "Copy Text"}
          </button>
        </div>

        {/* Dark / Light Mode Toggle */}
        <div className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow">
          <h3 className="text-xl font-semibold mb-2">🌙 Dark / Light Mode</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Toggle site theme
          </p>
          <button
            className="px-4 py-2 bg-gray-800 text-white dark:bg-gray-200 dark:text-black rounded shadow"
            onClick={() => {
              setDarkMode(!darkMode);
              document.documentElement.classList.toggle("dark");
            }}
          >
            {darkMode ? "Switch to Light" : "Switch to Dark"}
          </button>
        </div>

        {/* Fast Prototyping Tool */}
        <div className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow">
          <h3 className="text-xl font-semibold mb-2">⚡ Fast Prototyping</h3>
          <textarea
            className="w-full h-24 p-2 border rounded text-sm dark:bg-gray-800 dark:border-gray-700"
            placeholder="Write a small snippet..."
          />
          <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700 transition">
            Run (Demo)
          </button>
        </div>

        {/* Minimal & Lightweight Example */}
        <div className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow">
          <h3 className="text-xl font-semibold mb-2">🧩 Minimal & Lightweight</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            This card shows a minimal example with clean layout.
          </p>
          <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded shadow hover:bg-purple-700 transition">
            Click Me
          </button>
        </div>

      </div>
    </section>
  );
}
