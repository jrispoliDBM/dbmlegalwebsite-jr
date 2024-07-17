// src/components/Section.js
import React from 'react';
import { Stack, Box, Typography, Button, Grid, Container, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { keyframes } from '@emotion/react';

function Section({ section }) {
    const theme = useTheme();
    const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;
    return (
        <Container>
            <Stack p={4}>
                {section.title && (
                    <Box
                        sx={{
                            animation: `${slideIn} 1s ease-out forwards`
                        }}
                    >
                        <Typography variant="h2" fontWeight="bold" align="center" color="primary">
                            {section.title}
                        </Typography>
                    </Box>
                )}
                <Box pb={3}>
                    {section.subtitle && (
                        <Box
                            sx={{
                                animation: `${slideIn} 1s ease-out forwards`
                            }}
                        >
                            <Typography variant={section.subtitle.length < 40 ? 'h3' : 'h4'} fontWeight="bold" align="center" gutterBottom>
                                {section.subtitle}
                            </Typography>
                        </Box>
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
                                {item.headerBefore && (
                                    <Typography variant="h5" fontWeight="bold" pb={1} pt={index > 0 ? 3 : 0}>
                                        {item.headerBefore}
                                    </Typography>
                                )}
                                <Stack direction="row" spacing={1} alignItems="center">
                                    {item.iconBefore && item.iconBefore === 'CheckSharp' && <CheckSharpIcon color="primary" />}
                                    <Stack direction="column">
                                        <Typography
                                            variant="h6"
                                            fontWeight="bold"
                                            color="primary"
                                            pl={section.indentItems ? section.indentItems : 0}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography pl={section.indentItems ? section.indentItems : 0}>{item.detailText}</Typography>
                                    </Stack>
                                </Stack>
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
                                    <Typography variant="h6" fontWeight="bold">
                                        {item.title}
                                    </Typography>
                                </Stack>
                            </Stack>
                        ))}
                    </>
                )}
                {section.bottomCallToActionButton && (
                    <Box pt={3} display="flex" justifyContent="center">
                        <Button variant="contained" href={section.bottomCallToActionButton.route} m={10}>
                            <Typography>{section.bottomCallToActionButton.label}</Typography>
                        </Button>
                    </Box>
                )}
            </Stack>
        </Container>
    );
}

export default Section;
