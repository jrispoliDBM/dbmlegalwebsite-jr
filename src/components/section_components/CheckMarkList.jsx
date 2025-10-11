import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Box, Grid, Stack, Typography } from '@mui/material';

const CheckMarkList = ({section, textColor}) => {
    return (
        <Grid container spacing={3} p={3}>
            {section.items
                .sort((a, b) => a.order - b.order)
                .map((item, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <Stack direction="row" spacing={1}>
                            <CheckBoxIcon color="primary" />
                            <Box>
                                <Typography color={textColor} variant="h6" fontWeight="bold">
                                    {item.title}
                                </Typography>
                                <Typography color={textColor}>{item.detailText}</Typography>
                            </Box>
                        </Stack>
                    </Grid>
                ))}
        </Grid>
    );
};

export default CheckMarkList;
