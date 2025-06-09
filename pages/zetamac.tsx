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
        <Grid container spacing={4}>
          <Typography color="white" fontWeight="bold">
            Coming soon...
          </Typography>
        </Grid>
      </Box>
    </>
  );
};

export default BrainTeasers;
