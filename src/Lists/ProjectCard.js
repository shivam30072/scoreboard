import { Box, Button, Rating, Typography } from "@mui/material";
import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import CallMadeIcon from "@mui/icons-material/CallMade";

const ProjectCard = ({ project }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Box
        width={400}
        height={400}
        // bgcolor={"#7db1b4"}
        bgcolor={"#b6e0f6"}
        position={"relative"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        sx={{
          transition: "transform 0.3s",
          transform: show ? "scale(1.05)" : "scale(1)",
        }}
      >
        <Typography
          bgcolor={"#fff"}
          display={show ? "none" : "flex"}
          fontFamily={"poppins"}
          color={"primary.dark"}
          p={1}
          borderRadius={1}
          fontSize={30}
        >
          {project.name}
        </Typography>

        <Box
          sx={{
            position: "absolute",
            opacity: show ? 1 : 0,
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            transform: `scale(${show ? 1 : 0.5})`,
            transition: "opacity 0.3s, transform 0.3s",
            pointerEvents: show ? "auto" : "none",
            zIndex: 1,
            color: "primary.dark",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#609acc",
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            p={2}
          >
            <Typography fontFamily={"poppins"} fontWeight={900}>
              {project.desc}
            </Typography>
            <Box mt={1}>
              <Typography fontFamily={"poppins"} sx={{ cursor: "pointer" }}>
                <GitHubIcon sx={{ marginRight: 1 }} />
                Checkout the code here
              </Typography>
              <Typography fontFamily={"poppins"} sx={{ cursor: "pointer" }}>
                <CallMadeIcon sx={{ marginRight: 1, marginTop: 0 }} />
                Live demo here
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* jjj */}
    </>
  );
};

export default ProjectCard;
