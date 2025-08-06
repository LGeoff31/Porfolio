import { IconButton } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackButton = () => {
  return (
    <IconButton
      href="/"
      sx={{
        color: "white",
        background: "transparent",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <ArrowBackIcon fontSize="large" />
    </IconButton>
  );
};

export default BackButton;
