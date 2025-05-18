import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const timelineData = [
  {
    date: "May",
    description: `Onboarded with IT and learned the importance of cybersecurity. We followed a 2-week agile sprint so I got to experience everything from code reviews, testing, deployment, and retros.`,
  },
  {
    date: "June",
    description: `I got to work with Django for the first time which uses the MVT model which I really loved. I got to work on variety tickets from adding localization to supporting payment methods.`,
  },
  {
    date: "July",
    description: `Began working on an intern project which turned out to be extremely fun. I got to create a real-time vehicle tracking system using Vue and Django, similar to how Uber shows clients the updated location on vehicles. I incorporated features like a heatmap of most dense areas, live passenger counts on vehicles, vehicle status, replay option, speed controls, and much more. `,
  },
  {
    date: "August",
    description: `I got the chance to demo my project to PM's. I then made some slight modifications accordingly. Some included performance optimizations. For updating a vehicle's position across billions of coordinates, it was quite slow. I added debouncing and interpolation which made vehicles move much more smoothly. Additionally, I got to apply binary search to update a vehicles position when the user replayed it back which also saw immense performance improvements. I'm really proud of this project and I learned a lot about performance and scale.`,
  },
];

const Timeline = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, rgb(36,36,36) 0%, rgb(26,26,26) 100%)",
      }}
    >
      <Grid
        container
        sx={{
          padding: "4rem 2rem",
        }}
      >
        <Grid item xs={12} display="flex" justifyContent="center">
          <Box
            sx={{
              width: { xs: "90%", sm: "80%", md: "70%" },
              position: "relative",
              minHeight: `${timelineData.length * 180}px`,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                top: 0,
                transform: "translateX(-50%)",
                width: "4px",
                height: "100%",
                background:
                  "linear-gradient(180deg, #fcb232 0%, rgba(252, 178, 50, 0.3) 100%)",
                display: { md: "block", xs: "none" },
                zIndex: 0,
              }}
            />
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: {
                      xs: "center",
                      md: index % 2 === 0 ? "flex-start" : "flex-end",
                    },
                    position: "relative",
                    marginBottom: "3rem",
                    alignItems: "center",
                  }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 8px 20px rgba(252, 178, 50, 0.15)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Box
                      sx={{
                        width: { xs: "100%", md: "30rem" },
                        padding: "1.5rem 2rem",
                        background: "rgba(26, 26, 26, 0.8)",
                        backdropFilter: "blur(10px)",
                        borderRadius: "16px",
                        border: "1px solid rgba(252, 178, 50, 0.2)",
                        position: "relative",
                        zIndex: 1,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          border: "1px solid rgba(252, 178, 50, 0.4)",
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#fcb232",
                          fontWeight: "600",
                          marginBottom: "1rem",
                          fontSize: { md: "1.5rem", xs: "1.3rem" },
                          letterSpacing: "0.5px",
                        }}
                      >
                        {item.date}
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(255, 255, 255, 0.9)",
                          whiteSpace: "pre-line",
                          lineHeight: 1.8,
                          fontSize: "1rem",
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </motion.div>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: {
                        md:
                          index % 2 === 0
                            ? "calc(50% - 1rem)"
                            : "calc(50% - 0.2rem)",
                      },
                      transform: "translateY(-50%)",
                      background:
                        "linear-gradient(135deg, #fcb232 0%, #f8a51b 100%)",
                      borderRadius: "50%",
                      height: "24px",
                      width: "24px",
                      zIndex: 2,
                      border: "4px solid rgb(26,26,26)",
                      boxShadow: "0 0 0 4px rgba(252, 178, 50, 0.2)",
                      display: { md: "block", xs: "none" },
                    }}
                  />
                </Box>
              </motion.div>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Timeline;
