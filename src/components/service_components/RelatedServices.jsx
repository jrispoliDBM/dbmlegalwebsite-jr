import React from 'react';
import Container from 'components/core/Container';
import Box from '@mui/material/Box';
import GradientCard from 'components/core/GradientCard';
import Grid from '@mui/material/Grid';
import { Button, Stack, Chip, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useServices from '@/hooks/useServices';

const RelatedServices = ({ service }) => {
    const theme = useTheme();
    const { getRoute } = useServices();
    return (
        <Container>
            <Box p={2} pb={4}>
                <GradientCard
                    p={4}
                    gradientStart={theme.palette.black[500]}
                    gradientEnd={theme.palette.black[900]}
                    backgroundColor={theme.palette.black[900]}
                    borderColor={theme.palette.white[600]}
                >
                    <Stack spacing={4} p={2}>
                        <Typography variant="h4" fontWeight="bold" color="textPrimary">
                            Related Practice Areas
                        </Typography>
                        <Grid container spacing={1} justifyContent="flex-start" pr={1}>
                            {service.relatedServices.map((relatedService, index) => (
                                <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                                    {false ? (
                                        <Chip
                                            color="primary"
                                            clickable
                                            component="a"
                                            size="large"
                                            label={relatedService}
                                            href={getRoute(relatedService)}
                                            sx={{ width: '100%', height: '100%', textAlign: 'center' }}
                                        />
                                    ) : (
                                        <Button
                                            variant="outlined"
                                            component="a"
                                            href={getRoute(relatedService)}
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                textAlign: 'center',
                                                fontWeight: 'bold',
                                                color: theme.palette.white[500],
                                                borderColor: theme.palette.white[500]
                                            }}
                                        >
                                            {relatedService}
                                        </Button>
                                    )}
                                </Grid>
                            ))}
                        </Grid>
                    </Stack>
                </GradientCard>
            </Box>
        </Container>
    );
};

export default RelatedServices;
