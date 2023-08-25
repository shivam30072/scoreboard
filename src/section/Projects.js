import { Box, Typography } from "@mui/material";
import React from "react";
import Header from "../Lists/Header";
import ProjectCard from "../Lists/ProjectCard";

const projectInfo = [
  {
    id: 0,
    name: "MERN CHAT APP",
    github: "",
    liveApp: "",
    tech: ["REACTJS", "NODEJS", "CHAKRA UI", "MONGODB"],
    image: "./ribbetwallpaper.png",
    desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or atypeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    id: 1,
    name: "BESTEATS",
    image: "./besteats.png",
    github: "",
    liveApp: "",
    tech: ["REACTJS", "TAILWIND"],
    desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or atypeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    id: 2,
    name: "SCROLL UI",
    image: "./scrollui.png",
    github: "",
    liveApp: "",
    tech: ["REACTJS", "TAILWIND"],
    desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or atypeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    id: 3,
    name: "QUIZ TRIVIA",
    image: "./quiztrivia.png",
    github: "",
    liveApp: "",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or atypeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
];

const Projects = () => {
  return (
    <Box mt={4}>
      <Header title={"Projects"} />

      <Box
        display={"flex"}
        gap={6}
        flexWrap={"wrap"}
        mt={4}
        mb={2}
        justifyContent={{ md: "center", lg: "space-around" }}
      >
        {projectInfo.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
