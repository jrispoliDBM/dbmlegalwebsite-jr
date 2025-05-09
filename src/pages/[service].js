import { useState, useEffect } from 'react';
import { useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import { Button, Stack, Card, Typography, Chip, Grid } from '@mui/material';
import useServices from '@/hooks/useServices';
import ServiceHeader from '@/components/ServiceHeader';
import Section from '@/components/Section';
import Container from 'components/core/Container';
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

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.dbmlegalservices.com/" />
                <meta property="og:title" content="DBM Legal Services Service Page" />
                <meta
                    property="og:description"
                    content="DBM Legal Services, LLC is a full-service law firm that provides legal services to individuals and businesses in the areas of business law, estate planning, and real estate."
                />
                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/dtxp5tzr5/image/upload/v1731194126/luca-bravo-_QdFx92MO2U-unsplash_izhjmo.jpg"
                />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="article:published_time" content="2025-05-09T00:00:00.000Z" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="DBM Legal Services" />
                <meta
                    name="twitter:description"
                    content="DBM Legal Services, LLC is a full-service law firm that provides legal services to individuals and businesses in the areas of business law, estate planning, and real estate."
                />
                <meta
                    name="twitter:image"
                    content="https://res.cloudinary.com/dtxp5tzr5/image/upload/v1731194126/luca-bravo-_QdFx92MO2U-unsplash_izhjmo.jpg"
                />

                {/* LinkedIn specific tags */}
                <meta property="linkedin:owner" content="DBM Legal Services, LLC" />
                <meta name="author" content="Lloyd Mandell" />
                <meta
                    name="image"
                    property="og:image"
                    content="https://res.cloudinary.com/dtxp5tzr5/image/upload/v1731194126/luca-bravo-_QdFx92MO2U-unsplash_izhjmo.jpg"
                />

            </Head>

            <Box>
                <Main bgcolor={'background.paper'}>
                    <Container>
                        {service && (
                            <Stack p={1} pt={8}>
                                <ServiceHeader service={service} />
                                <Box backgroundColor={null}>
                                    <Container>
                                        <Stack spacing={4} p={2}>
                                            {service.sections &&
                                                sortedSections(service.sections).map((section, index) => (
                                                    <Card
                                                        key={index}
                                                        sx={{
                                                            borderRadius: 5,
                                                            border: `2px solid ${theme.palette.white[600]}`,
                                                            textDecoration: 'none',
                                                            backgroundColor: theme.palette.black[900],
                                                            backgroundImage: `linear-gradient(180deg, ${theme.palette.black[500]}, ${theme.palette.black[900]})`, // Gradient background
                                                            transition: 'all .2s ease-in-out',
                                                            '&:hover': {
                                                                transform: `translateY(-${theme.spacing(1 / 2)})`,
                                                                boxShadow: `10px 10px 10px 0px ${theme.palette.white[700]}`
                                                            }
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
                                            <Card
                                                p={4}
                                                sx={{
                                                    // boxShadow: `5px 5px 10px 0px ${theme.palette.white[700]}`, // Change the shadow color here
                                                    // border: `3px solid ${theme.palette.grey[100]}`, // Add border here
                                                    // padding: theme.spacing(2), // Optional: add padding
                                                    // borderRadius: theme.shape.borderRadius, // Optional: adjust borde,
                                                    // backgroundColor: theme.palette.white[300],
                                                    borderRadius: 5,
                                                    border: `2px solid ${theme.palette.white[600]}`,
                                                    textDecoration: 'none',
                                                    backgroundColor: theme.palette.black[900],
                                                    backgroundImage: `linear-gradient(180deg, ${theme.palette.black[500]}, ${theme.palette.black[900]})`, // Gradient background
                                                    transition: 'all .2s ease-in-out',
                                                    '&:hover': {
                                                        transform: `translateY(-${theme.spacing(1 / 2)})`,
                                                        boxShadow: `10px 10px 10px 0px ${theme.palette.white[700]}`
                                                    }
                                                    //boxShadow: `0px 4px 10px ${theme.palette.primary.dark}` // Change the shadow color here
                                                }}
                                            >
                                                <Grid spacing={2} container p={2}>
                                                    <Grid item xs={12} md={4}>
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
                                            <Card
                                                p={4}
                                                sx={{
                                                    borderRadius: 5,
                                                    border: `2px solid ${theme.palette.white[600]}`,
                                                    textDecoration: 'none',
                                                    backgroundColor: theme.palette.black[900],
                                                    backgroundImage: `linear-gradient(180deg, ${theme.palette.black[500]}, ${theme.palette.black[900]})` // Gradient background
                                                    //transition: 'all .2s ease-in-out',
                                                    // '&:hover': {
                                                    //     transform: `translateY(-${theme.spacing(1 / 2)})`,
                                                    //     boxShadow: `10px 10px 10px 0px ${theme.palette.white[700]}`
                                                    // }
                                                }}
                                            >
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
                                                                        sx={{
                                                                            width: '100%',
                                                                            height: '100%',
                                                                            textAlign: 'center',
                                                                            fontWeight: 'bold',
                                                                            color: theme.palette.white[500],
                                                                            borderColor: theme.palette.white[500]
                                                                        }}
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
                    </Container>
                </Main>
            </Box>
        </>
    );
}
