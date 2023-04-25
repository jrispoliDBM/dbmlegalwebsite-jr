import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/core/Container';
import Hero from 'components/Hero';
import Head from 'next/head';
import OurServices from 'components/OurServices';
import OurTeam from 'components/OurTeam';
import CoreValues from 'components/CoreValues';

export default function Home() {
    const theme = useTheme();
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
                    <Hero />
                    <Container>
                        <CoreValues />
                    </Container>
                    <Container>
                        <OurServices />
                    </Container>
                    <Container>
                        <OurTeam />
                    </Container>

                    <Box
                        component={'svg'}
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 1920 100.1"
                        sx={{
                            width: '100%',
                            marginBottom: theme.spacing(-1)
                        }}
                    >
                        <path fill={theme.palette.alternate.main} d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
                    </Box>
                </Main>
            </Box>
        </>
    );
}
