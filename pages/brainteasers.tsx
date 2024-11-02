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
    answer:
      "Light one rope from both ends and the other from one end. When the first rope is burned out (30 mins), light the other end of the second rope. It will take 15 more minutes to burn completely, totaling 45 minutes.",
    gif: "/burning_rope.gif", // Path to the GIF in the public folder
  },
  {
    question:
      "You measure my life in hours and I serve you by expiring. I'm quick when I'm thin and slow when I'm fat. The wind is my enemy.",
    answer: "A candle",
  },
  {
    question:
      "I have keys but no locks. I have space but no room. You can enter, but you can't go outside. What am I?",
    answer: "A keyboard",
  },
  {
    question: "What has to be broken before you can use it?",
    answer: "An egg",
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
                        Hint: {teaser.answer}
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
