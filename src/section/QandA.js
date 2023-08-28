import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../Lists/Header";

const QandA = () => {
  return (
    <Box mt={4}>
      <Header title={"Q&A"} />
      <Box
        px={4.5}
        mt={3}
        ml={{ md: 6, lg: 0 }}
        display={"flex"}
        flexDirection={"column"}
        alignItems={{ xs: "center", md: "flex-start" }}
        gap={4}
      >
        <Accordion
          sx={{
            width: { xs: "100%", sm: "71%" },
            bgcolor: "#fff",
            boxShadow: "2px 4px 10px rgba(242, 239, 234, 0.2)",
            p: 1,
            borderRadius: 2,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography fontWeight={900}>
              Why do I like doing Developemnt ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              At the start, I was simply trying web development to land
              internships. Yet, when I secured my first internship, I got
              seriously hooked. Nowadays, I find myself unable to go even a day
              without writing code.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            width: { xs: "100%", sm: "71%" },
            bgcolor: "#fff",
            boxShadow: "2px 4px 10px rgba(242, 239, 234, 0.2)",
            p: 1,
            borderRadius: 2,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography fontWeight={900}>
              What motivates me and who is my inspiration ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              I'm a self-motivated individual, but I do find inspiration from
              remarkable individuals. One of the people I admire most is
              Cristiano Ronaldo.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            width: { xs: "100%", sm: "71%" },
            bgcolor: "#fff",
            boxShadow: "2px 4px 10px rgba(242, 239, 234, 0.2)",
            p: 1,
            borderRadius: 2,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography fontWeight={900}>
              what do I do in my free time ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Most of the time, I watch anime or football. I also spent some
              time on twitter just scrolling.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

QandA.displayName = "QandA";

export default QandA;
