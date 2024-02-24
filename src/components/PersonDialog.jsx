
import React, { useState } from 'react';
import { Box, Button, Grid, Stack, Typography, Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle, Avatar } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';


function PersonDialog({ open, handleClose, selectedPerson}) {
    const theme = useTheme();

    return (
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>
                    <Stack direction={'row'} spacing={1} justifyContent="space-between" alignItems="center">
                        <Stack direction="column">
                            <Typography variant={'h5'} fontWeight={700} color="primary">
                                {selectedPerson && selectedPerson.name}
                            </Typography>
                            <Typography gutterBottom>{selectedPerson && selectedPerson.title}</Typography>
                        </Stack>
                        <Stack direction="column">
                            <Avatar
                                src={
                                    selectedPerson && selectedPerson.image
                                        ? selectedPerson.image
                                        : '/images/backgrounds/nordwood-themes-R53t-Tg6J4c-unsplash.jpg'
                                }
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
                        {selectedPerson &&
                            selectedPerson.bio.split('\n').map((paragraph, index) => (
                                <Typography key={index} paragraph>
                                    {paragraph}
                                </Typography>
                            ))}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
    );
}

export default PersonDialog;
