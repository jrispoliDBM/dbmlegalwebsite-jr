import React, { useState, useEffect } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import {
    Backdrop,
    Button,
    CardActions,
    CardContent,
    Dialog,
    Stack,
    FormControl,
    InputLabel,
    MenuItem,
    Select
} from '@mui/material';
import useTeam from 'hooks/useTeam';
import TeamGrid from './TeamGrid2';

const OurTeam = () => {
    const theme = useTheme();
    const [verticals, setVerticals] = useState([]);
    const [selectedVertical, setSelectedVertical] = useState('All');
    const { team } = useTeam();

    useEffect(() => {
        //set of verticals from team
        //console.log('Team Loaded', team.length)
        let verticalList = [];
        team.map((person) => {
            if (person.practiceAreas) {
                person.practiceAreas.map((vertical) => {
                    if (!verticalList.includes(vertical)) {
                        verticalList.push(vertical);
                    }
                });
            }
        });
        // sort
        verticalList.sort((a, b) => a.localeCompare(b));
        setVerticals(['All', ...verticalList]);
    }, [team]);

    return (
        <Box sx={{ paddingBottom: '100px' }}>
            <Grid item xs={12} alignItems="center">
            <Stack direction="column" justifyContent="center" alignItems="center" p={2} >
                    <Box padding={4} borderRadius={2} width={1} height={1} mb={1}>
                        <Typography variant={'h2'} align="center">
                            Our{' '}
                            <Typography
                                variant={'h2'}
                                component="span"
                                color="primary"
                            >
                                Team
                            </Typography>
                            <Typography
                                color={theme.palette.white[100]}
                                component={'span'}
                                variant={'inherit'}
                            >
                                .
                            </Typography>
                            
                        </Typography>
                        <Typography variant={'h4'} color={'text.secondary'} align="center">{`Michelle D. Bergman and Maura Mandell co-founded DBM to challenge the traditional big law model and meet the evolving needs of clients. Embracing a distributive practice model, DBM prioritizes flexibility, collaboration, and innovation, paving the way for a future-focused legal industry that better serves both clients and lawyers.`}
                          
                        </Typography>
                    </Box>
                </Stack>
            </Grid>
            <Grid item xs={12} md={12}  sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FormControl fullWidth sx={{ mb: 5 }}>
                    <InputLabel id="veritcal-select-label">Practice Area</InputLabel>
                    <Select
                        labelId="vertical-select-label"
                        id="vertical-select"
                        value={selectedVertical}
                        label="Practice Areas"
                        onChange={(e) => setSelectedVertical(e.target.value)}
                        items={verticals}
                        sx={{
                            //maxWidth: '400px',
                            backgroundColor: '#3b3b3b', // slightly lighter than #292929 for contrast
                            color: '#ffffff',
                            '& .MuiSvgIcon-root': { color: '#ffffff' } // arrow color
                        }}
                    >
                        {verticals.map((vertical, i) => {
                            return (
                                <MenuItem key={i} value={vertical} sx={{
                                    backgroundColor: '#292929',
                                    color: '#ffffff',
                                    '&:hover': {
                                        backgroundColor: '#444444', // slightly lighter on hover
                                    }
                                }}>
                                    {vertical}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
            </Grid>
            <TeamGrid team={team} selectedVertical={selectedVertical} />
        </Box>
    );
};

export default OurTeam;
