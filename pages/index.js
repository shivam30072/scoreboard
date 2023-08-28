import HeroSection from "@/src/components/HeroSection";
import NavigationBar from "@/src/components/NavigationBar";
import { Box, Typography } from "@mui/material";
import { useRef } from "react";

export default function Home() {
  const workRef = useRef(null);
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const whatIDoRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <Box
      display={"flex"}
      minHeight={"100vh"}
      width={"fit-content"}
      bgcolor={"primary.dark"}
    >
      <Box
        height={"100vh"}
        sx={{
          display: { xs: "none", md: "flex" },
          position: { md: "fixed" },
          zIndex: { md: 1 },
          bgcolor: { md: "black" },
        }}
      >
        <NavigationBar
          workRef={workRef}
          homeRef={homeRef}
          projectRef={projectRef}
          whatIDoRef={whatIDoRef}
          skillsRef={skillsRef}
          contactRef={contactRef}
        />
      </Box>
      <Box
        sx={{
          marginLeft: { md: "17%" },
        }}
      >
        <HeroSection
          workRef={workRef}
          homeRef={homeRef}
          projectRef={projectRef}
          whatIDoRef={whatIDoRef}
          skillsRef={skillsRef}
          contactRef={contactRef}
        />
      </Box>
    </Box>
  );
}
