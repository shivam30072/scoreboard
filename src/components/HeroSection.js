import { Box } from "@mui/material";
import React, { forwardRef } from "react";
import Introduction from "../section/Introduction";
import WorkExperience from "../section/WorkExperience";
import Projects from "../section/Projects";
import WhatIDo from "../section/WhatIDo";
import Skills from "../section/Skills";
import ContactForm from "../section/ContactForm";
import QandA from "../section/QandA";
import Footer from "../section/Footer";

const HeroSection = forwardRef(
  ({ workRef, homeRef, projectRef, whatIDoRef, skillsRef, contactRef }) => {
    return (
      // sx={{ marginLeft: { md: "6%" } }}
      <Box p={1} color={"white"} ref={homeRef}>
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
            Aspiring Software{" "}
            <span style={{ color: "#040406ff", backgroundColor: "white" }}>
              Engineer
            </span>
          </Box>
        </Box>
        <Introduction />
        <WhatIDo ref={whatIDoRef} />
        <Projects ref={projectRef} />
        <WorkExperience ref={workRef} />
        <Skills ref={skillsRef} />
        <Box bgcolor={"primary.light"}>
          <ContactForm ref={contactRef} />
          <QandA />
          <Footer />
        </Box>
      </Box>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
