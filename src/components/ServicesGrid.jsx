import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActions, CardContent, Stack } from '@mui/material';

const services = [
    {
        image: '/images/services/legalpillars.jpg',
        description: 'Streamline your business with our comprehensive corporate services.',
        title: 'Corporate'
    },
    {
        image: '/images/services/cloudfinance.jpg',
        description: 'Maximize your financial potential with our expert legal guidance.',
        title: 'Finance'
    },
    {
        image: '/images/services/regandcomp2023.jpeg',
        description: 'Stay compliant and ahead of regulations with our trusted legal advice. ',
        title: 'Regulatory & Compliance'
    },
    {
        image: '/images/services/contracts.jpg',
        description: 'Protect and maximize the value of your intellectual property with our legal expertise.',
        title: 'Intellectual Property'
    },
    {
        image: '/images/services/computing.jpg',
        description: 'Innovate and grow your business with our technology-focused legal solutions.',
        title: 'Technology'
    },
    {
        image: '/images/services/realestate.jpg',
        description: 'Navigate complex real estate transactions with our experienced legal team.',
        title: 'Real Estate'
    },
    {
        image: '/images/services/empagree.jpg',
        description: 'Protect your business and employees with our comprehensive employment law services.',
        title: 'Employment & Labor'
    },
    {
        image: '/images/services/estate.jpeg',
        description: 'Secure your legacy and protect your assets with our expert estate planning services.',
        title: 'Trusts & Estates'
    },
    {
        image: '/images/services/tax2023.jpeg',
        description: 'Optimize your tax strategy and minimize risk with our knowledgeable tax attorneys.',
        title: 'Tax'
    },
    {
        image: '/images/services/familyoffice2023.jpeg',
        description: 'Maximize your investment potential with our sophisticated legal solutions and personalized approach.',
        title: 'Family Office'
    }
];

const ServiceGrid = () => {
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
                                Services.
                            </Typography>
                        </Typography>
                        <Typography variant={'h6'} component={'p'} color={'text.secondary'} align="center">
                            DBM offers business and transactional services in a diverse range of practice areas. Our clients include
                            businesses of all sizes, from entrepreneurs to early to mid-stage companies and Fortune 1000 companies.
                        </Typography>
                    </Box>
                </Stack>
            </Grid>
            <Grid container spacing={4}>
                {services.map((service, i) => (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                        <Box
                            component={Card}
                            href={''}
                            display={'block'}
                            width={1}
                            height={1}
                            // data-aos={'fade-up'}
                            // data-aos-delay={i * 100}                            
                            sx={{
                                textDecoration: 'none',
                                transition: 'all .2s ease-in-out',
                                '&:hover': {
                                    transform: `translateY(-${theme.spacing(1 / 2)})`
                                }
                            }}
                        >
                            {/* <Box
                            component={Card}
                            padding={4}
                            borderRadius={2}
                            width={1}
                            height={1}
                            data-aos={'fade-up'}
                            data-aos-delay={i * 100}
                        > */}
                            <CardMedia
                                image={service.image}
                                title={service.title}
                                sx={{
                                    height: { xs: 340, md: 400 },
                                    filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none'
                                }}
                            />
                            <Box component={CardContent}>
                                <Typography variant={'h6'} fontWeight={700} gutterBottom>
                                    {service.title}
                                </Typography>
                                <Typography variant={'body2'} color="text.secondary">
                                    {service.description}
                                </Typography>
                            </Box>
                            <Box flexGrow={1} />
                            <Box component={CardActions} justifyContent={'flex-start'}>
                                <Button
                                    size="large"
                                    endIcon={
                                        <svg
                                            width={16}
                                            height={16}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    }
                                >
                                    Learn more
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ServiceGrid;
