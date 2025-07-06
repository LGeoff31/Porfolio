import React, { useState } from "react";
import Navbar from "./components/Navbar";
import BackButton from "./subcomponents/BackButton";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

const brainTeasers = [
  {
    question:
      "There are 100 lockers initially all closed. You do 100 passes on the lockers where on the ith pass, you toggle every ith locker. Which lockers will remain open at the end.",
    hint: "Consider a locker i. The number of times this locker is be toggled is the number of divisors of i",
  },
  {
    question:
      "Two ropes take 1h each to burn completely. You have a lighter. How would you track exactly 45 minutes.\nNote, the burning process is not uniform.",
    hint: "You may light the rope from both ends, when they intersect, half the time has passed.",
  },
  {
    question:
      "There are 10 bags with 100 identical coins. Each bag contain 10g coins except one bag, which contains all 11g coins. Find the counterfeit bag using 1 usage of a digital scale that tells you exact weight.",
    hint: "Try placing on the scale a certain amount of coins from each bag and comparing the scale weight with the expected weight,",
  },
  {
    question:
      "There are 100 tigers and 1 sheep. If a tiger eats a sheep, it will become a sheep. A tiger will eat the sheep only if it knows it won't be eaten by another tiger, otherwise it wouldn't eat the sheep. Will the initial sheep be eaten?",
    hint: "Consider the case when there is only 1 tiger and 1 sheep. Now 2 tigers and 1 sheep. Now 3 tigers and 1 sheep. You can find a recurrence pattern here.",
  },
  {
    question:
      "You're trapped in a circular dark cave with torches spread across the wall, randomly lit or not lit. You can toggle a torch on and off. You can move clockwise or counterclockwise. Assuming you have infinite time and memory, how would you find the number of torches?",
    hint: "To be certain you've looped around the cave, turn the first torch on. Then go to the 2nd torch and turn it off. Go back to 1st torch and ensure it's still on. Continue the process. When you turn off the ith torch and return to the 1st torch and see it off, you know you've reached a cycle.",
  },
  {
    question:
      "There are 9 rocks of equal weight, except one which is slightly heavier. You have a balance scale. What is the minimum number of times you need to use the scale to find the heavier rock?",
    hint: "Divide the rocks into 3 groups of 3. After using the scale, you will narrow down the heavier rock to 3 rocks. Now, divide the 3 rocks into 3 groups of 1. Now you've found it in 2 uses. Note with n rocks, it will take approx log3(n) uses.",
  },
  {
    question:
      "You have a bowl with 100 noodles. You can connect the end of a noodle to any other noodle, even itself. After connecting the ends of all noodles, what is the expected number of noodle loops?",
    hint: "Consider the case when there is only 1 noodle. Now 2 noodles. Now 3 noodles. You can find a recurrence pattern here.",
  },
  {
    question:
      "You and 3 others are trying to escape zombies in the middle of the night. You must cross a bridge to escape. You have 1 flashlight, which must be used when crossing the bridge. The time it takes each of you to cross is 1m, 2m, 5m, 10m. Only at most two of you can cross the bridge at a time. How do you cross the bridge in 17 minutes?",
    hint: "Have the 5m and 10m go together to save time. Use the 1m and 2m as the main transporters back for the flashlight. Start with 1m and 2m going first.",
  },
  {
    question:
      "There are 25 horses. You can only race 5 horses at a time. You don't have a stopwatch. What is the least number of races you need to find the fastest horse?",
    hint: "Divide the horses into 5 groups of 5. Race the groups against each other. Now you know the fastest from each group. Now race the 5 horses in the fastest group against each other to find the fastest horse. Now you only need 2 more races to find the second and third fastest horses.",
  },
  {
    question:
      "There are 5 pirates and 100 coins. To divide the loot, the most senior pirate will propose a distribution. Then a vote will take place. If at least 50% of pirates agree, it will proceed, otherwise, the senior pirate will be thrown off and the process is continued until an agreed distribution. Assuming all pirates are rational, how will the coins be divided in the end? ",
    hint: "Work up from the simple cases i.e 2 pirates, 3 pirates ,etc.",
  },
];

const BrainTeasers = () => {
  const [showAnswers, setShowAnswers] = useState(
    Array(brainTeasers.length).fill(false)
  );

  const toggleAnswer = (index: number) => {
    setShowAnswers((prev) => {
      const updatedAnswers = [...prev];
      updatedAnswers[index] = !updatedAnswers[index];
      return updatedAnswers;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pb-20">
      <Navbar useScrollLinks={false} />
      <BackButton />
      <div className="max-w-3xl mx-auto pt-24 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
          Brain Teasers
        </h1>
        <div className="space-y-8">
          {brainTeasers.map((teaser, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-md border border-yellow-400/20 rounded-2xl p-8 shadow-lg transition-all duration-300 hover:border-yellow-400/60 group"
            >
              <div className="mb-4 text-xl md:text-2xl font-semibold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent whitespace-pre-line">
                {teaser.question}
              </div>
              {showAnswers[index] && (
                <div className="flex items-center gap-2 mt-4 animate-fade-in">
                  <LightbulbIcon className="text-yellow-400" />
                  <span className="text-lg text-yellow-200/90">
                    {teaser.hint}
                  </span>
                </div>
              )}
              <button
                className="mt-6 px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 text-white shadow-md hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                onClick={() => toggleAnswer(index)}
              >
                {showAnswers[index] ? "Hide Hint" : "Show Hint"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrainTeasers;
