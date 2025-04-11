import React from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Subsection from "./Subsection";

const Section = ({ section }) => {
  return (
    <>
      <Typography variant="h5" component="h2" gutterBottom>
        {section.title}
      </Typography>
      {section.subsections.map((subsection, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{subsection.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Subsection items={subsection.items} />
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default Section;
