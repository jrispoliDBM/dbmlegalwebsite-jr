import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/core/Container';
import OurTeam from 'components/OurTeam';
import { Typography, ListItemText, ListItemAvatar, ListItem, Divider, Avatar, Card, Button, Stack, Grid } from '@mui/material';
import { info, careerInfo } from 'content/contact-info';
import Lottie from 'react-lottie';
import phoneAnimation from 'content/phone.json';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function ContactUs() {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true
    });
    return (
        <Stack>
            <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
                Contact us
            </Typography>
            <Typography color="text.secondary">
                Please contact us to discuss our full range of comprehensive legal solutions tailored to meet your business needs.
            </Typography>
            {info.map((item, i) => (
                <Box key={i} component={ListItem} disableGutters width={'auto'} padding={0}>
                    <Box component={ListItemAvatar} minWidth={'auto !important'} marginRight={2}>
                        <Box component={Avatar} bgcolor={theme.palette.primary.main} width={40} height={40}>
                            {item.icon}
                        </Box>
                    </Box>
                    {item.label === 'Email' ? (
                        <ListItemText
                            primary={item.label}
                            secondary={item.value}
                            primaryTypographyProps={{
                                color: 'textPrimary'
                            }}
                            secondaryTypographyProps={{
                                component: 'a',
                                href: `mailto:${item.value}`,
                                color: 'primary'
                            }}
                        />
                    ) : item.label === 'Request a Call' ? (
                        <>
                            {' '}
                            <ListItemText
                                primary={item.label}
                                secondary={item.value}
                                primaryTypographyProps={{
                                    color: 'textPrimary'
                                }}
                                secondaryTypographyProps={{
                                    component: 'a',
                                    href: `https://outlook.office365.com/book/DBM1@dbmlegalservices.com/s/LUta9DPC30SzU3zO4t6uqQ2`,
                                    color: 'primary'
                                }}
                            />
                        </>
                    ) : item.label === 'LinkedIn' ? (
                        <>
                            <ListItemText
                                primary={item.label}
                                secondary={item.value}
                                primaryTypographyProps={{
                                    color: 'textPrimary'
                                }}
                                secondaryTypographyProps={{
                                    component: 'a',
                                    href: `https://www.linkedin.com/company/duncan-bergman-mandell/`,
                                    color: 'primary'
                                }}
                            />
                        </>
                    ) : (
                        <ListItemText primary={item.label} secondary={item.value} />
                    )}
                </Box>
            ))}
        </Stack>
    );
}

export default ContactUs;
