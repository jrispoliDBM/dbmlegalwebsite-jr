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
import { coreValues } from 'content/core-values';

const CoreValues = () => {
    const theme = useTheme();


    return (
        <Box >
            <Grid item xs={12} alignItems="center">
                <Stack direction="row" spacing={2} justifyContent="center" 
                // data-aos={'fade-right'}
                >
                    <Box padding={0} borderRadius={2} width={1} height={1} mb={1}>
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
                                Core Principles.
                            </Typography>
                        </Typography>
                    </Box>
                </Stack>
            </Grid>
            <Grid container spacing={2}>
                {coreValues.map((value, i) => (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                        <Box
                            component={Card}
                            href={''}
                            display={'block'}
                            width={1}
                            height={1}
                            data-aos={'fade-down'}
                            data-aos-delay={i * 500}

                            sx={{
                                boxShadow: theme.shadows[5],
                                borderRadius: 5,
                                border: `4px solid ${theme.palette.primary.main}`,
                                // backgroundColor: theme.palette.primary.light,
                                textDecoration: 'none',
                                transition: 'all .2s ease-in-out',
                                '&:hover': {
                                    transform: `translateY(-${theme.spacing(1 / 2)})`
                                }
                            }}
                        >
                            <Box component={CardContent}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography align="center" variant={'h5'} fontWeight={700} gutterBottom color={theme.palette.primary.main}>
                                            {value.title}
                                        </Typography>
                                        <Typography align="center" variant={'body2'} color="text.primary">
                                            {value.description}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box flexGrow={1} />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CoreValues;
