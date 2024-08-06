import React, { useState } from 'react';
import { Box, Button, Grid, Stack, Typography, Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle, Avatar } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import PersonDialog from '../PersonDialog';


function TeamGrid({ team, selectedVertical }) {
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [open, setOpen] = useState(false);
    const theme = useTheme();

    const handleClickOpen = (person) => {
        setSelectedPerson(person);
        console.log(person)
        setOpen(true);
    };

    return (
        <Grid container spacing={4}>
            <PersonDialog open={open} handleClose={()=>setOpen(false)} person={selectedPerson} />
            {team.map(
                (person, i) =>
                    person.practiceAreas &&
                    (person.practiceAreas.includes(selectedVertical) || selectedVertical === 'All') && person.showOnLegal && (
                        <Grid item xs={12} sm={selectedVertical === 'All' && person.founder ? 6 : 4} key={i}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: 2,
                                    '&:hover': {
                                        '& img': {
                                            transform: 'scale(1.2)'
                                        }
                                    }
                                }}
                            >
                                <Box
                                    component={'img'}
                                    loading="lazy"
                                    height={1}
                                    width={1}
                                    src={person.image ? person.image : '/images/backgrounds/nordwood-themes-R53t-Tg6J4c-unsplash.jpg'}
                                    alt="..."
                                    minHeight={selectedVertical === 'All' && person.founder ? { xs: 400, md: 600 } : { xs: 400, md: 400 }}
                                    maxHeight={selectedVertical === 'All' && person.founder ? { xs: 400, md: 600 } : { xs: 400, md: 400 }}
                                    // minHeight={person.founder ? { xs: 400, md: 600 } : { xs: 400, md: 400 }}
                                    // maxHeight={person.founder ? { xs: 400, md: 600 } : { xs: 400, md: 400 }}
                                    sx={{
                                        transition: 'transform .7s ease !important',
                                        transform: 'scale(1.0)',
                                        objectFit: 'contain',
                                        filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none'
                                    }}
                                />
                                <Box
                                    position={'absolute'}
                                    bottom={0}
                                    left={0}
                                    right={0}
                                    padding={3}
                                    sx={{
                                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #000)`
                                    }}
                                >
                                    <Stack direction={'row'} spacing={1} justifyContent="space-between">
                                        <Stack direction="column">
                                            <Typography
                                                variant={selectedVertical === 'All' && person.founder ? 'h4' : ''}
                                                // variant={person.founder ? 'h4' : ''}
                                                fontWeight={700}
                                                sx={{ color: 'common.white' }}
                                            >
                                                {person.name}
                                            </Typography>
                                            <Typography
                                                variant={selectedVertical === 'All' && person.founder ? 'h4' : ''}
                                                // variant={person.founder ? 'h4' : ''}
                                                fontWeight={700}
                                                sx={{ color: theme.palette.primary.main }}
                                                gutterBottom
                                            >
                                                {person.title}
                                            </Typography>
                                        </Stack>
                                        {person.bio && (
                                            <Stack direction="column" justifyContent="center">
                                                <Button
                                                    variant={'contained'}
                                                    color={'primary'}
                                                    size="small"
                                                    onClick={() => handleClickOpen(person)}
                                                >
                                                    More
                                                </Button>
                                            </Stack>
                                        )}
                                    </Stack>
                                </Box>
                            </Box>
                        </Grid>
                    )
            )}
        </Grid>
    );
}

export default TeamGrid;
