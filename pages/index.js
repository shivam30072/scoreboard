import Blogs from "@/src/components/Blogs";
import HeroSection from "@/src/components/HeroSection";
import NavigationBar from "@/src/components/NavigationBar";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box display={"flex"} minHeight={"100vh"} bgcolor={"primary.dark"}>
      <Box height={"100vh"} minWidth={"22%"} flexShrink={0} position={"fixed"}>
        <NavigationBar />
      </Box>
      <Box overflowY={"auto"} ml={"22%"}>
        <HeroSection />
      </Box>
      {/* <Box flexGrow={0.5} bgcolor={"green"}>
        <Blogs />
      </Box> */}
    </Box>
  );
}
