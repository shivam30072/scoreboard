import { Box, Typography } from "@mui/material";
import React from "react";
import Header from "../Lists/Header";

const Introduction = () => {
  return (
    <Box mt={4} mr={{ md: 7, lg: 0 }}>
      <Header title={"INTRODUCTION"} />

      <Box
        sx={{
          backgroundColor: "primary.light",
          width: "inherit",
          height: { xs: 500, sm: 200 },
          marginLeft: { md: 10, lg: 0 },
          borderRadius: 1,
          display: "flex",
          overflow: "hidden",
          mt: 1,
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          sx={{
            backgroundImage: "url(./profile.png)",
            backgroundSize: "cover",
            height: { xs: "50%", sm: "70%", md: "100%" },
            minWidth: "30%",
          }}
        ></Box>
        <Box pl={1} overflow={"auto"}>
          <Typography variant="body1">
            Welcome to my portfolio! I'm a final-year graduate student majoring
            in Information Technology.It has been over a year now since I
            started web development, i am a tech enthusiast and i have spent
            tremendous amount of time learing and practicing computer
            programming, problem-solving, data-structutres and algorithm and
            building web applications.
          </Typography>
          <Typography variant="body1" mt={1.5}>
            I always stick to lifetime learning during my career, and I am
            constantly learning about core computer concepts, new technologies,
            how to write better code, and how to structure and scale gigantic
            web applications.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

Introduction.displayName = "Introduction";

export default Introduction;
