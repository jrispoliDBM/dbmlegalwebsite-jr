import { Box, Slide, Stack, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SouthIcon from '@mui/icons-material/South';

const Hero = ({ nextSectionRef }) => {
    const theme = useTheme();
    const containerRef = React.useRef(null);
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true
    });
    const isXs = useMediaQuery(theme.breakpoints.down('sm'), {
        defaultMatches: true
    });
    const timeout = 1250;
    const [startBullets, setStartBullets] = React.useState(false);
    const [startBullets2, setStartBullets2] = React.useState(false);
    const [startBullets3, setStartBullets3] = React.useState(false);
    const [showArrow, setShowArrow] = React.useState(false);
    const [slideIn, setSlideIn] = useState(false);

    useEffect(() => {
        setSlideIn(true);
    }, []);

    const handleScrollToNextSection = () => {
        console.log('Next Section Ref:', nextSectionRef.current);
        if (nextSectionRef.current) {
            //nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
            smoothScrollTo(nextSectionRef.current, 2000);
        }
    };

    function smoothScrollTo(element, duration = 1000) {
        const startPosition = window.scrollY;
        const targetPosition = element.getBoundingClientRect().top + window.scrollY;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    return (
        <Stack
            sx={{ backgroundColor: theme.palette.background.secondary, minHeight: `calc(100vh)`, paddingBottom: '100px' }}
            ref={containerRef}
            justifyContent="center"
            p={2}
        >
            <Slide
                direction="right"
                in={slideIn}
                mountOnEnter
                unmountOnExit
                easing={{ enter: theme.transitions.easing.easeIn }}
                timeout={timeout}
                onEntered={() => setStartBullets(true)}
            >
                {/* <Typography fontSize={isMd ? fontSize : fontSize * 1.3} fontWeight={fontWeight} color="text.primary"> */}
                <Typography variant="h1" color="text.primary">
                    {isMd ? 'Legal Solutions for' : 'Legal Solutions'}
                </Typography>
            </Slide>
            <Slide
                direction="left"
                in={slideIn}
                mountOnEnter
                unmountOnExit
                easing={{ enter: theme.transitions.easing.easeIn }}
                timeout={timeout}
            >
                <Stack direction="row" alignItems="center" width="100%">
                    <Box flexGrow={1} />
                    <Typography variant="h1" color="primary" align="right">
                        {isMd ? 'Business' : 'for Business'}
                        <Typography variant="h1" color={theme.palette.white[100]} align="right" component="span">
                            .
                        </Typography>
                    </Typography>
                </Stack>
            </Slide>
            <Stack alignItems="center" py={4} spacing={3}>
                <Slide
                    direction="up"
                    in={startBullets}
                    appear={startBullets}
                    easing={{ enter: theme.transitions.easing.easeIn }}
                    timeout={timeout * 0.5}
                    onEntered={() => setStartBullets2(true)}
                    container={containerRef.current}
                >
                    <Typography variant="h3" color={theme.palette.white[500]} align="center">
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
                    container={containerRef.current}
                >
                    <Typography variant="h3" color={theme.palette.white[500]} align="center">
                        Cost-effective service.
                    </Typography>
                </Slide>
                <Slide
                    direction="up"
                    in={startBullets3}
                    appear={startBullets3}
                    easing={{ enter: theme.transitions.easing.easeIn }}
                    timeout={timeout * 0.5}
                    container={containerRef.current}
                    onEntered={() => setShowArrow(true)}
                >
                    <Typography variant="h3" color={theme.palette.white[500]} align="center">
                        Custom-tailored solutions.
                    </Typography>
                </Slide>
            </Stack>
            <Stack pt={1} sx={{ height: '110px' }}>
                <Slide
                    direction="up"
                    in={showArrow}
                    appear={showArrow}
                    easing={{ enter: theme.transitions.easing.easeIn }}
                    timeout={timeout * 0.5}
                    container={containerRef.current}
                    onEntered={() => setShowArrow(true)}
                >
                    <IconButton
                        onClick={handleScrollToNextSection}
                        sx={{
                            backgroundColor: theme.palette.primary.main, // customize background color
                            color: '#ffffff', // customize icon color
                            borderRadius: '50%', // make it circular
                            width: isXs ? 75 : 100, //isMd ? fontSize*1.5 : fontSize*1.75, // adjust size as needed
                            height: isXs ? 75: 100, //isMd ? fontSize*1.5 : fontSize*1.75,
                            '&:hover': {
                                backgroundColor: theme.palette.primary.dark, // slightly lighter on hover
                                boxShadow: `5px 5px 5px 0px ${theme.palette.white[700]}`
                            },
                            display: showArrow ? 'block' : 'none'
                        }}
                    >
                        <SouthIcon sx={{ fontSize: isXs ? 35 : 50 }} />
                    </IconButton>
                </Slide>
            </Stack>
        </Stack>
    );
};

export default Hero;
