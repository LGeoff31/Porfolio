import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import Navbar from "./components/Navbar";
import Video from "./subcomponents/Video";
import CompanyImage from "./components/CompanyImage";
import Timeline from "./components/Timeline";

const Rideco = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-x-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl z-0 animate-float pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl z-0 animate-float pointer-events-none" />
      <Navbar useScrollLinks={false} />
      <div className="max-w-4xl mx-auto pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <CompanyImage />
        <div className="my-10" />
        <Video videoSrc="/images/rideco.mp4" />
        <div className="my-10" />
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Internship Timeline
        </h2>
        <Timeline />
      </div>
    </div>
  );
};

export default Rideco;
