import {
  Grid,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Navbar from "./components/Navbar";
import BackButton from "./subcomponents/BackButton";

// Array of brain teasers with questions and answers
const brainTeasers = [
  {
    question:
      "Two ropes take 1h each to burn completely, yet the burning process is not uniform (Ex. 30min does not mean the fire is in the middle). How would you measure 45min?",
    hint: "You may light the rope from both ends, when they intersect, half the time has passed..",
    gif: "/burning_rope.gif", // Path to the GIF in the public folder
  },
  {
    question:
      "There are 10 bags with 100 identical coins. In all bags but one, each coin weights 10g. However, all the coins in the counterfeit bag weighs 9g or 11g. Find the counterfeit bag using 1 usage of a digital scale that tells you exact weight.",
    hint: "Try removing a certain amount of coins from each bag and comparing the scale weight with the expected weight,",
  },
  {
    question:
      "I have keys but no locks. I have space but no room. You can enter, but you can't go outside. What am I?",
    hint: "A keyboard",
  },
  {
    question: "What has to be broken before you can use it?",
    hint: "An egg",
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
          background: "rgb(36,36,36)",
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
          }}
        >
          Brain Teasers
        </Typography>
        <Grid container spacing={3}>
          {brainTeasers.map((teaser, index) => (
            <Grid item xs={12} key={index}>
              <Card
                sx={{
                  backgroundColor: "#1a1a1a",
                  color: "#fff",
                  borderRadius: "8px",
                  padding: "1rem",
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {teaser.question}
                  </Typography>
                  {showAnswers[index] && (
                    <>
                      <Typography
                        variant="body2"
                        color="gray"
                        sx={{ fontStyle: "italic", marginTop: "0.5rem" }}
                      >
                        Hint: {teaser.hint}
                      </Typography>
                      {/* {teaser.gif && (
                        <Box
                          component="img"
                          src={teaser.gif}
                          alt="Burning rope animation"
                          sx={{
                            width: "100%",
                            maxWidth: "200px",
                            marginTop: "1rem",
                            borderRadius: "8px",
                          }}
                        />
                      )} */}
                    </>
                  )}
                  <Button
                    sx={{
                      marginTop: "1rem",
                      background: "rgba(251, 194, 135, 0.16)",
                      color: "#fcb232",
                      border: "1px solid black",
                      borderRadius: "10rem",
                      transition: "transform 0.3s",
                      padding: "0.5rem",
                      "&:hover": {
                        background: "rgba(251, 194, 135, 0.16)",
                        transform: "scale(1.1)",
                      },
                    }}
                    onClick={() => toggleAnswer(index)}
                  >
                    {showAnswers[index] ? "Hide Hint" : "Show Hint"}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default BrainTeasers;
