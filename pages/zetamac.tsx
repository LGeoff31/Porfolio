import {
  Grid,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  Fade,
} from "@mui/material";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Navbar from "./components/Navbar";
import BackButton from "./subcomponents/BackButton";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

// Array of brain teasers with questions and answers
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
  // Add more brain teasers here
];

const BrainTeasers = () => {
  const [showAnswers, setShowAnswers] = useState(
    Array(brainTeasers.length).fill(false)
  );

  // Toggle answer visibility for a specific question
  const toggleAnswer = (index: number) => {
    setShowAnswers((prev) => {
      const updatedAnswers = [...prev];
      updatedAnswers[index] = !updatedAnswers[index];
      return updatedAnswers;
    });
  };

  return (
    <>
      <Navbar />
      <BackButton />
      <Box
        sx={{
          background:
            "linear-gradient(180deg, rgb(36,36,36) 0%, rgb(26,26,26) 100%)",
          minHeight: "100vh",
          paddingBottom: "10rem",
          paddingLeft: { md: "11rem", sm: "4rem", xs: "2rem" },
          paddingRight: { md: "11rem", sm: "4rem", xs: "2rem" },
        }}
      >
        <Typography
          variant="h4"
          color="#fcb232"
          fontWeight="bold"
          fontSize={{ md: "3.5rem", xs: "2rem" }}
          sx={{
            justifyContent: "center",
            margin: "0 auto",
            display: "flex",
            marginBottom: "4rem",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          ZetaMac
        </Typography>
        <Grid container spacing={4} flexDirection={"column"}>
          <Typography
            color="white"
            fontWeight="bold"
            variant="h4"
            marginTop="1rem"
          >
            Summary
          </Typography>
          <Typography color="white">
            Zetamac is an online website people test their mental math abilities
            in addition, subtraction, multiplication, and division within a 120s
            time limit.
          </Typography>
          <Typography color="white">
            My goal score is to average 80 but I&apos;m quite the ways off so
            I&apos;ll be documenting my progression and new found strategies as
            I go.
          </Typography>
          <Typography color="white">
            The nice thing is that all answers will be nice integers, meaning
            things like division are guaranteed to result nicely into integers.
          </Typography>
          <Typography color="white">
            This is what allows some of my arithmetic strategies to work.
          </Typography>
          <Typography
            color="white"
            fontWeight="bold"
            variant="h4"
            marginTop="1rem"
          >
            Strategy
          </Typography>
          <Typography color="white">
            Before I get into my strategy for each of the four operations, it is
            a very good idea to know you 12x12 times table by heart. This is
            what will save you the most time.
          </Typography>
          <Typography
            color="white"
            fontWeight="bold"
            variant="h6"
            marginTop="1rem"
          >
            Addition
          </Typography>
          <Typography color="white">
            This is most often the easier type. The quickest way for me is to
            determine the last digit by summing the last digits and intuitively
            getting the rest.
          </Typography>
          <Typography color="white">
            For example, 38 + 55, I know it should end in a 3, and have a carry
            over. Then I glance at the tens digits, 3 and 5 and quickly add my
            carry over to get to 9.
          </Typography>
          <Typography
            color="white"
            fontWeight="bold"
            variant="h6"
            marginTop="1rem"
          >
            Subtraction
          </Typography>
          <Typography color="white">
            This is a bit trickier than addition but quite similar. If it is a 2
            digit subtract 2 digit, I will use a similar strategy determining
            what ones digit I need then intuitively guess the tens digit.
          </Typography>
          <Typography color="white">
            For example, 83 - 69. I know the ones digit should be 4, and
            intuitively I can see the tens digit should be a 1. So 14. I
            realized this intuitive part gets much quicker with more practice.
          </Typography>
          <Typography color="white">
            If it&apos;s a 3 digit subtract 2 digit, I will determine what I
            need to add to that 2 digit to make it 100, then determine from 100
            how much I need to add to get that 3 digit number.
          </Typography>
          <Typography color="white">
            For example, 132 - 79. I know I need 21 to make 79 become 100. Then
            I add 21 + 32 = 53 to get my answer.
          </Typography>
          <Typography
            color="white"
            fontWeight="bold"
            variant="h6"
            marginTop="1rem"
          >
            Multiplication
          </Typography>
          <Typography color="white">
            Thankfully, Zetamac default controls limit the first number to 2-12
            and the second to 2-100.
          </Typography>
          <Typography color="white">
            Most often a single digit multiplied by the second number is
            solvable by rounding the second number to a nice value, then
            subtracting / adding as needed.
          </Typography>
          <Typography color="white">
            For example, 9x74. Here it is actually easier to round the single
            digit to 10 then subtract. So 740 - 74 = 666.
          </Typography>
          <Typography color="white">
            Now take, 7x74. I break it up to a nice number, 7x70=480, then add
            7x4=28. So I get 508.
          </Typography>
          <Typography color="white">
            Now the challenging aspect comes when both digits are two digits.
          </Typography>

          <Typography color="white">
            If the first digit is 11, there is a neat trick. Add the digits in
            the second number, and insert that value in the middle of those two
            numbers, that is the answer.
          </Typography>
          <Typography color="white">
            For example, 11x63. 6+3=9, so the answer is 693. Now consider,
            11x84. 8+4=12, so now we must do a carry over and insert the 2 in
            the middle. So it becomes 924.
          </Typography>
          <Typography color="white" fontStyle="italic">
            Why does this work?
          </Typography>
          <Typography color="white">
            Under the hood, to solve 11x63, it is doing 10x63 + 63. We know
            10x63 will always result in the number ending in 0. Then adding 63
            on will guarantee the last digit stays the same. The middle digit is
            calculated by adding 6 + 3 which is why the middle digit is the sum
            of digits.
          </Typography>
          <Typography color="white">
            If the first digit is 12, I employ the same strategy in single
            digits. Round either to a nice number, multiply and add/subtract
            accordingly.
          </Typography>
          <Typography color="white">
            For example, 12x45 = 12x50 - 12x5 = 600 - 60 = 540.
          </Typography>
          <Typography
            color="white"
            fontWeight="bold"
            variant="h6"
            marginTop="1rem"
          >
            Division
          </Typography>
          <Typography color="white">
            The constraints here in Zetamac&apos;s default control is the same
            in multiplication, just in reverse. So 2-100 number divided by 2-12.
          </Typography>
          <Typography color="white">
            This mean we can employ a lot of the same strategies.
          </Typography>
          <Typography color="white">
            Like when dividing by 11 the answer is either the two outer digits
            or because of the carry over, the two outer digits but subtract the
            leftmost digit by 1.
          </Typography>
          <Typography color="white">
            For example, 374 / 11 = 34. This is simple case without carry over.
          </Typography>
          <Typography color="white">
            Now consider, 974 / 11 = 84. Here whenever we see the hundreds digit
            greater than or equal to the tens digit, subtract it by 1 since
            there was a carry over. So since 9 &gt; 7, our answer is 84 instead
            of 94.
          </Typography>
          <Typography color="white">
            I want to preface again that this strategy only works since Zetamac
            answers are all integers. You cannot go out there using this method
            in the real world where the answer might be a decimal.
          </Typography>
          <Typography color="white">
            Now for more general divisions, my strategy is to go up to a nice
            number and then add for any offsets. This is best shown through
            example.
          </Typography>
          <Typography color="white">
            For example, 540/12. I work backwards so I start at 12, I know 10
            amounts of 12 will be 120. I know 40 amounts of 12 will be 480. I
            need to make up 60 more, which I know is 5 amounts of 12. Hence the
            answer is 45.
          </Typography>
          <Typography
            color="white"
            fontWeight="bold"
            variant="h6"
            marginTop="1rem"
          >
            Conclusion & Thoughts
          </Typography>
          <Typography color="white">
            I&apos;m going to continue doing a Zetamac a day while keeping track
            of my score. I&apos;ve been doing it for around 2 weeks now,
            averaging 30 with a peak of 41.
          </Typography>
          <Typography color="white">
            I think if you were going to learn anything from school, mental math
            is often the one that shows up most practically in real-life, which
            is one of my motivations behind it.
          </Typography>
          <Typography color="white">
            Think calculating percentages for tax, convering between hourly and
            salary pay, speeding up matrix multiplication on tests with minimal
            mistakes, competing your friends, etc.
          </Typography>
        </Grid>
      </Box>
    </>
  );
};

export default BrainTeasers;
