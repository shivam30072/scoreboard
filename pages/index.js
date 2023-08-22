import Blogs from "@/src/components/Blogs";
import HeroSection from "@/src/components/HeroSection";
import NavigationBar from "@/src/components/NavigationBar";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box display={"flex"} minHeight={"100vh"} bgcolor={"primary.dark"}>
      <Box flexGrow={0.4} height={"100vh"}>
        <NavigationBar />
      </Box>
      <Box flexGrow={2}>
        <HeroSection />
      </Box>
      <Box flexGrow={0.5} bgcolor={"green"}>
        <Blogs />
      </Box>
    </Box>
  );
}
