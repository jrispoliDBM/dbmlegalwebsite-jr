import React, { useState, useEffect, useRef } from 'react';
import { Box, Card, CardContent, Typography, IconButton, Avatar, Fade, useTheme, useMediaQuery } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Carousel = ({ data = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const intervalRef = useRef(null);

    // Default data if none provided
    const defaultData = [
        {
            quote: 'DBM Legal Services expertly reviewed my hospital employment contract, identifying crucial clauses about malpractice coverage and call schedules that I had overlooked. Their attention to detail saved me from potential career complications.',
            docName: 'Dr. Sarah Johnson',
            docSpecialty: 'Cardiology',
            docLocation: 'New York, NY',
            avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
            image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop',
            order: 2
        },
        {
            quote: 'As a neurologist joining a new practice, I needed thorough contract review. DBM Legal Services identified restrictive non-compete clauses and negotiated better terms for my research opportunities and sabbatical rights.',
            docName: 'Dr. Michael Chen',
            docSpecialty: 'Neurology',
            docLocation: 'San Francisco, CA',
            avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
            order: 1
        },
        {
            quote: "DBM Legal Services provided exceptional guidance on my pediatric practice partnership agreement. They ensured fair profit-sharing terms and protected my interests in the practice's expansion plans.",
            docName: 'Dr. Emily Rodriguez',
            docSpecialty: 'Pediatrics',
            docLocation: 'Miami, FL',
            avatar: 'https://images.unsplash.com/photo-1594824375882-b22aa0ec8543?w=150&h=150&fit=crop&crop=face',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
            order: 3
        },
        {
            quote: 'DBM Legal Services helped me navigate the complex terms of my orthopedic surgery center partnership. They identified liability issues and negotiated protective clauses that secured my investment and professional interests.',
            docName: 'Dr. James Thompson',
            docSpecialty: 'Orthopedic Surgery',
            docLocation: 'Houston, TX',
            avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&h=150&fit=crop&crop=face',
            image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
            order: 4
        }
    ];

    // Sort data by order field and use provided data or fall back to default
    const sortData = (dataArray) => {
        return [...dataArray].sort((a, b) => {
            // Handle cases where order field might be missing
            const orderA = a.order !== undefined ? a.order : Number.MAX_SAFE_INTEGER;
            const orderB = b.order !== undefined ? b.order : Number.MAX_SAFE_INTEGER;
            return orderA - orderB;
        });
    };

    const rawData = data.length > 0 ? data : defaultData;
    const carouselData = sortData(rawData);

    // Auto-rotation effect
    useEffect(() => {
        if (!isPaused && carouselData.length > 0) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1));
            }, 5000); // 5 seconds
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isPaused, carouselData.length]);

    // Clear interval on component unmount
    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    const handlePrevious = () => {
        // Clear the current interval and restart it
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        // Clear the current interval and restart it
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        setCurrentIndex((prevIndex) => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1));
    };

    const handleDotClick = (index) => {
        // Clear the current interval and restart it
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        setCurrentIndex(index);
    };

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    const currentItem = carouselData[currentIndex];

    // Return early if no data available
    if (!carouselData || carouselData.length === 0) {
        return (
            <Box
                sx={{
                    maxWidth: 800,
                    mx: 'auto',
                    p: 3,
                    textAlign: 'center',
                    color: 'text.secondary'
                }}
            >
                <Typography variant="h6">No carousel data available</Typography>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                maxWidth: 800,
                mx: 'auto',
                p: 3,
                position: 'relative'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Navigation Buttons */}
            <IconButton
                onClick={handlePrevious}
                sx={{
                    position: 'absolute',
                    left: isMobile ? 8 : -60,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    boxShadow: 2,
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        boxShadow: 4
                    }
                }}
                aria-label="Previous testimonial"
            >
                <ArrowBackIosIcon />
            </IconButton>

            <IconButton
                onClick={handleNext}
                sx={{
                    position: 'absolute',
                    right: isMobile ? 8 : -60,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    boxShadow: 2,
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        boxShadow: 4
                    }
                }}
                aria-label="Next testimonial"
            >
                <ArrowForwardIosIcon />
            </IconButton>

            {/* Carousel Content */}
            <Fade in={true} timeout={500} key={currentIndex}>
                <Card
                    elevation={8}
                    sx={{
                        minHeight: 400,
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        overflow: 'hidden',
                        borderRadius: 3
                    }}
                >
                    {/* Image Section */}
                    <Box
                        sx={{
                            width: { xs: '100%', md: '40%' },
                            height: { xs: 200, md: 'auto' },
                            backgroundImage: `url(${currentItem.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            position: 'relative'
                        }}
                    />

                    {/* Content Section */}
                    <CardContent
                        sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            p: { xs: 3, md: 4 },
                            position: 'relative'
                        }}
                    >
                        {/* Quote Icon */}
                        <Typography
                            variant="h1"
                            sx={{
                                position: 'absolute',
                                top: 10,
                                left: 10,
                                fontSize: '3rem',
                                color: 'primary.main',
                                opacity: 0.3,
                                fontFamily: 'serif'
                            }}
                        >
                            &ldquo;
                        </Typography>

                        {/* Quote Text */}
                        <Typography
                            variant="h6"
                            sx={{
                                fontStyle: 'italic',
                                mb: 3,
                                lineHeight: 1.6,
                                color: 'text.primary',
                                position: 'relative',
                                zIndex: 1
                            }}
                        >
                            {currentItem.quote}
                        </Typography>

                        {/* Author Information */}
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                mt: 'auto'
                            }}
                        >
                            <Avatar
                                src={currentItem.avatar}
                                alt={currentItem.docName}
                                sx={{
                                    width: 60,
                                    height: 60,
                                    border: 2,
                                    borderColor: 'primary.main'
                                }}
                            />
                            <Box>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 'bold',
                                        color: 'primary.main'
                                    }}
                                >
                                    {currentItem.docName}
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                    {currentItem.docSpecialty}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {currentItem.docLocation}
                                </Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Fade>

            {/* Dots Indicator */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 1,
                    mt: 3
                }}
            >
                {carouselData.map((_, index) => (
                    <Box
                        key={index}
                        onClick={() => handleDotClick(index)}
                        sx={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            backgroundColor: index === currentIndex ? 'primary.main' : 'grey.300',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: index === currentIndex ? 'primary.dark' : 'grey.400',
                                transform: 'scale(1.1)'
                            }
                        }}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Carousel;
