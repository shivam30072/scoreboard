import { Box, Typography } from "@mui/material";
import React from "react";

const Header = ({ title }) => {
  return (
    <Typography fontFamily={"poppins"} fontSize={"1.5rem"} textAlign={"center"}>
      {title}
    </Typography>
  );
};

export default Header;
