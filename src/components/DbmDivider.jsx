import React from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';

const DbmDivider = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true
    });

    return  (<Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ width: '100%', height: '100%' }} // Full width and height of container
            >
                <Box
                    backgroundColor={theme.palette.black[100]}
                    sx={{
                        height: 2,
                        width: '90%'
                    }}
                />
            </Box>);
};

export default DbmDivider;
