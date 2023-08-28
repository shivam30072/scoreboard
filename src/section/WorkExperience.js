import { Box, Chip, Typography } from "@mui/material";
import React, { forwardRef, useRef } from "react";
import workingmenanimation from "../workingman.json";
import Lottie from "lottie-react";
import Header from "../Lists/Header";

const WorkExperience = forwardRef((props, ref) => {
  // function handleClick() {
  // }
  return (
    <Box mt={4} ref={ref}>
      <Header title={"Work Experience"} />
      <Box
        display={"flex"}
        justifyContent={"flex-start"}
        flexDirection={{ xs: "column", sm: "column", md: "row" }}
        ml={0}
        gap={2}
      >
        <Lottie
          animationData={workingmenanimation}
          style={{ minWidth: "50%" }}
          loop={false}
        />
        <Box mt={8} pr={4.5} ml={{ xs: 5.3, sm: 5.3, md: 0 }}>
          <Atrributes text={"Company - Sigroo Technologies"} />
          <Atrributes text={"Role - Front-end developer"} />
          <Box display={"flex"} flexWrap={"wrap"}>
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
});

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

WorkExperience.displayName = "WorkExperience";

export default WorkExperience;
