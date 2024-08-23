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
import ContactUs from '@/components/ContactUs';

export default function ContactUsPage() {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true
    });
    const animationOptions = {
        loop: 3, // Set to true if you want the animation to loop
        autoplay: true, // Set to true if you want the animation to play when the component mounts
        animationData: phoneAnimation, // Your imported animation JSON file
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice' // Adjust as needed
        }
    };
    const Sidebar = () => (
        <Box flex={'1 1 30%'} pl={5} minWidth="520px" maxHeight={'100vh'} position={'sticky'} top={0}>
            <Box display={'flex'} alignItems={'center'} height={1} width={1}>
                <Lottie
                    options={animationOptions}
                    height={'90%'} // Set the height and width as per your requirements
                    width={'100%'}
                />
            </Box>
        </Box>
    );

    const ContactDetails = () => (
        <Stack p={2} >
            <ContactUs />
            <Typography pt={2} variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
                Careers
            </Typography>
            <Typography color="text.secondary">
                If you are a highly qualified candidate or a group of highly qualified candidates with at least five years&apos; experience,
                including significant experience gained at a top-ranked AmLaw 100 law firm in a sophisticated corporate department, we would
                like to speak with you about joining our team at DBM.
            </Typography>
            {careerInfo.map((item, i) => (
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
                    ) : (
                        <ListItemText primary={item.label} secondary={item.value} />
                    )}
                </Box>
            ))}
            <Typography pt={2} variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
                New Client Form
            </Typography>
            <Typography>To provide us more information about your legal needs, please complete our New Client Form.</Typography>
            <Box pt={1}>
                <Button variant="contained" color="primary" href="new-client-form">
                    New Client Form
                </Button>
            </Box>
        </Stack>
    );
    return (
        <Box sx={{ overflowX: 'hidden' }}>
            <Main bgcolor={'background.paper'}>
                <Container>
                    <Box>
                        <Stack direction="row" spacing={2} justifyContent="flex-end">
                            <Button href="/">Home</Button>
                        </Stack>

                        <Card>
                            <Stack direction="row" spacing={2}>
                                {isMd ? <Sidebar /> : null}
                                <ContactDetails />
                            </Stack>
                        </Card>
                    </Box>
                </Container>
            </Main>
        </Box>
    );
}
