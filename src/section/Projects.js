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
    desc: "Real-time chat application, user can chat one to one or in group chat, responsive user-interface, fully-authenticated using json web token, socket-ui is used for real time messaging, although you might face some issues in live project.",
  },
  {
    id: 1,
    name: "DND TASK MANAGER",
    image: "./dndphoto.png",
    github: "https://github.com/shivam30072/dndProject",
    liveApp: "https://653cb369af4fe74fadd5e1a5--trooter2.netlify.app/",
    tech: ["REACTJS", "MATERIAL UI", "NODEJS", "MONGODB", "EXPRESSJS"],
    dialogImg: "./dndform.png",
    desc: "This is a full stack task manager application with drag and drop functionality, User can create, update and delete the tasks, user authentication is not added at the moment, i am still working on it, checkout the source code and give a star to the project on github if you liked it.",
  },
  {
    id: 2,
    name: "SCROLL UI",
    image: "./scrollui.png",
    github: "https://github.com/shivam30072/animated_UI",
    liveApp: "https://scrollui.vercel.app/",
    tech: ["REACTJS", "TAILWIND"],
    dialogImg: "./scroll.png",
    desc: "It is a fun project that I made, In this UI changes when you scroll your mouse wheel slowly, diiferent pages appear on each scroll with animations, It is not working as expected after deployment but works fine on development mode.",
  },
  {
    id: 3,
    name: "QUIZ TRIVIA",
    image: "./quiztrivia.png",
    github: "https://github.com/shivam30072/bitwise-QuizTrivia-Webapp",
    liveApp: "https://bitwise-quiz.netlify.app/",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    dialogImg: "./quizbg.png",
    desc: "It was the first major project I made when I started learning web development, me and my friend build this when we were competing in a hackathon, I learned lot of things while making this.",
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
        px={{ xs: 1, md: 0 }}
        justifyContent={{ xs: "center", md: "center", lg: "space-around" }}
      >
        {projectInfo.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Box>
    </Box>
  );
});

Projects.displayName = "Projects";
export default Projects;
