import { Grid, Typography, Button, Box } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Navbar from "./components/Navbar";

const timelineData = [
  {
    date: "May",
    description: `- Joined the team and was welcomed with a beautiful T-shirt, bag, and computer!
                    - Setup with IT and development environment, attended my first stand up!
                    - Lunch with the interns, butchered my opening introduction at company all hands meeting`,
  },
  {
    date: "June",
    description: `- First ticket which was adding default values to a textfield
                    - Lots of ping pong with interns + company-wide events including a picnic
                    - Completing variety tickets (HTML support, payment method prioritization, localization) `,
  },
  {
    date: "July",
    description: `- Intern project: RideCo Replay ~tracking platform to oversee vehicles in motion
                    - 2 Trapped Escape rooms with interns ~100% success rate
                    - 10 year anniversary for RideCo celebration with coolest cake design I've seen`,
  },
  {
    date: "August",
    description: `- Olympics streamed 24/7 on RideCo's large TV
                    - Huge RideCo Replay progress + demos
                    - Team baseball + tennis events super fun!`,
  },
];

const Rideco = () => {
  return (
    <Grid sx={{ height: "100vh" }}>
      <Navbar />
      <Grid
        container
        sx={{
          background: "rgb(36,36,36)",
        }}
      >
        <Grid item xs={4} display="flex" alignItems="center">
          <Button
            href="/"
            sx={{
              background: "rgba(251, 194, 135, 0.16)",
              color: "#fcb232",
              border: "1px solid black",
              borderRadius: "10rem",
              transition: "transform 0.3s",
              marginLeft: "2rem",
              width: "8rem",
              "&:hover": {
                background: "rgba(251, 194, 135, 0.16)",
                transform: "scale(1.1)",
              },
            }}
          >
            <ArrowBackIcon /> Back
          </Button>
        </Grid>
        <Grid
          item
          xs={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Typography
            variant="h4"
            color="#fcb232"
            fontWeight="bold"
            fontSize="3.5rem"
            sx={{
              letterSpacing: "0.1rem",
              textShadow: "1px 1px 5px rgba(0,0,0,0.5)",
            }}
          >
            RideCo
          </Typography>
          <Typography
            variant="subtitle1"
            color="rgba(255, 255, 255, 0.75)"
            sx={{ marginTop: "0.5rem", fontSize: "1.2rem" }}
          >
            Waterloo, ON
          </Typography>
          <Typography
            variant="subtitle2"
            color="rgba(255, 255, 255, 0.5)"
            sx={{ marginTop: "0.3rem", fontSize: "1rem", fontStyle: "italic" }}
          >
            May - Aug 2024
          </Typography>
        </Grid>
        <Grid item xs={4} />
        <Grid item xs={12}>
          <img
            src={"../images/rideco-marker.png"}
            alt="rideco logo"
            style={{ display: "block", margin: "2rem auto", width: "70rem" }}
          />
        </Grid>
        <Grid container sx={{ background: "rgb(36,36,36)", padding: "2rem" }}>
          <Grid item xs={12} display="flex" justifyContent="center">
            <Box sx={{ width: "70%", position: "relative" }}>
              <Box
                sx={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  height: "100%",
                  width: "4px",
                  backgroundColor: "#fcb232",
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
                      width: "45%",
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
                        index % 2 === 0
                          ? "calc(50% - 1rem)"
                          : "calc(50% - 0.2rem)",
                      transform: "translateY(-50%)",
                      backgroundColor: "#fcb232",
                      borderRadius: "50%",
                      height: "20px",
                      width: "20px",
                      zIndex: 2,
                      border: "4px solid rgb(36,36,36)",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Typography
          color="white"
          fontSize="2rem"
          margin="0 auto"
          marginBottom="1rem"
        >
          Youtube video coming soon...
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Rideco;
