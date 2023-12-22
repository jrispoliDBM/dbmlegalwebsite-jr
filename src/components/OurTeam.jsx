import React, { useState } from 'react';
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
    DialogTitle,
    DialogActions,
    DialogContent,
    DialogContentText
} from '@mui/material';
// import { team } from 'content/team';
import useTeam from 'hooks/useTeam';

//sorted team function to sort by founder

const OurTeam = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState(null);
    const {team} = useTeam();



    const handleClickOpen = (person) => {
        setSelectedPerson(person);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
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
                                    background: `linear-gradient(180deg, transparent 82%, ${alpha(theme.palette.primary.light, 0.3)} 0%)`
                                }}
                            >
                                Team.
                            </Typography>
                        </Typography>
                        <Typography variant={'h6'} component={'p'} color={'text.secondary'} align="center">
                        Michelle D. Bergman and Maura Mandell co-founded DBM with the conviction that the conventional big law model required significant reform. Considering the changing landscape of the legal profession and the evolving needs of our clients, DBM has demonstrated that a distributive practice model not only serves the best interests of clients and lawyers alike, but it also represents the future of the legal industry. At DBM, we also strive to stay ahead of the curve and anticipate the needs of our clients. We believe that the future of the legal profession will involve greater flexibility and collaboration, and we are committed to exploring innovation and practices that better serve our clients&apos; needs.
                        </Typography>
                    </Box>
                </Stack>
            </Grid>
            <Grid container spacing={4}>
                {team.map((person, i) => (
                    <Grid item xs={12} sm={person.founder ? 6 : 4} key={i}>
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
                                minHeight={person.founder ? { xs: 400, md: 600 } : { xs: 400, md: 400 }}
                                maxHeight={person.founder ? { xs: 400, md: 600 } : { xs: 400, md: 400 }}
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
                                        <Typography variant={person.founder ? 'h4' : ''} fontWeight={700} sx={{ color: 'common.white' }}>
                                            {person.name}
                                        </Typography>
                                        <Typography
                                            variant={person.founder ? 'h4' : ''}
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
                ))}
            </Grid>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>
                    <Stack direction={'row'} spacing={1} justifyContent="space-between" alignItems="center">
                        <Stack direction="column">
                            <Typography variant={'h5'} fontWeight={700} color="primary">
                                {selectedPerson && selectedPerson.name}
                            </Typography>
                            <Typography gutterBottom>{selectedPerson && selectedPerson.title}</Typography>
                        </Stack>
                        <Stack direction="column">
                            <Avatar
                                src={
                                    selectedPerson && selectedPerson.image
                                        ? selectedPerson.image
                                        : '/images/backgrounds/nordwood-themes-R53t-Tg6J4c-unsplash.jpg'
                                }
                                sx={{
                                    width: 56,
                                    height: 56,
                                    border: '1px solid', // Adjust the border thickness as needed
                                    borderColor: theme.palette.grey[200], // Set the border color
                                    boxShadow: theme.shadows[6] // Choose a shadow from the theme's shadows array
                                }}
                                imgProps={{
                                    style: {
                                        objectFit: 'contain'
                                    }
                                }}
                            />
                        </Stack>
                    </Stack>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {selectedPerson &&
                            selectedPerson.bio.split('\n').map((paragraph, index) => (
                                <Typography key={index} paragraph>
                                    {paragraph}
                                </Typography>
                            ))}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default OurTeam;
