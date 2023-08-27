import { Box, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import Header from "../Lists/Header";
import ProjectCard from "../Lists/ProjectCard";

const projectInfo = [
  {
    id: 0,
    name: "MERN CHAT APP",
    github: "https://github.com/shivam30072/Ribbet",
    liveApp: "https://ribbetnew.onrender.com",
    tech: ["REACTJS", "NODEJS", "CHAKRA UI", "MONGODB"],
    image: "./ribbet.png",
    dialogImg: "./ribbetwallpaper.png",
    desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or atypeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    id: 1,
    name: "BESTEATS",
    image: "./besteats.png",
    github: "https://github.com/shivam30072/BestEats",
    liveApp: "https://besteats-lake.vercel.app/",
    tech: ["REACTJS", "TAILWIND"],
    dialogImg: "./bestbg.png",
    desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or atypeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    id: 2,
    name: "SCROLL UI",
    image: "./scrollui.png",
    github: "https://github.com/shivam30072/animated_UI",
    liveApp: "https://scrollui.vercel.app/",
    tech: ["REACTJS", "TAILWIND"],
    dialogImg: "./scroll.png",
    desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or atypeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
  {
    id: 3,
    name: "QUIZ TRIVIA",
    image: "./quiztrivia.png",
    github: "https://github.com/shivam30072/bitwise-QuizTrivia-Webapp",
    liveApp: "https://bitwise-quiz.netlify.app/",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    dialogImg: "./quizbg.png",
    desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or atypeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  },
];

const Projects = forwardRef((props, ref) => {
  return (
    <Box mt={4} ref={ref}>
      <Header title={"Projects"} />

      <Box
        display={"flex"}
        gap={6}
        flexWrap={"wrap"}
        mt={4}
        mb={2}
        justifyContent={{ xs: "center", md: "center", lg: "space-around" }}
      >
        {projectInfo.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Box>
    </Box>
  );
});

export default Projects;
