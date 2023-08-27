import { Box, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import Header from "../Lists/Header";
import SkillBar from "../Lists/SkillBar";

const Skills = forwardRef((props, ref) => {
  const knownSkills = [
    {
      name: "JAVASCRIPT",
      desc: " rental application where users can rent a car or list a car for rent. The front-end was developed using Next.js and Material UI, and the application is also available on the Play Store.",
    },
    {
      name: "REACTJS",
      desc: "",
    },
    {
      name: "NEXTJS",
      desc: "",
    },
    {
      name: "MATERIAl-UI",
      desc: "",
    },
    {
      name: "CSS",
      desc: "",
    },
    {
      name: "HTML",
      desc: "",
    },
    {
      name: "SQL",
      desc: "",
    },
    {
      name: "NODEJS",
      desc: "",
    },
    {
      name: "MONGO-DB",
      desc: "",
    },
    {
      name: "C++",
      desc: "",
    },
    {
      name: "GIT",
      desc: "",
    },
    {
      name: "GITHUB",
      desc: "",
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
