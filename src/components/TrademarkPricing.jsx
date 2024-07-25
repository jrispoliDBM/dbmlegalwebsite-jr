import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Typography, Stack, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const TrademarkPricing = () => {
    const theme = useTheme();
    const checkList = ['Trademark Search', 'Filing and application management', 'Registration', 'Enforcement and usage advisory'];
    return (
        <Stack>
            <Typography variant="h3" align="center" fontWeight="bold">
                $2,000
            </Typography>
            <Typography variant="h5" color="text.secondary" fontWeight="bold" pt={2}>
                Service includes the following:
            </Typography>
            <Grid container spacing={3} pt={2}>
                {checkList.map((item, index) => (
                    <Grid item xs={12} md={6}>
                        <Stack direction="row" spacing={1}>
                            <CheckCircleIcon color="primary" />
                            <Typography variant="body">{item}</Typography>
                        </Stack>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
};

export default TrademarkPricing;
