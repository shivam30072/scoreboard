import { Box, Typography } from "@mui/material";
import React from "react";
import workingmenanimation from "../workingman.json";
import Lottie from "lottie-react";

const WorkExperience = () => {
  return (
    <Box mt={2}>
      <Typography
        fontFamily={"poppins"}
        fontSize={"1.5rem"}
        textAlign={"center"}
      >
        Work Experience
      </Typography>
      <Box display={"flex"}>
        <Lottie
          animationData={workingmenanimation}
          style={{ width: "50%" }}
          loop={false}
        />
        <Box>Sigroo Technologies</Box>
      </Box>
    </Box>
  );
};

export default WorkExperience;
