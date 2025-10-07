"use client";

import { useState } from "react";
import jsPDF from "jspdf";

// We'll use free translate API for demo
// Type for a single translation segment returned by Google Translate
type TranslationSegment = [translatedText: string, originalText: string, ...unknown[]];

// Full response type
type GoogleTranslateResponse = [segments: TranslationSegment[], ...unknown[]];

async function translateText(text: string, targetLang: string): Promise<string> {
  try {
    const res = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`
    );

    const data: GoogleTranslateResponse = await res.json();

    // Type-safe extraction
    if (Array.isArray(data) && Array.isArray(data[0])) {
      return data[0].map((item: TranslationSegment) => item[0]).join("");
    }

    return text; // fallback if structure is unexpected
  } catch (err: unknown) {
    console.error("Translation error:", err);
    return text; // fallback to original if error
  }
}


type AnalysisResults = {
  wordCount: number;
  letterCount: number;
  duplicateWords: Record<string, number>;
  duplicateSentences: Record<string, number>;
};

export default function TextScanner() {
  const [results, setResults] = useState<AnalysisResults | null>(null);
  const [rawText, setRawText] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("en");

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const text = await file.text();
    setRawText(text);
    analyzeText(text);
  };
const analyzeText = (text: string) => {
  const cleanText = text.toLowerCase().trim();

  // Count letters
  const letters = cleanText.match(/[a-zA-Z]/g) || [];
  const letterCount = letters.length;

  // Count words
  const words = cleanText.match(/\b\w+\b/g) || [];
  const wordCount = words.length;

  // Duplicate words
  const wordCounter: Record<string, number> = {};
  words.forEach((word) => {
    wordCounter[word] = (wordCounter[word] || 0) + 1;
  });

  const duplicateWords: Record<string, number> = Object.fromEntries(
    Object.entries(wordCounter).filter(([word, count]) => count > 1)
  );

  // Split the text into sentences
  const sentences: string[] = cleanText.split(/[.!?]\s+/).filter(Boolean);

  // Count occurrences of each sentence
  const sentenceCounter: Record<string, number> = {};
  sentences.forEach((sentence: string) => {
    sentenceCounter[sentence] = (sentenceCounter[sentence] || 0) + 1;
  });

  // Get only duplicate sentences (occurrence > 1)
  const duplicateSentences: Record<string, number> = Object.fromEntries(
    Object.entries(sentenceCounter).filter(([sentence, count]) => count > 1)
  );

  console.log(duplicateSentences);

  setResults({
    wordCount,
    letterCount,
    duplicateWords,
    duplicateSentences,
  });
};


  const handleSave = () => {
    analyzeText(rawText);
    setIsEditing(false);
  };

  const handleDownloadPDF = async () => {
    if (!results) return;

    // Translate headings + stats
    const heading = await translateText("📂 Text Scanner Report", language);
    const wordLabel = await translateText(`Total Words: ${results.wordCount}`, language);
    const letterLabel = await translateText(`Total Letters: ${results.letterCount}`, language);
    const dupWordsLabel = await translateText("🔁 Duplicate Words:", language);
    const dupSentencesLabel = await translateText("🔁 Duplicate Sentences:", language);

    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(heading, 10, 15);

    doc.setFontSize(12);
    doc.text(wordLabel, 10, 30);
    doc.text(letterLabel, 10, 40);

    let y = 55;

    // Duplicate Words
    doc.text(dupWordsLabel, 10, y);
    y += 10;
    if (Object.keys(results.duplicateWords).length > 0) {
      for (const [w, c] of Object.entries(results.duplicateWords)) {
        const translatedWord = await translateText(`${w}: ${c}`, language);
        doc.text(translatedWord, 15, y);
        y += 8;
      }
    } else {
      doc.text(await translateText("None", language), 15, y);
      y += 8;
    }

    y += 10;

    // Duplicate Sentences
    doc.text(dupSentencesLabel, 10, y);
    y += 10;
    if (Object.keys(results.duplicateSentences).length > 0) {
      for (const [s, c] of Object.entries(results.duplicateSentences)) {
        const translatedSentence = await translateText(`"${s}" → ${c}`, language);
        doc.text(translatedSentence, 15, y);
        y += 8;
      }
    } else {
      doc.text(await translateText("None", language), 15, y);
    }

    doc.save("TextScanner_Report.pdf");
  };

  const handleDownloadTxt = async () => {
    const translatedText = await translateText(rawText, language);
    const blob = new Blob([translatedText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Updated_Text.txt";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-gray-900 text-white rounded-2xl shadow-xl space-y-6">
      <h1 className="text-3xl font-bold text-purple-400">📂 Text Scanner</h1>

      {/* File Upload */}
      <input
        type="file"
        accept=".txt"
        onChange={handleFileUpload}
        className="block w-full mb-4 p-2 border rounded bg-gray-800 text-sm cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700"
      />

      {/* Language Selector */}
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="bg-gray-800 text-white p-2 rounded"
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="gu">Gujarati</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        <option value="de">German</option>
      </select>

      {/* Raw Text / Editor */}
      {rawText && (
        <div>
          {isEditing ? (
            <div>
              <textarea
                value={rawText}
                onChange={(e) => setRawText(e.target.value)}
                className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg"
                rows={8}
              />
              <button
                onClick={handleSave}
                className="mt-3 px-4 py-2 bg-green-600 rounded hover:bg-green-700"
              >
                💾 Save & Re-Analyze
              </button>
            </div>
          ) : (
            <div>
              <pre className="bg-gray-800 p-3 rounded whitespace-pre-wrap text-gray-200 max-h-60 overflow-y-auto">
                {rawText}
              </pre>
              <button
                onClick={() => setIsEditing(true)}
                className="mt-3 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
              >
                ✏️ Edit
              </button>
            </div>
          )}
        </div>
      )}

      {/* Results */}
      {results && (
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg shadow">
            <p><strong>Total Words:</strong> {results.wordCount}</p>
            <p><strong>Total Letters:</strong> {results.letterCount}</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleDownloadPDF}
              className="flex-1 px-4 py-2 bg-purple-600 rounded hover:bg-purple-700"
            >
              📥 Download PDF ({language.toUpperCase()})
            </button>
            <button
              onClick={handleDownloadTxt}
              className="flex-1 px-4 py-2 bg-pink-600 rounded hover:bg-pink-700"
            >
              📄 Download TXT ({language.toUpperCase()})
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
