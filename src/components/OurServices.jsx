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
//import ServiceCard from './ServiceCard2';
import ServiceCard3 from './ServiceCard3';
import ServiceDialog from './ServiceDialog';
//import ServicePage from 'components/ServicePage';
import Image from 'next/image';
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
        <Stack direction="column" justifyContent="center" alignItems='center'>
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
                    DBM provides a diverse range of business and transactional services across various practice areas to clients of all
                    sizes. From entrepreneurs to Fortune 1000 companies, we offer comprehensive corporate services to streamline your
                    business and expert legal guidance to maximize your financial potential.
                </Typography>
            </Box>
            <Grid container spacing={4} alignItems="center">
                {services.map((service, i) =>
                    service.show ? (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={i} >
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

// {/* <Box
//                             component={Card}
//                             href={''}
//                             display={'block'}
//                             width={1}
//                             minHeight="100%"

//                             // data-aos={'fade-up'}
//                             // data-aos-delay={i * 100}
//                             sx={{
//                                 textDecoration: 'none',
//                                 transition: 'all .2s ease-in-out',
//                                 '&:hover': {
//                                     transform: `translateY(-${theme.spacing(1 / 2)})`
//                                 }
//                             }}
//                         >
//                             {/* <Box
//                             component={Card}
//                             padding={4}
//                             borderRadius={2}
//                             width={1}
//                             height={1}
//                             data-aos={'fade-up'}
//                             data-aos-delay={i * 100}
//                         > */}
//                             <CardMedia
//                                 image={service.image}
//                                 title={service.title}
//                                 sx={{
//                                     height: { xs: 340, md: 400 },
//                                     filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none'
//                                 }}
//                             />
//                             <Box component={CardContent}>
//                                 <Typography variant={'h6'} fontWeight={700} gutterBottom>
//                                     {service.title}
//                                 </Typography>
//                                 <Typography variant={'body2'} color="text.secondary">
//                                     {service.description}
//                                 </Typography>
//                             </Box>
//                             <Box flexGrow={1} />
//                             <Box component={CardActions} justifyContent={'flex-start'}>
//                                 <Button
//                                     size="large"
//                                     onClick={() => handleClickOpen(service)}
//                                     endIcon={
//                                         <svg
//                                             width={16}
//                                             height={16}
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth={2}
//                                                 d="M17 8l4 4m0 0l-4 4m4-4H3"
//                                             />
//                                         </svg>
//                                     }
//                                 >
//                                     Learn more
//                                 </Button>
//                             </Box>
//                         </Box> */}

// {/* <Dialog onClose={handleClose} open={open} fullWidth maxWidth="lg">
// {/* <DialogTitle>
//     <Typography variant={'h6'} fontWeight={700} gutterBottom>
//         {selectedService && selectedService.title}
//     </Typography>
// </DialogTitle> */}
// <DialogContent>
//     <ServicePage service={selectedService} />
//     {/* <DialogContentText></DialogContentText> */}
// </DialogContent>
// <DialogActions>
//     <Button onClick={handleClose} color="primary">
//         Close
//     </Button>
// </DialogActions>
// </Dialog> */}
