import React, { useEffect, useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';

const DbmDivider = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true
    });

    const [isVisible, setIsVisible] = useState(false); // Track visibility of the component
    const observerRef = useRef(null); // Reference to the component for intersection observer

    useEffect(() => {
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
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
        };
    }, []);

    const timeout = 650;
    const fontWeight = 700;
    const [startBullets, setStartBullets] = useState(false);
    const [startBullets2, setStartBullets2] = useState(false);

    return (
        <Box
            ref={observerRef}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ width: '100%', height: '100%' }} // Full width and height of container
        >
            <Slide
                direction="right"
                in={isVisible} // Trigger slide when component is visible
                mountOnEnter
                unmountOnExit
                easing={{ enter: theme.transitions.easing.easeIn }}
                timeout={timeout}
                container={observerRef.current}
            >
                <Box
                    backgroundColor={theme.palette.black[100]}
                    sx={{
                        height: 2,
                        width: '90%'
                    }}
                />
            </Slide>
        </Box>
    );
};

export default DbmDivider;
