import Hero from '@/components/general_components/Hero';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Container from 'components/core/Container';
import Main from 'layouts/Main';
import Head from 'next/head';
import { useRef } from 'react';
// import OurServices from 'components/OurServices';
import DbmDivider from '@/components/core/DbmDivider';
import CoreValues from '@/components/general_components/CoreValues';
import OurServices from '@/components/general_components/HorizOurServices';
import OurTeam from '@/components/general_components/OurTeam';

export default function Home() {
    const theme = useTheme();
    const coreValuesRef = useRef(null);

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
                    <Container id="core-values-container">
                        {/* <PuzzleAnimation/> */}
                        <Hero nextSectionRef={coreValuesRef} />
                    </Container>
                    <DbmDivider />
                    <Box ref={coreValuesRef}>
                        <Container>
                            <CoreValues />
                        </Container>
                    </Box>
                    <DbmDivider />
                    <Box sx={{ backgroundColor: theme.palette.background.secondary }}>
                        <Container>
                            <OurServices />
                        </Container>
                    </Box>
                    <DbmDivider />
                    <Container>
                        <OurTeam />
                    </Container>
                    {/* <DbmDivider /> */}
                </Main>
            </Box>
        </>
    );
}
// pushing marge to main
// {/* <Box
//     component={'svg'}
//     preserveAspectRatio="none"
//     xmlns="http://www.w3.org/2000/svg"
//     x="0px"
//     y="0px"
//     viewBox="0 0 1920 100.1"
//     sx={{
//         width: '100%',
//         marginBottom: theme.spacing(-1)
//     }}
// >
//     <path fill={theme.palette.alternate.main} d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
// </Box> */}
