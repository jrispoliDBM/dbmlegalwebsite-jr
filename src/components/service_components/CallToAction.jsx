import React from 'react';
import Container from 'components/core/Container';
import Box from '@mui/material/Box';
import GradientCard from 'components/core/GradientCard';
import Grid from '@mui/material/Grid';
import ContactUs from '@/components/general_components/ContactUs';
import NewClientForm from '@/components/general_components/NewClientForm';

const CallToAction = ({ service }) => {
    return (
        <Container>
            <Box p={2} pb={4}>
                <GradientCard p={4}>
                    <Grid spacing={2} container p={2}>
                        <Grid item xs={12} md={4}>
                            <Box pt={4}>
                                <ContactUs />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <NewClientForm source={service.newClientFormSource} />
                        </Grid>
                    </Grid>
                </GradientCard>
            </Box>
        </Container>
    );
};

export default CallToAction;
