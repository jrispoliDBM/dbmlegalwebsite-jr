// src/components/Section.js
import React from 'react';
import { Stack, Box, Typography, Button, Grid, Container } from '@mui/material';
import useTheme from '@mui/material/styles/useTheme';

function CheckmarkList({ items }) {
    const theme = useTheme();
    return (
        <Grid container spacing={3}>
            {items.map((item, index) => (
                <Grid item xs={12} md={6} key={index}>
                    <Typography variant="h3" component="h2">
                        {item.title}
                    </Typography>
                    <Typography variant="h5" component="h3" gutterBottom>
                        {item.detailText}
                    </Typography>
                </Grid>
            ))}
        </Grid>
    );
}

export default CheckmarkList;
