import React from 'react';
import { Grid, Stack, Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import useMediaQuery from '@mui/material/useMediaQuery';

const Footer = () => {
    const theme = useTheme();
    const { mode } = theme.palette;
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true
    });
    const iconWidth = 50;
    const iconHeight = 70;

    return (
        <Stack direction={isMd ? 'row' : 'column'} justifyContent="space-between" alignItems="center">
            <Stack direction="row" spacing={3} alignItems="center">
                <Box component="a" href="/" title="DBM Legal Services" width={{ xs: iconWidth, md: iconWidth }}>
                    <Box
                        component={'img'}
                        src={mode === 'light' ? '/images/dbmlegal.png' : '/images/dbmlegal.png'}
                        sx={{
                            height: iconHeight, // Set a fixed height for all images
                            width: 'auto' // Maintain the aspect ratio
                        }}
                    />
                </Box>
                <Box
                    component="a"
                    href="https://www.dbmbusinessservices.com"
                    title="DBM Business Services"
                    width={{ xs: iconWidth, md: iconWidth }}
                >
                    <Box
                        component={'img'}
                        src={mode === 'light' ? '/images/dbmbusiness.png' : '/images/dbmbusiness.png'}
                        sx={{
                            height: iconHeight, // Set a fixed height for all images
                            width: 'auto' // Maintain the aspect ratio
                        }}
                    />
                </Box>
                <Box component="a" href="https://www.dbmcompliance.com" title="DBM Compliance" width={{ xs: iconWidth, md: iconWidth }}>
                    <Box
                        component={'img'}
                        src={mode === 'light' ? '/images/dbmcompliance.png' : '/images/dbmcompliance.png'}
                        sx={{
                            height: iconHeight, // Set a fixed height for all images
                            width: 'auto' // Maintain the aspect ratio
                        }}
                    />
                </Box>
            </Stack>

            <Stack direction={isMd ? 'row' : 'column'} spacing={isMd ? 4 : 0}>
                <Typography align={'center'} variant={'subtitle2'} color="text.secondary" gutterBottom>
                    &copy; Copyright {new Date().getFullYear()} DBM Legal Services LLC
                </Typography>
                <Typography align={'center'} variant={'subtitle2'} color="text.secondary" gutterBottom>
                    <a href="tel:6468098000" style={{ textDecoration: 'none', color: 'inherit' }}>
                        (646) 809-8000
                    </a>
                </Typography>
            </Stack>
            <Stack direction="row">
                <Link href="/disclaimer" passHref>
                    <Button sx={{ whiteSpace: 'nowrap' }}>Disclaimer</Button>
                </Link>
                <Link href="/contact-us" passHref>
                    <Button sx={{ whiteSpace: 'nowrap' }}>Contact Us</Button>
                </Link>
            </Stack>
        </Stack>
    );
};

export default Footer;
