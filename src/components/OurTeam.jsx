import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActions, CardContent, Stack } from '@mui/material';


const team = [
    {
        name: 'Michelle Bergman',
        title: 'Co-Founder and CEO',
        image: '/images/team/michelleb.JPG',
        founder: true
    },
    {
        name: 'Maura Mandell',
        title: 'Co-Founder and COO',
        image: '/images/team/mmedit2023.png',
        founder: true
    },
    {
        name: 'Counsel McCullen',
        title: 'Senior Partner',
        image: 'https://eufpxyq6xdx.exactdn.com/wp-content/uploads/2021/12/3.png?strip=all&lossy=1&ssl=1',
        founder: false
    },
    {
        name: 'Anthony Grafitti',
        title: 'Senior Partner',
        image: 'https://eufpxyq6xdx.exactdn.com/wp-content/uploads/2023/03/My-project-1-7.jpg?strip=all&lossy=1&w=520&ssl=1',
        founder: false
    },
    {
        name: 'Kevin McGraw',
        title: 'Senior Partner',
        image: 'https://eufpxyq6xdx.exactdn.com/wp-content/uploads/2023/03/My-project-1-2.jpg?strip=all&lossy=1&w=520&ssl=1',
        founder: false
    },
    {
        name: 'Heather J. Haase',
        title: 'Senior Counsel',
        image: 'https://eufpxyq6xdx.exactdn.com/wp-content/uploads/2021/12/2.png?strip=all&lossy=1&ssl=1',
        founder: false
    },
    {
        name: 'Stephanie Mongelluzzo',
        title: 'Senior Counsel',
        image: 'https://assets.maccarianagency.com/avatars/img6.jpg',
        founder: false
    },
    {
        name: 'Lori Ann Fox',
        title: 'Senior Counsel',
        image: 'https://assets.maccarianagency.com/avatars/img6.jpg',
        founder: false
    },
    {
        name: 'Joseph Rispoli',
        title: 'Senior Director People & Business Strategy',
        image: 'https://eufpxyq6xdx.exactdn.com/wp-content/uploads/bb-plugin/cache/My-project-1-15-portrait.jpg?strip=all&lossy=1&resize=300,450&ssl=1',
        founder: false
    },
    {
        name: 'Jenna Carr',
        title: 'Executive Assistant',
        image: 'https://eufpxyq6xdx.exactdn.com/wp-content/uploads/bb-plugin/cache/My-project-1-12-portrait.png?strip=all&lossy=1&resize=300,300&ssl=1',
        founder: false
    }
];

const OurTeam = () => {
    const theme = useTheme();
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
                            Michelle D. Bergman and Maura Mandell founded DBM LLC in 2020, believing that there was a better way to practice
                            law and that the traditional big law model was in serious need of an overhaul. The last six months not only
                            confirmed their decision but has proven that a distributive practice model not only benefits both the clients
                            and the attorneys but is the reality of the future practice of law.
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
                                src={person.image}
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
                                        <Typography variant={person.founder ? 'h4' : ''} fontWeight={700} sx={{ color: theme.palette.primary.main }} gutterBottom>
                                            {person.title}
                                        </Typography>
                                    </Stack>
                                    <Stack direction="column" justifyContent="center">
                                    <Button variant={'contained'} color={'primary'} size="small">
                                        More
                                    </Button>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default OurTeam;
