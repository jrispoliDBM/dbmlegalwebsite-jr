// src/components/FaqSection.js
import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FaqSection() {
  return (
    <Box my={4}>
      <Typography variant="h4" component="h2">
        Startup FAQs
      </Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Do you offer flat-fees for startups?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we offer flat-fee packages tailored to the needs of startups.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Can I choose which DBM attorney I work with?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Absolutely, we allow you to select from our team of experienced attorneys.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Can I schedule a consultation online?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, you can easily schedule a consultation through our website.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Is this a subscription service?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We offer both one-time and subscription-based legal services.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default FaqSection;