import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/core/Container';
import { Button, Stack } from '@mui/material';
import ServicesGrid from 'components/HorizOurServices';

export default function ContactUs() {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true
    });

    return (
        <Box sx={{ overflowX: 'hidden' }}>
            <Main bgcolor={'background.paper'}>
                <Container>
                    <Stack direction="row" spacing={2} justifyContent="flex-end">
                        <Button href="/">Home</Button>
                    </Stack>
                    <ServicesGrid />
                    <Stack direction="row" spacing={2} justifyContent="flex-end">
                        <Button href="/">Home</Button>
                    </Stack>
                </Container>
            </Main>
        </Box>
    );
}
