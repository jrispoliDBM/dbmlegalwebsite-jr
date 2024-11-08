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
        <Box>
            <Grid item xs={12} alignItems="center">
                <Stack direction="row" spacing={2} justifyContent="center" data-aos={'fade-right'}>
                    <Box padding={4} borderRadius={2} width={1} height={1} mb={1}>
                        <Typography fontWeight="bold" variant={'h2'} gutterBottom align="center">
                            Our{' '}
                            <Typography
                                fontWeight="bold"
                                variant={'h2'}
                                gutterBottom
                                component="span"
                                color="primary"
                                sx={{
                                    background: `linear-gradient(180deg, transparent 87%, ${alpha(theme.palette.primary.main, 0.5)} 0%)`
                                }}
                            >
                                Team
                            </Typography>
                            <Typography
                                color={theme.palette.white[100]}
                                component={'span'}
                                variant={'inherit'}
                                sx={{
                                    background: `linear-gradient(180deg, transparent 87%, ${alpha(theme.palette.primary.main, 0.5)} 0%)`
                                }}
                            >
                                .
                            </Typography>
                            
                        </Typography>
                        <Typography variant={'h6'} component={'p'} color={'text.secondary'} align="center">
                            Michelle D. Bergman and Maura Mandell co-founded DBM with the conviction that the conventional big law model
                            required significant reform. Considering the changing landscape of the legal profession and the evolving needs
                            of our clients, DBM has demonstrated that a distributive practice model not only serves the best interests of
                            clients and lawyers alike, but it also represents the future of the legal industry. At DBM, we also strive to
                            stay ahead of the curve and anticipate the needs of our clients. We believe that the future of the legal
                            profession will involve greater flexibility and collaboration, and we are committed to exploring innovation and
                            practices that better serve our clients&apos; needs.
                        </Typography>
                    </Box>
                </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel id="veritcal-select-label">Practice Area</InputLabel>
                    <Select
                        labelId="vertical-select-label"
                        id="vertical-select"
                        value={selectedVertical}
                        label="Practice Areas"
                        onChange={(e) => setSelectedVertical(e.target.value)}
                        items={verticals}
                    >
                        {verticals.map((vertical, i) => {
                            return (
                                <MenuItem key={i} value={vertical}>
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
