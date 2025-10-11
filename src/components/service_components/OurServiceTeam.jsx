import React, { useEffect, useState } from 'react';
import { Typography, Grid, Stack, Card } from '@mui/material';
import Box from '@mui/material/Box';
import { alpha, useTheme } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import useTeam from '@/hooks/useTeam';
import PersonTile from '../general_components/PersonTile';
import PersonDialog from '../general_components/PersonDialog';

const OurServiceTeam = ({ service }) => {
    const { team } = useTeam();
    const [filteredTeam, setFilteredTeam] = useState([]);
    useEffect(() => {
        //console.log(team);
        setFilteredTeam(team.filter((member) => member.showOnLegal && member.practiceAreas.includes(service.tag)));
    }, [team]);

    //console.log(service);
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [open, setOpen] = useState(false);
    const theme = useTheme();

    const handleClickOpen = (person) => {
        setSelectedPerson(person);
        //console.log(person);
        setOpen(true);
    };

    return (
        <>
            {filteredTeam.length > 0 && (
                <Card
                    sx={{
                        borderRadius: 5,
                        border: `2px solid ${theme.palette.white[600]}`,
                        textDecoration: 'none',
                        backgroundColor: theme.palette.black[900]
                    }}
                >
                    <PersonDialog open={open} handleClose={() => setOpen(false)} person={selectedPerson} />
                    <Box p={2}>
                        <Typography
                            fontWeight="bold"
                            variant={'h3'}
                            color={theme.palette.white[100]}
                            align="center"
                            sx={{
                                textDecoration: 'underline',
                                textDecorationColor: `${alpha(theme.palette.primary.main, 1.0)}`
                            }}
                        >
                            {`Our ${service.service} Team`}
                        </Typography>
                        <Grid container pt={2} spacing={2} justifyContent="center">
                            {filteredTeam.map((member, i) => (
                                <Grid item xs={12} sm={3} key={i}>
                                    <PersonTile handleClickOpen={handleClickOpen} person={member} minHeight={250} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Card>
            )}
        </>
    );
};

export default OurServiceTeam;
