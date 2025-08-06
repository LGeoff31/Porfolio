import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import BackButton from "./subcomponents/BackButton";

const Zetamac = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pb-20 relative overflow-x-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl z-0 animate-float pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl z-0 animate-float pointer-events-none" />
      <Navbar useScrollLinks={false} />
      <div className="max-w-4xl mx-auto pt-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative mb-12 flex justify-center items-center">
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <BackButton />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg"
          >
            Zetamac
          </motion.h1>
        </div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={cardVariants}
            className="w-full bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-md border border-yellow-400/20 rounded-2xl p-10 md:p-12 shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Summary
            </h2>
            <p className="text-lg text-gray-200 mb-2">
              Zetamac is a popular online website as a benchmark for mental
              math.
            </p>
            <p className="text-lg text-gray-200 mb-2">
              It consists of solving as many addition, subtraction,
              multiplication, and division problems within 120s.
            </p>
            <p className="text-lg text-gray-200 mb-2">
              My goal score is to reach a score of 80, granted I&apos;m quite
              the ways off so I&apos;ll be documenting my progression and new
              found strategies as I go.
            </p>
            <p className="text-lg text-gray-200 mb-2">
              I wanted to keep track of my progress so I created this website
              which stores and graphs my progress. Check it out:
              https://datamac.vercel.app/.
            </p>
          </motion.div>
          <motion.div
            variants={cardVariants}
            className="w-full bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-md border border-yellow-400/20 rounded-2xl p-10 md:p-12 shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Strategies
            </h2>
            <p className="text-lg text-gray-200 mb-2">
              First things first, ensure you can answer anything within the
              12x12 times table in 1s. Also remember, getting quicker comes from
              a lot of intuition that you build up through practice.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-2 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Addition
            </h3>
            <p className="text-gray-200 mb-2">
              This is the easiest type. Typically summing digits left to right
              is always faster than right to left. It allows you to start typing
              the answer immediately, and you only need to worry about off by 1
              fluctuations due to carry over.
            </p>
            <p className="text-gray-200 mb-2">
              For example, 38 + 55, I know it should start with an 8, then I see
              the ones digits sum to 13, so I quickly change my answer to 93.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-2 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Subtraction
            </h3>
            <p className="text-gray-200 mb-2">
              This is a bit trickier than addition but quite similar. If it is a
              2 digit subtract 2 digit, I will use the strategy as from
              addition, working right to left and being clever about carry
              overs. Another strategy is seeing how much you need to add to the
              smaller number to get to the larger value.
            </p>
            <p className="text-gray-200 mb-2">
              For example, 83 - 69. I can see I just need to add 14 to turn 69
              into 83, so 14 is my answer.
            </p>
            <p className="text-gray-200 mb-2">
              If it&apos;s a 3 digit subtract 2 digit, I will determine what I
              need to add to that 2 digit to make it 100, then determine from
              100 how much I need to add to get that 3 digit number.
            </p>
            <p className="text-gray-200 mb-2">
              For example, 132 - 79. I know I need 21 to make 79 become 100.
              Then I add 21 + 32 = 53 to get my answer.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-2 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Multiplication
            </h3>
            <p className="text-gray-200 mb-2">
              Most often a single digit multiplied by the second number is
              solvable by rounding the second number to a nice value, then
              subtracting / adding as needed.
            </p>
            <p className="text-gray-200 mb-2">
              For example, 9x74. Here it is actually easier to round the single
              digit to 10 then subtract. So 740 - 74 = 666. Or breaking the
              problem to 9x70 + 9x4 = 666 is another strategy, sometimes faster
              since addition is less brain intensive that subtraction.
            </p>
            <p className="text-gray-200 mb-2">
              Now the challenging aspect comes when both digits are two digits.
            </p>
            <p className="text-gray-200 mb-2">
              If the first number is 11, add the digits in the second number,
              and insert that value in the middle of those two numbers.
            </p>
            <p className="text-gray-200 mb-2">
              For example, 11x63. 6+3=9, so the answer is 693. Now consider,
              11x84. 8+4=12, so now we must do a carry over and insert the 2 in
              the middle. So it becomes 924.
            </p>
            <p className="italic text-gray-300 mb-2">Why does this work?</p>
            <p className="text-gray-200 mb-2">
              Under the hood, to solve 11x63, it is doing 10x63 + 63. We know
              10x63 will always result in the number ending in 0. Then adding 63
              on will guarantee the last digit stays the same. The middle digit
              is calculated by adding 6 + 3 which is why the middle digit is the
              sum of digits.
            </p>
            <p className="text-gray-200 mb-2">
              If the first number is 12, I typically break it down into 10 x
              number2 + 2 x number2.
            </p>
            <p className="text-gray-200 mb-2">
              For example, 12x45 = 10 x 45 + 2 x 45 = 540.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-2 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Division
            </h3>
            <p className="text-gray-200 mb-2">
              When dividing by 11 the answer is either the two outer digits or
              because of the carry over, the two outer digits but subtract the
              leftmost digit by 1.
            </p>
            <p className="text-gray-200 mb-2">
              For example, 374 / 11 = 34. This is simple case without carry
              over.
            </p>
            <p className="text-gray-200 mb-2">
              Now consider, 974 / 11 = 84. Here whenever we see the hundreds
              digit greater than or equal to the tens digit, subtract it by 1
              since there was a carry over. So since 9 &gt; 7, our answer is 84
              instead of 94.
            </p>
            <p className="text-gray-200 mb-2">
              When dividing a 3 digit number by 9, there is a clever trick which
              I will show by example.
            </p>
            <p className="text-gray-200 mb-2">
              Consider 342/9. The answer is comprised of two digits, the first
              is floor(34/9), the second is 10-2. So the answer is 38. In other
              words, the first digit is how many times 9 goes into the two most
              significant digits, and the second digit is 10 - least significant
              digit.
            </p>
            <p className="text-gray-200 mb-2">
              I want to preface again these strategies work because Zetamac
              ensures results are always integers, so these rules aren&apos;t
              generalizable to any values.
            </p>
            <p className="text-gray-200 mb-2">
              Another important strategy, for the smaller number, memorize the
              sequence of 10xnumber, 20xnumber, etc and also the multiples of a
              number.
            </p>
            <p className="text-gray-200 mb-2">
              For example, 540/12. I know instantly that 480 = 40 x 12. Now I
              need an additional 60 which is 12x5. So the answer is 45.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Zetamac;
