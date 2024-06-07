// src/components/Section.js
import React from 'react';
import { Stack, Box, Typography, Button, Grid, Container, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Section({ section }) {
    const theme = useTheme();
    return (
        <Container>
            <Stack p={4}>
                {section.title && (
                    <>
                        <Typography variant="h2" fontWeight="bold" align="center" color='primary'>
                            {section.title}
                        </Typography>
                    </>
                )}
                    <Box pb={3}>
                {section.subtitle && (
                        <Typography variant={section.subtitle.length < 40  ?  "h3" : "h4"} fontWeight="bold" align="center" gutterBottom>
                            {section.subtitle}
                        </Typography>
                )}
                    </Box>
                {section.sectionType === 'checkMarkList' && (
                    <Grid container spacing={3} pt={2}>
                        {section.items.map((item, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <Stack direction="row" spacing={1}>
                                    <CheckBoxIcon color="primary" />
                                    <Box>
                                        <Typography variant="h6" fontWeight="bold">
                                            {item.title}
                                        </Typography>
                                        <Typography>{item.detailText}</Typography>
                                    </Box>
                                </Stack>
                            </Grid>
                        ))}
                    </Grid>
                )}
                {section.sectionType === 'faq' &&
                    section.items.map((item, index) => (
                        <Box pb={3} key={index}>
                            <Accordion>
                                <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
                                    <Typography variant="h6" fontWeight="bold">
                                        {item.title}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>{item.detailText}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                    ))}
                {section.sectionType === 'catalog' && (
                    <>
                        {section.items.map((item, index) => (
                                <Stack pb={1} key={index}>
                                        <Typography variant="h6" fontWeight="bold" color='primary'>
                                            {item.title}
                                        </Typography>
                                        <Typography>{item.detailText}</Typography>
                                </Stack>
                        ))}
                        </>
                )}
                {(section.sectionType === 'simpleList' || section.sectionType === 'simplelist') && (
                    <>
                        {section.items.map((item, index) => (
                                <Stack pb={1} key={index}>
                                    <Stack direction="row" spacing={1}>
                                    <CheckCircleIcon color="primary" />
                                        <Typography variant="h6" fontWeight="bold" >
                                            {item.title}
                                        </Typography>
                                    </Stack>
                                        
                                </Stack>
                        ))}
                        </>
                )}
            </Stack>
        </Container>
    );
}

export default Section;
