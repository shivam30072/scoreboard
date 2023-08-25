import { Box, Typography } from "@mui/material";
import React from "react";
import Header from "../Lists/Header";

const WhatIDo = () => {
  return (
    <Box mt={4} borderRadius={1} pb={1}>
      <Header title={"What I Do"} />

      <Box
        display={"flex"}
        flexDirection={{ xs: "column", sm: "row" }}
        mt={4}
        px={4.5}
        gap={1.5}
      >
        <Box>
          <Typography fontFamily={"poppins"} fontWeight={900}>
            FRONT-END DEVELOPMENT:
          </Typography>
        </Box>
        <Typography fontFamily={"poppins"}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available. In publishing
          and graphic design, Lorem ipsum is a placeholder text commonly used to
          demonstrate the visual form of a document or a typeface without
          relying on meaningful content. Lorem ipsum may be used as a
        </Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", sm: "row" }}
        mt={4}
        px={4.5}
        gap={1.5}
      >
        <Box>
          <Typography fontFamily={"poppins"} fontWeight={900}>
            BACK-END DEVELOPMENT:
          </Typography>
        </Box>
        <Typography fontFamily={"poppins"}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available. In publishing
          and graphic design, Lorem ipsum is a placeholder text commonly used to
          demonstrate the visual form of a document or a typeface without
          relying on meaningful content. Lorem ipsum may be used as a
        </Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", sm: "row" }}
        mt={4}
        px={4.5}
        gap={1.5}
      >
        <Box>
          <Typography fontFamily={"poppins"} fontWeight={900}>
            FULL-STACK DEVELOPMENT:
          </Typography>
        </Box>
        <Typography fontFamily={"poppins"}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available. In publishing
          and graphic design, Lorem ipsum is a placeholder text commonly used to
          demonstrate the visual form of a document or a typeface without
          relying on meaningful content. Lorem ipsum may be used as a
        </Typography>
      </Box>
    </Box>
  );
};

export default WhatIDo;
