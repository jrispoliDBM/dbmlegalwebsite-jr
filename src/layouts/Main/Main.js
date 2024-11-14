import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import Container from 'components/core/Container';
import { Topbar, Sidebar, Footer } from './components';
import { pages } from '../navigation';
import useServices from '@/hooks/useServices';

const Main = ({ children, colorInvert = false, bgcolor = 'transparent' }) => {
    const { services, error, isLoading } = useServices();
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true
    });

    const [openSidebar, setOpenSidebar] = useState(false);
    const [showAppBar, setShowAppBar] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const handleSidebarOpen = () => setOpenSidebar(true);
    const handleSidebarClose = () => setOpenSidebar(false);

    // Detect scroll direction and toggle AppBar visibility
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const scrollingUp = prevScrollPos > currentScrollPos;

            setShowAppBar(scrollingUp || currentScrollPos < 10); // Show when scrolling up or near top
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 38
    });

    return (
        <Box>
            <AppBar
                position="fixed" // Keep AppBar fixed at the top
                sx={{
                    top: 0,
                    backgroundColor: trigger ? theme.palette.background.paper : bgcolor,
                    transform: showAppBar ? 'translateY(0)' : 'translateY(-100%)',
                    transition: 'transform 0.3s ease-in-out', // Smooth slide-in/out
                    //borderBottom: `2px solid ${theme.palette.black[100]}`,
                    zIndex: theme.zIndex.appBar, boxShadow: showAppBar ? `0px 4px 4px ${theme.palette.black[100]}` : 'none', // Shadow when visible
                }}
                elevation={trigger ? 1 : 0}
            >
                <Container paddingY={1}>
                    <Topbar onSidebarOpen={handleSidebarOpen} pages={pages} colorInvert={trigger ? false : colorInvert} />
                </Container>
            </AppBar>

            {/* Offset content to avoid hiding behind AppBar */}
            <Box sx={{ pt: '64px' }}> {/* Adjust pt value to match AppBar height */}
                <Sidebar onClose={handleSidebarClose} open={openSidebar} variant="temporary" />
                <main>
                    {children}
                    <Divider />
                </main>
                <Box sx={{ backgroundColor: theme.palette.background.secondary, borderTop: `2px solid ${theme.palette.black[100]}` }}>
                    <Container paddingY={4}>
                        <Footer />
                    </Container>
                </Box>
            </Box>
        </Box>
    );
};

Main.propTypes = {
    children: PropTypes.node,
    colorInvert: PropTypes.bool,
    bgcolor: PropTypes.string
};

export default Main;
