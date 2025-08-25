import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { Link, Typography, Box } from "@mui/material";

interface ContactItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  color: string;
}

const ContactInfo = () => {
  const contactItems: ContactItem[] = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
        </svg>
      ),
      label: "LinkedIn",
      value: "lgeoff31",
      href: "https://www.linkedin.com/in/lgeoff31/",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
        </svg>
      ),
      label: "GitHub",
      value: "lgeoff31",
      href: "https://github.com/lgeoff31",
      color: "from-gray-600 to-gray-800",
    },
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      label: "Email",
      value: "g42lee@uwaterloo.ca",
      href: "mailto:g42lee@uwaterloo.ca?subject=Interest%20From%20Your%20Portfolio%20Website&body=Hi%20Geoffrey,",
      color: "from-red-500 to-red-600",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  return (
    <div className="space-y-6">
      {contactItems.map((item, index) => (
        <motion.div
          key={item.label}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group"
        >
          {item.href ? (
            <motion.a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-gray-700/30 to-gray-600/30 backdrop-blur-sm border border-gray-600/20 hover:border-gray-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              whileHover={{ y: -2 }}
            >
              <motion.div
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} p-3 flex items-center justify-center text-white shadow-lg`}
              >
                {item.icon}
              </motion.div>
              <div className="flex-1">
                <Typography
                  className="text-sm font-medium text-gray-400 mb-1"
                  sx={{ color: "rgb(156 163 175)" }}
                >
                  {item.label}
                </Typography>
                <Typography
                  className="text-lg font-semibold text-white"
                  sx={{ color: "white" }}
                >
                  {item.value}
                </Typography>
              </div>
              <motion.div
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.div>
            </motion.a>
          ) : (
            <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-gray-700/30 to-gray-600/30 backdrop-blur-sm border border-gray-600/20">
              <motion.div
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} p-3 flex items-center justify-center text-white shadow-lg`}
              >
                {item.icon}
              </motion.div>
              <div className="flex-1">
                <Typography
                  className="text-sm font-medium text-gray-400 mb-1"
                  sx={{ color: "rgb(156 163 175)" }}
                >
                  {item.label}
                </Typography>
                <Typography
                  className="text-lg font-semibold text-white"
                  sx={{ color: "white" }}
                >
                  {item.value}
                </Typography>
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ContactInfo;
