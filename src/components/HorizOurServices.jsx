import React, { useState } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {
    Backdrop,
    Button,
    CardActions,
    CardContent,
    Dialog,
    Stack,
    DialogTitle,
    DialogActions,
    DialogContent,
    DialogContentText,
    Grid,
    Card,
    Avatar,
    Typography,
    CardMedia
} from '@mui/material';
// import ServiceCard3 from './ServiceCard3';
import ServiceCard3 from './HorizServiceCardPhoto';
import ServiceDialog from './ServiceDialog';
import useServices from 'hooks/useServices';

const OurServices = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const { services } = useServices();

    const handleClickOpen = (service) => {
        setSelectedService(service);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Stack direction="column" justifyContent="center" alignItems='center' >
            <Box padding={4} borderRadius={2} width={1} height={1} mb={1}>
                <Typography fontWeight="bold" variant={'h2'} gutterBottom align="center">
                    Our{' '}
                    <Typography
                        fontWeight="bold"
                        variant={'h2'}
                        gutterBottom
                        component="span"
                        color="primary"
                        // sx={{
                        //     background: `linear-gradient(180deg, transparent 87%, ${alpha(theme.palette.primary.main, 0.5)} 0%)`
                        // }}
                    >
                        Services
                    </Typography>
                    <Typography
                                color={theme.palette.white[100]}
                                component={'span'}
                                variant={'inherit'}
                                // sx={{
                                //     background: `linear-gradient(180deg, transparent 87%, ${alpha(theme.palette.primary.main, 0.5)} 0%)`
                                // }}
                            >
                                .
                            </Typography>
                </Typography>
                <Typography variant={'h6'} component={'p'} color={'text.secondary'} align="center">
                    DBM provides a diverse range of business and transactional services across various practice areas to clients of all
                    sizes. From entrepreneurs to Fortune 1000 companies, we offer comprehensive corporate services to streamline your
                    business and expert legal guidance to maximize your financial potential.
                </Typography>
            </Box>
            <Grid container spacing={4} alignItems="center" justifyContent='center'>
                {services.map((service, i) =>
                    service.show ? (
                        <Grid item xs={12} sm={12} md={12} lg={3} key={i} >
                            <ServiceCard3 service={service} handleClickOpen={handleClickOpen}  />
                        </Grid>
                    ) : (
                        <Box key={i}></Box>
                    )
                )}
            </Grid>
            <ServiceDialog open={open} handleClose={handleClose} selectedService={selectedService} />
        </Stack>
    );
};

export default OurServices;
