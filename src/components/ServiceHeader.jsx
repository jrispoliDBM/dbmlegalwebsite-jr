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
    Container,
    CardMedia
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';

const ServiceHeader = ({ service }) => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true
    });
    console.log(service);

    return (
        <Container maxWidth="lg">
            {service && (
                <Grid container spacing={isMd ? 4 : 2} pb={4}>
                    <Grid item xs={12} md={8}>
                        <Box maxWidth={{ xs: 1, sm: '100%' }} >
                            <Typography
                                variant="h1"
                                color="text.primary"
                                pb={2}
                                sx={{
                                    fontWeight: 700
                                }}
                            >
                                <Typography
                                    color={'primary'}
                                    component={'span'}
                                    variant={'inherit'}
                                    sx={{
                                        background: `linear-gradient(180deg, transparent 82%, ${alpha(
                                            theme.palette.primary.light,
                                            0.3
                                        )} 0%)`
                                    }}
                                >
                                    {service.headerSection.title}.
                                </Typography>
                            </Typography>
                            <Typography variant="h3" fontWeight="bold" gutterBottom>
                                {service.headerSection.subtitle}
                            </Typography>
                            <Box data-aos={'fade-right'}>
                                <Typography variant='h6'>{service.headerSection.detailText}</Typography>
                            </Box>
                            <Box
                                display="flex"
                                flexDirection={{ xs: 'column', sm: 'row' }}
                                alignItems={{ xs: 'stretched', sm: 'flex-start' }}
                                marginTop={4}
                            >
                                <Button
                                    component={'a'}
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    fullWidth={isMd ? false : true}
                                    href={'/contact-us'}
                                    // sx={{backgroundColor: theme.palette.primary.dark}}
                                >
                                    Contact Us
                                </Button>
                                <Box marginTop={{ xs: 2, sm: 0 }} marginLeft={{ sm: 2 }} width={{ xs: '100%', md: 'auto' }}></Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box position="relative" height={1} width={1}>
                            <Image
                                src={`/images/services/${service.headerSection.image}`}
                                alt={service.headerSection.title}
                                fill={true}
                                style={{ objectFit: 'contain', objectPosition: 'center' }}
                                // width={300}
                                // height={300}
                            />
                        </Box>
                    </Grid>
                </Grid>
            )}
        </Container>
    );
};

export default ServiceHeader;
