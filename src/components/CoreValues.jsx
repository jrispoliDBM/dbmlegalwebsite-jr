import { Box, Slide, Stack, Grid, Card, CardContent, useMediaQuery } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState, useRef } from 'react';
import { coreValues } from 'content/core-values';

const CoreValues = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true
    });

    const [fontSize, setFontSize] = useState(30); // Initial default font size
    const [isVisible, setIsVisible] = useState(false); // Track visibility of the component

    const observerRef = useRef(null); // Reference to the component for intersection observer

    useEffect(() => {
        // Update font size based on window width
        const updateFontSize = () => {
            setFontSize((window.innerWidth * 7) / 100); // Adjust percentage as needed
        };
        updateFontSize();
        window.addEventListener('resize', updateFontSize);

        // Set up the intersection observer
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the component is visible
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => {
            window.removeEventListener('resize', updateFontSize);
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
        };
    }, []);

    const timeout = 1250;
    const fontWeight = 700;
    const [startBullets, setStartBullets] = useState(false);
    const [startBullets2, setStartBullets2] = useState(false);
    const [startBullets3, setStartBullets3] = useState(false);

    const coreValueComponent = (value, i) => (
        <Grid item xs={12} sm={12} md={4} key={i}>
            <Box
                component={Card}
                href={''}
                display={'block'}
                width={1}
                height={1}
                sx={{
                    boxShadow: theme.shadows[5],
                    borderRadius: 5,
                    border: `2px solid ${theme.palette.black[100]}`,
                    textDecoration: 'none',
                    transition: 'all .2s ease-in-out',
                    '&:hover': {
                        transform: `translateY(-${theme.spacing(1 / 2)})`
                    }
                }}
            >
                <Box component={CardContent}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography align="center" fontSize={isMd ? fontSize*.2 : fontsize} fontWeight={700} gutterBottom color={theme.palette.primary.main}>
                                {value.title}
                            </Typography>
                            <Typography align="center" fontSize={isMd ? fontSize * 0.16 : fontSize} fontWeight={300} color="text.primary">
                                {value.description}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box flexGrow={1} />
            </Box>
        </Grid>
    );

    return (
        <Stack
            ref={observerRef} // Attach ref for intersection observer
            sx={{ backgroundColor: theme.palette.background.secondary, height: '100vh' }}
        >
            <Typography fontSize={fontSize * 0.7} fontWeight={fontWeight} gutterBottom align="center">
                Our{' '}
                <Typography fontSize={fontSize * 0.7} fontWeight={fontWeight} gutterBottom component="span" color="primary">
                    Core Principles
                </Typography>
                <Typography color={theme.palette.white[100]} component={'span'} variant={'inherit'}>
                    .
                </Typography>
            </Typography>
            <Grid container spacing={2}>
            <Slide
                direction="left"
                in={isVisible} // Trigger slide when component is visible
                mountOnEnter
                unmountOnExit
                easing={{ enter: theme.transitions.easing.easeIn }}
                timeout={timeout}
                onEntered={() => setStartBullets(true)}
            >
                {coreValueComponent(coreValues[0], 0)}
            </Slide>
            <Slide
                direction="left"
                in={startBullets} // Trigger slide when component is visible
                mountOnEnter
                unmountOnExit
                easing={{ enter: theme.transitions.easing.easeIn }}
                timeout={timeout}
                onEntered={() => setStartBullets2(true)}
            >
                {coreValueComponent(coreValues[1], 0)}
            </Slide>
            <Slide
                direction="left"
                in={startBullets2} // Trigger slide when component is visible
                mountOnEnter
                unmountOnExit
                easing={{ enter: theme.transitions.easing.easeIn }}
                timeout={timeout}
                onEntered={() => setStartBullets3(true)}
            >
                {coreValueComponent(coreValues[2], 0)}
            </Slide>
            </Grid>
            {/* <Slide
                direction="left"
                in={isVisible} // Trigger slide when component is visible
                mountOnEnter
                unmountOnExit
                easing={{ enter: theme.transitions.easing.easeIn }}
                timeout={timeout}
            >
                <Stack direction="row" alignItems="center" width="100%">
                    <Box flexGrow={1} />
                    <Typography fontSize={fontSize} fontWeight={fontWeight} color="primary" align="right">
                        Business
                    </Typography>
                    <Typography fontSize={fontSize} fontWeight={fontWeight} color={theme.palette.white[100]} align="right" component="span">
                        .
                    </Typography>
                </Stack>
            </Slide>
            <Stack alignItems="center" pt={fontSize * 0.15}>
                <Slide
                    direction="up"
                    in={startBullets}
                    appear={startBullets}
                    easing={{ enter: theme.transitions.easing.easeIn }}
                    timeout={timeout * 0.5}
                    onEntered={() => setStartBullets2(true)}
                >
                    <Typography fontSize={fontSize * 0.5} color={theme.palette.white[500]} sx={{ fontWeight: 300 }} pb={fontSize * 0.03}>
                        Exceptional talent.
                    </Typography>
                </Slide>
                <Slide
                    direction="up"
                    in={startBullets2}
                    appear={startBullets2}
                    easing={{ enter: theme.transitions.easing.easeIn }}
                    timeout={timeout * 0.5}
                    onEntered={() => setStartBullets3(true)}
                >
                    <Typography fontSize={fontSize * 0.5} color={theme.palette.white[500]} sx={{ fontWeight: 300 }} pb={fontSize * 0.03}>
                        Cost-effective service.
                    </Typography>
                </Slide>
                <Slide
                    direction="up"
                    in={startBullets3}
                    appear={startBullets3}
                    easing={{ enter: theme.transitions.easing.easeIn }}
                    timeout={timeout * 0.5}
                >
                    <Typography fontSize={fontSize * 0.5} color={theme.palette.white[500]} sx={{ fontWeight: 300 }} pb={fontSize * 0.03}>
                        Custom-tailored solutions.
                    </Typography>
                </Slide> */}
            {/* </Stack> */}
        </Stack>
    );
};

export default CoreValues;

// import React, { useState } from 'react';
// import { alpha, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import {
//     Backdrop,
//     Button,
//     CardActions,
//     CardContent,
//     Dialog,
//     Stack,
//     DialogTitle,
//     DialogActions,
//     DialogContent,
//     DialogContentText,
//     Grid,
//     Card,
//     Avatar,
//     Typography,
//     CardMedia
// } from '@mui/material';
// import { coreValues } from 'content/core-values';

// const CoreValues = () => {
//     const theme = useTheme();

//     return (
//         <Box >
//             <Grid item xs={12} alignItems="center">
//                 <Stack direction="row" spacing={2} justifyContent="center"
//                 // data-aos={'fade-right'}
//                 >
//                     <Box padding={0} borderRadius={2} width={1} height={1} mb={1}>
//                         <Typography fontWeight="bold" variant={'h2'} gutterBottom align="center">
//                             Our{' '}
//                             <Typography
//                                 fontWeight="bold"
//                                 variant={'h2'}
//                                 gutterBottom
//                                 component="span"
//                                 color="primary"
//                                 sx={{
//                                     background: `linear-gradient(180deg, transparent 87%, ${alpha(theme.palette.primary.main, 0.5)} 0%)`
//                                 }}
//                             >
//                                 Core Principles
//                             </Typography>
//                             <Typography
//                                 color={theme.palette.white[100]}
//                                 component={'span'}
//                                 variant={'inherit'}
//                                 sx={{
//                                     background: `linear-gradient(180deg, transparent 87%, ${alpha(theme.palette.primary.main, 0.5)} 0%)`
//                                 }}
//                             >
//                                 .
//                             </Typography>
//                         </Typography>
//                     </Box>
//                 </Stack>
//             </Grid>
//             <Grid container spacing={2}>
//                 {coreValues.map((value, i) => (
//                     <Grid item xs={12} sm={6} md={4} key={i}>
//                         <Box
//                             component={Card}
//                             href={''}
//                             display={'block'}
//                             width={1}
//                             height={1}
//                             data-aos={'fade-down'}
//                             data-aos-delay={i * 500}

//                             sx={{
//                                 boxShadow: theme.shadows[5],
//                                 borderRadius: 5,
//                                 border: `4px solid ${theme.palette.primary.main}`,
//                                 // backgroundColor: theme.palette.primary.light,
//                                 textDecoration: 'none',
//                                 transition: 'all .2s ease-in-out',
//                                 '&:hover': {
//                                     transform: `translateY(-${theme.spacing(1 / 2)})`
//                                 }
//                             }}
//                         >
//                             <Box component={CardContent}>
//                                 <Grid container spacing={2}>
//                                     <Grid item xs={12}>
//                                         <Typography align="center" variant={'h5'} fontWeight={700} gutterBottom color={theme.palette.primary.main}>
//                                             {value.title}
//                                         </Typography>
//                                         <Typography align="center" variant={'body2'} color="text.primary">
//                                             {value.description}
//                                         </Typography>
//                                     </Grid>
//                                 </Grid>
//                             </Box>
//                             <Box flexGrow={1} />
//                         </Box>
//                     </Grid>
//                 ))}
//             </Grid>
//         </Box>
//     );
// };

// export default CoreValues;
