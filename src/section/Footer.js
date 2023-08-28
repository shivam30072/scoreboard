import { Box, Typography } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      minHeight={"7vh"}
      display={"flex"}
      bgcolor={"primary.lighter"}
      color={"white"}
      justifyContent={"space-between"}
      alignItems={"center"}
      py={1}
      px={4.5}
      mt={12}
    >
      <Typography fontWeight={900}>
        copyright&copy;2023 shivamkumar181211@gmail.com
      </Typography>
      <Box display={"flex"} gap={1} sx={{ cursor: "pointer" }}>
        <a
          href={"https://www.linkedin.com/in/shivam30072/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon
            sx={{
              color: "#0a66c2",
              "&:hover": {
                transition: "transform 0.3s",
                transform: "scale(1.3)",
              },
            }}
          />
        </a>
        <a
          href={"https://twitter.com/_shivam3"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon
            sx={{
              color: "#62c3ff",
              "&:hover": {
                transition: "transform 0.3s",
                transform: "scale(1.3)",
              },
            }}
          />
        </a>
        <a
          href={"https://github.com/shivam30072"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon
            sx={{
              "&:hover": {
                transition: "transform 0.3s",
                transform: "scale(1.3)",
              },
            }}
          />
        </a>
        <a href={""} target="_blank" rel="noopener noreferrer">
          <InstagramIcon
            sx={{
              color: "#ff4fd5",
              "&:hover": {
                transition: "transform 0.3s",
                transform: "scale(1.3)",
              },
            }}
          />
        </a>
      </Box>
    </Box>
  );
};

Footer.displayName = "Footer";

export default Footer;
