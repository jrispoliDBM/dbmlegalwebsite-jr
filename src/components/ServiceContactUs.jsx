import React, { useEffect, useState } from 'react';
import { Typography, Grid, Stack, Card } from '@mui/material';
import Box from '@mui/material/Box';
import { alpha, useTheme } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import useTeam from '@/hooks/useTeam';
import PersonTile from './PersonTile';
import PersonDialog from './PersonDialog';

const ServiceContactUs = ({ service }) => {
    const { team } = useTeam();
    const [filteredTeam, setFilteredTeam] = useState([]);
    useEffect(() => {
        //console.log(team);
        setFilteredTeam(team.filter((member) => member.practiceAreas.includes(service.tag)));
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
                        backgroundColor: theme.palette.black[900],
                        backgroundImage: `linear-gradient(180deg, ${theme.palette.black[500]}, ${theme.palette.black[900]})` // Gradient background
                        // transition: 'all .2s ease-in-out',
                        // '&:hover': {
                        //     transform: `translateY(-${theme.spacing(1 / 2)})`,
                        //     boxShadow: `10px 10px 10px 0px ${theme.palette.white[700]}`
                        // }
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
                                // textDecorationThickness: '0.2em'
                                //
                            }}
                        >
                            {`Our ${service.service} Team`}
                        </Typography>
                        <Grid container pt={2} spacing={2} justifyContent="center">
                            {filteredTeam.map((member, i) => (
                                <Grid item xs={12} sm={3} key={i}>
                                    <PersonTile handleClickOpen={handleClickOpen} person={member} minHeight={250} />
                                    {/* <Typography variant={'h5'} fontWeight="bold">
                        {member.name}
                    </Typography> */}
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Card>
            )}
        </>
    );
};

export default ServiceContactUs;
