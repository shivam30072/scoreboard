import { Box } from "@mui/material";
import React from "react";
import Introduction from "../section/Introduction";
import WorkExperience from "../section/WorkExperience";
import Projects from "../section/Projects";

const HeroSection = () => {
  return (
    <Box p={1} color={"white"}>
      <Box
        sx={{
          backgroundImage: `url(./hand.png)`,
          backgroundSize: "cover",
          backgroundColor: "#609acc",
          height: 350,
          borderRadius: 1,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "45%",
            left: "1%",
            fontSize: "3rem",
            color: "#fff",
          }}
        >
          Welcome to my{" "}
          <span style={{ color: "#040406ff", backgroundColor: "white" }}>
            Portfolio
          </span>
        </Box>
      </Box>
      <Introduction />
      <WorkExperience />
      <Projects />
    </Box>
  );
};

export default HeroSection;
