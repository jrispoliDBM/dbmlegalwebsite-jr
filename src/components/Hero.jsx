import { Box, Slide, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';

const Hero = () => {
    const theme = useTheme();
    const [fontSize, setFontSize] = useState(30); // Initial default font size

    useEffect(() => {
        const updateFontSize = () => {
            setFontSize((window.innerWidth * 7) / 100); // Adjust percentage as needed
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

    return (
        <Stack sx={{ backgroundColor: theme.palette.background.secondary, height: '100vh' }}>
            <Slide
                direction="right"
                in={true}
                mountOnEnter
                unmountOnExit
                easing={{ enter: theme.transitions.easing.easeIn }}
                timeout={timeout}
                onEntered={() => setStartBullets(true)}
            >
                <Typography fontSize={fontSize} fontWeight={fontWeight} color="text.primary">
                    Legal Solutions for
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
                </Slide>
            </Stack>
        </Stack>
    );
};

export default Hero;
// import { Box, Slide, Stack } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import React from 'react';

// const Hero = () => {
//     const theme = useTheme();
//     const fontSize = (window.innerWidth * 7) / 100; // Adjust percentage as needed

//     const timeout = 1250;
//     const fontWeight = 700;
//     const [startBullets, setStartBullets] = React.useState(false);
//     const [startBullets2, setStartBullets2] = React.useState(false);
//     const [startBullets3, setStartBullets3] = React.useState(false);

//     return (
//         <Stack sx={{ backgroundColor: theme.palette.background.secondary, height: '100vh' }}>
//             <Slide
//                 direction="right"
//                 in={true}
//                 mountOnEnter
//                 unmountOnExit
//                 easing={{ enter: theme.transitions.easing.easeIn }}
//                 timeout={timeout}
//                 onEntered={() => setStartBullets(true)}
//             >
//                 <Typography fontSize={fontSize} fontWeight={fontWeight} color="text.primary">
//                     Legal Solutions for
//                 </Typography>
//             </Slide>
//             <Slide
//                 direction="left"
//                 in={true}
//                 mountOnEnter
//                 unmountOnExit
//                 easing={{ enter: theme.transitions.easing.easeIn }}
//                 timeout={timeout}
//             >
//                 <Stack direction="row" alignItems="center" width="100%">
//                     <Box flexGrow={1} />
//                     <Typography fontSize={fontSize} fontWeight={fontWeight} color="primary" align="right">
//                         Business
//                     </Typography>
//                     <Typography fontSize={fontSize} fontWeight={fontWeight} color={theme.palette.white[100]} align="right" component="span">
//                         .
//                     </Typography>
//                 </Stack>
//             </Slide>
//             <Stack alignItems="center" pt={fontSize*.15}>
//                 <Slide
//                     direction="up"
//                     in={startBullets}
//                     appear={startBullets}
//                     easing={{ enter: theme.transitions.easing.easeIn }}
//                     timeout={timeout*0.5}
//                     onEntered={() => setStartBullets2(true)}
//                 >
//                     <Typography fontSize={fontSize*.5} color={theme.palette.white[500]} sx={{ fontWeight: 300 }} pb={fontSize*.03}>
//                         Exceptional talent.
//                     </Typography>
//                 </Slide>
//                 <Slide
//                     direction="up"
//                     in={startBullets2}
//                     appear={startBullets2}
//                     easing={{ enter: theme.transitions.easing.easeIn }}
//                     timeout={timeout*0.5}
//                     onEntered={() => setStartBullets3(true)}
//                 >
//                     <Typography fontSize={fontSize*.5} color={theme.palette.white[500]} sx={{ fontWeight: 300 }} pb={fontSize*.03}>
//                     Cost-effective service.
//                     </Typography>
//                 </Slide>
//                 <Slide
//                     direction="up"
//                     in={startBullets3}
//                     appear={startBullets3}
//                     easing={{ enter: theme.transitions.easing.easeIn }}
//                     timeout={timeout*0.5}
//                 >
//                     <Typography fontSize={fontSize*.5} color={theme.palette.white[500]} sx={{ fontWeight: 300 }} pb={fontSize*.03}>
//                     Custom-tailored solutions.
//                     </Typography>
//                 </Slide>
//             </Stack>
//         </Stack>
//     );
// };

// export default Hero;
//     // const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
//     //     defaultMatches: true
//     // });
//     // const isMd = useMediaQuery(theme.breakpoints.up('md'), {
//     //     defaultMatches: true
//     // });
//     // const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
//     //     defaultMatches: true
//     // });
//     // const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
//     //     defaultMatches: true
//     // });
// //    const fontSize = isLg ? 112 : isMd ? 80 : isSm ? 50 : isXs? 40 : 30;
