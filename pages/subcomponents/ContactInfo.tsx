import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { Link, Typography } from "@mui/material";

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      className="flex flex-col  space-y-2 mr-20 "
      style={{ alignItems: "start" }}
    >
      <div className="contactInfo">
        <Link
          href="https://www.linkedin.com/in/lgeoff31/"
          fontSize="1.5rem"
          target="_blank"
          sx={{ color: "white", textDecoration: "none" }}
        >
          <span className="contactIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
            </svg>
          </span>
        </Link>

        <Link
          href="https://www.linkedin.com/in/lgeoff31/"
          fontSize="1.5rem"
          target="_blank"
          sx={{ color: "white", textDecoration: "none", cursor: "pointer" }}
        >
          LinkedIn
        </Link>
      </div>

      <div className="contactInfo">
        <Link
          href="https://github.com/lgeoff31"
          fontSize="1.5rem"
          target="_blank"
          sx={{ color: "white", textDecoration: "none" }}
        >
          <span className="contactIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
            </svg>
          </span>
        </Link>
        <Link
          href="https://github.com/lgeoff31"
          fontSize="1.5rem"
          target="_blank"
          sx={{ color: "white", textDecoration: "none", cursor: "pointer" }}
        >
          GitHub
        </Link>
        <p className="text-base md:text-2xl"></p>
      </div>

      <div className="contactInfo">
        <EnvelopeIcon className="contactIcon" />
        <Typography
          fontSize="1.5rem"
          sx={{ color: "white", textDecoration: "none" }}
        >
          Geoffrey31415@gmail.com
        </Typography>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
