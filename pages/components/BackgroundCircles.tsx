import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { green } from "@mui/material/colors";

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        scale: [1, 2, 2, 3, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 10.1,
      }}
      className="relative flex justify-center items-center"
    >
      <div
        className="absolute border border-white rounded-full h-[400px] w-[400px] mt-52 animate-ping opacity-20"
        // style={{ animation: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;" }}
      />
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 " />
      <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52" />
      <div className="absolute border border-[#F7AB0A] rounded-full h-[750px] w-[750px] mt-52 opacity-20 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-[950px] w-[950px] mt-52" />
    </motion.div>
  );
};

export default BackgroundCircles;
