import { Box, Typography } from "@mui/material";
import React from "react";

const Header = ({ title }) => {
  return (
    <Typography variant="body2" textAlign={"center"}>
      {title}
    </Typography>
  );
};

export default Header;
