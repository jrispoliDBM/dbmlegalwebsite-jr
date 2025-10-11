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
import ServicePage from '@/components/deprecated/ServicePage';

function ServiceDialog({ open, handleClose, selectedService }) {
    const theme = useTheme();

    return (
        <Dialog onClose={handleClose} open={open} fullWidth maxWidth="lg">
        <DialogContent>
            <ServicePage service={selectedService} />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
                Close
            </Button>
        </DialogActions>
    </Dialog>    );
}

export default ServiceDialog;
