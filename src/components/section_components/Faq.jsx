import React from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useTheme } from '@mui/material/styles';

const Faq = ({ section }) => {
    const theme = useTheme();
    return section.items
        .sort((a, b) => a.order - b.order)
        .map((item, index) => (
            <Box pb={3} pt={1} key={index}>
                <Accordion sx={{ backgroundColor: theme.palette.white[100] }}>
                    <AccordionSummary expandIcon={<ArrowDropDownIcon sx={{ color: theme.palette.black[500] }} />}>
                        <Typography color={theme.palette.black[500]} variant="h6" fontWeight="bold">
                            {item.title}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color={theme.palette.black[500]}>{item.detailText}</Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        ));
};

export default Faq;
