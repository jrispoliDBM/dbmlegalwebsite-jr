import React, { useState } from 'react';
import {
    Box,
    Button,
    Grid,
    Stack,
    Typography,
    Dialog,
    DialogContent,
    DialogActions,
    DialogContentText,
    DialogTitle,
    Avatar
} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import PersonDialog from './PersonDialog';
import Image from 'next/image';
import PersonTile from './PersonTile';

function TeamGrid({ team, selectedVertical }) {
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [open, setOpen] = useState(false);
    const theme = useTheme();

    const handleClickOpen = (person) => {
        setSelectedPerson(person);
        console.log(person);
        setOpen(true);
    };

    return (
        <Grid container spacing={1}>
            <PersonDialog open={open} handleClose={() => setOpen(false)} person={selectedPerson} />
            {team.map(
                (person, i) =>
                    person.practiceAreas &&
                    (person.practiceAreas.includes(selectedVertical) || selectedVertical === 'All') &&
                    person.showOnLegal && (
                        <Grid item xs={12} sm={selectedVertical === 'All' && person.founder ? 6 : 3} key={i}>
                            <PersonTile
                                person={person}
                                handleClickOpen={handleClickOpen}
                                minHeight={selectedVertical === 'All' && person.founder ? { xs: 400, md: 600 } : { xs: 300, md: 300 }}
                                fontVariant={selectedVertical === 'All' && person.founder ? 'h4' : ''}
                            />
                        </Grid>
                    )
            )}
        </Grid>
    );
}

export default TeamGrid;
