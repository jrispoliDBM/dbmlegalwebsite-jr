import React from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';

const DbmDivider = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true
    });

    return isMd ? (
        <>
                    <Box backgroundColor={theme.palette.black[100]} sx={{ height: 2 }}></Box>
            {/* <Box backgroundColor={theme.palette.primary.light} sx={{ height: 10 }}></Box>
            <Box backgroundColor={theme.palette.primary.main} sx={{ height: 10 }}></Box> */}
        </>
    ) : (
        <></>
    );
};

export default DbmDivider;
