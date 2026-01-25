import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import BackButton from "./subcomponents/BackButton";
import CalculateIcon from "@mui/icons-material/Calculate";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  examples?: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Introduction",
    content: `Zetamac is widely-known website in the quant space, designed to test for mental math speed. The format, 120s to solve as many addition, subtraction, multiplication, and division problems.
    My motivation behind it, primarily because my brother challenged me but also I think it's a fun and useful skills that is applicable day-to-day. Want to prematurely calculate your groceries tax? Want to estimate your restaurant bill after tax and tip, so you can confront the waiter otherwise? Mental math is the way to go! 
My goal on the site is to hit 100 problems in 120s. My current best, 77. 
I even build my own version of zetamac! But this one tracks performance, graphs it, and has a community leaderboard! Check it out, https://datamac.vercel.app/.
Now, I'll outline some of the strategies I've learned so far so you too can get faster :)`,
    date: "2024-01-20"
  },
  {
    id: 2,
    title: "Addition",
    content: `This is the easiest type of problem in Zetamac. Primarily because our brains have done so many of these, compared to others like subtraction. The key strategy is to sum digits from left to right, which is always faster than right to left. This approach allows you to start typing the answer immediately while simultaneously calculating for the next digit.

**The Strategy:**
- Start with the leftmost digits
- Work your way right
- Adjust for carry overs as needed

**Example Walkthrough:**
For 38 + 55:
1. I know it should start with an 8 (3+5)
2. Then I see the ones digits sum to 13 (8+5)
3. So I quickly change my answer to 93

This method is faster because you can begin typing while still processing the remaining digits.`,
    date: "2024-01-18",
    examples: ["38 + 55 = 93", "67 + 89 = 156", "124 + 235 = 359"]
  },
  {
    id: 3,
    title: "Subtraction",
    content: `Subtraction is a bit trickier than addition but follows similar principles. For 2-digit subtract 2-digit problems, I use the same left-to-right strategy as addition, and being clever about carry overs.

**Strategy 1: Direct Subtraction**
Work from right to left, handling carry overs as they come.

**Strategy 2: Complement Method**
Instead of subtracting, think about how much you need to add to the smaller number to get the larger value.

**Example Walkthrough:**
For 83 - 69:
- I can see I just need to add 14 to turn 69 into 83
- So 14 is my answer

**For 3-digit subtract 2-digit:**
1. Determine what you need to add to the 2-digit number to make it 100
2. Then determine from 100 how much you need to add to get the 3-digit number

**Example:**
For 132 - 79:
1. I know I need 21 to make 79 become 100
2. Then I add 21 + 32 = 53 to get my answer`,
    date: "2024-01-16",
    examples: ["83 - 69 = 14", "132 - 79 = 53", "245 - 178 = 67"]
  },
  {
    id: 4,
    title: "Multiplication",
    content: `Most single-digit multiplication problems can be solved by rounding the second number to a nice value, then subtracting or adding as needed.

**Strategy 1: Rounding Method**
Round one number to make the calculation easier, then adjust.

**Example:**
For 9 × 74:
- Round 9 to 10: 10 × 74 = 740
- Subtract 74: 740 - 74 = 666

**Strategy 2: Breaking Down**
Break the problem into easier parts.

**Example:**
For 9 × 74:
- 9 × 70 = 630
- 9 × 4 = 36
- 630 + 36 = 666

This is sometimes faster since addition is less brain-intensive than subtraction.

**The 11 Trick:**
When multiplying by 11, add the digits of the second number and insert that value in the middle.

**Example:**
For 11 × 63:
- 6 + 3 = 9
- Insert 9 in the middle: 693

**With Carry Over:**
For 11 × 84:
- 8 + 4 = 12
- Insert 2 in the middle, carry 1: 924

**Why This Works:**
11 × 63 = 10 × 63 + 63 = 630 + 63 = 693
The middle digit is the sum of the original digits because we're adding the number to its 10x version.`,
    date: "2024-01-14",
    examples: ["9 × 74 = 666", "11 × 63 = 693", "11 × 84 = 924"]
  },
  {
    id: 5,
    title: "Two-Digit Multiplication",
    content: `When both numbers are two digits, the strategies become more complex but still manageable with practice.

**Strategy 1: Breaking Down by 10s**
Break the first number into 10s and units, then multiply each part.

**Example:**
For 12 × 45:
- 10 × 45 = 450
- 2 × 45 = 90
- 450 + 90 = 540

**Strategy 2: The 12 Trick**
For 12 × any number:
- 12 × n = 10 × n + 2 × n

**Memorization Strategy:**
For smaller numbers, memorize sequences of multiples:
- 10×, 20×, 30×, etc.
- Also memorize the multiples of common numbers

**Example:**
For 540 ÷ 12:
- I know instantly that 480 = 40 × 12
- I need an additional 60, which is 12 × 5
- So the answer is 45

**Important Note:**
These strategies work because Zetamac ensures results are always integers, so these rules aren't generalizable to all values.`,
    date: "2024-01-12",
    examples: ["12 × 45 = 540", "15 × 67 = 1005", "23 × 56 = 1288"]
  },
  {
    id: 6,
    title: "Division Shortcuts: The 11 and 9 Tricks",
    content: `Division in Zetamac can be made much faster with specific tricks for common divisors.

**The 11 Division Trick:**
When dividing by 11, the answer is either the two outer digits, or (due to carry over) the two outer digits with the leftmost digit reduced by 1.

**Example 1 (No Carry Over):**
374 ÷ 11 = 34
- Take the first two digits: 37
- Take the last digit: 4
- Result: 34

**Example 2 (With Carry Over):**
974 ÷ 11 = 84
- When the hundreds digit ≥ tens digit, subtract 1 from the hundreds digit
- Since 9 > 7, our answer is 84 (not 94)

**The 9 Division Trick:**
For 3-digit numbers divided by 9:
1. First digit = floor(first two digits ÷ 9)
2. Second digit = 10 - last digit

**Example:**
342 ÷ 9 = 38
- First digit: floor(34 ÷ 9) = 3
- Second digit: 10 - 2 = 8
- Result: 38

**Why This Works:**
The first digit represents how many times 9 goes into the two most significant digits, and the second digit is 10 minus the least significant digit.

**General Strategy:**
Memorize sequences of multiples for common divisors to quickly identify patterns and solutions.`,
    date: "2024-01-10",
    examples: ["374 ÷ 11 = 34", "974 ÷ 11 = 84", "342 ÷ 9 = 38"]
  }
];

const Zetamac = () => {

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <h4 key={index} className="text-lg font-semibold text-yellow-300 mt-4 mb-2">
            {line.slice(2, -2)}
          </h4>
        );
      }
      if (line.startsWith('- ')) {
        return (
          <li key={index} className="text-gray-200 ml-4 mb-1">
            {line.slice(2)}
          </li>
        );
      }
      if (line.startsWith('For ') && line.includes(':')) {
        return (
          <p key={index} className="text-blue-300 font-medium mt-3 mb-2">
            {line}
          </p>
        );
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }

      // Handle lines with URLs
      if (line.includes('https://')) {
        const parts = line.split(/(https:\/\/[^\s]+)/);
        return (
          <p key={index} className="text-gray-200 mb-2 leading-relaxed">
            {parts.map((part, i) => {
              if (part.startsWith('https://')) {
                return (
                  <a
                    key={i}
                    href={part}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
                  >
                    {part}
                  </a>
                );
              }
              return part;
            })}
          </p>
        );
      }

      return (
        <p key={index} className="text-gray-200 mb-2 leading-relaxed">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pb-20 relative overflow-x-hidden">
      {/* Background blobs removed */}
      <Navbar useScrollLinks={false} />
      <div className="max-w-4xl mx-auto pt-24 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="relative mb-16 flex justify-center items-center">
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <BackButton />
          </div>
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg mb-4"
            >
              Zetamac Strategies
            </motion.h1>
          </div>
        </div>

        {/* Blog posts */}
        <div>
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Blog post header */}
              <header className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent group-hover:from-yellow-400 group-hover:to-pink-400 transition-all duration-300">
                  {post.title}
                </h2>
              </header>

              {/* Full content */}
              <div className="mb-6">
                <div className="text-gray-200 leading-relaxed space-y-4">
                  {formatContent(post.content)}
                  {post.examples && (
                    <div className="mt-6 p-4">
                      <h4 className="text-blue-300 font-semibold mb-3 flex items-center gap-2">
                        <CalculateIcon className="w-5 h-5" />
                        Examples
                      </h4>
                      <div className="space-y-2">
                        {post.examples.map((example, exampleIndex) => (
                          <div key={exampleIndex} className="text-blue-200 font-mono text-sm">
                            {example}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Post footer */}
              {post.examples && (
                <div className="flex items-center gap-1 text-gray-400 text-sm pt-4 border-t border-gray-600/30">
                  <CalculateIcon className="w-4 h-4" />
                  <span>{post.examples.length} examples included</span>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Zetamac;
