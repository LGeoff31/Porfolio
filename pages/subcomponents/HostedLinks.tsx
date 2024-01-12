import { Button, Link, Stack } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HostedLinks = ({ hosted, code }: { hosted: string; code: string }) => {
  return (
    <Stack direction="row" gap="15px" paddingBottom="1rem">
      <Button
        href={hosted}
        target="_blank"
        sx={{
          background: "rgba(251, 194, 135, 0.16)",
          color: "#fcb232",
          border: "1px solid black",
          borderRadius: "10rem",
          transition: "transform 0.3s",
          "&:hover": {
            background: "rgba(251, 194, 135, 0.16)",
            transform: "scale(1.1)",
          },
        }}
      >
        Hosted Project <ArrowForwardIcon />
      </Button>

      <Button
        href={code}
        target="_blank"
        sx={{
          background: "rgba(251, 194, 135, 0.16)",
          color: "#fcb232",
          border: "1px solid black",
          borderRadius: "10rem",
          transition: "transform 0.3s",
          "&:hover": {
            background: "rgba(251, 194, 135, 0.16)",
            transform: "scale(1.1)",
          },
        }}
      >
        Code <ArrowForwardIcon />
      </Button>
    </Stack>
  );
};

export default HostedLinks;
