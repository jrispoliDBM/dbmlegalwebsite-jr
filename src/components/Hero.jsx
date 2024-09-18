import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';
import Container from 'components/core/Container';
import DbmDivider from './DbmDivider';

const Hero = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true
    });

    return (
        <Box
        sx={{backgroundColor: theme.palette.grey[100]}}
        // sx={{
        //     backgroundImage: `linear-gradient(to bottom, ${alpha(theme.palette.background.paper, 0)}, ${alpha(
        //         theme.palette.alternate.main,
        //         1
        //     )} 100%)`,
        //     backgroundRepeat: 'repeat-x',
        //     position: 'relative'
        // }}
        >
            <Box paddingY={{ xs: 0, sm: 0, md: 0 }}>
                <Container>
                    <Box maxWidth={{ xs: 1, sm: '100%' }}>
                        <Typography
                            variant="h1"
                            color="text.primary"
                            gutterBottom
                            sx={{
                                fontWeight: 700
                            }}
                        >
                            Legal Solutions for
                            <br />{' '}
                            <Typography
                                color={'primary'}
                                component={'span'}
                                variant={'inherit'}
                                sx={{
                                    background: `linear-gradient(180deg, transparent 82%, ${alpha(theme.palette.primary.light, 0.3)} 0%)`
                                }}
                            >
                                Business.
                            </Typography>
                        </Typography>
                        <Box data-aos={'fade-right'}>
                            <Typography variant="h5" component="p" color={theme.palette.grey[700]} sx={{ fontWeight: 700, width: '70%' }}>
                                Exceptional talent, cost-effective service, and custom-tailored solutions to complex business transactions
                                and legal issues.
                            </Typography>
                        </Box>
                        <Box
                            display="flex"
                            flexDirection={{ xs: 'column', sm: 'row' }}
                            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
                            marginTop={4}
                        >
                            <Button
                                component={'a'}
                                variant="contained"
                                color="primary"
                                size="large"
                                fullWidth={isMd ? false : true}
                                href={'/contact-us'}
                                // sx={{backgroundColor: theme.palette.primary.dark}}
                            >
                                Contact Us
                            </Button>
                            <Box marginTop={{ xs: 2, sm: 0 }} marginLeft={{ sm: 2 }} width={{ xs: '100%', md: 'auto' }}></Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <DbmDivider />

            {/* <Box backgroundColor={theme.palette.primary.main} sx={{ height: 10 }}></Box>
            <Box backgroundColor={`linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`} sx={{ height: 100 }}></Box> */}
            {/* <Box
                sx={{
                    height: 30,
                    background: `linear-gradient(to bottom, ${alpha(theme.palette.primary.light,0.3)}, ${theme.palette.primary.main})`
                }}
            /> */}
            {/* <Box backgroundColor={theme.palette.primary.light} sx={{ height: 10 }}></Box>
            <Box backgroundColor={alpha(theme.palette.primary.light,0.3)} sx={{ height: 10 }}></Box> */}
            {/* <Box
                component={"svg"}
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 1920 100.1"
                sx={{
                    width: "100%",
                    marginBottom: theme.spacing(-1),
                }}
            >
                <path
                    fill={theme.palette.background.paper}
                    d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
                ></path>
            </Box> */}
        </Box>
    );
};

export default Hero;
