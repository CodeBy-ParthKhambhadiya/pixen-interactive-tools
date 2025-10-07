"use client";

import { useState } from "react";

const description = `A minimal toolkit for playing with pixels and design.
Perfect for building creative experiments, graphics, or image-based projects.`;

export default function HeroDescription() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(description);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // fallback: select text for manual copy
      setCopied(false);
    }
  }

  return (
    <div
      aria-live="polite"
      className="mx-auto max-w-2xl text-center transform-gpu motion-safe:animate-fade-in"
    >
      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
        A minimal toolkit for playing with pixels and design.
        <br />
        Perfect for building creative experiments, graphics, or image-based projects.
      </p>

      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          onClick={handleCopy}
          className="px-4 py-2 rounded-md border bg-white/80 hover:bg-white dark:bg-gray-800 dark:border-gray-700 text-sm shadow-sm"
          aria-label="Copy description"
        >
          {copied ? "Copied ✓" : "Copy description"}
        </button>

        <a
          href="#features"
          className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm shadow-sm hover:bg-blue-700"
        >
          Explore features
        </a>
      </div>
    </div>
  );
}
