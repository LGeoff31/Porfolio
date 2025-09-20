import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import BackButton from "./subcomponents/BackButton";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ScheduleIcon from "@mui/icons-material/Schedule";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

interface BrainTeaser {
  id: number;
  title: string;
  question: string;
  hint: string;
  answer: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  readTime: number; // in minutes
  date: string;
  tags: string[];
}

const brainTeasers: BrainTeaser[] = [
  {
    id: 1,
    title: "The Locker Problem",
    question:
      "There are 100 lockers initially all closed. You do 100 passes on the lockers where on the ith pass, you toggle every ith locker. Which lockers will remain open at the end.",
    hint: "Consider a locker i. The number of times this locker is be toggled is the number of divisors of i",
    answer:
      "Lockers with perfect–square numbers (1, 4, 9, 16, …) remain open because they are the only ones that have an odd number of divisors.",
    difficulty: "Medium",
    category: "Number Theory",
    readTime: 3,
    date: "2024-01-15",
    tags: ["divisors", "perfect squares", "logic"]
  },
  {
    id: 2,
    title: "The Burning Ropes",
    question:
      "Two ropes take 1h each to burn. However, the burning process is non-uniform. You have a lighter. How would you track exactly 45 minutes.",
    hint: "You may light the rope from both ends, when they intersect, half the time has passed.",
    answer:
      "Light Rope-A at both ends and Rope-B at one end. Rope-A burns out in 30 min. Immediately light the other end of Rope-B; the remaining length burns in 15 min. Total = 45 min.",
    difficulty: "Hard",
    category: "Logic",
    readTime: 4,
    date: "2024-01-12",
    tags: ["time", "burning", "strategy"]
  },
  {
    id: 3,
    title: "The Counterfeit Coins",
    question:
      "There are 10 bags with 100 identical coins. Each bag contain 10g coins except one bag, which contains all 11g coins. Find the counterfeit bag using 1 usage of a digital scale that tells you exact weight.",
    hint: "Try placing on the scale a certain amount of coins from each bag and comparing the scale weight with the expected weight,",
    answer:
      "Take 1 coin from bag 1, 2 from bag 2, …, 10 from bag 10 (total = 55 coins). If all were genuine, weight = 550 g. The extra grams over 550 identify the counterfeit bag (e.g., +3 g ⇒ bag 3).",
    difficulty: "Medium",
    category: "Logic",
    readTime: 3,
    date: "2024-01-10",
    tags: ["weighing", "strategy", "mathematics"]
  },
  {
    id: 4,
    title: "The Tiger and Sheep Problem",
    question:
      "There are 100 tigers and 1 sheep. If a tiger eats a sheep, it will become a sheep. A tiger will eat the sheep only if it knows it won't be eaten by another tiger, otherwise it wouldn't eat the sheep. Will the initial sheep be eaten?",
    hint: "Consider the case when there is only 1 tiger and 1 sheep. Now 2 tigers and 1 sheep. Now 3 tigers and 1 sheep. You can find a recurrence pattern here.",
    answer:
      "The initial sheep will not be eaten. The reasoning is as follows: If there is only 1 tiger, it will eat the sheep. If there are 2 tigers, none will eat the sheep since they know they will get eaten by the other tiger (by previous case, tiger=1). If there are 3 tigers, the sheep will be eaten since it knows the other two tigers wouldn't eat him (by previous case, tiger=2). The pattern continues, if the number of tigers is even, the sheep will be eaten, otherwise it wil not.",
    difficulty: "Hard",
    category: "Logic",
    readTime: 5,
    date: "2024-01-08",
    tags: ["recursion", "game theory", "logic"]
  },
  {
    id: 5,
    title: "The Cave Torch Problem",
    question:
      "You're trapped in a circular dark cave with torches spread across the wall, randomly lit or not lit. You can toggle a torch on and off. You can move clockwise or counterclockwise. Assuming you have infinite time and memory, how would you find the number of torches?",
    hint: "To be certain you've looped around the cave, turn the first torch on. Then go to the 2nd torch and turn it off. Go back to 1st torch and ensure it's still on. Continue the process. When you turn off the ith torch and return to the 1st torch and see it off, you know you've reached a cycle.",
    answer:
      "The solution is to turn on the first torch, then turn off the second, then check if the first torch is still on. Then proceed to turn off the third torch, then check if the first torch is still on. Continue this pattern, when you turn off the ith torch, then check and see the first torch got turned off, you have made a cycle. Imagine if there were 10 torches, then turning off the 10th torch would turn off the 1st torch which you swore was always on. Now count the number of torches in that cycle = 10.",
    difficulty: "Hard",
    category: "Algorithm",
    readTime: 6,
    date: "2024-01-05",
    tags: ["cycle detection", "algorithm", "memory"]
  },
  {
    id: 6,
    title: "The Balance Scale Problem",
    question:
      "There are 9 rocks of equal weight, except one which is slightly heavier. You have a balance scale. What is the minimum number of times you need to use the scale to find the heavier rock?",
    hint: "Divide the rocks into 3 groups of 3. After using the scale, you will narrow down the heavier rock to 3 rocks. Now, divide the 3 rocks into 3 groups of 1. Now you've found it in 2 uses. Note with n rocks, it will take approx log3(n) uses.",
    answer:
      "Divide the 9 rocks into 3 groups of 3. Weigh two groups against each other. If they balance, the heavier rock is in the third group. If one group is heavier, the heavier rock is in that group. Now, take the 3 rocks that were on the heavier side and weigh two of them. If they balance, the heavier rock is the one not weighed. If one is heavier, that's the heavier rock. This process takes 2 uses. Can you think of a formula to generalize a solution to n rocks?",
    difficulty: "Medium",
    category: "Algorithm",
    readTime: 4,
    date: "2024-01-03",
    tags: ["binary search", "optimization", "algorithm"]
  },
  {
    id: 7,
    title: "The Noodle Loop Problem",
    question:
      "You have a bowl with 100 noodles. You can connect the end of a noodle to any other noodle, even itself. After connecting the ends of all noodles, what is the expected number of noodle loops?",
    hint: "Consider the case when there is only 1 noodle. Now 2 noodles. Now 3 noodles. You can find a recurrence pattern here.",
    answer:
      "Consider a simpler case. With 1 noodle the expected number of loops is 1. With two noodles, there is a 1/3 chance of having two loops and 2/3 chance of having 1 loop, hence E(2) = 2 * 1/3 + 1 * 2/3 = 4/3 loops. Now with n noodles, WLOG pick a noodle, there is a 1/(2n-1) chance it gets connected to itself. If so the E(n) = 1 + E(n-1). Otherwise, E(n) = E(n-1). Hence, E(n) = 1/(2n-1) * (1 + E(n-1)) + (2n-2)/(2n-1) * E(n-1). This simplifies to the recurrence relation, E(n) = H(2n) - (1/2)H(n), where H(n) is the harmonic series. E(100) = 3.28.",
    difficulty: "Hard",
    category: "Probability",
    readTime: 7,
    date: "2024-01-01",
    tags: ["probability", "recurrence", "mathematics"]
  },
  {
    id: 8,
    title: "The Zombie Bridge Crossing",
    question:
      "You and 3 others are trying to escape zombies in the middle of the night. You must cross a bridge to escape. You have 1 flashlight, which must be used when crossing the bridge. The time it takes each of you to cross is 1m, 2m, 5m, 10m. Only at most two of you can cross the bridge at a time. How do you cross the bridge in 17 minutes?",
    hint: "Have the 5m and 10m go together to save time. Use the 1m and 2m as the main transporters back for the flashlight. Start with 1m and 2m going first.",
    answer:
      "The optimal strategy is to have the 5m and 10m go together to save time. Use the 1m and 2m as the main transporters back for the flashlight. Start with 1m and 2m going first. Have the 2m come back with the flashlight. Then have the 5m and 10m go together. Then have the 1m come back with the flashlight. Then the 1m and 2m will cross. Total time = 2 + 2 + 10 + 1 + 2 = 17 minutes.",
    difficulty: "Medium",
    category: "Optimization",
    readTime: 4,
    date: "2023-12-28",
    tags: ["optimization", "strategy", "time"]
  },
  {
    id: 9,
    title: "The Horse Racing Problem",
    question:
      "There are 25 horses. You can only race 5 horses at a time. You don't have a stopwatch. What is the least number of races you need to find the fastest horse?",
    hint: "Divide the horses into 5 groups of 5. Race the groups against each other. Now you know the fastest from each group. Now race the 5 horses in the fastest group against each other to find the fastest horse. Now you only need 2 more races to find the second and third fastest horses.",
    answer:
      "Divide the 25 horses into 5 groups of 5. Race the groups against each other. Then race the 5 winners, this will give you the fastest horse. Now in the next race, determine the candidates for who could be the second and third fastest horse given all the info you now have. You'll see there are only 5 candidates, hence race the 5. In total, 7 races are required",
    difficulty: "Hard",
    category: "Algorithm",
    readTime: 5,
    date: "2023-12-25",
    tags: ["sorting", "algorithm", "optimization"]
  },
  {
    id: 10,
    title: "The Pirate Gold Distribution",
    question:
      "There are 5 pirates and 100 coins. To divide the loot, the most senior pirate will propose a distribution. Then a vote will take place. If at least 50% of pirates agree, it will proceed, otherwise, the senior pirate will be thrown off and the process is continued until an agreed distribution. Assuming all pirates are rational and want to maximize their share, how will the coins be divided in the end? ",
    hint: "Work up from the simple cases i.e 2 pirates, 3 pirates ,etc.",
    answer:
      "Consider the case of 2 pirates. The most senior will propose to take all 100 coins, the vote will succeed since he himself will vote yes, guaranteeing at least 50% of votes. If there are 3 pirates, the most senior will take 99 coins and give 1 coin to the youngest pirate. The youngest pirate will vote yes since if the senior pirate gets thrown off, he knows he won't get any coins as deduced from the previous case of 2 pirates. Continuing this pattern, for n pirates, the most senior will give 1 coin to every other pirate sorted in descending age, and take the rest, allowing him to win at least 50% of the votes. So with 5 pirates, the most senior will take 98 coins and give 1 coin to the 3rd and 1st youngest pirates.",
    difficulty: "Hard",
    category: "Game Theory",
    readTime: 6,
    date: "2023-12-22",
    tags: ["game theory", "backward induction", "strategy"]
  },
  {
    id: 11,
    title: "The Secret Salary Problem",
    question:
      "There are a group of Quants sat across a circular table. They are all interested in the average salary of the group. Formulate a strategy to determine the average salary without any quant knowing the exact salary of another quant.",
    hint: "Work up from the simple cases i.e 2 pirates, 3 pirates ,etc.",
    answer:
      "Have the first quant generate a random number and add their salary to it. Tell it to the clockwise neighboring quant and have them add their salary to it. Continue the process until it gets back to the starting quant, then have him subtract the random number. Then divide by the number of quants to get the average salary.",
    difficulty: "Medium",
    category: "Cryptography",
    readTime: 3,
    date: "2023-12-20",
    tags: ["privacy", "cryptography", "mathematics"]
  },
];

const BrainTeasers = () => {
  const [showAnswers, setShowAnswers] = useState(
    Array(brainTeasers.length).fill(false)
  );
  const [showHints, setShowHints] = useState(
    Array(brainTeasers.length).fill(false)
  );

  const toggleAnswer = (index: number) => {
    setShowAnswers((prev) => {
      const updatedAnswers = [...prev];
      updatedAnswers[index] = !updatedAnswers[index];
      return updatedAnswers;
    });
  };

  const toggleHint = (index: number) => {
    setShowHints((prev) => {
      const updatedHints = [...prev];
      updatedHints[index] = !updatedHints[index];
      return updatedHints;
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
        {/* Header with Back Arrow and Centered Title */}
        <div className="relative flex justify-center items-center mb-16">
          <div className="absolute left-0">
            <BackButton />
          </div>
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg mb-4">
              Brain Teasers
            </h1>
          </div>
        </div>

        {/* Blog-style posts */}
        <div className="space-y-12">
          {brainTeasers.map((teaser, index) => (
            <motion.article
              key={teaser.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-md border border-gray-600/30 rounded-3xl p-8 md:p-10 shadow-xl transition-all duration-300 hover:border-green-400/40 hover:shadow-2xl group"
            >
              {/* Blog post header */}
              <header className="mb-6">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(teaser.difficulty)}`}>
                    {teaser.difficulty}
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-400/20 text-green-400">
                    {teaser.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <ScheduleIcon className="w-4 h-4" />
                    <span>{teaser.readTime} min read</span>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent group-hover:from-green-400 group-hover:to-emerald-400 transition-all duration-300">
                  {teaser.title}
                </h2>
              </header>

              {/* Question */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                  <PsychologyIcon className="w-5 h-5" />
                  Problem Statement
                </h3>
                <p className="text-lg text-gray-200 leading-relaxed whitespace-pre-line">
                  {teaser.question}
                </p>
              </div>

              {/* Hint section */}
              <div className="mb-6">
                <button
                  onClick={() => toggleHint(index)}
                  className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors mb-3"
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
                    className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-4"
                  >
                    <p className="text-green-200 italic">{teaser.hint}</p>
                  </motion.div>
                )}
              </div>

              {/* Answer section */}
              <div className="mb-6">
                <button
                  onClick={() => toggleAnswer(index)}
                  className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors mb-3"
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
                    className="bg-green-500/10 border border-green-500/30 rounded-lg p-4"
                  >
                    <h4 className="font-semibold text-green-300 mb-2">Solution:</h4>
                    <p className="text-green-200 leading-relaxed whitespace-pre-line">
                      {teaser.answer}
                    </p>
                  </motion.div>
                )}
              </div>

              {/* Action buttons */}
              {/* <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-600/30">
                <button
                  onClick={() => toggleAnswer(index)}
                  className="px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 text-white shadow-md hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  {showAnswers[index] ? "Hide Solution" : "Reveal Solution"}
                </button>
                <button
                  onClick={() => toggleHint(index)}
                  className="px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  {showHints[index] ? "Hide Hint" : "Get Hint"}
                </button>
              </div> */}
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrainTeasers;
