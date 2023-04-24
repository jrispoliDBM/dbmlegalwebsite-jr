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
import { services } from 'content/services';
import ServicePage from 'components/ServicePage';

const OurServices = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const handleClickOpen = (service) => {
        setSelectedService(service);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Box>
            <Grid item xs={12} alignItems="center">
                <Stack direction="row" spacing={2} justifyContent="center" data-aos={'fade-right'}>
                    <Box padding={4} borderRadius={2} width={1} height={1} mb={1}>
                        <Typography fontWeight="bold" variant={'h2'} gutterBottom align="center">
                            Our{' '}
                            <Typography
                                fontWeight="bold"
                                variant={'h2'}
                                gutterBottom
                                component="span"
                                color="primary"
                                sx={{
                                    background: `linear-gradient(180deg, transparent 82%, ${alpha(theme.palette.primary.light, 0.3)} 0%)`
                                }}
                            >
                                Services.
                            </Typography>
                        </Typography>
                        <Typography variant={'h6'} component={'p'} color={'text.secondary'} align="center">
                            DBM offers business and transactional services in a diverse range of practice areas. Our clients include
                            businesses of all sizes, from entrepreneurs to early to mid-stage companies and Fortune 1000 companies.
                        </Typography>
                    </Box>
                </Stack>
            </Grid>
            <Grid container spacing={4}>
                {services.map((service, i) => (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                        <Box
                            component={Card}
                            href={''}
                            display={'block'}
                            width={1}
                            
                            // data-aos={'fade-up'}
                            // data-aos-delay={i * 100}
                            sx={{
                                textDecoration: 'none',
                                transition: 'all .2s ease-in-out',
                                '&:hover': {
                                    transform: `translateY(-${theme.spacing(1 / 2)})`
                                }
                            }}
                        >
                            {/* <Box
                            component={Card}
                            padding={4}
                            borderRadius={2}
                            width={1}
                            height={1}
                            data-aos={'fade-up'}
                            data-aos-delay={i * 100}
                        > */}
                            <CardMedia
                                image={service.image}
                                title={service.title}
                                sx={{
                                    height: { xs: 340, md: 400 },
                                    filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none'
                                }}
                            />
                            <Box component={CardContent}>
                                <Typography variant={'h6'} fontWeight={700} gutterBottom>
                                    {service.title}
                                </Typography>
                                <Typography variant={'body2'} color="text.secondary">
                                    {service.description}
                                </Typography>
                            </Box>
                            <Box flexGrow={1} />
                            <Box component={CardActions} justifyContent={'flex-start'}>
                                <Button
                                    size="large"
                                    onClick={() => handleClickOpen(service)}
                                    endIcon={
                                        <svg
                                            width={16}
                                            height={16}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    }
                                >
                                    Learn more
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Dialog onClose={handleClose} open={open} fullWidth maxWidth="lg">
                {/* <DialogTitle>
                    <Typography variant={'h6'} fontWeight={700} gutterBottom>
                        {selectedService && selectedService.title}
                    </Typography>
                </DialogTitle> */}
                <DialogContent>
                    <ServicePage service={selectedService} />
                    {/* <DialogContentText></DialogContentText> */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default OurServices;
