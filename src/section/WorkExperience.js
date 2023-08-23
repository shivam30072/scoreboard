import { Box, Chip, Typography } from "@mui/material";
import React from "react";
import workingmenanimation from "../workingman.json";
import Lottie from "lottie-react";

const WorkExperience = () => {
  return (
    <Box mt={4}>
      <Typography
        fontFamily={"poppins"}
        fontSize={"1.5rem"}
        textAlign={"center"}
      >
        Work Experience
      </Typography>
      <Box display={"flex"} justifyContent={"flex-start"} ml={0} gap={2}>
        <Lottie
          animationData={workingmenanimation}
          style={{ minWidth: "50%" }}
          loop={false}
        />
        <Box mt={8}>
          <Atrributes text={"Company - Sigroo Technologies"} />
          <Atrributes text={"Role - Front-end developer"} />
          <Box display={"flex"}>
            <Atrributes text={"Tech stack-"} />
            <Atrributes label={"Reactjs"} bgcolor={"#42a5f5"} />
            <Atrributes label={"Nextjs"} bgcolor={"#8bc34a"} />
            <Atrributes label={"Javascript"} bgcolor={"#ffef41"} />
            <Atrributes label={"Material UI"} bgcolor={"#57ffee"} />
          </Box>
          <Atrributes text={"Projects-"}>
            1. <span style={{ fontWeight: 900 }}> FICO mobility</span> :A car
            rental application where users can rent a car or list a car for
            rent. The front-end was developed using Next.js and Material UI, and
            the application is also available on the Play Store.
          </Atrributes>
          <Typography fontFamily={"poppins"}>
            2. <span style={{ fontWeight: 900 }}> METAPOS</span> : It is a food
            ordering/delivery application, primarily designed for use in UK
            restaurants.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const Atrributes = ({ text, label, bgcolor, children }) => {
  if (text) {
    return (
      <>
        <Typography fontFamily={"poppins"} mt={1}>
          {text}
        </Typography>
        {children}
      </>
    );
  }
  return (
    <Chip
      label={label}
      sx={{
        bgcolor: bgcolor,
        fontWeight: 900,
        fontFamily: "poppins",
        marginRight: "4px",
      }}
    />
  );
};

export default WorkExperience;
