import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const NavItems = ({ header, Icon }) => {
  return (
    <Box
      display={"flex"}
      mb={3}
      sx={{
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "primary.light",
          borderRadius: "5px",
        },
      }}
    >
      <Avatar
        sx={{
          width: 35,
          height: 35,
          bgcolor: "primary.lighter",
          //   border: "2px solid blue",
        }}
      >
        <Icon color="primary" />
      </Avatar>
      <Typography ml={1} mt={0.5} fontFamily={"poppins"}>
        {header}
      </Typography>
    </Box>
  );
};

export default NavItems;
