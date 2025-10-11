import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const SimpleList = ({ section, textColor }) => {
    return (
        <Box p={2}>
            {section.items
                .sort((a, b) => a.order - b.order)
                .map((item, index) => (
                    <Stack p={1} key={index}>
                        <Stack direction="row" spacing={1}>
                            <CheckCircleIcon color="primary" />
                            <Typography variant="h6" fontWeight="bold" color={textColor}>
                                {item.title}
                            </Typography>
                        </Stack>
                    </Stack>
                ))}
        </Box>
    );
};

export default SimpleList;
