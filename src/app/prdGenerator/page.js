"use client"
import React, { useState } from "react";
import { Sparkles } from "lucide-react";

const PrdGeneratorSection = () => {
  const [userInput, setUserInput] = useState("");
  const [generatedPRD, setGeneratedPRD] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!userInput.trim()) {
      setError("Please enter your app idea");
      return;
    }

    setIsLoading(true);
    setError("");
    setGeneratedPRD("");

    try {
      const response = await fetch("/api/prdgenerator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userInput: userInput.trim() }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to generate PRD");
      }

      setGeneratedPRD(data.prd);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleGenerate();
    }
  };

  return (
    <section className="w-full min-h-[100vh] flex flex-col items-center justify-center text-black  px-4 py-8">
      <div className="w-full max-w-4xl text-center space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold">
          Try Our AI PRD Builder
        </h1>
        <p className="text-gray-700">
          A PRD is like the blueprint for your app! Answer some short questions
          about what you're building – who you're building it for? It should
          work.
        </p>

        <div className="w-full flex flex-col gap-4 bg-[#0E405A] text-white rounded-2xl p-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="animate-pulse" />
          </div>

          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="I want to build an app that helps college students"
            className="flex-1 w-full px-4 py-3 rounded-md text-white bg-transparent  placeholder-white focus:outline-none"
            onKeyDown={handleKeyPress}
            disabled={isLoading}
          />

          <button
            onClick={handleGenerate}
            disabled={isLoading || !userInput.trim()}
            className="bg-[#A7E0FF] text-black px-6 py-3 rounded-xl hover:bg-gray-900 hover:text-white transition disabled:opacity-50"
          >
            {isLoading ? "Generating..." : "Generate"}
          </button>
        </div>

        {error && (
          <div className="text-red-600 text-sm bg-red-100 p-2 rounded-md mt-2">
            {error}
          </div>
        )}

        {generatedPRD && (
          <div className="mt-8 w-full bg-gray-100 rounded-2xl p-6 text-left">
            <h3 className="text-2xl font-bold mb-4">Generated PRD</h3>
            <div className="bg-white p-4 rounded-md overflow-auto max-h-[60vh]">
              <pre className="whitespace-pre-wrap font-sans text-sm text-gray-800 leading-relaxed">
                {generatedPRD}
              </pre>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PrdGeneratorSection;
