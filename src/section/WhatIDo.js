import { Box, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import Header from "../Lists/Header";

const WhatIDo = forwardRef((props, ref) => {
  return (
    <Box mt={4} borderRadius={1} pb={1} ref={ref}>
      <Header title={"What I Do"} />

      <Box
        display={"flex"}
        flexDirection={{ xs: "column", sm: "row" }}
        mt={4}
        ml={{ md: 6, lg: 0 }}
        px={4.5}
        gap={1.5}
      >
        <Box>
          <Typography fontFamily={"poppins"} fontWeight={900}>
            FRONT-END DEVELOPMENT:
          </Typography>
        </Box>
        <Typography fontFamily={"poppins"}>
          I develop responsive, modern-looking front-ends. Front-end is the
          first thing that user notices so to develop bug-free and responsive
          user interface while accommodating all the rquirements is always my
          goal. Most of the time, I use reactjs and material UI but I also have
          experience in tailwind. Other front-end technology that I use for UI
          development is nextjs.It has been only few weeks since i started
          learning next and now I am getting used to it.
        </Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", sm: "row" }}
        mt={4}
        px={4.5}
        ml={{ md: 6, lg: 0 }}
        gap={1.5}
      >
        <Box>
          <Typography fontFamily={"poppins"} fontWeight={900}>
            BACK-END DEVELOPMENT:
          </Typography>
        </Box>
        <Typography fontFamily={"poppins"}>
          I am new to the backend development and I have not made many projects
          yet, technology that i am using or learning for server applications is
          nodejs. When developing back-end systems, I always try to pay great
          attention to security, scalability, and performance.
        </Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", sm: "row" }}
        mt={4}
        px={4.5}
        ml={{ md: 6, lg: 0 }}
        gap={1.5}
      >
        <Box>
          <Typography fontFamily={"poppins"} fontWeight={900}>
            FULL-STACK DEVELOPMENT:
          </Typography>
        </Box>
        <Typography fontFamily={"poppins"}>
          I will not say that i am a full-fledged full stack developer as of
          now, I am learning and gaining experience day by day, I will grab
          every little opportunity to hone my skills.There are many things that
          I haven't explored yet in full-stack development like SEO,
          cross-browser support,etc.
        </Typography>
      </Box>
    </Box>
  );
});

export default WhatIDo;
