import React from 'react';
import { Typography, Grid, Stack, Card } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ServicePage = ({ service }) => {
    console.log(service);
    const theme = useTheme();
    return (
        <Stack direction="column" spacing={2} pb={0}>
            <Stack direction="row" spacing={2}>
                <Typography fontWeight="bold" variant={'h2'} gutterBottom align="center">
                    <Typography
                        fontWeight="bold"
                        variant={'h3'}
                        gutterBottom
                        component="span"
                        color="primary"
                        // sx={{
                        //     background: `linear-gradient(180deg, transparent 82%, ${alpha(theme.palette.primary.light, 0.3)} 0%)`
                        // }}
                    >
                        {service.title}.
                    </Typography>
                </Typography>
            </Stack>
            {service.details &&
                service.details.map((detail, i) => (
                    <Card key={i} b={2}>
                        <Stack key={i} direction="column" spacing={0} p={2}>
                            <Typography variant={'h5'} fontWeight="bold">
                                {detail.title}
                            </Typography>
                            <Stack direction="row" spacing={2} alignItems="center">
                                {detail.intro_text && (
                                    <Stack direction="column" pt={0.25}>
                                    <Typography fontSize={16} pb={2}>
                                        {detail.intro_text}
                                    </Typography>
                                    </Stack>
                                )}
                            </Stack>
                            {detail.lists && (
                                <Grid container spacing={10}>
                                    {detail.lists.map((detailList, i) => (
                                        <Grid item xs={12} sm={12} md={detail.lists.length > 1 ? 12 : 12} key={i}>
                                            <Stack direction="column">
                                                <Typography key={i} color="primary" fontSize={16} fontWeight="bold">
                                                    {detailList.heading}
                                                </Typography>
                                                {detailList.list && (
                                                    <Stack direction="column" spacing={0.5}>
                                                        {detailList.list.map((listItem, i) => (
                                                            <Stack direction="row" spacing={1} key={i} alignItems="center">
                                                                <Stack direction="column" pt={0.25}>
                                                                    <CheckCircleIcon color="primary" fontSize="small" pt={1} />
                                                                </Stack>
                                                                <Typography key={i}>{listItem}</Typography>
                                                            </Stack>
                                                        ))}
                                                    </Stack>
                                                )}
                                            </Stack>
                                        </Grid>
                                    ))}
                                </Grid>
                            )}
                        </Stack>
                    </Card>
                ))}
        </Stack>
    );
};

export default ServicePage;
