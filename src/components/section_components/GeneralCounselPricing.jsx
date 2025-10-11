import React from 'react';
import { useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const features = [
    {
        title: 'Hours per Month',
        id: 1
    },
    {
        title: 'Percent Discount',
        id: 2
    },
    {
        title: 'Unused Hours Rollover',
        id: 3
    }
];

const pricing = [
    {
        title: 'Essential',
        hoursPerMonth: 10,
        percentDiscount: '20%',
        unusedHoursRollover: 1,
        isHighlighted: false,
        btnText: 'Get Essential'
    },
    {
        title: 'Advanced',
        hoursPerMonth: 20,
        percentDiscount: '25%',
        price: {
            annual: 420,
            monthly: 44
        },
        features: [1, 3, 4, 5],
        isHighlighted: true,
        unusedHoursRollover: 2,
        btnText: 'Get Ad'
    },
    {
        title: 'Comprehensive',
        hoursPerMonth: 40,
        percentDiscount: '30%',
        unusedHoursRollover: 4,
        price: {
            annual: 740,
            monthly: 77
        },
        features: [1, 2, 3, 4, 5, 6, 7],
        isHighlighted: false,
        btnText: 'Contact us'
    }
];

const PricingCompareTable = () => {
    const theme = useTheme();
    return (
        <Box>
            <Box marginBottom={4} pt={2}>
                <Typography
                    fontWeight={700}
                    variant={'h3'}
                    align="center"
                    sx={{
                        textDecoration: 'underline',
                        textDecorationColor: `${alpha(theme.palette.primary.main, 1.0)}`
                        // textDecorationThickness: '0.2em'
                        //
                    }}
                >
                    Transparent Flat-Fee Packages
                </Typography>
            </Box>
            <Box>
                <TableContainer elevation={0}>
                    <Table aria-label="caption table" sx={{ minWidth: 600 }}>
                        <caption>* The monthly price is determined based on the standard hourly rate of your selected attorney.</caption>
                        <TableHead>
                            <TableRow>
                                <TableCell>FEATURES</TableCell>
                                {pricing.map((item, i) => (
                                    <TableCell align="center" key={i}>
                                        <Typography sx={{ textTransform: 'uppercase', fontWeight: 'medium' }}>{item.title}</Typography>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Hours per Month
                                </TableCell>
                                <TableCell align="center">
                                    <Box display={'flex'} justifyContent={'center'}>
                                        {pricing[0].hoursPerMonth}
                                    </Box>
                                </TableCell>
                                <TableCell align="center">
                                    <Box display={'flex'} justifyContent={'center'}>
                                        {pricing[1].hoursPerMonth}
                                    </Box>
                                </TableCell>
                                <TableCell align="center">
                                    <Box display={'flex'} justifyContent={'center'}>
                                        {pricing[2].hoursPerMonth}
                                    </Box>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Percent Discount
                                </TableCell>
                                <TableCell align="center">
                                    <Box display={'flex'} justifyContent={'center'}>
                                        {pricing[0].percentDiscount}
                                    </Box>
                                </TableCell>
                                <TableCell align="center">
                                    <Box display={'flex'} justifyContent={'center'}>
                                        {pricing[1].percentDiscount}
                                    </Box>
                                </TableCell>
                                <TableCell align="center">
                                    <Box display={'flex'} justifyContent={'center'}>
                                        {pricing[2].percentDiscount}
                                    </Box>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Unused Hours Rollover
                                </TableCell>
                                <TableCell align="center">
                                    <Box display={'flex'} justifyContent={'center'}>
                                        {pricing[0].unusedHoursRollover}
                                    </Box>
                                </TableCell>
                                <TableCell align="center">
                                    <Box display={'flex'} justifyContent={'center'}>
                                        {pricing[1].unusedHoursRollover}
                                    </Box>
                                </TableCell>
                                <TableCell align="center">
                                    <Box display={'flex'} justifyContent={'center'}>
                                        {pricing[2].unusedHoursRollover}
                                    </Box>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell />
                                {pricing.map((item, i) => (
                                    <TableCell align="center" key={i}>
                                        <Button size={'large'} variant="contained" href="contact-us">
                                            Get {item.title}
                                        </Button>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};

export default PricingCompareTable;
