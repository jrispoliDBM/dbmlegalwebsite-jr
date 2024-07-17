import React, { useState } from 'react';
import {
    Box,
    Button,
    Grid,
    Stack,
    Chip,
    Typography,
    Dialog,
    DialogContent,
    DialogActions,
    DialogContentText,
    DialogTitle,
    Avatar,
    IconButton,
    Tooltip
} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';

function PersonDialog({ open, handleClose, person }) {
    const theme = useTheme();

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>
                <Stack direction={'row'} spacing={1} justifyContent="space-between" alignItems="center">
                    <Stack direction="column">
                        <Typography variant={'h5'} fontWeight={700} color="primary">
                            {person && person.name}
                        </Typography>
                        <Typography gutterBottom>{person && person.title}</Typography>
                    </Stack>
                    <Stack direction="column">
                        <Avatar
                            src={person && person.image ? person.image : '/images/backgrounds/nordwood-themes-R53t-Tg6J4c-unsplash.jpg'}
                            sx={{
                                width: 56,
                                height: 56,
                                border: '1px solid', // Adjust the border thickness as needed
                                borderColor: theme.palette.grey[200], // Set the border color
                                boxShadow: theme.shadows[6] // Choose a shadow from the theme's shadows array
                            }}
                            imgProps={{
                                style: {
                                    objectFit: 'contain'
                                }
                            }}
                        />
                    </Stack>
                </Stack>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Stack direction="column" spacing={0}>
                        {person &&
                            person.bio.split('\n').map((paragraph, index) => (
                                <Typography key={index} paragraph color="black">
                                    {paragraph}
                                </Typography>
                            ))}
                        {person && person.verticals && person.verticals.length > 0 && (
                            <Typography variant={'h6'} fontWeight={700} color="black">
                                {/* Verticals: {person.verticals.join(', ')} */}
                                Practice Areas:{' '}
                                {person.verticals.map((vertical, i) => {
                                    return <Chip key={i} label={vertical} variant="outlined" color="primary" sx={{ m: 0.5 }} />;
                                })}
                            </Typography>
                        )}
                    </Stack>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Stack direction="row" justifyContent="space-between" style={{ width: '100%' }}>
                    <Stack direction="row">
                        {person && person.linkedin && (
                            <Tooltip title={`${person.linkedin}`} arrow>
                                <Link href={person.linkedin} passHref>
                                    <IconButton component="a" color="primary">
                                        <LinkedInIcon fontSize="large" />
                                    </IconButton>
                                </Link>
                            </Tooltip>
                        )}
                        {person && person.email && (
                            <Tooltip title={`${person.email}`} arrow>
                                <Link href={`mailto:${person.email}`} passHref>
                                    <IconButton component="a" color="primary">
                                        <EmailIcon fontSize="large" />
                                    </IconButton>
                                </Link>
                            </Tooltip>
                        )}
                    </Stack>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </Stack>
            </DialogActions>
        </Dialog>
    );
}

export default PersonDialog;
