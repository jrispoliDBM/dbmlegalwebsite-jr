import {
    Card,
    Stack,
    Typography
} from '@mui/material';
import Box from '@mui/material/Box';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';

const HorizServiceCard = ({ service, handleClickOpen, index }) => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true
    });

    const backgroundImageUrls = ['https://res.cloudinary.com/dtxp5tzr5/image/upload/v1731193222/nyc_e3zbl0.jpg','https://res.cloudinary.com/dtxp5tzr5/image/upload/v1731193323/chicago_qh8qgi.jpg','https://res.cloudinary.com/dtxp5tzr5/image/upload/v1731193361/sanfrancisco_nl9opt.jpg','https://res.cloudinary.com/dtxp5tzr5/image/upload/v1731193416/seattle_bkgeat.jpg'];
    

    return (
        <Card
            elevation={1}
            sx={{
                position: 'relative',
                overflow: 'hidden',
                transition: 'box-shadow 0.3s ease-in-out',
                backgroundColor: theme.palette.background.default,
                backgroundImage: `url(${backgroundImageUrls[Math.min(index, backgroundImageUrls.length - 1)]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                filter: 'grayscale(100%)', // Apply grayscale filter
                height: '150px',
                ':before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: alpha(theme.palette.background.paper, 0.7),
                    transition: 'background-color 0.3s ease',
                    zIndex: 1,
                },
                ':hover': {
                    boxShadow: `0 8px 15px 8px ${alpha(theme.palette.white[500], 0.24)}`,
                    filter: 'grayscale(0%)', // Remove grayscale filter on hover
                    ':before': {
                        backgroundColor: alpha(theme.palette.background.paper, 0.4) // Reduce overlay opacity on hover for brightness effect
                    }
                }
            }}
        >
            <Link className="no-link" href={service.route} style={{ textDecoration: 'none', color: 'inherit', position: 'relative', zIndex: 2 }}>
                <Stack direction={'row'} spacing={2} alignItems="center" justifyContent="center" sx={{height: '100%'}}>
                    <Typography
                        component="text"
                        color={'text.primary'}
                        variant={'h4'}
                        fontWeight='bold'
                        //fontWeight={700}
                        gutterBottom
                        align="center"
                        p={3}
                        sx={{
                            position: 'relative',
                            display: 'inline-block',
                            cursor: 'default',
                            zIndex: 3,
                            ':hover': {
                                transform: 'scale(1.05)',
                                textDecoration: 'underline',
                                textDecorationColor: theme.palette.grey[900],
                                color: theme.palette.primary.main,
                                cursor: 'pointer'
                            }
                        }}
                    >
                        {service.headerSection.preTitle
                            ? `${service.headerSection.preTitle} ${service.headerSection.title}`
                            : `${service.headerSection.title}`}
                    </Typography>
                </Stack>
            </Link>
        </Card>
    );
};

export default HorizServiceCard;
