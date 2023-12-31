import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";

const SkillBar = ({ skill }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Chip
        label={skill.name}
        onClick={() => {
          setOpen(true);
        }}
        sx={{
          cursor: "pointer",
          width: { xs: "6rem", sm: "8rem", md: "10rem" },
          "&:hover": {
            boxShadow: "0px 2px 4px 6px rgba(255, 255, 255, 0.2)",
            bgcolor: "#fff",
          },
          borderRadius: 1,
          bgcolor: "#fff",
          fontWeight: 900,
          fontFamily: "poppins",
          marginTop: 1,
          marginRight: 1,
          height: "3rem",
        }}
      />
      <Dialog
        fullWidth={true}
        maxWidth="xs"
        open={open}
        onClose={handleClose}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 0,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>{skill.desc}</DialogContent>
      </Dialog>
    </>
  );
};

SkillBar.displayName = "SkillBar";

export default SkillBar;
