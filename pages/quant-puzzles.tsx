import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import BackButton from "./subcomponents/BackButton";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ScheduleIcon from "@mui/icons-material/Schedule";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import CalculateIcon from "@mui/icons-material/Calculate";

interface QuantPuzzle {
  id: number;
  title: string;
  question: string;
  hint: string;
  answer: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  readTime: number;
  date: string;
  tags: string[];
}

const quantPuzzles: QuantPuzzle[] = [
  {
    id: 1,
    title: "Geometric Distribution: Expected Flips",
    question:
      "A biased coin with P(H) = p is flipped until the first head appears. What is the expected number of flips?",
    hint: "Geometric distribution with success probability p.",
    answer: "E[N] = 1/p.",
    difficulty: "Medium",
    category: "Probability",
    readTime: 3,
    date: "2024-01-20",
    tags: ["geometric distribution", "expected value", "probability"]
  },
  {
    id: 2,
    title: "Fair Coin Simulation",
    question: "How can you simulate a fair coin using an unfair coin?",
    hint: "Consider the martingale nature of doubling. Compare the expected value of continuing vs stopping after k heads.",
    answer:
      "Flip the unfair coin twice. If it lands heads-tails, call it heads. If it lands tails-heads, call it tails. If it lands on tails-tails or heads-heads, repeat the process. This simulates a fair coin because P(HT) = P(TH)",
    difficulty: "Hard",
    category: "Probability",
    readTime: 4,
    date: "2024-01-18",
    tags: ["simulation", "fair coin", "probability", "martingale"]
  },
  {
    id: 3,
    title: "Optimal Betting Strategy",
    question:
      "You have $100 and a fair coin. You can play up to 100 rounds of tossing the coin. During each round, you can bet an amount up to your current holding, and if you win, you gain double your bet + your original bet back. Otherwise, you lose your bet. What is the optimal strategy to maximize expected value?",
    hint: "Consider the martingale nature of doubling. Compare the expected value of continuing vs stopping after k heads.",
    answer:
      "Bet all your balance each round. The expected value is maximized this way since either you triple your balance or you leave empty handed. The EV is (1/2^100 * 100 * 3^100)) + (1-1/2^100) * 0. AKA either win big or lose it all.",
    difficulty: "Hard",
    category: "Optimization",
    readTime: 5,
    date: "2024-01-16",
    tags: ["optimization", "betting strategy", "expected value", "martingale"]
  },
  {
    id: 4,
    title: "Roll Again I",
    question:
      "Kelly rolls a fair standard 6-sided die. She observes the value on the face. Afterwards, she is given the option to either receive the upface (in dollars) as a payout or to roll again. If she rolls again, she receives the upface of the second roll (in dollars) as payout, regardless of what she rolled on the first turn. If Kelly plays optimally, what is her expected payout?",
    hint: "Consider the optimal stopping rule. Kelly should roll again if the first roll is below a certain threshold.",
    answer:
      "Kelly should roll again if the first roll is 1, 2, or 3, and keep the first roll if it's 4, 5, or 6. The expected payout is 4.25. This is calculated as: E[payout] = (1/6)(4 + 5 + 6) + (3/6)(3.5) = (1/6)(15) + (3/6)(3.5) = 2.5 + 1.75 = 4.25",
    difficulty: "Easy",
    category: "Probability",
    readTime: 4,
    date: "2024-01-14",
    tags: ["optimal stopping", "expected value", "dice", "decision theory"]
  },
];

const QuantPuzzles = () => {
  const [showAnswers, setShowAnswers] = useState(
    Array(quantPuzzles.length).fill(false)
  );
  const [showHints, setShowHints] = useState(
    Array(quantPuzzles.length).fill(false)
  );

  const toggleAnswer = (index: number) => {
    setShowAnswers((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  const toggleHint = (index: number) => {
    setShowHints((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-400 bg-green-400/20";
      case "Medium":
        return "text-yellow-400 bg-yellow-400/20";
      case "Hard":
        return "text-red-400 bg-red-400/20";
      default:
        return "text-gray-400 bg-gray-400/20";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pb-20">
      <Navbar useScrollLinks={false} />
      <div className="max-w-4xl mx-auto pt-24 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative flex justify-center items-center mb-16">
          <div className="absolute left-0">
            <BackButton />
          </div>
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent drop-shadow-lg mb-4">
              Quant Puzzles
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A collection of challenging quantitative puzzles and probability problems to sharpen your analytical skills.
            </p>
          </div>
        </div>

        {/* Blog-style posts */}
        <div className="space-y-12">
          {quantPuzzles.map((puzzle, index) => (
            <motion.article
              key={puzzle.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-md border border-gray-600/30 rounded-3xl p-8 md:p-10 shadow-xl transition-all duration-300 hover:border-emerald-400/40 hover:shadow-2xl group"
            >
              {/* Blog post header */}
              <header className="mb-6">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(puzzle.difficulty)}`}>
                    {puzzle.difficulty}
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-emerald-400/20 text-emerald-400">
                    {puzzle.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <ScheduleIcon className="w-4 h-4" />
                    <span>{puzzle.readTime} min read</span>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent group-hover:from-emerald-400 group-hover:to-cyan-400 transition-all duration-300">
                  {puzzle.title}
                </h2>
                
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span>{formatDate(puzzle.date)}</span>
                  <div className="flex items-center gap-1">
                    <LocalFireDepartmentIcon className="w-4 h-4" />
                    <span>#{puzzle.id}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {puzzle.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 rounded-md text-xs bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </header>

              {/* Question */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                  <PsychologyIcon className="w-5 h-5" />
                  Problem Statement
                </h3>
                <p className="text-lg text-gray-200 leading-relaxed whitespace-pre-line">
                  {puzzle.question}
                </p>
              </div>

              {/* Hint section */}
              <div className="mb-6">
                <button
                  onClick={() => toggleHint(index)}
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-3"
                >
                  <LightbulbIcon className="w-5 h-5" />
                  <span className="font-medium">
                    {showHints[index] ? "Hide Hint" : "Show Hint"}
                  </span>
                </button>
                {showHints[index] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4 mb-4"
                  >
                    <p className="text-cyan-200 italic">{puzzle.hint}</p>
                  </motion.div>
                )}
              </div>

              {/* Answer section */}
              <div className="mb-6">
                <button
                  onClick={() => toggleAnswer(index)}
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-3"
                >
                  <LightbulbIcon className="w-5 h-5" />
                  <span className="font-medium">
                    {showAnswers[index] ? "Hide Solution" : "Show Solution"}
                  </span>
                </button>
                {showAnswers[index] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4"
                  >
                    <h4 className="font-semibold text-emerald-300 mb-2">Solution:</h4>
                    <p className="text-emerald-200 leading-relaxed whitespace-pre-line">
                      {puzzle.answer}
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-600/30">
                <button
                  onClick={() => toggleAnswer(index)}
                  className="px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 text-white shadow-md hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  {showAnswers[index] ? "Hide Solution" : "Reveal Solution"}
                </button>
                <button
                  onClick={() => toggleHint(index)}
                  className="px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  {showHints[index] ? "Hide Hint" : "Get Hint"}
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuantPuzzles;
