import { Box, Typography } from "@mui/material";
import React from "react";

const Introduction = () => {
  return (
    <Box mt={2}>
      <Typography fontFamily={"poppins"} fontSize={"1.5rem"}>
        INTRODUCTION
      </Typography>
      <Box
        sx={{
          backgroundColor: "primary.light",
          width: "inherit",
          height: 200,
          borderRadius: 1,
          display: "flex",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            backgroundImage: "url(./card.png)",
            backgroundSize: "cover",
            height: "100%",
            minWidth: "30%",
          }}
        ></Box>
        <Box pl={1}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available. In publishing
          and graphic design, Lorem ipsum is a placeholder text commonly used to
          demonstrate the visual form of a document or a typeface without
          relying on meaningful content. Lorem ipsum may be used as a
          placeholder before final copy is available. In publishing and graphic
          design, Lorem ipsum is a placeholder text commonly used to
          demonstrate.
        </Box>
      </Box>
    </Box>
  );
};

export default Introduction;
