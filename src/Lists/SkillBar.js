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
          width: "10rem",
          "&:hover": { bgcolor: "#319eae" },
          borderRadius: 1,
          bgcolor: "#f5e4e4",
          fontWeight: 900,
          fontFamily: "poppins",
          marginTop: 1,
          marginRight: 1,
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

export default SkillBar;
