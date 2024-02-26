import React, { useState } from 'react';
import {
    Box,
    Button,
    Grid,
    Stack,
    Typography,
    Dialog,
    DialogContent,
    DialogActions,
    DialogContentText,
    DialogTitle,
    Avatar
} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import ServicePage from 'components/ServicePage';

function ServiceDialog({ open, handleClose, selectedService }) {
    const theme = useTheme();

    return (
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
    </Dialog>    );
}

export default ServiceDialog;
