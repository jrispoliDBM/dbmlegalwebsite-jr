import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';

const GradientCard = ({ children, hover = true, sx = {}, gradientStart, gradientEnd, backgroundColor, borderColor, ...cardProps }) => {
    const theme = useTheme();

    const startColor = gradientStart ?? theme.palette.black[500];
    const endColor = gradientEnd ?? theme.palette.black[900];
    const bgColor = backgroundColor ?? theme.palette.black[900];
    const brdColor = borderColor ?? theme.palette.white[600];

    return (
        <Card
            {...cardProps}
            sx={{
                borderRadius: 5,
                border: `2px solid ${brdColor}`,
                textDecoration: 'none',
                backgroundColor: bgColor,
                backgroundImage: `linear-gradient(180deg, ${startColor}, ${endColor})`,
                transition: 'all .2s ease-in-out',
                ...(hover
                    ? {
                          '&:hover': {
                              transform: `translateY(-${theme.spacing(1 / 2)})`,
                              boxShadow: `10px 10px 10px 0px ${theme.palette.white[700]}`
                          }
                      }
                    : {}),
                ...sx
            }}
        >
            {children}
        </Card>
    );
};

export default GradientCard;
