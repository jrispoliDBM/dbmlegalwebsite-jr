import { Box, Slide, Stack, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SouthIcon from '@mui/icons-material/South';

const Hero = () => {
    const theme = useTheme();
    const [fontSize, setFontSize] = useState(30); // Initial default font size
    const containerRef = React.useRef(null);
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true
    });

    useEffect(() => {
        const updateFontSize = () => {
            setFontSize((Math.min(10000,window.innerWidth * 7) / 100)); // Adjust percentage as needed
        };
        updateFontSize();
        window.addEventListener('resize', updateFontSize);
        return () => {
            window.removeEventListener('resize', updateFontSize);
        };
    }, []);

    const timeout = 1250;
    const fontWeight = 700;
    const [startBullets, setStartBullets] = React.useState(false);
    const [startBullets2, setStartBullets2] = React.useState(false);
    const [startBullets3, setStartBullets3] = React.useState(false);
    const [showArrow, setShowArrow] = React.useState(false);

    return (
        <Stack sx={{ backgroundColor: theme.palette.background.secondary, height: '100vh' }} ref={containerRef}>
            <Slide
                direction="right"
                in={true}
                mountOnEnter
                unmountOnExit
                easing={{ enter: theme.transitions.easing.easeIn }}
                timeout={timeout}
                onEntered={() => setStartBullets(true)}
            >
                <Typography fontSize={isMd ? fontSize : fontSize * 1.3} fontWeight={fontWeight} color="text.primary">
                    {isMd ? 'Legal Solutions for' : 'Legal Solutions'}
                </Typography>
            </Slide>
            <Slide
                direction="left"
                in={true}
                mountOnEnter
                unmountOnExit
                easing={{ enter: theme.transitions.easing.easeIn }}
                timeout={timeout}
            >
                <Stack direction="row" alignItems="center" width="100%" >
                    <Box flexGrow={1} />
                    <Typography fontSize={isMd ? fontSize : fontSize * 1.3} fontWeight={fontWeight} color="primary" align="right">
                        {isMd ? 'Business' : 'for Business'}
                    </Typography>
                    <Typography fontSize={fontSize} fontWeight={fontWeight} color={theme.palette.white[100]} align="right" component="span">
                        .
                    </Typography>
                </Stack>
            </Slide>
            <Stack alignItems="center" pt={fontSize * 0.01}>
                <Slide
                    direction="up"
                    in={startBullets}
                    appear={startBullets}
                    easing={{ enter: theme.transitions.easing.easeIn }}
                    timeout={timeout * 0.5}
                    onEntered={() => setStartBullets2(true)}
                    container={containerRef.current}
                >
                    <Typography
                        fontSize={isMd ? fontSize * 0.5 : fontSize * 0.8}
                        color={theme.palette.white[500]}
                        sx={{ fontWeight: 300 }}
                        //pb={fontSize * 0.02}
                    >
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
                    <Typography
                        fontSize={isMd ? fontSize * 0.5 : fontSize * 0.8}
                        color={theme.palette.white[500]}
                        sx={{ fontWeight: 300 }}
                        //pb={fontSize * 0.02}
                    >
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
                    <Typography
                        fontSize={isMd ? fontSize * 0.5 : fontSize * 0.8}
                        color={theme.palette.white[500]}
                        sx={{ fontWeight: 300 }}
                        //pb={fontSize * 0.03}
                    >
                        Custom-tailored solutions.
                    </Typography>
                </Slide>
            </Stack>
            <Stack  pt={1}>
            {showArrow && <IconButton
                onClick={() => window.scrollBy({ top: window.innerHeight * 1.15, behavior: 'smooth' })}
                sx={{
                    
                    backgroundColor: theme.palette.primary.main, // customize background color
                    color: '#ffffff', // customize icon color
                    borderRadius: '50%', // make it circular
                    width: isMd ? fontSize*1.5 : fontSize*1.75, // adjust size as needed
                    height: isMd ? fontSize*1.5 : fontSize*1.75,
                    '&:hover': {
                        backgroundColor: theme.palette.primary.dark, // slightly lighter on hover
                        boxShadow: `5px 5px 5px 0px ${theme.palette.white[700]}`
                    }
                }}
            >
                <SouthIcon sx={{ fontSize: isMd ? fontSize * 0.75 : fontSize * 1 }} />
            </IconButton>}
            </Stack>

        </Stack>
    );
};

export default Hero;
