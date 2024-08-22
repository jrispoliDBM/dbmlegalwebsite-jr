import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
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
import Stack from '@mui/material/Stack';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';


const HealthcareMembershipPricing = ({ section }) => {
    const theme = useTheme();
    const [package1, setPackage1] = useState({});
    const [package2, setPackage2] = useState({});
    const [package3, setPackage3] = useState({});

    useEffect(() => {
        console.log(section.pricingTable);
        setPackage1(section.pricingTable.find((item) => item.package === 'Legal Consultant'));
        setPackage2(section.pricingTable.find((item) => item.package === 'General Counsel (GC)'));
        setPackage3(section.pricingTable.find((item) => item.package === 'GC + Chief Compliance Officer'));
    }, [section]);

    const rows = [
        'billableAttorneyTimePerMonth',
        'complianceAnnualReportFiling',
        'complianceUnlimitedFilings',
        'complianceDocumentStorage',
        'complianceBusinessLicensePermitRenewal',
        'complianceCorporateTransparencyActPortal',
        'monthlyCost'
    ];
    const rowHeadings = [
        'Billable Attorney Time Per Month',
        'Compliance Annual Report Filing',
        'Compliance Unlimited Filings',
        'Compliance Document Storage',
        'Compliance Business License Permit Renewal',
        'Compliance Corporate Transparency Act Portal',
        'Monthly Cost'
    ];

    const formattedNote = (note) => {
        const split = note.split(':');
        return (
            <Typography variant='caption'>
                <Typography  variant='caption' component="span" sx={{ fontWeight: 'bold' }}>
                    {split[0]}:
                </Typography>
                {split[1]}
            </Typography>
        );
    };

    const formattedCell = (cell) => {
        // if cell is 'Yes' or 'No' return a check or x icon
        if (cell === 'Yes') {
            return (<CheckIcon></CheckIcon>)
        }
        if (cell === 'No') {
            return (<ClearIcon></ClearIcon>)
        }


        return cell;
    };

    return (
        <Box>
            <Stack>
                <TableContainer component={Paper} elevation={0}>
                    <Table aria-label="caption table" sx={{ minWidth: 600 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>FEATURES</TableCell>
                                {section.pricingTable.map((item, i) => (
                                    <TableCell align="center" key={i}>
                                        <Typography sx={{ textTransform: 'uppercase', fontWeight: 'medium' }}>{item.package}</Typography>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, i) => (
                                <TableRow key={i}>
                                    <TableCell component="th" scope="row">
                                        {rowHeadings[i]}
                                    </TableCell>
                                    <TableCell align="center">
                                        <Box display={'flex'} justifyContent={'center'}>
                                            {formattedCell(package1[row])}
                                        </Box>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Box display={'flex'} justifyContent={'center'}>
                                            {formattedCell(package2[row])}
                                        </Box>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Box display={'flex'} justifyContent={'center'}>
                                            {formattedCell(package3[row])}
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Stack pt={2}>
                    {section.notes.map((note, i) => (
                        <Typography key={i} variant="caption">{formattedNote(note)}</Typography>
                    ))}
                </Stack>
            </Stack>
        </Box>
    );
};

export default HealthcareMembershipPricing;
