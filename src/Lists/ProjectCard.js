import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";

const ProjectCard = ({ project }) => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box
        width={{ xs: "100%", md: 480 }}
        px={{ xs: 2, md: 0 }}
        height={300}
        position={"relative"}
        display={"flex"}
        borderRadius={2}
        justifyContent={"center"}
        alignItems={"center"}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        sx={{
          transition: "transform 0.3s",
          transform: show ? "scale(1.05)" : "scale(1)",
          backgroundImage: `url(${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: show ? 0.5 : 1,
          boxShadow: !show ? "2px 4px 10px rgba(242, 239, 234, 0.3)" : "none",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            opacity: show ? 1 : 0,
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            transform: `scale(${show ? 1 : 0.5})`,
            transition: "opacity 0.3s, transform 0.3s",
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              bgcolor: "#7c0ffd",
              borderRadius: 1,
            }}
          >
            <Button
              sx={{ fontFamily: "poppins" }}
              onClick={() => {
                setOpen(true);
              }}
            >
              LEARN MORE
            </Button>
          </Box>
        </Box>
        <Dialog
          fullWidth={true}
          maxWidth="md"
          open={open}
          onClose={handleClose}
          scroll={"body"}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">{project.name}</DialogTitle>
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
          <DialogContent>
            <Box
              sx={{
                height: 500,
                backgroundImage: `url(${project.dialogImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></Box>
            <DialogContentText id="scroll-dialog-description">
              <Atrributes text={project.desc} />
              {project.tech.map((t, i) => (
                <Atrributes key={i} label={t} bgcolor={"#cccccc"} />
              ))}
            </DialogContentText>
            <Box width={"fit-content"} mt={1} display={"flex"} gap={1.5}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="contained"
                  size="small"
                  sx={{ bgcolor: "#33bbcf", "&:hover": { bgcolor: "#319eae" } }}
                >
                  GO TO SOURCE CODE
                </Button>
              </a>
              <a
                href={project.liveApp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="contained"
                  size="small"
                  sx={{ bgcolor: "#33bbcf", "&:hover": { bgcolor: "#319eae" } }}
                >
                  GO TO PROJECT
                </Button>
              </a>
            </Box>
          </DialogContent>
        </Dialog>
      </Box>
    </>
  );
};

const Atrributes = ({ text, label, bgcolor, children }) => {
  if (text) {
    return (
      <>
        <Typography fontFamily={"poppins"} mt={1}>
          {text}
        </Typography>
        {children}
      </>
    );
  }
  return (
    <Chip
      label={label}
      sx={{
        borderRadius: 1,
        bgcolor: bgcolor,
        fontWeight: 900,
        fontFamily: "poppins",
        marginTop: 1,
        marginRight: 1,
      }}
    />
  );
};

ProjectCard.displayName = "ProjectCard";
export default ProjectCard;
