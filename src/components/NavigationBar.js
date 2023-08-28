import { Avatar, Box, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import WorkIcon from "@mui/icons-material/Work";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import PsychologyIcon from "@mui/icons-material/Psychology";
import NavItems from "../Lists/NavItems";

const navItems = [
  {
    id: 0,
    header: "Home",
    icon: LocalFireDepartmentIcon,
  },
  {
    id: 1,
    header: "Work Experience",
    icon: WorkIcon,
  },
  {
    id: 2,
    header: "Projects",
    icon: AccountTreeIcon,
  },
  {
    id: 3,
    header: "What I Do",
    icon: EmojiPeopleIcon,
  },
  {
    id: 4,
    header: "Skills",
    icon: PsychologyIcon,
  },
  {
    id: 5,
    header: "Contact",
    icon: ContactPageIcon,
  },
];

const NavigationBar = forwardRef(
  ({ workRef, homeRef, projectRef, whatIDoRef, skillsRef, contactRef }) => {
    const handleScroll = (ref) => {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    const getDistanceFromTop = (coords) => {
      const { top } = coords;
      return top;
    };

    const handleSelect = (selectedItem) => {
      if (selectedItem === "Home") {
        handleScroll(homeRef);
      } else if (selectedItem === "Work Experience") {
        handleScroll(workRef);
      } else if (selectedItem === "Projects") {
        handleScroll(projectRef);
      } else if (selectedItem === "What I Do") {
        handleScroll(whatIDoRef);
      } else if (selectedItem === "Skills") {
        handleScroll(skillsRef);
      } else {
        handleScroll(contactRef);
      }
    };
    return (
      <Box
        color={"white"}
        display={"flex"}
        flexDirection={"column"}
        borderRight={"2px solid #1f1f24"}
        height={"inherit"}
        fontFamily={"poppins"}
      >
        <Box
          pl={1}
          pt={1}
          pb={1}
          borderBottom={"2px solid #1f1f24"}
          display={"flex"}
        >
          <Avatar sx={{ bgcolor: "primary.light", marginTop: "4px" }}>S</Avatar>
          <Box>
            <Typography
              sx={{
                fontSize: "23px",
                marginLeft: "8px",
                fontFamily: "poppins",
              }} // backgroundColor: "red"
            >
              Shivam Kumar
            </Typography>
            <span style={{ fontSize: "12px", marginLeft: "8px" }}>
              shivamkumar181211@gmail.com
            </span>
          </Box>
        </Box>
        <Box mt={2} pl={2}>
          {navItems.map((item) => (
            <NavItems
              key={item.id}
              header={item.header}
              Icon={item.icon}
              handleSelect={handleSelect}
            />
          ))}
        </Box>
      </Box>
    );
  }
);

NavigationBar.displayName = "NavigationBar";

export default NavigationBar;
