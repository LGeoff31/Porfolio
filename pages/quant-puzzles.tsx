import React, { useState } from "react";
import Navbar from "./components/Navbar";
import BackButton from "./subcomponents/BackButton";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

interface QuantPuzzle {
  question: string;
  hint: string;
  answer: string;
}

const quantPuzzles: QuantPuzzle[] = [
  {
    question:
      "A biased coin with P(H) = p is flipped until the first head appears. What is the expected number of flips?",
    hint: "Geometric distribution with success probability p.",
    answer: "E[N] = 1/p.",
  },
  {
    question: "How can you simulate a fair coin using an unfair coin?",
    hint: "Consider the martingale nature of doubling. Compare the expected value of continuing vs stopping after k heads.",
    answer:
      "Flip the unfair coin twice. If it lands heads-tails, call it heads. If it lands tails-heads, call it tails. If it lands on tails-tails or heads-heads, repeat the process. This simulates a fair coin because P(HT) = P(TH)",
  },
  {
    question:
      "You have $100 and a fair coin. You can play up to 100 rounds of tossing the coin. During each round, you can bet an amount up to your current holding, and if you win, you gain double your bet + your original bet back. Otherwise, you lose your bet. What is the optimal strategy to maximize expected value?",
    hint: "Consider the martingale nature of doubling. Compare the expected value of continuing vs stopping after k heads.",
    answer:
      "Bet all your balance each round. The expected value is maximized this way since either you triple your balance or you leave empty handed. The EV is (1/2^100 * 100 * 3^100)) + (1-1/2^100) * 0. AKA either win big or lose it all.",
  },
];

const QuantPuzzles = () => {
  const [showAnswers, setShowAnswers] = useState(
    Array(quantPuzzles.length).fill(false)
  );

  const toggleAnswer = (index: number) => {
    setShowAnswers((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pb-20">
      <Navbar useScrollLinks={false} />
      <div className="max-w-3xl mx-auto pt-24 px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-center items-center mb-12">
          <div className="absolute left-0">
            <BackButton />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent drop-shadow-lg">
            Quant Puzzles
          </h1>
        </div>
        <div className="space-y-8">
          {quantPuzzles.map((puzzle, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-md border border-emerald-400/20 rounded-2xl p-8 shadow-lg transition-all duration-300 hover:border-emerald-400/60 group"
            >
              <div className="mb-4 text-xl md:text-2xl font-semibold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent whitespace-pre-line">
                {puzzle.question}
              </div>
              {showAnswers[index] && (
                <div className="flex items-center gap-2 mt-4 animate-fade-in">
                  <LightbulbIcon className="text-emerald-300" />
                  <span className="text-lg text-emerald-200/90">
                    {puzzle.answer}
                  </span>
                </div>
              )}
              <button
                className="mt-6 px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 text-white shadow-md hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                onClick={() => toggleAnswer(index)}
                aria-label={showAnswers[index] ? "Hide Answer" : "Show Answer"}
              >
                {showAnswers[index] ? "Hide Answer" : "Show Answer"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuantPuzzles;
