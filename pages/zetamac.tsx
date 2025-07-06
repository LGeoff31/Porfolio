import React from "react";
import Navbar from "./components/Navbar";
import BackButton from "./subcomponents/BackButton";

const Zetamac = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pb-20">
      <Navbar useScrollLinks={false} />
      <div className="max-w-3xl mx-auto pt-24 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-12 gap-4">
          {/* <div className="flex-shrink-0">
            <BackButton />
          </div> */}
          <h1 className="flex-1 text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
            Zetamac
          </h1>
        </div>
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-md border border-yellow-400/20 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Summary
            </h2>
            <p className="text-lg text-gray-200 mb-2">
              Zetamac is an online website people test their mental math
              abilities in addition, subtraction, multiplication, and division
              within a 120s time limit.
            </p>
            <p className="text-lg text-gray-200 mb-2">
              My goal score is to average 80 but I&apos;m quite the ways off so
              I&apos;ll be documenting my progression and new found strategies
              as I go.
            </p>
            <p className="text-lg text-gray-200 mb-2">
              The nice thing is that all answers will be nice integers, meaning
              things like division are guaranteed to result nicely into
              integers.
            </p>
            <p className="text-lg text-gray-200">
              This is what allows some of my arithmetic strategies to work.
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-md border border-yellow-400/20 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Strategy
            </h2>
            <p className="text-lg text-gray-200 mb-2">
              Before I get into my strategy for each of the four operations, it
              is a very good idea to know your 12x12 times table by heart. This
              is what will save you the most time.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-2 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Addition
            </h3>
            <p className="text-gray-200 mb-2">
              This is most often the easier type. The quickest way for me is to
              determine the last digit by summing the last digits and
              intuitively getting the rest.
            </p>
            <p className="text-gray-200 mb-2">
              For example, 38 + 55, I know it should end in a 3, and have a
              carry over. Then I glance at the tens digits, 3 and 5 and quickly
              add my carry over to get to 9.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-2 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Subtraction
            </h3>
            <p className="text-gray-200 mb-2">
              This is a bit trickier than addition but quite similar. If it is a
              2 digit subtract 2 digit, I will use a similar strategy
              determining what ones digit I need then intuitively guess the tens
              digit.
            </p>
            <p className="text-gray-200 mb-2">
              For example, 83 - 69. I know the ones digit should be 4, and
              intuitively I can see the tens digit should be a 1. So 14. I
              realized this intuitive part gets much quicker with more practice.
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
              Thankfully, Zetamac default controls limit the first number to
              2-12 and the second to 2-100.
            </p>
            <p className="text-gray-200 mb-2">
              Most often a single digit multiplied by the second number is
              solvable by rounding the second number to a nice value, then
              subtracting / adding as needed.
            </p>
            <p className="text-gray-200 mb-2">
              For example, 9x74. Here it is actually easier to round the single
              digit to 10 then subtract. So 740 - 74 = 666.
            </p>
            <p className="text-gray-200 mb-2">
              Now take, 7x74. I break it up to a nice number, 7x70=490, then add
              7x4=28. So I get 518.
            </p>
            <p className="text-gray-200 mb-2">
              Now the challenging aspect comes when both digits are two digits.
            </p>
            <p className="text-gray-200 mb-2">
              If the first digit is 11, there is a neat trick. Add the digits in
              the second number, and insert that value in the middle of those
              two numbers, that is the answer.
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
              If the first digit is 12, I employ the same strategy in single
              digits. Round either to a nice number, multiply and add/subtract
              accordingly.
            </p>
            <p className="text-gray-200 mb-2">
              For example, 12x45 = 12x50 - 12x5 = 600 - 60 = 540.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-2 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
              Division
            </h3>
            <p className="text-gray-200 mb-2">
              The constraints here in Zetamac&apos;s default control is the same
              in multiplication, just in reverse. So 2-100 number divided by
              2-12.
            </p>
            <p className="text-gray-200 mb-2">
              This mean we can employ a lot of the same strategies.
            </p>
            <p className="text-gray-200 mb-2">
              Like when dividing by 11 the answer is either the two outer digits
              or because of the carry over, the two outer digits but subtract
              the leftmost digit by 1.
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
              I want to preface again that this strategy only works since
              Zetamac answers are all integers. You cannot go out there using
              this method in the real world where the answer might be a decimal.
            </p>
            <p className="text-gray-200 mb-2">
              Now for more general divisions, my strategy is to go up to a nice
              number and then add for any offsets. This is best shown through
              example.
            </p>
            <p className="text-gray-200 mb-2">
              For example, 540/12. I work backwards so I start at 12, I know 10
              amounts of 12 will be 120. I know 40 amounts of 12 will be 480. I
              need to make up 60 more, which I know is 5 amounts of 12. Hence
              the answer is 45.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zetamac;
