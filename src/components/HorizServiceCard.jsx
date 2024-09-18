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
import { CldImage } from 'next-cloudinary';

const HorizServiceCard = ({ service, handleClickOpen }) => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true
    });

    const iconSize = 100;
    // `0 3px 6px 0 ${alpha(rgb, 0.25)}`,
    // `0 12px 15px ${alpha(rgb, 0.1)}`,
    // `0 6px 24px 0 ${alpha(rgb, 0.125)}`,
    // `0 10px 40px 10px ${alpha(rgb, 0.175)}`,
    // `0 16px 28px 0 ${alpha(rgb, 0.35)}`,
    // `0 20px 40px 5px ${alpha(rgb, 0.4)}`,
    // `0 24px 48px 10px ${alpha(rgb, 0.45)}`,
    return (
        <Card
            elevation={1}
            sx={{
                transition: 'box-shadow 0.3s ease-in-out',
                ':hover': {
                    boxShadow: `0 8px 15px 8px ${alpha(theme.palette.primary.main, 0.24)}`, // Change elevation on hover by adjusting box-shadow level
                }
            }}
        >
            <Stack direction={'row'} spacing={2} alignItems="center">
                <Box p={3}>
                    <CldImage
                                width={iconSize} // Transform the image: auto-crop to square aspect_ratio
                                height={iconSize}
                                alt={service.headerSection.image}
                                src={`${service.headerSection.image}`}
                                style={{
                                    objectFit: 'contain',
                                    transition: 'transform .7s ease !important'
                                }}
                            />
                </Box>
                <Link className="link" href={service.route}>
                    <Typography
                        component="a"
                        color={'text.primary'}
                        variant={'h4'}
                        fontWeight={800}
                        gutterBottom
                        align="left"
                        p={3}
                        sx={{
                            position: 'relative',
                            display: 'inline-block',
                            cursor: 'default',
                            ':hover': {
                                // transition: 'transform .7s ',
                                transform: 'scale(1.05)',
                                textDecoration: 'underline',
                                textDecorationColor: theme.palette.grey[900],
                                color: theme.palette.primary.main,
                                cursor: 'pointer'
                            }
                        }}
                    >
                        {service.headerSection.title}
                    </Typography>
                </Link>
            </Stack>
        </Card>
    );
};

export default HorizServiceCard;
