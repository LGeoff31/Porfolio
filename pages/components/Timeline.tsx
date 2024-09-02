import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
const timelineData = [
  {
    date: "May",
    description: `- Welcomed with a beautiful T-shirt, bag, and computer!
                  - Onboarded with the team and technologies
                  - Had lunch with the fun interns`,
  },
  {
    date: "June",
    description: `- Learned Django framework and unit testing
    - Company picnic and board game night
    - Completed a variety tickets (HTML support, payment method prioritization, localization)`,
  },
  {
    date: "July",
    description: `- Started Intern project: Tracking platform for RideCo vehicles
                    - 3 Trapped Escape rooms with an 100% success rate
                    - 10 year anniversary celebration for RideCo celebration`,
  },
  {
    date: "August",
    description: `- First time applying algorithms to real-world events 
                      - Wrote a report and gave a demo of the project
                      - Had a team lunch and baseball, tennis, soccer events`,
  },
];

const Timeline = () => {
  return (
    <Grid container sx={{ background: "rgb(36,36,36)", padding: "2rem" }}>
      <Grid item xs={12} display="flex" justifyContent="center">
        <Box
          sx={{
            width: { xs: "90%", sm: "80%", md: "70%" },
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              height: "100%",
              width: "4px",
              backgroundColor: "#fcb232",
              display: { md: "block", xs: "none" },
            }}
          />
          {timelineData.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
                position: "relative",
                marginBottom: "3rem",
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "45%" },
                  padding: "1rem 2rem",
                  backgroundColor: "rgba(251, 194, 135, 0.16)",
                  borderRadius: "1rem",
                  border: "1px solid #fcb232",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Typography
                  variant="h6"
                  color="#fcb232"
                  fontWeight="bold"
                  sx={{ marginBottom: "0.5rem" }}
                >
                  {item.date}
                </Typography>
                <Typography color="white" sx={{ whiteSpace: "pre-line" }}>
                  {item.description}
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left:
                    index % 2 === 0 ? "calc(50% - 1rem)" : "calc(50% - 0.2rem)",
                  transform: "translateY(-50%)",
                  backgroundColor: "#fcb232",
                  borderRadius: "50%",
                  height: "20px",
                  width: "20px",
                  zIndex: 2,
                  border: "4px solid rgb(36,36,36)",
                  display: { md: "block", xs: "none" },
                }}
              />
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Timeline;
