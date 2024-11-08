import { useState, useEffect } from 'react';
import { useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import { Button, Stack, Card, Container, Typography, Chip, Grid } from '@mui/material';
import useServices from '@/hooks/useServices';
import ServiceHeader from '@/components/ServiceHeader';
import Section from '@/components/Section';
// import FaqSection from '@/components/FaqSection';
import Main from '@/layouts/Main';
import Head from 'next/head';
import useMediaQuery from '@mui/material/useMediaQuery';
import ServiceContactUs from '@/components/ServiceContactUs';
import NewClientForm from '@/components/NewClientForm';
import ContactUs from '@/components/ContactUs';

export default function Service() {
    const router = useRouter();

    const theme = useTheme();
    const { services, getRoute } = useServices();
    const [service, setService] = useState(null);
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true
    });

    useEffect(() => {
        const serviceQuery = router.query.service;
        if (serviceQuery && services.length > 0) {
            const thisService = services.find((service) => service.route.toLowerCase() === serviceQuery.toLowerCase());
            console.log('This Service', thisService);
            setService(thisService);
        }
    }, [services, router]);

    const sortedSections = (sections) => {
        return sections.sort((a, b) => a.order - b.order);
    };

    return (
        <>
            <Head>
                <title>DBM Legal Services</title>
                <meta name="description" content="DBM Legal Services" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/favicon.ico" />
            </Head>

            <Box sx={{ overflowX: 'hidden' }}>
                <Main bgcolor={'background.paper'}>
                    {service && (
                        <Stack>
                            <ServiceHeader service={service} />
                            <Box backgroundColor={null}>
                                <Container>
                                    <Stack spacing={4} p={2}>
                                        {service.sections &&
                                            sortedSections(service.sections).map((section, index) => (
                                                <Card
                                                    key={index}
                                                    sx={{
                                                        boxShadow: `5px 5px 10px 0px ${theme.palette.white[700]}`, // Change the shadow color here
                                                        border: `3px solid ${theme.palette.grey[100]}`, // Add border here
                                                        padding: theme.spacing(2), // Optional: add padding
                                                        borderRadius: theme.shape.borderRadius // Optional: adjust borde
                                                        //boxShadow: `0px 4px 10px ${theme.palette.primary.dark}` // Change the shadow color here
                                                    }}
                                                >
                                                    <Section section={section} />
                                                </Card>
                                            ))}
                                        <ServiceContactUs service={service} />
                                    </Stack>
                                </Container>
                            </Box>
                            {service.callToAction && (
                                <Container>
                                    <Box p={2} pb={4}>
                                        <Card p={4}>
                                            <Grid spacing={2} container p={2}>
                                                <Grid item xs={12} md={4} >
                                                    <Box pt={4}>
                                                    <ContactUs />
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12} md={8}>
                                                    <NewClientForm source={service.newClientFormSource} />
                                                </Grid>
                                            </Grid>
                                        </Card>
                                    </Box>
                                </Container>
                            )}
                            {service.relatedServices && (
                                <Container>
                                    <Box p={2} pb={4}>
                                        <Card p={4}>
                                            <Stack spacing={4} p={2}>
                                                <Typography variant="h4" fontWeight="bold" color="textPrimary">
                                                    Related Practice Areas
                                                </Typography>
                                                <Grid container spacing={1} justifyContent="flex-start" pr={1}>
                                                    {service.relatedServices.map((relatedService, index) => (
                                                        <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                                                            {false ? (
                                                                <Chip
                                                                    color="primary"
                                                                    clickable
                                                                    component="a"
                                                                    size="large"
                                                                    label={relatedService}
                                                                    href={getRoute(relatedService)}
                                                                    sx={{ width: '100%', height: '100%', textAlign: 'center' }}
                                                                />
                                                            ) : (
                                                                <Button
                                                                    variant="outlined"
                                                                    component="a"
                                                                    href={getRoute(relatedService)}
                                                                    sx={{ width: '100%', height: '100%', textAlign: 'center' }}
                                                                >
                                                                    {relatedService}
                                                                </Button>
                                                            )}
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                            </Stack>
                                        </Card>
                                    </Box>
                                </Container>
                            )}
                        </Stack>
                    )}
                </Main>
            </Box>
        </>
    );
}
