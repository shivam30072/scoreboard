import { Box, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import Header from "../Lists/Header";
import SkillBar from "../Lists/SkillBar";

const Skills = forwardRef((props, ref) => {
  const knownSkills = [
    {
      name: "JAVASCRIPT",
      desc: "As of now, I have more than one year of experience in javascript, I always use this for building web applications whether it is for the front-end or back-end.",
    },
    {
      name: "REACTJS",
      desc: "It is a javascript library for building single page applications, I have one year of experience in react which includes 4 months of professional experience. It is fast and helps in writing efficient code.",
    },
    {
      name: "NEXTJS",
      desc: "It is a growing technology and a superset of react, all the things that react provides is also present in nextjs but it's also gives some more functionality like page or app routing, backend services and many more.",
    },
    {
      name: "MATERIAl-UI",
      desc: "I learned material UI when I was doing my internship, It is very efficient and provides many components that you can use directly in your code.",
    },
    {
      name: "CSS",
      desc: "CSS is one of few things that I Don't like very much but without this there is no development.",
    },
    {
      name: "HTML",
      desc: "Nothing to say here, web development starts here, it tells browser what to show.",
    },
    {
      name: "SQL",
      desc: "Structured Query language, one of the most important technology in modern IT-sector, I know the basics of sql and I have also practiced it many times.",
    },
    {
      name: "NODEJS",
      desc: "Nodejs is one of the most popular server applications technology and i have just started learning it.",
    },
    {
      name: "MONGO-DB",
      desc: "It is also known as Nosql, I have used it in my most recent project, it is quite good for small applications",
    },
    {
      name: "C++",
      desc: "I mainly use C++ for data-structure and algorithms, I know the OOPs concept, It is a very powerfull language you can build almost anything with this from operating sysytems to desktop applications.",
    },
    {
      name: "GIT",
      desc: "It is a version control language which is very essential in development whether it is mobile app or web app development",
    },
    {
      name: "GITHUB",
      desc: "It is an application used for storing your code and also used for automating the system which is very helpful",
    },
  ];
  const skillsInFuture = [
    {
      name: "TYPESCRIPT",
      desc: "",
    },
    {
      name: "DOCKER",
      desc: "",
    },
    {
      name: "CI/CD",
      desc: "",
    },

    {
      name: "CLOUD",
      desc: "",
    },
    {
      name: "JAVA",
      desc: "",
    },
    {
      name: "REACT-NATIVE",
      desc: "",
    },
  ];

  return (
    <Box mt={4} borderRadius={1} pb={1} ref={ref}>
      <Header title={"SKILLS"} />

      <Box pl={{ md: 4.5 }}>
        <Typography variant="body1" ml={{ md: 6, lg: 0 }}>
          That I Know or Touched
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "flex-start",
            },
          }}
        >
          {knownSkills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </Box>
        <Typography variant="body1" mt={1.5} ml={{ md: 6, lg: 0 }}>
          That I hope to learn in future
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            pointerEvents: "none",
            flexWrap: "wrap",
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "flex-start",
            },
          }}
        >
          {skillsInFuture.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </Box>
      </Box>
    </Box>
  );
});

export default Skills;
