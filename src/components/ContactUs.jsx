Section.js


ContactUs.js

// src/components/ContactUs.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function ContactUs() {
  return (
    <Box my={4} textAlign="center" style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
      <Typography variant="h4" component="h2">
        READY TO TAKE THE NEXT STEP?
      </Typography>
      <Typography variant="h3" component="h1" gutterBottom>
        CONTACT US
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        INSERT ONE LINE CALL TO ACTION
      </Typography>
      <Button variant="contained" style={{ backgroundColor: '#007b5e', color: 'white' }}>
        Contact Us
      </Button>
    </Box>
  );
}

export default ContactUs;
