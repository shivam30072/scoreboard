import Blogs from "@/src/components/Blogs";
import HeroSection from "@/src/components/HeroSection";
import NavigationBar from "@/src/components/NavigationBar";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box display={"flex"} minHeight={"100vh"} bgcolor={"primary.dark"}>
      <Box
        height={"100vh"}
        // flexShrink={0}
        sx={{
          display: { xs: "none", md: "flex" },
          position: { md: "fixed" },
        }}
      >
        <NavigationBar />
      </Box>
      <Box
        overflowY={"auto"}
        sx={{ width: { xs: "100%" }, marginLeft: { md: "17%" } }}
      >
        <HeroSection />
      </Box>
      {/* <Box flexGrow={0.5} bgcolor={"green"}>
        <Blogs />
      </Box> */}
    </Box>
  );
}
