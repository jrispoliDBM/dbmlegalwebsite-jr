import React, { Component } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from 'next/link';
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
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';

const ServiceCard = ({ service, handleClickOpen }) => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true
    });

    return (
        <Card>
            <Box
                boxShadow={1}
                sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    height: '100%',
                    borderRadius: 2,
                    '&:hover': {
                        '& .portfolio-masonry__main-item': {
                            bottom: 0
                        }
                    },
                    '&:hover .image-transform img': {
                        transform: 'scale(1.2)',
                        transition: 'transform 0.7s ease'
                    },
                    '.image-transform img': {
                        transform: 'scale(1.0)',
                        transition: 'transform 0.7s ease'
                    }
                }}
            >
                <Stack direction={'column'} spacing={0} alignItems="center">
                    <Box className="image-transform">
                        <Link href={service.route}>
                        <Image
                            sx={{
                                transition: 'transform .7s ease !important',
                                transform: 'scale(1.0)',
                                objectFit: 'cover'
                            }}
                            height={175}
                            width={175}
                            alt={service.headerSection.image}
                            src={`/images/services/${service.headerSection.image}`}
                        />
                        </Link>
                    </Box>
                    <Typography variant={'h6'} fontWeight={700} gutterBottom align="center">
                        {service.headerSection.title}
                    </Typography>
                </Stack>
                <Box
                    position={'absolute'}
                    bottom={'-100%'}
                    left={0}
                    right={0}
                    bgcolor={theme.palette.grey[900]}
                    className={'portfolio-masonry__main-item'}
                    sx={{ transition: 'bottom 0.3s ease 0s' }}
                >
                    <Stack direction="column" alignItems="center">
                        <Box
                            component={'svg'}
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 1920 100.1"
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                transform: 'translateY(-90%)',
                                zIndex: 2,
                                width: 1
                            }}
                        >
                            <path fill={theme.palette.grey[900]} d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
                        </Box>
                        <Box pb={isMd ? 0.5 : 2}>
                            <Button variant="contained" color="primary" component="a" href={`${service.route}`}>
                                Learn More
                            </Button>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Card>
    );
};

export default ServiceCard;
