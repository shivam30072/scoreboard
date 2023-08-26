import { Box } from "@mui/material";
import React from "react";
import Header from "../Lists/Header";

const Introduction = () => {
  return (
    <Box mt={4}>
      <Header title={"INTRODUCTION"} />

      <Box
        sx={{
          backgroundColor: "primary.light",
          width: "inherit",
          height: { xs: 500, sm: 200 },
          borderRadius: 1,
          display: "flex",
          overflow: "hidden",
          mt: 1,
          flexDirection: { xs: "column", sm: "row" },
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
