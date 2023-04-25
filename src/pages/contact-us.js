import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/core/Container';
import { Typography, ListItemText, ListItemAvatar, ListItem, Divider, Avatar, Card, Button, Stack } from '@mui/material';
import { info } from 'content/contact-info';

// info@dbmlegalservices.com
// (646) 809-8000
export default function ContactUs() {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true
    });

    const Sidebar = () => (
        <Box flex={'1 1 30%'} maxWidth={'30%'} maxHeight={'100vh'} position={'sticky'} top={0}>
            <Box display={'flex'} alignItems={'center'} height={1} width={1}>
                <Box
                    component={'img'}
                    loading="lazy"
                    height={1}
                    width={1}
                    src={'/images/backgrounds/brooklynbridge2023.jpeg'}
                    alt="..."
                    sx={{
                        objectFit: 'cover'
                    }}
                />
            </Box>
        </Box>
    );

    

    const ContactDetails = () => (
        <Box>
            <Box marginBottom={2}>
                <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
                    Contact details
                </Typography>
                <Typography color="text.secondary">
                    Please contact us to discuss our full range of comprehensive legal solutions tailored to meet your business needs.
                </Typography>
            </Box>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                {info.map((item, i) => (
                    <Box key={i} component={ListItem} disableGutters width={'auto'} padding={0}>
                        <Box component={ListItemAvatar} minWidth={'auto !important'} marginRight={2}>
                            <Box component={Avatar} bgcolor={theme.palette.primary.main} width={40} height={40}>
                                {item.icon}
                            </Box>
                        </Box>
                        <ListItemText primary={item.label} secondary={item.value} />
                    </Box>
                ))}
            </Box>
        </Box>
    );

    return (
        <Box sx={{ overflowX: 'hidden' }}>
            <Main bgcolor={'background.paper'}>

              <Box mx={isMd ? 10 : 0} mt={2} mb={5} >
              <Stack direction="row" spacing={2} justifyContent="flex-end">
                        <Button href="/">Home</Button>
                    </Stack>

                <Card >
                    <Box position={'relative'}  display={'flex'} marginTop={-13}>
                        {isMd ? <Sidebar /> : null}
                        <Box flex={{ xs: '1 1 100%', md: '1 1 70%' }} maxWidth={{ xs: '100%', md: '60%' }} paddingTop={14}>
                            <Box height={1} pl={3}>
                                <Container >
                                    <ContactDetails />
                                    {/* <Box pt={3}>
                                    <Button variant="contained" href={"/"}>
                                      Back
                                    </Button>
                                    </Box> */}
                                </Container>
                            </Box>
                        </Box>
                    </Box>
                </Card>
                </Box>
            </Main>
        </Box>
    );
}
