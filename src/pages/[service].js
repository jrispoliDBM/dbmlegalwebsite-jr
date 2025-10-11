import GradientCard from '@/components/core/GradientCard';
import Section from '@/components/general_components/Section';
import CallToAction from '@/components/service_components/CallToAction';
import ServiceContactUs from '@/components/service_components/OurServiceTeam';
import RelatedServices from '@/components/service_components/RelatedServices';
import ServiceHeader from '@/components/service_components/ServiceHeader';
import useServices from '@/hooks/useServices';
import Main from '@/layouts/Main';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from 'components/core/Container';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Service() {
    const router = useRouter();

    const theme = useTheme();
    const { services } = useServices();
    const [service, setService] = useState(null);

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

            <Box>
                <Main bgcolor={'background.paper'}>
                    {service && (
                        <Container>
                            <Stack p={1} pt={8}>
                                <ServiceHeader service={service} />
                                <Box backgroundColor={null}>
                                    <Container>
                                        <Stack spacing={4} p={2}>
                                            {service.sections &&
                                                sortedSections(service.sections).map((section, index) => (
                                                    <GradientCard key={index}>
                                                        <Section section={section} />
                                                    </GradientCard>
                                                ))}
                                            {!service.hideTeamSection && <ServiceContactUs service={service} />}
                                        </Stack>
                                    </Container>
                                </Box>
                                {service.callToAction && <CallToAction service={service} />}
                                {service.relatedServices && <RelatedServices service={service} />}
                            </Stack>
                        </Container>
                    )}
                </Main>
            </Box>
        </>
    );
}
