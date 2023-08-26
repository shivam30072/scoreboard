import Blogs from "@/src/components/Blogs";
import HeroSection from "@/src/components/HeroSection";
import NavigationBar from "@/src/components/NavigationBar";
import { Box, Typography } from "@mui/material";
import { useRef } from "react";

export default function Home() {
  const refContainer = useRef(null);
  console.log(refContainer.current);
  return (
    <Box display={"flex"} minHeight={"100vh"} bgcolor={"primary.dark"}>
      <Box
        height={"100vh"}
        sx={{
          display: { xs: "none", md: "flex" },
          position: { md: "fixed" },
          zIndex: { md: 1 },
          bgcolor: { md: "black" },
        }}
      >
        <NavigationBar />
      </Box>
      <Box
        // overflowY={"auto"}
        sx={{ width: { xs: "100%" }, marginLeft: { md: "17%" } }}
      >
        <HeroSection ref={refContainer} />
      </Box>
    </Box>
  );
}
