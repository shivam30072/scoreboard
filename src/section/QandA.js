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
            <Typography>Why do I like doing Developemnt ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
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
            <Typography>
              What motivates me and who is my inspiration ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
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
            <Typography>what do I do in my free time ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default QandA;
