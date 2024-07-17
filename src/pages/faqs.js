import React, { useEffect } from 'react';
import { useTheme, alpha } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/core/Container';
import {
    Typography,
    ListItemText,
    ListItemAvatar,
    ListItem,
    Divider,
    Avatar,
    Card,
    Button,
    Stack,
    Grid,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material';
import useFaqs from 'hooks/useFaqs';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Faqs() {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true
    });
    const { faqs } = useFaqs();
    useEffect(() => {
        console.log(faqs);
    }, [faqs]);

    return (
        <Box sx={{ overflowX: 'hidden' }}>
            <Main bgcolor={'background.paper'}>
                <Container>
                    <Box>
                        <Stack direction="row" spacing={2} justifyContent="flex-end">
                            <Button href="/">Home</Button>
                        </Stack>

                        <Card>
                            <Stack direction="row" spacing={2} p={2}>
                                <Stack>
                                    <Typography fontWeight="bold" pb={1} variant={'h2'} gutterBottom align="center">
                                        Frequently Asked{' '}
                                        <Typography
                                            fontWeight="bold"
                                            variant={'h2'}
                                            gutterBottom
                                            component="span"
                                            color="primary"
                                            sx={{
                                                background: `linear-gradient(180deg, transparent 82%, ${alpha(
                                                    theme.palette.primary.light,
                                                    0.3
                                                )} 0%)`
                                            }}
                                        >
                                            Questions.
                                        </Typography>
                                    </Typography>

                                    {faqs.map((item, index) => (
                                        <Box pb={3} key={index}>
                                            {item.headerBefore && (
                                                <Typography variant="h5" fontWeight="bold" py={2}>
                                                    {item.headerBefore}
                                                </Typography>
                                            )}
                                            <Accordion>
                                                <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
                                                    <Stack>
                                                        <Typography variant="h6" fontWeight="bold">
                                                            {item.title}
                                                        </Typography>
                                                    </Stack>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>{item.detailText}</Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        </Box>
                                    ))}
                                </Stack>
                            </Stack>
                        </Card>
                    </Box>
                </Container>
            </Main>
        </Box>
    );
}
