import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const mock = [
    {
        title: 150,
        subtitle: '150 + years of combined team experience.',
        suffix: '+'
    },
    {
        title: 50,
        subtitle: 'Ability to operate in all 50 states.',
        suffix: ''
    },
    {
        title: 99,
        subtitle: '99% of our customers would reccomend DBM to a friend.',
        suffix: '%'
    }
];

const OurServices = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true
    });

    const [viewPortEntered, setViewPortEntered] = useState(false);
    const setViewPortVisibility = (isVisible) => {
        if (viewPortEntered) {
            return;
        }

        setViewPortEntered(isVisible);
    };

    return (
        <Box>
            <Typography  gutterBottom>(Maura does not like this one, can remove, repeated text below, so put it in one place or the other)
                </Typography>
            <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
                <Grid item xs={12} md={6}>
                    <Box marginBottom={4}>
                        <Typography sx={{ fontWeight: 700 }} variant={'h4'} gutterBottom>
                            Our Services
                        </Typography>
                        <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
                            DBM offers business and transactional services in a diverse range of practice areas. Our clients include
                            businesses of all sizes, from entrepreneurs to early to mid-stage companies and Fortune 1000 companies.
                        </Typography>
                    </Box>
                    <Grid container spacing={2}>
                        {mock.map((item, i) => (
                            <Grid key={i} item xs={12} md={4}>
                                <Typography variant="h4" color={'primary.dark'} gutterBottom>
                                    <VisibilitySensor onChange={(isVisible) => setViewPortVisibility(isVisible)} delayedCall>
                                        <CountUp duration={2} end={viewPortEntered ? item.title : 0} start={0} suffix={item.suffix} />
                                    </VisibilitySensor>
                                </Typography>
                                <Typography color="text.secondary" component="p">
                                    {item.subtitle}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    justifyContent="center"
                    alignItems="center"
                    xs={12}
                    md={6}
                    sx={{
                        display: { xs: 'none', md: 'flex' }
                    }}
                >
                    <Box component={Card} boxShadow={4} height={1} width={1}>
                        <Box
                            component={CardMedia}
                            height={1}
                            width={1}
                            minHeight={375}
                            //C:\Users\llmandell\Documents\Projects\dbm\dbmlegalservices\public\images\backgrounds\samson-ZGjbiukp_-A-unsplash.jpg
                            image="/images/backgrounds/samson-ZGjbiukp_-A-unsplash.jpg"
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default OurServices;
