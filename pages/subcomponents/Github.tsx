import React from "react";
// import GitHubCalender from "react-github-calender";
import GitHubCalendar from "react-github-calendar";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Box,
  Stack,
} from "@mui/material";

const Github = () => {
  return (
    <Card
      style={{
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        height: "40%",
        borderRadius: "12px",
        padding: "8px",
        marginBottom: "10px",
      }}
    >
      <GitHubCalendar
        username="LGeoff31"
        style={{ justifyContent: "center" }}
        hideTotalCount={true}
      />
    </Card>
  );
};

export default Github;
