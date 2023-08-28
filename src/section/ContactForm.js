import {
  Box,
  Button,
  FormControl,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { forwardRef } from "react";
import Header from "../Lists/Header";

const ContactForm = forwardRef((props, ref) => {
  return (
    <Box mt={4} pt={2} ref={ref}>
      <Header title={"CONTACT"}>{"(form under maintenance)"}</Header>
      <Box
        px={4.5}
        ml={{ md: 6, lg: 0 }}
        mt={2}
        display={"flex"}
        flexDirection={"column"}
        alignItems={{ xs: "center", md: "flex-start" }}
        gap={5}
      >
        <Box sx={{ width: { xs: "100%", sm: "71%" } }}>
          <Typography>Name</Typography>
          <TextField
            sx={{
              width: "100%",
              bgcolor: "#fff",
              borderRadius: 1,
              boxShadow: "2px 4px 10px rgba(242, 239, 234, 0.2)",
            }}
            id="name-outlined"
            placeholder="Shivam Kumar"
            InputLabelProps={{
              shrink: false,
            }}
          />
        </Box>
        <Box sx={{ width: { xs: "100%", sm: "71%" } }}>
          <Typography>Email</Typography>
          <TextField
            sx={{
              bgcolor: "#fff",
              width: "100%",
              borderRadius: 1,
              boxShadow: "2px 4px 10px rgba(242, 239, 234, 0.2)",
            }}
            id="email-outlined"
            placeholder="Shivamkumar181211@gmail.com"
            InputLabelProps={{
              shrink: false,
            }}
          />
        </Box>
        <Box sx={{ width: { xs: "100%", sm: "71%" } }}>
          <Typography>Comment</Typography>
          <TextField
            sx={{
              bgcolor: "#fff",
              width: "100%",
              borderRadius: 1,
              boxShadow: "2px 4px 10px rgba(242, 239, 234, 0.2)",
            }}
            id="comment-outlined"
            placeholder="wonderful content"
            InputLabelProps={{
              shrink: false,
            }}
            multiline
            rows={4}
          />
        </Box>
        <Button
          onClick={() => {
            alert("Form is not working right now.");
          }}
          sx={{
            fontFamily: "poppins",
            "&:hover": { bgcolor: "#62c3ff" },
            fontWeight: 900,
          }}
          variant="contained"
        >
          SUBMIT
        </Button>
      </Box>
    </Box>
  );
});

ContactForm.displayName = "ContactForm";

export default ContactForm;
