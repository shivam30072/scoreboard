import { Box, Typography } from "@mui/material";
import React from "react";

const Header = ({ title, children }) => {
  return (
    <Typography variant="body2" textAlign={"center"}>
      {title}
      <span style={{ fontSize: "15px" }}>{children}</span>
    </Typography>
  );
};

Header.displayName = "Header";

export default Header;
