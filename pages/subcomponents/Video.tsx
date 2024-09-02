import React, { useState } from "react";
import { Button, Dialog, DialogContent, Box } from "@mui/material";

const Video = ({ videoSrc }: { videoSrc: string }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: "rgb(36,36,36)",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Button
        onClick={handleOpen}
        sx={{
          background: "rgba(251, 194, 135, 0.16)",
          color: "#fcb232",
          border: "1px solid black",
          borderRadius: "10rem",
          transition: "transform 0.3s",
          margin: "1rem",
          width: "8rem",
          "&:hover": {
            background: "rgba(251, 194, 135, 0.2)",
            transform: "scale(1.1)",
          },
        }}
      >
        Play Video
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <DialogContent
          sx={{
            padding: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <video
            controls
            autoPlay
            style={{
              borderRadius: "1rem",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
              maxWidth: "90%",
              maxHeight: "90%",
              objectFit: "contain",
            }}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Video;
