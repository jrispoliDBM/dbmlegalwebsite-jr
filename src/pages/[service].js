import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import { Button, Stack, Card, Container } from '@mui/material';
import useServices from '@/hooks/useServices';
import ServiceHeader from '@/components/ServiceHeader';
import Section from '@/components/Section';
// import FaqSection from '@/components/FaqSection';
import Main from '@/layouts/Main';
import Head from 'next/head';
import useMediaQuery from '@mui/material/useMediaQuery';
import ServiceContactUs from '@/components/ServiceContactUs';

export default function ContactUs() {
    const router = useRouter();
    
    const theme = useTheme();
    const { services, error, isLoading } = useServices();
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
                                <Container >
                                    <Stack spacing={3} p={2}>
                                        {service.sections &&
                                            service.sections.map((section, index) => (
                                                <Card key={index} sx={{
                                                    boxShadow: `0px 4px 10px ${theme.palette.primary.dark}` // Change the shadow color here
                                                }}>
                                                    <Section section={section} />
                                                </Card>
                                            ))}
                                            <ServiceContactUs service={service}/>
                                    </Stack>
                                </Container>
                            </Box>
                        </Stack>
                    )}
                </Main>
            </Box>
        </>
    );
}
