"use client";

import { useState } from "react";

const description = `Pixen is a minimal toolkit for playing with pixels and design. Perfect for building creative experiments, graphics, or image-based projects. Explore AI-powered tools, interactive features, and advanced photo editing in one place.`;

export default function HeroDescription() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(description);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section
      aria-live="polite"
      className="w-full px-6 py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-center"
    >
      <div className="mx-auto max-w-3xl text-center transform-gpu motion-safe:animate-fade-in">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
          Welcome to <span className="text-blue-600">Pixen</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          Pixen is a minimal toolkit for playing with pixels and design. Perfect for building creative experiments, graphics, or image-based projects. 
          <br />
          Explore AI-powered tools, interactive features, and advanced photo editing in one place. Turn your ideas into vibrant visuals and interactive experiences.
        </p>

        {/* Features / CTA */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button
            onClick={handleCopy}
            className="px-5 py-3 rounded-md border bg-white/80 hover:bg-white dark:bg-gray-800 dark:border-gray-700 text-sm font-medium shadow-sm transition"
            aria-label="Copy description"
          >
            {copied ? "Copied ✓" : "Copy description"}
          </button>

          <a
            href="#features"
            className="px-5 py-3 rounded-md bg-blue-600 text-white text-sm font-medium shadow-sm hover:bg-blue-700 transition"
          >
            Explore features
          </a>

          <a
            href="/ai-chat-simulator"
            className="px-5 py-3 rounded-md bg-green-600 text-white text-sm font-medium shadow-sm hover:bg-green-700 transition"
          >
            Try AI Tools
          </a>
        </div>

        {/* Pull page effect / additional info */}
        <div className="mt-12 text-gray-700 dark:text-gray-300 text-left md:text-center max-w-4xl mx-auto space-y-4">
          <p>
            Pixen combines simplicity with power. Whether you are experimenting with interactive graphics or editing photos, our tools are intuitive and optimized for creative flow.
          </p>
          <p>
            Use AI chat simulations, smile bot interactions, or advanced photo editing features to bring your ideas to life. Every tool is designed to be accessible, yet capable of producing professional results.
          </p>
          <p>
            Join a community of creators and start building pixel-perfect experiments today. With Pixen, your imagination is the only limit.
          </p>
        </div>
      </div>
    </section>
  );
}
