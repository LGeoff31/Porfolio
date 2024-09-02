import { Grid, Typography, Button, Box } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Navbar from "./components/Navbar";
import Video from "./subcomponents/Video";
import CompanyImage from "./components/CompanyImage";
import Timeline from "./components/Timeline";

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
    <>
      <Navbar />
      <CompanyImage />
      <Video videoSrc="/images/rideco.mp4" />
      <Timeline />
    </>
  );
};

export default Rideco;
