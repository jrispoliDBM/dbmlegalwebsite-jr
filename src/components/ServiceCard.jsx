import React, { Component } from 'react';
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

const ServiceCard = ({service, handleClickOpen}) => {
    const theme = useTheme();

    return (
        <Box
            component={Card}
            href={''}
            display={'block'}
            width={1}
            minHeight="100%"
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    }
                >
                    Learn more
                </Button>
            </Box>
        </Box>
    );
};

export default ServiceCard;
